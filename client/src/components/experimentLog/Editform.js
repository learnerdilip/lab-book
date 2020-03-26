import React, { useState } from "react";
import { TextField, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";

export default function Editform() {
  const params = useParams();
  const state = useSelector(reduxState => reduxState.experiments.experiments);
  const editable = state.find(item => item._id === params.id);
  // console.log("EDITABLE ITEM IS ", editable);

  const [formdata, setFormdata] = useState({
    id: editable._id,
    file: editable.image,
    date: editable.date,
    title: editable.title,
    keywords: editable.keywords,
    description: editable.description,
    protocol: editable.protocol,
    raw_data: editable.raw_data,
    analysis: editable.data_analysis,
    conclusion: editable.conclusion
  });

  const handleFileChange = e => {
    setFormdata(prevState => ({ ...prevState, file: e.target.files[0] }));
  };

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormdata(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("date", formdata.date);
    formData.append("uploadedit", formdata.file);
    formData.append("title", formdata.title);
    formData.append("keywords", formdata.keywords);
    formData.append("description", formdata.description);
    formData.append("protocol", formdata.protocol);
    formData.append("raw_data", formdata.raw_data);
    formData.append("analysis", formdata.analysis);
    formData.append("conclusion", formdata.conclusion);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .put(
        `http://localhost:4000/experimentedit?id=${params.id}`,
        formData,
        config
      )
      .then(res => console.log(res.data));
  };

  // console.log("the local state formdata---------------", formdata);

  return (
    <div>
      <form onSubmit={handleSubmit} id="experimenteditform">
        <Input
          onChange={handleFileChange}
          type="file"
          name="uploadedit"
        ></Input>
        <br />
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
          label="keywords"
          name="keywords"
          helperText=" "
          fullWidth
          variant="filled"
          type="text"
          value={formdata.keywords}
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
}
