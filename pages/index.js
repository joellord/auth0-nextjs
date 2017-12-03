import Layout from "../components/MainLayout";
import Auth from "../helpers/Auth";

const login = () => {
    const auth = new Auth();
    auth.login();
};

const Index = () => (
    <Layout>
        <p>Hello World!  If you are not logged in, you won't be able to see the secret area.</p>
        <p>
            <button className="btn" id="login" onClick={login}>Login</button>
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
    </Layout>
);

export default Index;