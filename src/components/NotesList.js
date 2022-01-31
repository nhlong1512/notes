import React from 'react';
import Note from './Note'
function NotesList({ notesList, setNotesList, handleClickEdit, handleClickDelete, handleTextTitleChange, handleTextDetailsChange, textTitle, textDetails, setTextTitle, setTextDetails}) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
      {notesList.map(note => (
        <Note
          key={note.id}
          note={note}
          notesList={notesList}
          handleClickEdit={handleClickEdit}
          handleClickDelete={handleClickDelete}
          handleTextTitleChange={handleTextTitleChange}
          handleTextDetailsChange={handleTextDetailsChange}
          textTitle={textTitle}
          textDetails={textDetails}
          setTextTitle = {setTextTitle}
          setTextDetails = {setTextDetails}
          setNotesList = {setNotesList}
        />
      ))}
    </div>
  )
}
export default NotesList;