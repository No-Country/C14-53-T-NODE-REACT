
import { BaseSyntheticEvent, useEffect, useState } from "react";
import PreviewEventModal from "./PreviewEventModal";
import { GetCalendar } from "../../api/calendar";
type Pet = {
  name: string
  surname: string
  image: string
  id?: string
  userId: string
  birthdate: string
  species: string
  breed: string
  descriptions: string
  weight: string
}

type IActivities = {
  summary: string
  description: string
  start: Date
  time: string
}


interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  petInfo: Pet | undefined

}

// Need to manage the background color, right now 2 rows can be selected





const SeeEventsModal: React.FC<ModalProps> = ({ isVisible, onClose, petInfo }) => {


  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [notesInfo, setNotesInfo] = useState<string>('');
  const [activities, setActivities] = useState<IActivities[]>();

  //
  function handleClick(e: BaseSyntheticEvent, notes: string) {
    const row = e.target.closest("tr");
    row.classList.toggle("bg-black/30");
    setNotesInfo(notes)
  }


  useEffect(() => {
    if (petInfo) {
      GetCalendar(petInfo?.id).then(res => {
        setActivities(res.data)
      })

    }
  }, [isVisible])





  if (!isVisible) return


  const handleClose = () => {
    onClose();

  };

  return (
    <div className="flex justify-center items-center text-montserrat">

      <div
        id="wrapper" onClick={() => handleClose()} className=" fixed inset-0 z-30 "
      >
      </div>
      <div id="modal" className='absolute right-[5%] md:right-[8%] lg:right-[10%] xl:right-[10%] overflow-x-hidden bottom-[20%] md:bottom-24 lg:bottom-8   w-[90%] z-40 h-[450px] md:h-[708px] lg:h-[670px] xl:h-[85%]   md:w-[656px] lg:w-[850px] xl:w-[80%]   rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <div className="relative flex flex-col items-center">

          <button onClick={() => handleClose()} className="absolute right-4 top-4 scale-50 md:scale-100">
            <img src="./img/close-button.svg" alt="close-button" />
          </button>

          <div className="flex flex-col lg:flex-row lg:gap-7  lg:py-4 items-center lg:justify-center ">

            <h2 className="text-lg lg:text-2xl xl:text-3xl font-extrabold py-3">Actividades</h2>
            <div className="relative">
              <input type="text" placeholder="Busca una actividad" className="rounded lg:rounded-lg border-2 h-10 w-full lg:w-[350px] py-2 px-3 mb-2 focus:outline-none" />
              <img className="absolute right-3 top-3 scale-150 " src="./img/search-icon.svg" alt="search-icon" />
            </div>

          </div>

          <div className=" overflow-x-hidden overflow-y-auto mt-[-x] md:mt-0    xl:w-[95%]">
            <table className="w-full text-center text-gray-500 dark:text-gray-400">
              <thead className="text-[10px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 bg-[#F0F0F1] w-[99%]">
                <tr>
                  <th scope="col" className="md:px-6 py-3">
                    Nombre de Actividad
                  </th>
                  <th scope="col" className="md:px-6 py-3">
                    Fecha
                  </th>
                  <th scope="col" className="md:px-6 py-3">
                    Hora
                  </th>
                  <th scope="col" className="md:px-6 py-3 hidden lg:block">
                    Acciones
                  </th>


                </tr>
              </thead>
              <tbody>

                {activities && activities
                  .map((activities: any, index: number) => (


                    <tr key={index} onClick={(e) => handleClick(e, `${activities.description}`)} className="bg-white bg-black/39 border-b dark:bg-gray-800 text-[9px] md:text-[1rem]">
                      <th scope="row" className="px-6 py-4 text-   font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {activities.summary}
                      </th>
                      <td className="px-2 md:px-6 py-4">
                        {activities.start.slice(0, 10)}
                      </td>
                      <td className="px-2 md:px-6 py-4">
                        {activities.time}
                      </td>
                      <td className=" px-6 py-4 gap-2 hidden lg:flex justify-center">

                        <button className="cursor-default " onMouseOver={() => {
                          setNotesInfo(`${activities.description}`)
                          setShowPreview(true)
                        }} onMouseLeave={() => setShowPreview(false)}>

                          <svg width="32" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_455_3297)">
                              <path d="M4.16014 2.94945C4.59055 2.81301 5.03952 2.74416 5.49104 2.74538C7.34633 2.74538 8.60891 3.85447 9.36176 4.83224C9.73885 5.3229 9.9274 5.56734 9.9274 6.29446C9.9274 7.02202 9.73885 7.26647 9.36176 7.75668C8.60891 8.73446 7.34633 9.84355 5.49104 9.84355C3.63576 9.84355 2.37317 8.73446 1.62032 7.75668C1.24323 7.26691 1.05469 7.02158 1.05469 6.29446C1.05469 5.5669 1.24323 5.32246 1.62032 4.83224C1.85029 4.53177 2.10638 4.25222 2.38559 3.99687" stroke="#636870" stroke-width="0.665453" stroke-linecap="round" />
                              <path d="M6.82295 6.29453C6.82295 6.64751 6.68273 6.98603 6.43313 7.23562C6.18354 7.48522 5.84502 7.62544 5.49204 7.62544C5.13906 7.62544 4.80054 7.48522 4.55095 7.23562C4.30135 6.98603 4.16113 6.64751 4.16113 6.29453C4.16113 5.94155 4.30135 5.60303 4.55095 5.35344C4.80054 5.10384 5.13906 4.96362 5.49204 4.96362C5.84502 4.96362 6.18354 5.10384 6.43313 5.35344C6.68273 5.60303 6.82295 5.94155 6.82295 6.29453Z" stroke="#636870" stroke-width="0.665453" />
                            </g>
                            <defs>
                              <clipPath id="clip0_455_3297">
                                <rect width="10.6473" height="10.6473" fill="white" transform="translate(0.167969 0.970947)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <button>
                          <svg width="32" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6487 3.59912L8.26965 1.2205C8.19056 1.14138 8.09665 1.07862 7.9933 1.0358C7.88995 0.992986 7.77918 0.970947 7.66731 0.970947C7.55544 0.970947 7.44466 0.992986 7.34131 1.0358C7.23796 1.07862 7.14406 1.14138 7.06496 1.2205L0.500649 7.78514C0.421213 7.86395 0.358234 7.95776 0.315373 8.06113C0.272511 8.1645 0.250623 8.27535 0.250981 8.38725V10.7664C0.250981 10.9923 0.340718 11.209 0.500452 11.3687C0.660186 11.5285 0.876831 11.6182 1.10273 11.6182H3.48177C3.59366 11.6186 3.70451 11.5967 3.80787 11.5538C3.91123 11.5109 4.00504 11.448 4.08385 11.3685L8.53795 6.91472L8.72321 7.65471L6.76419 9.6133C6.68428 9.69314 6.63936 9.80146 6.63931 9.91443C6.63926 10.0274 6.68408 10.1358 6.76392 10.2157C6.84376 10.2956 6.95208 10.3405 7.06504 10.3406C7.178 10.3406 7.28636 10.2958 7.36627 10.2159L9.49564 8.08646C9.54772 8.03447 9.58544 7.96988 9.60513 7.89897C9.62481 7.82806 9.62579 7.75326 9.60796 7.68186L9.24064 6.21199L10.6487 4.80387C10.7278 4.72478 10.7906 4.63087 10.8334 4.52751C10.8762 4.42415 10.8982 4.31337 10.8982 4.2015C10.8982 4.08962 10.8762 3.97884 10.8334 3.87549C10.7906 3.77213 10.7278 3.67822 10.6487 3.59912ZM1.10273 9.23904L2.63002 10.7664H1.10273V9.23904ZM3.65797 10.5902L1.27893 8.21104L5.78734 3.7024L8.16638 6.08156L3.65797 10.5902ZM8.76846 5.47945L6.38995 3.10029L7.66757 1.82261L10.0461 4.20177L8.76846 5.47945Z" fill="#636870" />
                          </svg>
                        </button>
                        <button>
                          <svg width="32" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.76391 4.0763L8.37913 9.46314C8.34597 9.92746 7.95961 10.2872 7.49412 10.2872H3.8228C3.3573 10.2872 2.97095 9.92746 2.93779 9.46314L2.55301 4.0763M4.77119 5.85084V8.51266M6.54573 5.85084V8.51266M6.98937 4.0763V2.74539C6.98937 2.50038 6.79074 2.30176 6.54573 2.30176H4.77119C4.52618 2.30176 4.32755 2.50038 4.32755 2.74539V4.0763M2.10938 4.0763H9.20754" stroke="#636870" stroke-width="0.887271" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                      </td>
                    </tr>



                  ))}






              </tbody>
            </table>
          </div>



        </div>

        <PreviewEventModal
          isVisible={showPreview}
          onClose={() => setShowPreview(false)}
          notes={notesInfo} />





      </div>



      <div className="flex justify-center gap-3 md:justify-around bottom-12 md:bottom-0 absolute z-50 left-[20%] mobilepanel   h-[70px] w-[55%] lg:hidden rounded-xl  shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">

        <button onClick={() => setShowPreview(true)}>
          <svg width="48" height="48" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_455_3297)">
              <path d="M4.16014 2.94945C4.59055 2.81301 5.03952 2.74416 5.49104 2.74538C7.34633 2.74538 8.60891 3.85447 9.36176 4.83224C9.73885 5.3229 9.9274 5.56734 9.9274 6.29446C9.9274 7.02202 9.73885 7.26647 9.36176 7.75668C8.60891 8.73446 7.34633 9.84355 5.49104 9.84355C3.63576 9.84355 2.37317 8.73446 1.62032 7.75668C1.24323 7.26691 1.05469 7.02158 1.05469 6.29446C1.05469 5.5669 1.24323 5.32246 1.62032 4.83224C1.85029 4.53177 2.10638 4.25222 2.38559 3.99687" stroke="#636870" stroke-width="0.665453" stroke-linecap="round" />
              <path d="M6.82295 6.29453C6.82295 6.64751 6.68273 6.98603 6.43313 7.23562C6.18354 7.48522 5.84502 7.62544 5.49204 7.62544C5.13906 7.62544 4.80054 7.48522 4.55095 7.23562C4.30135 6.98603 4.16113 6.64751 4.16113 6.29453C4.16113 5.94155 4.30135 5.60303 4.55095 5.35344C4.80054 5.10384 5.13906 4.96362 5.49204 4.96362C5.84502 4.96362 6.18354 5.10384 6.43313 5.35344C6.68273 5.60303 6.82295 5.94155 6.82295 6.29453Z" stroke="#636870" stroke-width="0.665453" />
            </g>
            <defs>
              <clipPath id="clip0_455_3297">
                <rect width="10.6473" height="10.6473" fill="white" transform="translate(0.167969 0.970947)" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button>
          <svg width="48" height="48" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6487 3.59912L8.26965 1.2205C8.19056 1.14138 8.09665 1.07862 7.9933 1.0358C7.88995 0.992986 7.77918 0.970947 7.66731 0.970947C7.55544 0.970947 7.44466 0.992986 7.34131 1.0358C7.23796 1.07862 7.14406 1.14138 7.06496 1.2205L0.500649 7.78514C0.421213 7.86395 0.358234 7.95776 0.315373 8.06113C0.272511 8.1645 0.250623 8.27535 0.250981 8.38725V10.7664C0.250981 10.9923 0.340718 11.209 0.500452 11.3687C0.660186 11.5285 0.876831 11.6182 1.10273 11.6182H3.48177C3.59366 11.6186 3.70451 11.5967 3.80787 11.5538C3.91123 11.5109 4.00504 11.448 4.08385 11.3685L8.53795 6.91472L8.72321 7.65471L6.76419 9.6133C6.68428 9.69314 6.63936 9.80146 6.63931 9.91443C6.63926 10.0274 6.68408 10.1358 6.76392 10.2157C6.84376 10.2956 6.95208 10.3405 7.06504 10.3406C7.178 10.3406 7.28636 10.2958 7.36627 10.2159L9.49564 8.08646C9.54772 8.03447 9.58544 7.96988 9.60513 7.89897C9.62481 7.82806 9.62579 7.75326 9.60796 7.68186L9.24064 6.21199L10.6487 4.80387C10.7278 4.72478 10.7906 4.63087 10.8334 4.52751C10.8762 4.42415 10.8982 4.31337 10.8982 4.2015C10.8982 4.08962 10.8762 3.97884 10.8334 3.87549C10.7906 3.77213 10.7278 3.67822 10.6487 3.59912ZM1.10273 9.23904L2.63002 10.7664H1.10273V9.23904ZM3.65797 10.5902L1.27893 8.21104L5.78734 3.7024L8.16638 6.08156L3.65797 10.5902ZM8.76846 5.47945L6.38995 3.10029L7.66757 1.82261L10.0461 4.20177L8.76846 5.47945Z" fill="#636870" />
          </svg>
        </button>
        <button>
          <svg width="48" height="48" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.76391 4.0763L8.37913 9.46314C8.34597 9.92746 7.95961 10.2872 7.49412 10.2872H3.8228C3.3573 10.2872 2.97095 9.92746 2.93779 9.46314L2.55301 4.0763M4.77119 5.85084V8.51266M6.54573 5.85084V8.51266M6.98937 4.0763V2.74539C6.98937 2.50038 6.79074 2.30176 6.54573 2.30176H4.77119C4.52618 2.30176 4.32755 2.50038 4.32755 2.74539V4.0763M2.10938 4.0763H9.20754" stroke="#636870" stroke-width="0.887271" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>


      </div>



    </div>
  );
};

export default SeeEventsModal;
