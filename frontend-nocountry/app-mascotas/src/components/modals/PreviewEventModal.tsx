

interface ModalProps {
  isVisible: boolean;
}





const PreviewEventModal: React.FC<ModalProps> = ({ isVisible }) => {

  if (!isVisible) return




  return (
    <div className="flex justify-center items-center text-montserrat">

      <div id="modal" className=' z-30 absolute lg:bottom-5 lg:right-4  lg:h-[200px] lg:w-[500px]   rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <div className="relative flex flex-col items-center">

          <h2 className="text-lg  xl:text-xl font-extrabold py-3">Notas </h2>
          {/* <p>{{ notes }}</p> */}



        </div>

      </div>
    </div>
  );
};

export default PreviewEventModal;
