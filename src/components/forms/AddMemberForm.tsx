import React, { use, useState } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Container,
    Alert
} from 'reactstrap';
import CryptoJS from 'crypto-js';
import { healthPlans } from '../../utils/data/healthPlans';
import { BASEURL } from '../../api/axiosInstance';

const AddMemberForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        plan_id: '',
        date_of_birth: '',
        address: '',
        created_time: '',
        created_by: ''
    });
    const [showAlert, setShowAlert] = useState({
        msg:"",
        variant:"",
        show:false
    })

    const secretKey = 'sfddsf89432fsf098fd'; // Replace with a secure key

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const encryptField = (value) => {
        return CryptoJS.AES.encrypt(value, secretKey).toString();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const date = new Date(); // or your date string
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        console.log(formattedDate); // "2025-07-23 11:00:00"


        const encryptedData = {
            ...formData,
            first_name: encryptField(formData.first_name),
            last_name: encryptField(formData.last_name),
            email: encryptField(formData.email),
            date_of_birth: encryptField(formData.date_of_birth),
            address: encryptField(formData.address),
            created_time: formattedDate
        };

        try{
            const resp = await fetch(`${BASEURL}/api/v1/user/addMember`)
            const respData = await resp.json();

        setShowAlert(prevData => ({
            ...prevData,
            msg:"Success Please check your email.",
            variant:"primary",
            show:true
        }))
        } catch{
              setShowAlert(prevData => ({
            ...prevData,
            msg:"Something went wrong.",
            variant:"danger",
            show:true
        }))
        }
        

        console.log('Encrypted Data:', encryptedData);
        // Submit encryptedData to your backend
    };
    const handleToggleAlert = () => {
        setShowAlert(prevData => ({
            ...prevData,
            msg:"Success Please check your email.",
            variant:"danger",
            show:false
        }))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Alert color={showAlert.variant} isOpen={showAlert.show} toggle={handleToggleAlert}>{showAlert.msg}</Alert>
                <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input type="text" name="first_name" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input type="text" name="last_name" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="plan_id">Plan ID</Label>
                    <Input
                        type="select"
                        name="plan_id"
                        id="plan_id"
                        onChange={handleChange}
                    >
                        <option value="">Select a Plan</option>
                        {healthPlans && healthPlans.map(val => <option value={`${val._id}`}>{val.plan_name} <span className="bg-primary">({val._id})</span></option>)}
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="date_of_birth">Date of Birth</Label>
                    <Input type="date" name="date_of_birth" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" onChange={handleChange} />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="created_time">Created Time</Label>
                    <Input type="datetime-local" name="created_time" onChange={handleChange} />
                </FormGroup> */}
                <FormGroup>
                    <Label for="created_by">Created By</Label>
                    <Input type="text" name="created_by" onChange={handleChange} />
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>
            </Form>
        </Container>
    );
};

export default AddMemberForm;
