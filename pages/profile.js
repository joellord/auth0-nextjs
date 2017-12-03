import React, {Component} from "react";
import Auth from "../helpers/Auth";
import AuthLayout from "../components/AuthLayout";

// This page displays the user profile, you need to be authenticated to view this
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

// Here, we get the profile from our auth library and use this as the
// initial properties for our page.  If not profile was found, we need
// to return an empty profile.
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