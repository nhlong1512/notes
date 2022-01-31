import React from 'react';
import { useState, useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"
import { RiAddLine } from "react-icons/ri";
import NotesList from "./NotesList";
import Modal from "./Modal";

const TO_DO_APP_STORAGE = 'TODO_APP'

function Home() {
  const [notesList, setNotesList] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [textTitle, setTextTitle] = useState('')
  const [textDetails, setTextDetails] = useState('')

  useEffect(() => {
    const storagedNotesList = localStorage.getItem(TO_DO_APP_STORAGE)
    if (storagedNotesList) {
      setNotesList(JSON.parse(storagedNotesList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TO_DO_APP_STORAGE, JSON.stringify(notesList))
  }, [notesList])

  const handleClickAdd = useCallback((e) => {
    setNotesList(prev => textTitle !== '' && textDetails !== '' ? [...prev, { id: uuidv4(), title: textTitle, details: textDetails, isOpenEdit: false }] : prev)
    setTextTitle('')
    setTextDetails('')
  }, [textTitle, textDetails])

  const handleClickEdit = useCallback((id) => {
    setNotesList(prev => prev.map(note => note.id === id ? { ...note, isOpenEdit: true } : note))
  }, [])

  const handleClickDelete = useCallback((id) => {
    setNotesList(prev => prev.filter(note => note.id !== id))
  }, [])

  const handleTextTitleChange = useCallback((e) => {
    setTextTitle(e.target.value)
  }, [])

  const handleTextDetailsChange = useCallback((e) => {
    setTextDetails(e.target.value)
  }, [])

  return (
    <div className="after:fixed after:bg-[url('https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] after:bg-no-repeat after:bg-cover after:z-[-1] after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-black opacity-90">
      <div className="flex-col align-center max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div></div>
          <Link className="" to="/loginForm">
            <button
              className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-[16px] border-4 text-white rounded font-bold px-[8px] py-[8px] mt-[16px] mx-[16px]"
              type="button"
            >
              Logout
            </button>
          </Link>
        </div>
        <h2 className="text-teal-600 text-[36px] font-bold text-center mb-[16px] mt-[4px] mx-auto">
          WELCOME TO NOTEAPP
        </h2>
        <NotesList
          notesList={notesList}
          handleClickEdit={handleClickEdit}
          handleClickDelete={handleClickDelete}
          handleTextTitleChange={handleTextTitleChange}
          handleTextDetailsChange={handleTextDetailsChange}
          textTitle={textTitle}
          textDetails={textDetails}
          setTextTitle={setTextTitle}
          setTextDetails={setTextDetails}
          setNotesList={setNotesList}
        />
      </div>
      <button
        className="w-[60px] h-[60px] bg-yellow-500 hover:bg-yellow-600 border-yellow-500 flex justify-center items-center text-white rounded-[100%] text-[30px] shadow-[2px 5px rgba(0, 0, 0, 0.25)] fixed right-[20px] bottom-[28px] md:right-[40px] md:bottom-[40px] leading-[30px] z-10 hover:rotate-90 hover:duration-300"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <RiAddLine />
      </button>
      {isOpen &&
        <Modal
          setIsOpen={setIsOpen}
          handleClickAdd={handleClickAdd}
          handleTextTitleChange={handleTextTitleChange}
          handleTextDetailsChange={handleTextDetailsChange}
          textTitle={textTitle}
          textDetails={textDetails}
        />
      }
    </div>
  );
}


export default Home
