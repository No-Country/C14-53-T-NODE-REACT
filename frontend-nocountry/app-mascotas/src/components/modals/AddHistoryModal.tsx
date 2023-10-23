

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}





const AddHistoryModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {

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
      <div id="modal" className='  absolute right-[5%] md:right-[8%] lg:right-[18%] xl:right-[20%]    w-[90%] z-40 md:-[708px] lg:h-[670px]  xl:h-auto md:w-[656px] lg:w-[750px] xl:w-[60%] xl:-[90%]  rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>

        <div className="relative flex flex-col items-center ">

          <button onClick={() => handleClose()} className="absolute right-4 top-4 scale-50 md:scale-100">
            <img src="./img/close-button.svg" alt="close-button" />
          </button>

          <h2 className="text-md lg:text-2xl xl:text-3xl font-extrabold py-4 ">Agregar historia medica</h2>

          <div className="flex lg:my-12  w-full lg:justify-center justify-center items-center ml-4 gap-2 md:gap-12 lg:gap-5">
            <svg className="md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[300px]" width="121" height="116" viewBox="0 0 121 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M32.6496 58.5977C27.2753 58.5977 22.0217 60.1282 17.5531 62.9958C13.0845 65.8633 9.60166 69.9391 7.545 74.7077C5.48834 79.4763 4.95022 84.7235 5.9987 89.7858C7.04717 94.8481 9.63516 99.4981 13.4354 103.148C17.2356 106.798 22.0774 109.283 27.3484 110.29C32.6195 111.297 38.0831 110.78 43.0483 108.805C48.0135 106.83 52.2574 103.485 55.2432 99.1932C58.229 94.9016 59.8227 89.856 59.8227 84.6945C59.8145 77.7756 56.9491 71.1423 51.8549 66.2499C46.7607 61.3574 39.8539 58.6055 32.6496 58.5977ZM32.6496 60.3974C39.0104 60.3936 45.1375 62.7002 49.8013 66.8543L14.0737 101.167C10.734 97.6997 8.51983 93.3722 7.70232 88.7147C6.8848 84.0571 7.49948 79.2717 9.47106 74.9445C11.4426 70.6174 14.6855 66.9365 18.8024 64.3527C22.9194 61.7688 27.7316 60.3943 32.6496 60.3974ZM32.6496 108.992C26.2405 108.995 20.0709 106.653 15.3964 102.442L51.1286 68.1246C54.4968 71.582 56.7389 75.9098 57.579 80.5754C58.419 85.2409 57.8203 90.0405 55.8565 94.3835C53.8928 98.7264 50.6497 102.423 46.5264 105.019C42.4031 107.614 37.5796 108.995 32.6496 108.992Z" fill="#E41616" />
                <path d="M42.77 91.6054L35.2365 98.8405C35.1495 98.9241 35.0805 99.0233 35.0334 99.1325C34.9863 99.2416 34.9621 99.3586 34.9621 99.4768C34.9621 99.595 34.9863 99.712 35.0334 99.8211C35.0805 99.9303 35.1495 100.029 35.2365 100.113C35.3235 100.197 35.4268 100.263 35.5405 100.308C35.6541 100.353 35.776 100.377 35.899 100.377C36.022 100.377 36.1439 100.353 36.2575 100.308C36.3712 100.263 36.4745 100.197 36.5615 100.113L44.095 92.8779C44.2707 92.7092 44.3694 92.4803 44.3694 92.2417C44.3694 92.003 44.2707 91.7742 44.095 91.6054C43.9193 91.4367 43.681 91.3419 43.4325 91.3419C43.184 91.3419 42.9457 91.4367 42.77 91.6054ZM19.5179 80.1133C19.641 80.1135 19.7629 80.0902 19.8765 80.045C19.9902 79.9997 20.0935 79.9334 20.1804 79.8497L28.8353 71.5375C29.011 71.3688 29.1097 71.1399 29.1097 70.9013C29.1097 70.6626 29.011 70.4338 28.8353 70.265C28.6596 70.0963 28.4213 70.0015 28.1728 70.0015C27.9243 70.0015 27.686 70.0963 27.5103 70.265L18.8554 78.5772C18.7244 78.703 18.6352 78.8633 18.599 79.0379C18.5629 79.2124 18.5815 79.3933 18.6524 79.5577C18.7233 79.7221 18.8433 79.8627 18.9974 79.9616C19.1514 80.0604 19.3326 80.1133 19.5179 80.1133ZM101.669 5.09884C97.245 4.47236 92.743 5.55672 89.1506 8.11405C85.5581 10.6714 83.1685 14.4928 82.5061 18.74L71.2108 91.7293C70.5533 95.9785 71.6802 100.304 74.3436 103.756C77.0071 107.207 80.9888 109.501 85.4132 110.133C86.2459 110.252 87.0867 110.312 87.9286 110.312C91.9661 110.302 95.866 108.902 98.9205 106.367C101.975 103.831 103.982 100.327 104.576 96.492L115.872 23.5027C116.524 19.2541 115.395 14.9306 112.733 11.4805C110.07 8.03034 106.091 5.73532 101.669 5.09884ZM102.722 96.2275C102.433 98.0978 101.763 99.8951 100.75 101.517C99.7376 103.138 98.4024 104.553 96.8207 105.679C95.239 106.805 93.4419 107.62 91.5319 108.079C89.6219 108.538 87.6365 108.632 85.689 108.354C83.7416 108.076 81.8702 107.432 80.1818 106.459C78.4934 105.487 77.021 104.204 75.8487 102.685C74.6764 101.166 73.8272 99.4397 73.3495 97.6053C72.8718 95.7709 72.775 93.8641 73.0647 91.9938L78.0236 59.9498L107.681 64.1833L102.722 96.2275ZM107.957 62.4028L78.2991 58.1693L79.1256 52.8288L108.783 57.0623L107.957 62.4028ZM114.018 23.2382L109.059 55.2817L79.4011 51.0483L84.36 19.0046C84.9445 15.2274 87.0675 11.8279 90.2619 9.55404C93.4562 7.28015 97.4603 6.31809 101.393 6.8795C105.326 7.44091 108.866 9.4798 111.233 12.5476C113.601 15.6155 114.603 19.461 114.018 23.2382Z" fill="#E41616" />
                <path d="M90.3196 103.366C90.469 103.366 90.6161 103.331 90.7488 103.265C93.1242 102.085 95.1744 100.38 96.7311 98.2908C98.2878 96.2018 99.3067 93.7882 99.7043 91.2479L100.459 86.3674C100.495 86.1315 100.432 85.8915 100.284 85.7001C100.136 85.5087 99.9153 85.3815 99.6697 85.3465C99.4242 85.3114 99.1742 85.3714 98.9746 85.5132C98.775 85.6551 98.6422 85.8671 98.6053 86.1029L97.8504 90.9833C97.497 93.2416 96.5911 95.3872 95.2071 97.2442C93.8232 99.1012 92.0005 100.617 89.8886 101.666C89.7019 101.759 89.553 101.909 89.4659 102.092C89.3787 102.276 89.3584 102.483 89.4081 102.679C89.4578 102.875 89.5747 103.049 89.7401 103.174C89.9054 103.298 90.1095 103.366 90.3196 103.366ZM40.1461 14.5031C41.258 14.5031 42.345 14.1864 43.2695 13.5931C44.1941 12.9998 44.9147 12.1566 45.3402 11.1699C45.7657 10.1833 45.877 9.09771 45.6601 8.05034C45.4432 7.00297 44.9077 6.0409 44.1215 5.28578C43.3352 4.53067 42.3335 4.01643 41.2429 3.8081C40.1524 3.59976 39.022 3.70669 37.9947 4.11535C36.9674 4.52401 36.0893 5.21606 35.4716 6.10398C34.8538 6.9919 34.5241 8.03581 34.5241 9.1037C34.5257 10.5352 35.1186 11.9077 36.1726 12.9199C37.2265 13.9321 38.6556 14.5015 40.1461 14.5031ZM40.1461 5.50413C40.8874 5.50413 41.612 5.71524 42.2284 6.11077C42.8448 6.5063 43.3251 7.06847 43.6088 7.72621C43.8925 8.38394 43.9667 9.1077 43.8221 9.80594C43.6775 10.5042 43.3205 11.1456 42.7964 11.649C42.2722 12.1524 41.6044 12.4952 40.8773 12.6341C40.1503 12.773 39.3967 12.7017 38.7118 12.4293C38.027 12.1568 37.4416 11.6955 37.0298 11.1035C36.6179 10.5116 36.3981 9.81563 36.3981 9.1037C36.3992 8.14937 36.7945 7.23444 37.4971 6.55963C38.1998 5.88481 39.1524 5.50522 40.1461 5.50413ZM12.0361 41.4998C13.148 41.4998 14.235 41.1832 15.1595 40.5899C16.084 39.9966 16.8046 39.1533 17.2301 38.1667C17.6556 37.1801 17.767 36.0945 17.5501 35.0471C17.3331 33.9997 16.7977 33.0377 16.0114 32.2826C15.2252 31.5274 14.2234 31.0132 13.1329 30.8049C12.0423 30.5965 10.9119 30.7035 9.88462 31.1121C8.85733 31.5208 7.9793 32.2128 7.36154 33.1008C6.74379 33.9887 6.41406 35.0326 6.41406 36.1005C6.41569 37.532 7.00853 38.9044 8.06251 39.9167C9.11649 40.9289 10.5455 41.4983 12.0361 41.4998ZM12.0361 32.5009C12.7774 32.5009 13.502 32.712 14.1184 33.1075C14.7347 33.5031 15.2151 34.0652 15.4988 34.723C15.7825 35.3807 15.8567 36.1045 15.7121 36.8027C15.5674 37.501 15.2105 38.1424 14.6863 38.6458C14.1621 39.1492 13.4943 39.492 12.7673 39.6309C12.0402 39.7698 11.2866 39.6985 10.6018 39.4261C9.91691 39.1536 9.33155 38.6922 8.91972 38.1003C8.50788 37.5084 8.28807 36.8124 8.28807 36.1005C8.2892 35.1462 8.68444 34.2312 9.38709 33.5564C10.0897 32.8816 11.0424 32.502 12.0361 32.5009ZM73.8782 36.1005C73.8782 35.0326 73.5484 33.9887 72.9307 33.1008C72.3129 32.2128 71.4349 31.5208 70.4076 31.1121C69.3803 30.7035 68.2499 30.5965 67.1594 30.8049C66.0688 31.0132 65.0671 31.5274 64.2808 32.2826C63.4945 33.0377 62.9591 33.9997 62.7422 35.0471C62.5252 36.0945 62.6366 37.1801 63.0621 38.1667C63.4876 39.1533 64.2082 39.9966 65.1327 40.5899C66.0573 41.1832 67.1442 41.4998 68.2562 41.4998C69.7467 41.4983 71.1757 40.9289 72.2297 39.9167C73.2837 38.9044 73.8765 37.532 73.8782 36.1005ZM68.2562 39.7001C67.5149 39.7001 66.7902 39.4889 66.1739 39.0934C65.5575 38.6979 65.0771 38.1357 64.7935 37.478C64.5098 36.8202 64.4356 36.0965 64.5802 35.3982C64.7248 34.7 65.0817 34.0586 65.6059 33.5552C66.1301 33.0518 66.7979 32.709 67.525 32.5701C68.252 32.4312 69.0056 32.5025 69.6905 32.7749C70.3753 33.0474 70.9607 33.5087 71.3725 34.1007C71.7844 34.6926 72.0042 35.3886 72.0042 36.1005C72.0031 37.0548 71.6079 37.9698 70.9052 38.6446C70.2026 39.3195 69.2499 39.699 68.2562 39.7001ZM20.1305 42.1418C20.1304 43.1051 20.2058 44.067 20.3561 45.0194C20.5456 46.2455 21.0316 47.4118 21.775 48.425C22.5184 49.4381 23.4987 50.27 24.6371 50.8538C25.9044 51.5139 27.3232 51.8597 28.7648 51.86C30.0476 51.8574 31.3146 51.5885 32.479 51.0717C34.8201 50.0458 37.3633 49.5148 39.9366 49.5145C42.5099 49.5141 45.0532 50.0446 47.3946 51.0699C48.6294 51.6243 49.9824 51.8924 51.3448 51.8527C52.7072 51.813 54.0408 51.4666 55.2383 50.8414C56.3876 50.2472 57.3754 49.4019 58.1219 48.3736C58.8685 47.3453 59.353 46.163 59.5363 44.9218C59.8195 43.0532 59.8171 41.1549 59.5289 39.287C58.853 35.1631 56.7936 31.3639 53.6636 28.4669C50.5337 25.57 46.5045 23.7338 42.1884 23.2374C39.4153 22.9342 36.6068 23.1969 33.9468 24.0085C31.2867 24.8201 28.8352 26.1622 26.7528 27.947C24.6703 29.7317 23.0039 31.9187 21.8627 34.3649C20.7215 36.8111 20.1312 39.4613 20.1305 42.1418ZM27.9798 29.3078C31.2507 26.4698 35.5053 24.9042 39.9133 24.9164C40.6047 24.9166 41.2955 24.9534 41.9826 25.0267C45.8881 25.4755 49.5342 27.1367 52.3667 29.7578C55.1992 32.3789 57.0631 35.8165 57.6751 39.548C57.9365 41.2426 57.9389 42.9647 57.6824 44.66C57.54 45.6243 57.1637 46.543 56.5838 47.342C56.0039 48.141 55.2366 48.7981 54.3439 49.2601C53.4016 49.751 52.3525 50.0225 51.281 50.0526C50.2095 50.0828 49.1457 49.8707 48.1751 49.4336C45.5887 48.3006 42.7791 47.7144 39.9363 47.7147C37.0936 47.715 34.2841 48.3019 31.698 49.4355C30.7273 49.8724 29.6635 50.085 28.592 50.0562C27.5204 50.0274 26.4707 49.7581 25.5269 49.2698C24.6446 48.8175 23.885 48.1729 23.3088 47.3878C22.7326 46.6027 22.3559 45.6989 22.209 44.7488C21.7602 41.9172 22.0527 39.0229 23.0602 36.3271C24.0677 33.6313 25.7585 31.2189 27.9798 29.3078ZM20.4691 23.502C21.581 23.502 22.668 23.1853 23.5925 22.592C24.517 21.9987 25.2376 21.1555 25.6631 20.1689C26.0887 19.1823 26.2 18.0966 25.9831 17.0493C25.7661 16.0019 25.2307 15.0398 24.4444 14.2847C23.6582 13.5296 22.6564 13.0154 21.5659 12.807C20.4753 12.5987 19.3449 12.7056 18.3176 13.1143C17.2903 13.5229 16.4123 14.215 15.7946 15.1029C15.1768 15.9908 14.8471 17.0347 14.8471 18.1026C14.8487 19.5341 15.4415 20.9066 16.4955 21.9188C17.5495 22.9311 18.9785 23.5004 20.4691 23.502ZM20.4691 14.5031C21.2104 14.5031 21.935 14.7142 22.5514 15.1097C23.1677 15.5052 23.6481 16.0674 23.9318 16.7251C24.2155 17.3829 24.2897 18.1066 24.1451 18.8049C24.0005 19.5031 23.6435 20.1445 23.1193 20.6479C22.5952 21.1513 21.9273 21.4941 21.2003 21.633C20.4732 21.7719 19.7196 21.7006 19.0348 21.4282C18.3499 21.1558 17.7646 20.6944 17.3527 20.1024C16.9409 19.5105 16.7211 18.8146 16.7211 18.1026C16.7222 17.1483 17.1175 16.2334 17.8201 15.5586C18.5227 14.8837 19.4754 14.5042 20.4691 14.5031ZM66.3822 18.1026C66.3822 17.0347 66.0524 15.9908 65.4347 15.1029C64.8169 14.215 63.9389 13.5229 62.9116 13.1143C61.8843 12.7056 60.7539 12.5987 59.6633 12.807C58.5728 13.0154 57.571 13.5296 56.7848 14.2847C55.9985 15.0398 55.4631 16.0019 55.2462 17.0493C55.0292 18.0966 55.1406 19.1823 55.5661 20.1689C55.9916 21.1555 56.7122 21.9987 57.6367 22.592C58.5613 23.1853 59.6482 23.502 60.7601 23.502C62.2507 23.5004 63.6797 22.9311 64.7337 21.9188C65.7877 20.9066 66.3805 19.5341 66.3822 18.1026ZM60.7601 21.7022C60.0189 21.7022 59.2942 21.4911 58.6779 21.0956C58.0615 20.7 57.5811 20.1379 57.2974 19.4801C57.0138 18.8224 56.9395 18.0986 57.0842 17.4004C57.2288 16.7021 57.5857 16.0608 58.1099 15.5573C58.6341 15.0539 59.3019 14.7111 60.0289 14.5722C60.756 14.4333 61.5096 14.5046 62.1944 14.7771C62.8793 15.0495 63.4647 15.5109 63.8765 16.1028C64.2883 16.6948 64.5082 17.3907 64.5082 18.1026C64.507 19.057 64.1118 19.9719 63.4091 20.6467C62.7065 21.3215 61.7538 21.7011 60.7601 21.7022Z" fill="#E41616" />
              </g>
            </svg>
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
                  Tipo de tratamiento
                </label>
                <select className="rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none" name="tarea" id="">
                  <option value="Vacuna" selected>Vacuna 1</option>
                  <option value="Medicamento">Medicamento</option>
                  <option value="Tarea">Tarea</option>

                </select>

              </div>
              <div className="flex flex-col">
                <label className="text-[12px] md:text-xl font-normal " htmlFor="Nombre">
                  Medicamento
                </label>
                <select className="rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none" name="tarea" id="">
                  <option value="1" selected>Medicamento 1</option>
                  <option value="2">Medicamento 1</option>


                </select>
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


          <button className="text-lg md:text-xl md:mb-12  font-bold scale-75 bg-[#20EA7D] md:mt-4 xl:my-8  md:scale-100 text-[#fff] rounded-[3px] text-center px-6 py-4 inline-block;">Agregar nueva historia</button>

        </div>

      </div>
    </div>
  );
};

export default AddHistoryModal;
