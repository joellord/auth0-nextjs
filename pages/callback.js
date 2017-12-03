import Layout from "../components/MainLayout";
import Auth from "../helpers/Auth";
import React, {Component} from "react";

// This is the page that gets called after the authentication process on auth0
class CallBack extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication(this.props.url.query.code);
    }

    render () {
        return (
            <Layout>
                Welcome back!  You may now access the secret area.
            </Layout>
        )
    }
}

export default CallBack;