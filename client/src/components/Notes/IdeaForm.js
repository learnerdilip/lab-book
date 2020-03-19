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

export default function IdeaForm() {
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
    dispatch(noteRegister({ text, textType: "idea" }));
    setText("");
  };

  return (
    <div>
      <List>
        {state.noteState.notes
          .filter(item => item.text_cat === "idea")
          .map(note => (
            <ListItem button>
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
