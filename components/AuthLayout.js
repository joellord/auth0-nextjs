import Header from "./Header";
import React, {Component} from "react";
import Auth from "../helpers/Auth";

/**
 * This component acts as a layout component but will show an error message
 * if the user is not authenticated.
 */
class AuthLayout extends Component {
    render() {
        const auth = new Auth();
        let inside;

        if (auth.isAuthenticated()) {
            inside = (
                <div>
                    {this.props.children}
                </div>
            )
        } else {
            inside = (
                <p>You are not logged in, this page is blocked for you.</p>
            )
        }

        return (
            <div id="mainContainer">
                <Header />
                {inside}

                <style jsx>{`
                    #mainContainer {
                        font-family: "Arial";
                        padding: 20px;
                    }
                `}</style>
            </div>
        )
    }
}

export default AuthLayout;