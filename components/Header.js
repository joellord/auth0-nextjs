import Link from "next/link";

const linkStyling = {
    padding: 20,
    textDecoration: "none"
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyling}>Home</a>
        </Link>
        <Link href="/secret">
            <a style={linkStyling}>Secret Area</a>
        </Link>
        <Link href="/profile">
            <a style={linkStyling}>My Profile</a>
        </Link>
    </div>
);

export default Header;