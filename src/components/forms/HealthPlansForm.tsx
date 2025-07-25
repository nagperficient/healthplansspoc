import { use, useState, type JSX } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import AlertModal from '../modalPopups/AlertModal';
import { useNavigate } from 'react-router-dom';
import { LoaderIcon } from 'lucide-react';

type Props = {}
const enabled = ["plan_name", "effective_date", "plan_type", "coverage_area", "coinsurance", "plan_url", "provider"]

const formData = [
    { label: "Plan Name", key: "plan_name", type: "text" },
    { label: "Plan Type", key: "plan_type", type: "text" },
    { label: "Provider", key: "provider", type: "text" },
    { label: "Coverage Area", key: "coverage_area", type: "text" },
    { label: "Monthly Premium", key: "monthly_premium", type: "number" },
    { label: "Deductible", key: "deductible", type: "number" },
    { label: "Coinsurance", key: "coinsurance", type: "text" },
    { label: "Copay (Primary)", key: "copay_primary", type: "number" },
    { label: "Copay (Specialist)", key: "copay_specialist", type: "number" },
    { label: "Out-of-Pocket Max", key: "out_of_pocket_max", type: "number" },
    { label: "Network Type", key: "network_type", type: "text" },
    { label: "Referral Required", key: "referral_required", type: "select" },
    { label: "Includes Prescription", key: "includes_prescription", type: "select" },
    { label: "Dental Coverage", key: "dental_coverage", type: "select" },
    { label: "Vision Coverage", key: "vision_coverage", type: "select" },
    { label: "Plan URL", key: "plan_url", type: "text" },
    { label: "Plan Notes", key: "plan_notes", type: "text" },
    { label: "Effective Date", key: "effective_date", type: "text" },
    { label: "Event Message", key: "event_message", type: "textarea" },
    //   { label: "ID", key: "_id" }
];


const HealthPlansForm = (props: any) => {
    const { customerhealthplansData, fetchData } = use(StoreContext);
    const navigate = useNavigate();
    // const { _id, plan_name, plan_type, provider, coverage_area, monthly_premium, deductible, coinsurance, copay_primary, copay_specialist, out_of_pocket_max, network_type, referral_required, includes_prescription, dental_coverage, vision_coverage, plan_url, plan_notes, effective_date } = props;
    const [formValues, setFormValues] = useState({}) as any
    const [showAlert, setShowAlert] = useState<JSX.Element[]>([]) as any;
    const [isLoading, setisLoading] = useState(false);



    const handlechange = (e: any, keyValue: string) => {
        setFormValues((prevValues: any) => ({
            ...prevValues,
            [keyValue]: e.target.value
        }))
    }
    const handleOnSubmit = async () => {
        setisLoading(true)
        console.log({
                    
                    "fields":{...formValues},
                    id: props.id,
                    plan_name:props.plan_name,
                    plan_type: props.plan_type,
                    provider: props.provider,
                    created_at: Date.now(),
                    event_message: formValues.event_message || "",
                    // customers
                })
        
        const customers = customerhealthplansData?.filter(val => +val.plan_id === +props.id)
        try {
            const response = await fetch("http://10.99.34.31:8085/healthplans/publish", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    "fields":{...formValues},
                    id: props.id,
                    plan_name:props.plan_name,
                    plan_type: props.plan_type,
                    provider: props.provider,
                    created_at: new Date(),                    
                    event_message: formValues.event_message || "",
                    // customers
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            
            setShowAlert([<AlertModal message={formValues.event_message} title="Alert" toggle={() => { setShowAlert([]); props.toggle() }} customers={customers} />])
            setisLoading(false)
            fetchData()
        } catch (error) {
            console.error('Switch failed:', error);
            throw error;
        }

 setisLoading(false)
    }
    return (
        <div><Form>
            <Row>
                {formData.map((val, index) => {
                    return (
                        <Col md={6} key={`${index}-healthplan`}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    {val.label}
                                </Label>
                                {val.type == "text" && <Input
                                    id={val.key}
                                    name={val.key}
                                    placeholder={val.label}
                                    disabled={enabled.includes(val.key)}
                                    onChange={(e) => handlechange(e, val.key)}
                                    value={formValues[val.key] || props[val.key]}
                                    type="text"
                                />}
                                {val.type == "textarea" && <Input
                                    id={val.key}
                                    name={val.key}
                                    placeholder={val.label}
                                    disabled={enabled.includes(val.key)}
                                    onChange={(e) => handlechange(e, val.key)}
                                    value={formValues[val.key] || props[val.key]}
                                    type="textarea"
                                />}
                                {val.type == "number" &&
                                    <Input
                                        id={val.key}
                                        name={val.key}
                                        placeholder={val.label}
                                        type="number"
                                        disabled={enabled.includes(val.key)}
                                        onChange={(e) => handlechange(e, val.key)}
                                        value={formValues[val.key] || props[val.key]}
                                    />
                                }


                                {val.type === "select" && (
                                    <Input
                                        id={val.key}
                                        name={val.key}
                                        type="select"
                                        onChange={(e) => handlechange(e, val.key)}
                                        value={formValues[val.key] || props[val.key]}
                                        disabled={enabled.includes(val.key)}
                                    >

                                        <option value={true}>
                                            true
                                        </option>
                                        <option value={false}>
                                            false
                                        </option>

                                    </Input>
                                )}

                            </FormGroup>
                        </Col>
                    )
                })}

            </Row>

            <Button disabled={isLoading} onClick={handleOnSubmit} block className="my-4" color="primary">
                {isLoading ? <LoaderIcon /> : "Submit"}
            </Button>
        </Form>
            {showAlert && showAlert[0]}
        </div>
    )
}

export default HealthPlansForm