import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  OutlinedInput,
  Button,
  Input
} from "@material-ui/core";

export default function experimentLogFormContainer() {
  const handleChange = event => {};

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Log today's experiment here</h2>
      <form onSubmit={handleSubmit} id="experimentlogform">
        <Input variant="standard" type="date"></Input>
        <TextField
          label="Title"
          helperText=" "
          fullWidth
          variant="filled"
          type="text"
        />
        <TextField
          label="Aim/Description"
          helperText=" "
          fullWidth
          multiline
          rows="3"
          variant="filled"
          type="text"
        />
        <TextField
          label="Protocol"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          variant="filled"
          type="text"
        />
        <TextField
          label="Raw Data"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          variant="filled"
          type="text"
        />
        <TextField
          label="Data Analysis"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          type="text"
          variant="filled"
        />

        <TextField
          label="Conclusion/Comments"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          type="text"
          variant="filled"
        />
        <Input type="file"></Input>
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
