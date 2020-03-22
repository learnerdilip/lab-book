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
        <TextField
          label="Title"
          helperText=" "
          fullWidth
          variant="outlined"
          type="text"
        />
        <TextField
          label="Aim/Description"
          helperText=" "
          fullWidth
          multiline
          rows="3"
          variant="outlined"
          type="text"
        />
        <TextField
          label="Protocol"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          variant="outlined"
          type="text"
        />
        <TextField
          label="Raw Data"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          variant="outlined"
          type="text"
        />
        <TextField
          label="Data Analysis"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          type="text"
          variant="outlined"
        />

        <TextField
          label="Conclusion/Comments"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          type="text"
          variant="outlined"
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
