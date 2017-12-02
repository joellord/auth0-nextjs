import AuthLayout from "../components/AuthLayout";
import Auth from "../helpers/Auth";
import Router from "next/router";

const logout = () => {
    const auth = new Auth();
    auth.logout();
    Router.push("/");
};

const Secret = () => (
    <AuthLayout>
        <p>This is a super secret area.  You should not see this this unless logged in.</p>
        <p>
            <button id="logout" onClick={logout}>Log Out</button>
        </p>
    </AuthLayout>
);

export default Secret;