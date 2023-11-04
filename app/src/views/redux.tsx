import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
interface notes {
    addNote(note:string):void;
}

export const Redux:React.FC<notes> = ({addNote}) => {
    const [note,setNote] = React.useState("");
    const dispatch = useDispatch();
    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
        console.log(event.target.value);
    }
    const onAddNoteClick = () => {
        addNote(note);
        dispatch({type:"ADD_LANGUAGE", payload: note});
    }
    return (
      <div style={{ paddingTop: '10px' }}>
        <input type='text' onChange={updateNote} value={note} />
        <button onClick={onAddNoteClick}>
          Click me!
        </button>
        <h1>teste</h1>
      </div>
    );
  }
  export default Redux;