

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}





const ScheduleActivity: React.FC<ModalProps> = ({ isVisible, onClose }) => {

  if (!isVisible) return

  //Tener esto en cuenta para cuando queramos que previsualizar la imagen
  // function previewImage(event) {
  //   // Obtén la imagen seleccionada
  //   const image = event.target.files[0];

  //   // Establece la imagen de fondo del input
  //   const input = event.target;
  //   input.style.backgroundImage = `url('${image.path}')`;
  // }

  // // Asigna el evento change al input
  // input.addEventListener("change", previewImage);

  const handleClose = () => {
    onClose();

  };

  return (
    <>
    <div className="flex justify-center items-center text-montserrat">

      <div
        id="wrapper" onClick={() => handleClose()} className=" fixed inset-0 z-30 "
      >
      </div>
      <div id="modal" className='  absolute right-[5%] md:right-[8%] lg:right-[18%] xl:right-[20%]    w-[90%] z-40 md:-[708px] lg:h-[670px]  xl:h-auto md:w-[656px] lg:w-[750px] xl:w-[60%] xl:-[90%]  rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <div className="relative flex flex-col items-center ">

          <button onClick={() => handleClose()} className="absolute right-4 top-4 scale-50 md:scale-100">
            <img src="./img/close-button.svg" alt="close-button" />
          </button>

          <h2 className="text-md lg:text-2xl xl:text-3xl font-extrabold py-4 ">Agendar Actividades</h2>

          <div className="flex lg:my-12  w-full lg:justify-center justify-center items-center ml-4 gap-2 md:gap-12 lg:gap-5">
            
            <form action="" className="flex flex-col scale-75  md:scale-100 items-left gap-3 ml-[-15px] md:ml-0 ">

              <div>
                <label className="text-[12px] md:text-xl font-normal " htmlFor="Nombre">
                  Fecha
                </label>
                <input
                  className="md:placeholder:text-lg rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                  id="nombre-input"
                  type="date"
                  placeholder="Nombre"
                />
               
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] md:text-xl font-normal whitespace-nowrap" htmlFor="Nombre">
                  Hora
                </label>
                <input type="time" className="rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none" name="hora" id="hora-input" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] md:text-xl font-normal " htmlFor="Nombre">
                  Nombre de la Actividad
                </label>
               <input type="text" className="rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none" name="nameActividad" id=""  />
              </div>
            </form>

          </div>

          <div className="w-[90%] flex flex-col items-center gap-5  " >
            <label className="text-sm md:text-xl font-normal " htmlFor="Peso">
              Notas
            </label>
            <textarea
              className="overflow-hidden  resize-none rounded  w-[90%] h-24 p-4 px-3 mb-2 lg:mb-auto focus:outline-none"
              id="descripcion-input"
              maxLength={300}
            />
          </div>

          <button className="text-lg md:text-xl md:mb-12  font-bold scale-75 bg-[#20EA7D] md:mt-4 xl:my-8 md:scale-100 text-[#fff] rounded-[12px] text-center px-6 py-4 inline-block transition duration-200 border border-transparent hover:border-black active:scale-90 ">Agregar nueva Actividad</button>         

        </div>
        <div className="absolute right-8 top-10 scale-50 md:scale-100 text-center mt-10">
          <label className="text-lg md:text-base font-bold text-center px-6 py-4 inline-block w-32 md:w-40 lg:w-48 xl:w-56 ">
              ¿De que tipo de actividad se trata?
          </label>
          <div>
            <button className="text-lg md:text-xl font-bold scale-75 bg-[#FFCACA] text-[#000] rounded-[12px] text-center px-6 py-4 inline-block w-32 md:w-40 lg:w-48 xl:w-56 transition duration-200 border border-transparent hover:border-black active:scale-90">Turno Medico</button>
          </div>
          <div>
            <button className="text-lg md:text-xl font-bold scale-75 bg-[#FFCACA] text-[#000] rounded-[12px] text-center px-6 py-4 inline-block w-32 md:w-40 lg:w-48 xl:w-56 transition duration-200 border border-transparent hover:border-black active:scale-90">Medicamento</button>
          </div>
          <div>
            <button className="text-lg md:text-xl font-bold scale-75 bg-[#FFCACA] text-[#000] rounded-[12px] text-center px-6 py-4 inline-block w-32 md:w-40 lg:w-48 xl:w-56 transition duration-200 border border-transparent hover:border-black active:scale-90">tarea</button>
          </div>
        </div>
        <div>
          
        </div>
        
   
         

        

        </div>
      </div>
 

    </>
  );
};

export default ScheduleActivity;
