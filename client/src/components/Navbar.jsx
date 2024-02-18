import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-side-padding py-top-padding max-w-full">
      <div className="flex items-center ">
        {" "}
        <a href="/">
          <img
            src="/flix-vibe-logo.png"
            alt="logo"
            className="w-[14.5625rem] h-[14.5625rem]"
          />
        </a>
      </div>
      <div className="flex items-center">
        <h2 className="text-xl text-white whitespace-nowrap mr-14">
          YOUR SPACES
        </h2>
        <h2 className="text-xl text-white whitespace-nowrap mr-14">
          FAVORITES
        </h2>
        <div className="pl-side-padding">
          <button className="bg-light-gray text-black text-lg rounded-custom px-5 py-3">
            <a
              href="/login"
              className="text-black hover:text-dark-gray no-underline"
            >
              LOGIN / SIGN UP
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
