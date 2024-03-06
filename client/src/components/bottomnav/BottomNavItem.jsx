import UploadIcon from "../../assets/Flix_Icons/Upload-Desktop.svg";
import EditIcon from "../../assets/Flix_Icons/Scissors-Desktop.svg";
import ReelIcon from "../../assets/Flix_Icons/Reel-Desktop.svg";

const BottomBtn = ({ path, title, content, isUpload, isEdit, isReel }) => {
  const renderIcon = () => {
    if (isUpload) {
      return <img src={UploadIcon} alt="Upload your" />;
    }
    if (isEdit) {
      return <img src={EditIcon} alt="Edit your Flix!" />;
    }
    if (isReel) {
      return <img src={ReelIcon} alt="Go Live!" />;
    }
    return null;
  };

  return (
    <div className="w-bigButton items-center align-center justify-center">
      <div className="flex flex-col items-center justify-center mb-[13px] mt-[41.2px]">
        <p className="text-white text-xl m-0 p-0">{title}</p>
      </div>
      <a
        className="w-full max-w-full flex flex-row justify-between bg-light-gray rounded-custom text-lg text-black items-center px-[13px] no-underline h-[100px]"
        href={path}
      >
        {content}
        <div className="icon-container">{renderIcon()}</div>
      </a>
    </div>
  );
};

export default BottomBtn;
