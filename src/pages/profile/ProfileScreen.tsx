import { CameraIcon, Pen } from 'lucide-react'
import React, { use } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button
} from 'reactstrap'
import { customerLogo, imgBuyingLogo } from '../../utils/Images'
import { StoreContext } from '../../hooks/contexts/GlobalContext'
// or any icon lib

// Don't forget in your entrypoint (e.g. index.js) to import Bootstrap's CSS:
// import 'bootstrap/dist/css/bootstrap.min.css'

const ProfileScreen = () => {
    const { loggedinUser } = use(StoreContext) as any;
    const user = JSON.parse(localStorage.getItem("userData")||"{}") as any
    const users = loggedinUser || {
        firstName: 'Natashia',
        lastName: 'Khaleira',
        dob: '12-10-1990',
        email: 'info@binary-fusion.com',
        phone: '(+62) 821 2554‑5846',
        role: 'Admin',
        country: 'United Kingdom',
        city: 'Leeds, East London',
        postalCode: 'ERT 1254',
        location: 'Leeds, United Kingdom',
        avatarUrl: '/path/to/avatar.jpg'
    }

    const handleEditPersonal = () => {
        // open personal-info form…
    }
    const handleEditAddress = () => {
        // open address form…
    }

    return (
        <Container className="py-4">
            {/* Profile Header */}
            <h4 className="mb-4">My Profile</h4>
            <Card className="mb-4 shadow-sm">
                <CardBody>
                    <Row className="align-items-center">
                        <Col xs="auto" className="position-relative">
                            <img
                                src={customerLogo}
                                alt="avatar"
                                className="rounded-circle"
                                width={100}
                                height={100}
                            />
                            <CameraIcon
                                className="position-absolute"
                                style={{
                                    bottom: 0, right: 0, background: 'white',
                                    borderRadius: '50%'
                                }}
                            />
                        </Col>
                        <Col>
                            <h4 className="mb-1">
                                {user.firstName} {user.lastName}
                            </h4>
                            <p className="mb-1">{user.role}</p>
                            <p className="text-muted mb-0">{user.location}</p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* Personal Information */}
            <Card className="mb-4 shadow-sm">
                <CardBody>
                    <Row className="mb-3">
                        <Col><h5 className="mb-0">Personal Information</h5></Col>
                        {/* <Col className="text-right">
                            <Button color="warning" onClick={handleEditPersonal}>
                                <Pen className="mr-1" /> Edit
                            </Button>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col md="4">
                            <small className="text-uppercase text-muted">First Name</small>
                            <p>{user.firstName}</p>
                        </Col>
                        <Col md="4">
                            <small className="text-uppercase text-muted">Last Name</small>
                            <p>{user.lastName}</p>
                        </Col>
                        <Col md="4">
                            <small className="text-uppercase text-muted">Date of Birth</small>
                            <p>{user.dob}</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md="4">
                            <small className="text-uppercase text-muted">Email Address</small>
                            <p>{user.email}</p>
                        </Col>
                        <Col md="4">
                            <small className="text-uppercase text-muted">Phone Number</small>
                            <p>{user.phone}</p>
                        </Col>
                        <Col md="4">
                            <small className="text-uppercase text-muted">User Role</small>
                            <p>{user.role}</p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* Address */}
            <Card className='shadow-sm'>
                <CardBody>
                    <Row className="mb-3">
                        <Col><h5 className="mb-0">Address</h5></Col>
                        {/* <Col className="text-right">
                            <Button outline color="secondary" onClick={handleEditAddress}>
                                <Pen className="mr-1" /> Edit
                            </Button>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col md="4">
                            <small className="text-uppercase text-muted">Country</small>
                            <p>{user.country}</p>
                        </Col>
                        <Col md="4">
                            <small className="text-uppercase text-muted">City</small>
                            <p>{user.city}</p>
                        </Col>
                        <Col md="4">
                            <small className="text-uppercase text-muted">Postal Code</small>
                            <p>{user.postalCode}</p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )
}

export default ProfileScreen
