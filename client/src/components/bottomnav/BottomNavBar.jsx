import BottomBtn from "./BottomNavItem";

const BottomNavBar = () => {
  const bottomNavItems = [
    {
      path: "/upload",
      content: "Upload Your Flix",
      isUpload: true,
      title: "GET CREATIVE",
    },
    {
      path: "/edit",
      content: "Edit Your Flix",
      isEdit: true,
      title: "GET EDITING",
    },
    {
      path: "/reel",
      content: "Take Flix Live",
      isReel: true,
      title: "GET SEEN",
    },
  ];

  return (
    <div className="lg:w-full lg:max-w-full flex lg:flex-row lg:justify-between flex-col">
      {bottomNavItems.map((item) => (
        <BottomBtn
          key={item.path}
          path={item.path}
          content={item.content}
          isUpload={item.isUpload}
          isEdit={item.isEdit}
          isReel={item.isReel}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default BottomNavBar;
