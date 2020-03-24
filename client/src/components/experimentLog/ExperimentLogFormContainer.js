import React, { useState } from "react";
import { TextField, Button, Input } from "@material-ui/core";
import axios from "axios";

const ExperimentLogFormContainer = () => {
  const [formdata, setFormdata] = useState({
    file: null,
    date: null,
    title: null,
    description: null,
    protocol: null,
    raw_data: null,
    analysis: null,
    conclusion: null
  });

  const handleDateChange = e => {
    setFormdata(prevState => ({ ...prevState, date: e.target.value }));
  };

  const handleFileChange = e => {
    setFormdata(prevState => ({ ...prevState, file: e.target.files[0] }));
  };

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormdata(prevState => ({ ...prevState, [name]: value }));
  };

  const [image, setImage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("date", formdata.date);
    data.append("fileuploaded", formdata.file);
    data.append("title", formdata.title);
    data.append("description", formdata.description);
    data.append("protocol", formdata.protocol);
    data.append("raw_data", formdata.raw_data);
    data.append("analysis", formdata.analysis);
    data.append("conclusion", formdata.conclusion);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("http://localhost:4000/experiment", data, config)
      .then(res => setImage(res.data.image));
  };

  console.log("formdata--------", formdata);
  return (
    <div>
      <h2>Log today's experiment here</h2>
      <form onSubmit={handleSubmit} id="experimentlogform">
        <Input
          variant="standard"
          type="date"
          value={formdata.date}
          onChange={handleDateChange}
        ></Input>
        <Input
          onChange={handleFileChange}
          type="file"
          name="fileuploaded"
        ></Input>
        <br />
        <TextField
          label="Title"
          name="title"
          helperText=" "
          fullWidth
          variant="filled"
          type="text"
          value={formdata.title}
          onChange={handleFormChange}
        />
        <TextField
          label="Aim/Description"
          name="description"
          helperText=" "
          fullWidth
          multiline
          rows="3"
          variant="filled"
          type="text"
          value={formdata.description}
          onChange={handleFormChange}
        />
        <TextField
          label="Protocol"
          name="protocol"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          variant="filled"
          type="text"
          value={formdata.protocol}
          onChange={handleFormChange}
        />
        <TextField
          label="Raw Data"
          name="raw_data"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          variant="filled"
          type="text"
          value={formdata.raw_data}
          onChange={handleFormChange}
        />
        <TextField
          label="Data Analysis"
          name="analysis"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          type="text"
          variant="filled"
          value={formdata.analysis}
          onChange={handleFormChange}
        />
        <TextField
          label="Conclusion/Comments"
          name="conclusion"
          helperText=" "
          fullWidth
          multiline
          rows="5"
          type="text"
          variant="filled"
          value={formdata.conclusion}
          onChange={handleFormChange}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ExperimentLogFormContainer;
