import Header from "./Header";

const Layout = (props) => (
    <div id="mainContainer">
        <Header/>
        {props.children}

        <style jsx>{`
            #mainContainer {
                font-family: "Arial";
                padding: 20px;
            }
        `}</style>
    </div>
);

export default Layout;