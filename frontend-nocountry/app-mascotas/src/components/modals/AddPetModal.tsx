interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}



const AddPetModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {

  if (!isVisible) return


  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") {
      onClose();

    }
  };

  return (
    <div
      id="wrapper"
      onClick={(e) => handleClose(e)}
      className="backgrop-blur-sm fixed inset-0 z-20  flex items-center justify-center bg-black/50"
    >
      <div
        className={` z-20 h-[235px] w-[200px] rounded-[20px] bg-white  md:h-[608px] md:w-[606px] md:mt-28 md:rounded-[64px]`}
      >
        <div className="modalheader flex justify-between p-2 md:p-14">
          <h3 className="ml-2  text-[13px] font-light md:text-[43px] ">
            PULSO<span className="font-extrabold">365</span>
          </h3>
          <button >
            <svg
              className="md:h-[84px] md:w-[84px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1993_1106)">
                <path
                  d="M12.0001 0.238281C18.5059 0.238281 23.7648 5.4971 23.7648 12.003C23.7648 18.5089 18.5059 23.7677 12.0001 23.7677C5.49417 23.7677 0.235352 18.5089 0.235352 12.003C0.235352 5.4971 5.49417 0.238281 12.0001 0.238281ZM16.2236 6.12063L12.0001 10.3442L7.77653 6.12063L6.1177 7.77946L10.3412 12.003L6.1177 16.2265L7.77653 17.8853L12.0001 13.6618L16.2236 17.8853L17.8824 16.2265L13.6589 12.003L17.8824 7.77946L16.2236 6.12063Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1993_1106">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>


      </div>
    </div>
  );
};

export default AddPetModal;
