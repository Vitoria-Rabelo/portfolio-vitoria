import Link from "next/link";

const NavLink = ({ href, title}) => {
    return(
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white transition-colors duration-200"
        >
            {title}
        </Link>
    )
}

export default NavLink