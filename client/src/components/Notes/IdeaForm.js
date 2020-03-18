import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

export default function IdeaForm() {
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
      <List>
        {notes.map(note => (
          <ListItem button>
            <ListItemText>
              {note} <div>{"date"}</div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
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

        <Button variant="contained" color="primary" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
