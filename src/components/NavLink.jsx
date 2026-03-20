import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, active }) => {
  return (
    <Link
      href={href}
      className={`relative block py-2 px-4 transition-colors duration-300 w-fit ${
        active ? "text-white" : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      <span className="relative z-10">{title}</span>

      {active && (
        <motion.span
          layoutId="active-nav-item"
          className="absolute bottom-0 inset-x-4 h-0.5 bg-purple-500"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavLink;