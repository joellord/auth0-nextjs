import Layout from "../components/MainLayout";
import Auth from "../helpers/Auth";

const login = () => {
    const auth = new Auth();
    auth.login();
};

const Index = () => (
    <Layout>
        <p>Hello World!</p>
        <p>
            <button id="login" onClick={login}>Login</button>
        </p>
    </Layout>
);

export default Index;