import useMediaQuery from "./MediaQueries";

const ResponsiveWidth = () => {
  const isDesktop = useMediaQuery("(min-width: 1920px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const widthClass = isDesktop
    ? "w-desktopNav"
    : isMobile
    ? "w-mobileNav"
    : "w-auto";

  return <div className={widthClass}></div>;
};

export default ResponsiveWidth;

<ResponsiveWidth>
  <div className="bg-yellow-500"></div>
</ResponsiveWidth>;
