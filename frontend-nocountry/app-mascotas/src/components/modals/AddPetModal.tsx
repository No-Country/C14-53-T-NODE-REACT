// TODO 
//
// - [ ] Cuando carue una imagen debe poder previsualizarse



interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}





const AddPetModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {

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
    <div className="flex justify-center items-center text-montserrat">
      <div
        id="wrapper" onClick={() => handleClose()} className=" fixed inset-0 z-30 "
      >
      </div>
      <div id="modal" className='  absolute right-[10%] md:right-[8%] lg:right-[18%] xl:right-[20%]    w-[80%] z-40 md:-[708px] lg:h-[670px]  xl:h-auto md:w-[656px] lg:w-[750px] xl:w-[60%] xl:-[90%]  rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <div className="relative flex flex-col items-center">

          <button onClick={() => handleClose()} className="absolute right-4 top-4 scale-50 md:scale-100">
            <img src="./img/close-button.svg" alt="close-button" />
          </button>

          <h2 className="text-lg lg:text-2xl xl:text-3xl font-extrabold py-3">Agregar Mascota</h2>


          <form action="" className="flex flex-col items-center">

            <div id="uploadimage" className="h-[130px] md:h-[200px]">
              <label htmlFor="fileinput" className="">
                <img className="cursor-pointer ml-24 lg:ml-[25%] scale-75 md:scale-100" src="./img/select-image.png" alt="image-input" />
              </label>
              <input id="fileinput" type="file" className="invisible" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 scale-75 md:scale-100 m-4 gap-2 ml-10 lg:ml-0 w-[80%]  text-[10px] lg:text-sm xl:text-xl">


              <div>
                <label className="text-[12px] md:text-xl font-normal " htmlFor="Nombre">
                  Nombre
                </label>
                <input
                  className="md:placeholder:text-lg rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                  id="nombre-input"
                  type="name"
                  placeholder="Nombre"
                />

              </div>

              <div>
                <label className="text-sm md:text-xl font-normal " htmlFor="Especie">
                  Especie
                </label>
                <input
                  className=" md:placeholder:text-lg rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                  id="especie-input"
                  type="text"
                  placeholder="Especie"
                />

              </div>
              <div>
                <label className="text-sm md:text-xl font-normal whitespace-nowrap" htmlFor="Date">
                  Fecha de nacimiento
                </label>
                <input
                  className=" md:placeholder:text-lg rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                  id="date-input"
                  type="date"
                  placeholder="Fecha de nacimiento"
                  pattern="^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$"
                />

              </div>
              <div>
                <label className="text-sm md:text-xl font-normal " htmlFor="Raza">
                  Raza
                </label>
                <input
                  className=" md:placeholder:text-lg rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                  id="raza-input"
                  type="text"
                  placeholder="Raza"
                />

              </div>
              <div className="" >
                <label className="text-sm md:text-xl font-normal " htmlFor="Peso">
                  Peso
                </label>
                <input
                  className=" md:placeholder:text-lg rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                  id="peso-input"
                  type="number"
                  placeholder="Peso"
                />

              </div>



            </div>

            <div className="w-[70%] flex flex-col items-center gap-5 mt-[-30px] md:mt-0" >
              <label className="text-sm md:text-xl font-normal " htmlFor="Peso">
                Descripcion (Adicional)
              </label>
              <textarea
                className="overflow-hidden   rounded  w-[90%] h-24 p-4 px-3 mb-2 lg:mb-auto focus:outline-none"
                id="descripcion-input"
                maxLength={300}
              />

            </div>



          </form>
          <button className="text-lg md:text-xl md:mb-12  font-bold scale-75 bg-[#20EA7D] md:mt-2 xl:mt-6  md:scale-100 text-[#fff] rounded-[3px] text-center px-6 py-4 inline-block;">Agregar nueva mascota</button>

        </div>

      </div>
    </div>
  );
};

export default AddPetModal;
