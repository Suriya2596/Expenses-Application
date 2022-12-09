import React from "react"
import { Container } from "react-bootstrap"
import ProfileShow from "./ProfileShow"
const Profile = (props) => {
    return (
        <Container style={{marginTop:"90px"}}>
            <h5>Profile</h5>
            <ProfileShow />
        </Container>
    )
}

export default Profile