import React, {Component} from "react";
import Auth from "../helpers/Auth";
import AuthLayout from "../components/AuthLayout";


const Profile = (props) => (
    <AuthLayout>
        <div>
            <h1>{props.profile.name}</h1>
            <img src={props.profile.picture} />
            <h2>Everything else:</h2>
            <pre>{JSON.stringify(props.profile)}</pre>
        </div>
    </AuthLayout>
);

Profile.getInitialProps = async function () {
    const auth = new Auth();
    let profile;
    let props = {};
    if (auth.isAuthenticated()) {
        profile = await auth.getProfile();
        props.profile = profile;
    } else {
        props.profile = {
            name: "",
            picture: ""
        };
    }

    return props;
};

export default Profile;