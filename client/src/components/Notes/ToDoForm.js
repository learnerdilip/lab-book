import React, { useState } from "react";
import moment from "moment";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { noteRegister } from "../../store/notes/actions";

export default function ToDoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const state = useSelector(reduxState => ({
    noteState: reduxState.notes
  }));

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(noteRegister({ text, textType: "todo" }));
    setText("");
  };

  return (
    <div className="noteslist">
      <List>
        {!state.noteState.notes && <div>Loading...</div>}
        {state.noteState.notes &&
          state.noteState.notes
            .filter(item => item.text_cat === "todo")
            .map(note => (
              <ListItem>
                <ListItemText>
                  {note.text}{" "}
                  <div>
                    {moment(note.creationDate).format("MMMM Do YYYY, hA")}
                  </div>
                </ListItemText>
              </ListItem>
            ))}
      </List>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>Add an item to your TO DO list</InputLabel>
          <Input
            label="Standard"
            type="text"
            placeholder="Enter text"
            name="text"
            onChange={handleChange}
            value={text}
          />
        </FormControl>
        <Button variant="outlined" color="primary" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
