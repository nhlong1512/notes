import React from 'react'
import { useState, useEffect } from 'react'
import ModalEdit from "./ModalEdit";
import '../App.css'

function Note({ note, notesList, setNotesList, handleClickEdit, handleClickDelete, handleTextTitleChange, handleTextDetailsChange, textTitle, textDetails, setTextTitle, setTextDetails}) {
  const [isOpenEdit, setIsOpenEdit] = useState(note.isOpenEdit);
  useEffect(() => {
    setIsOpenEdit(note.isOpenEdit);
  }, [note.isOpenEdit])

  useEffect(() => {
    let v =[...notesList]
    setNotesList(()=>v)
  }, [note.isOpenEdit])

  return (
    <div
      className=" bg-[#f0fdfa] m-[16px] rounded-[10px] p-[16px] min-h-[160px] flex flex-col justify-between"
    >
      <div>
        <h1 className="font-medium text-[20px] mb-[6px]">{note.title}</h1>
        <span className="whitespace-pre-wrap">
          {note.details}
        </span>
      </div>

      <div className="flex justify-end">
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-[5px] text-white px-5 py-[4px] mr-[6px] mt-[8px] rounded relative z-10"
          type="button"
          onClick={() => handleClickEdit(note.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-[3px] text-white px-5 py-[4px] ml-[6px] mt-[8px] rounded relative z-10"
          onClick={() => handleClickDelete(note.id)}
        >
          Delete
        </button>
        {isOpenEdit &&
          <ModalEdit
            setIsOpenEdit={setIsOpenEdit}
            note={note}
            handleTextTitleChange={handleTextTitleChange}
            handleTextDetailsChange={handleTextDetailsChange}
            textTitle={textTitle}
            textDetails={textDetails}
            setTextTitle={setTextTitle}
            setTextDetails={setTextDetails}
          />
        }
      </div>
    </div>

  )
}

export default Note 