

interface ModalProps {
  isVisible: boolean;
  onClose: () => void
}

//Todo 
// - [ ] Debo poder visualizar las notas
// - [ ] Debo poder seleccionar solo un item





const PreviewEventModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {

  if (!isVisible) return





  return (
    <div className="flex justify-center items-center text-montserrat">


      <div id="wrapper" onClick={() => onClose()} className=" lg:hidden fixed inset-0 z-20 "> </div>

      <div id="modal" className=' z-30 absolute top-[10%] h-[300px] w-[300px] md:w-[500px] lg:top-5 lg:left-7  lg:h-[200px] lg:w-[500px]   rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <div className="relative flex flex-col items-center">

          <h2 className="text-lg  xl:text-xl font-extrabold py-3">Notas </h2>
          {/* <p>{{ notes }}</p> */}



        </div>

      </div>
    </div>
  );
};

export default PreviewEventModal;
