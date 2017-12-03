import AuthLayout from "../components/AuthLayout";
import Auth from "../helpers/Auth";
import Router from "next/router";

const logout = () => {
    const auth = new Auth();
    auth.logout();
    Router.push("/");
};

// Secret area.  Accessed by navigating to /secret and only visible if authenticated
const Secret = () => (
    <AuthLayout>
        <p>This is a super secret area.  You should not see this this unless logged in.</p>
        <p>
            <button className="btn" id="logout" onClick={logout}>Log Out</button>
        </p>
        <style jsx>{`
            .btn {
                width: 100px;
                border-radius: 5px;
                height: 30px;
                background-color: lightgrey;
                border-color: black;
            }
        `}</style>
    </AuthLayout>
);

export default Secret;