import React from "react";
const Modal = ({ setIsOpen, handleClickAdd, handleTextTitleChange, handleTextDetailsChange, textTitle, textDetails }) => {
  const handleClickAddOpen = () =>{
    handleClickAdd()
    setIsOpen(false)
  }
  return (
    <div className="z-20 inset-0 bg-[#000] bg-opacity-40 overflow-auto fixed flex items-center justify-center" onClick={() => setIsOpen(false)}>
      <div className="m-[16px] w-[500px] max-w-[92%] bg-white text-white z-20 rounded-[16px] flex flex-col animate-fade-in-down" onClick={(e) => { e.stopPropagation() }}>
        <h4 className="m-0 p-[10px] text-[black] font-semibold text-[20px] text-center">Add A Note</h4>
        {/* </div> */}
        <h5 className="p-[5px] text-[16px] font-normal text-black text-center">
          To add a note start typing here
        </h5>
        <form className="w-full max-w-[90%] mx-auto mb-[6px]">
          <div className="flex items-center border-b border-teal-500 py-[4px] mb-[16px]">
            <textarea
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-[3px] px-2 leading-[1.35] focus:outline-none"
              type="text"
              placeholder="Title"
              aria-label="Full name"
              value={textTitle}
              onChange={handleTextTitleChange}
            ></textarea>
          </div>
          <div className="flex flex-col items-center border-b border-teal-500 py-[4px] mb-[16px]">
            <textarea
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-[3px] px-2 leading-[1.35] focus:outline-none"
              type="text"
              placeholder="Details"
              aria-label="Full name"
              value={textDetails}
              onChange={handleTextDetailsChange}
            >
            </textarea>
          </div>
        </form>
        <div className="mb-2 w-full bottom-[2px]">
          <div className="flex justify-around items-center">
            <button
              className="mt-[0] cursor-pointer font-medium py-[11px] px-[28px] rounded-[12px] border-none transition-all text-xs text-white bg-teal-500 hover:shadow-[0_10px_20px_-10px_rgba(255, 62, 78, 0.6)] hover:translate-y-[-5px] hover:bg-teal-500"
              type="submit"
              onClick={handleClickAddOpen}
            >
              Add
            </button>
            <button
              className="mt-[0] cursor-pointer font-medium py-[11px] px-[28px] rounded-[12px] border-none transition-all text-xs text-white bg-red-600 hover:shadow-[0_10px_20px_-10px_rgba(255, 62, 78, 0.6)] hover:translate-y-[-5px]"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;