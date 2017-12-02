import Layout from "../components/MainLayout";
import Auth from "../helpers/Auth";
import React, {Component} from "react";

class AuthCallBack extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication(this.props.url.query.code);
    }

    render () {
        return (
            <Layout>
                Welcome back
            </Layout>
        )
    }
}

export default AuthCallBack;