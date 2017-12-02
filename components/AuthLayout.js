import Header from "./Header";
import React, {Component} from "react";
import Auth from "../helpers/Auth";
import Link from "next/link";

class AuthLayout extends Component {
    render() {
        const auth = new Auth();
        if (auth.isAuthenticated()) {
            return (
                <div>
                    <Header />
                    {this.props.children}
                </div>
            )
        } else {
            return (
                <div>
                    <p>You are not logged in, this page is blocked for you.</p>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            )
        }
    }
}

export default AuthLayout;