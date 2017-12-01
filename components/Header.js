import Link from "next/link";

const linkStyling = {
    padding: 20,
    textDecoration: "none"
};

const menuItems = [
    {linkTo: "/", label: "Home"},
    {linkTo: "/secret", label: "Secret Area"}
];

const menuItemsFormatted = menuItems.map((i) => {
    return (
        <Link href={i.linkTo}>
            <a style={linkStyling}>{i.label}</a>
        </Link>
    )
});

const Header = () => (
    <div>
        {menuItemsFormatted}
    </div>
);

export default Header;