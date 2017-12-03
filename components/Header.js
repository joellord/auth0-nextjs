import Link from "next/link";

const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/secret">
            <a>Secret Area</a>
        </Link>
        <Link href="/profile">
            <a>My Profile</a>
        </Link>

        <style jsx>{`
            a {
                text-decoration: none;
                color: #666666;
                padding-right: 20px;
            }

            a:hover {
                text-decoration: underline;
                color: #000000;
            }
        `}</style>
    </div>
);

export default Header;