import { MiscMockData } from "../../mocks/misc";
import { useState, useEffect } from "react";


interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}



const Misc: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const [index, setIndex] = useState(0)


  function randomIndex(min: number, max: number) {
    const randomNumber = Math.random();
    const result = Math.floor(randomNumber * (max - min + 1)) + min;
    return result;
  }

  useEffect(() => {
    setIndex(() => randomIndex(0, 6))
  }, [])

  if (!isVisible) return



  return (
    <section className="flex justify-center items-center text-montserrat ">

      <div id="wrapper" onClick={() => onClose()} className=" fixed inset-0 z-30 "> </div>

      <div id="modal" className=' flex-col items-center z-30   h-[300px] w-[300px] flex  top-44 absolute        lg:h-[350px] lg:w-[650px]   rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <h2 className="text-lg  lg:text-3xl font-extrabold py-3 lg:uppercase">Sabias que...? </h2>

        <div className="flex gap-2 flex-col items-center lg:items-start lg:flex-row">
          <img className="h-[100px] scale-150 w-[200px] lg:w-[400px] lg:h-[300px]  lg:pb-12 lg:scale-125  " src={MiscMockData[index].img} alt="misc-cat" />
          <p className="font-extrabold py-4 lg:py-10 lg:px-2 px-4 text-md lg:text-xl " >{MiscMockData[index].info}</p>
        </div>

      </div>
    </section>
  );
};

export default Misc;
