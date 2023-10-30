import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddActivityModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div id="modal" className="absolute z-50 w-full sm:w-5/6 md:right-[8%] lg:right-[18%] xl:right-[20%] md:-[708px] lg:h-[670px] xl:h-auto md:w-[656px] lg:w-[750px] xl:w-[60%] xl:-[90%] rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9] scale-90 sm:scale-100">
      <div className='relative right-0'>
        <div className='absolute top-12 right-0 sm:right-6 md:right-10 lg:right-14 scale-90 sm:scale-100'>
          <div className='flex flex-col justify-between w-36 text-center'>
            <p className="text-sm my-2 md:mb-5  font-bold scale-75 md:scale-100 font-montserrat">¿De qué tipo de actividad se trata?</p>
            <button className="text-sm mb-2 font-bold scale-75 border bg-[#FFCACA] md:scale-100 rounded-[8px] px-4 py-2 hover:border-2">
                Turno médico
              </button>
              <button className="text-sm mb-2 font-bold scale-75 border bg-[#FFCACA] md:scale-100 rounded-[8px] px-4 py-2 hover:border-2">
                Medicamento
              </button>
              <button className="text-sm font-bold scale-75 border bg-[#FFCACA] md:scale-100 rounded-[8px] px-4 py-2 hover:border-2">
                Tarea
              </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={onClose} className="absolute right-4 top-4 scale-50 md:scale-100">
          <img src="./img/close-button.svg" alt="close-button" />
        </button>
        <h2 className="text-base lg:text-lg xl:text-xl font-extrabold py-3">Agendar Actividad</h2>
        <form action="" className="flex flex-col items-center text-center w-4/6">
          <div className="flex flex-col justify-center m-4 gap-2 w-2/5 text-[10px] md:text-sm xl:text-base">
            <div>
              <label className="text-xs sm:text-sm font-bold whitespace-nowrap" htmlFor="Date">
                Fecha
              </label>
              <input
                className="border border-gray rounded text-center h-8 w-full py-2 px-4 mb-2 focus:outline-none"
                id="date"
                type="date"
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-bold whitespace-nowrap" htmlFor="Date">
                Hora
              </label>
              <input
                className="border border-gray rounded text-center h-8 w-full py-2 px-4 mb-2 focus:outline-none"
                id="time"
                type="time"
                placeholder="Hora"
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-bold" htmlFor="Raza">
                Actividad
              </label>
              <input
                className="border border-gray text-center rounded h-8 w-full py-2 px-4 mb-2 focus:outline-none"
                id="activity"
                type="text"
                placeholder="Actividad"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:mt-0">
            <label className="text-xs md:text-sm font-bold" htmlFor="Peso">
              Notas
            </label>
            <textarea
              className="border border-gray overflow-hidden text-[11px] sm:text-sm resize-none rounded w-full h-20 py-2 px-2 mb-2 lg:mb-auto focus:outline-none"
              id="description"
              placeholder="Notas"
              maxLength={300}
            />
          </div>
        </form>
        <button className="text-sm md:text-base mb-2 md:mb-6 font-bold scale-75 shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#20EA7D] md:mt-2 lg:mt-4 md:scale-100 text-[#fff] rounded-[4px] text-center px-8 py-3 inline-block">
          Agregar nueva actividad
        </button>
      </div>
    </div>
  );
};

export default AddActivityModal;
