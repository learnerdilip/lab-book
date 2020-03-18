import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

export default function ToDoForm() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNotes(prevState => [...prevState, text]);
    setText("");
  };

  return (
    <div>
      {notes.map(note => (
        <div id="idealine">
          <p>{note}</p>
          <p>{"date"}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>ENTER YOUR IDEAS</InputLabel>
          <Input
            label="Standard"
            type="text"
            placeholder="Enter text"
            name="text"
            onChange={handleChange}
            value={text}
          />
        </FormControl>
        <Button type="submit">SUBMIT</Button>
      </form>
    </div>
  );
}
