import { useState } from "react";

const menuItems = [
  { id: 2, name: "YOUR SPACES", path: "/dashboard" },
  { id: 3, name: "FAVORITES", path: "/favorites" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="max-w-nav w-nav flex flex-row items-center px-side-padding py-top-padding">
        <img
          className="w-[233px] h-[233px] max-w-[233px] "
          src="/flix-vibe-logo.png"
          alt="Flix Vibe Logo"
        />
        <ul className="px-[55px] flex flex-row">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="text-white text-xl decoration-none"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="w-[599px] px-padding-side py-padding-top bg-light-gray h-[100px] border-none rounded-custom text-lg">
          LOGIN/SIGNUP
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
