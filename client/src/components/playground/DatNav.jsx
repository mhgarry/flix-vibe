import { useState } from "react";

const DatNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex w-98 text-white">
      <div
        className="flex-none w-1/5 mb-10 relative z-10 before:absolute before:left-1 before:w-full before:h-full before:bg-teal-300"
        loading="lazy"
      >
        <img
          src="flix-vibe-logo.png"
          alt="FlixVibe logo"
          className="lute z-10 inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
