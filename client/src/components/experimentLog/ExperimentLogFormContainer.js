import React, { useState } from "react";
import { TextField, Button, Input } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ExperimentLogFormContainer = () => {
  const usertoken = useSelector(reduxState => reduxState.user.token);

  const params = useParams();

  const [formdata, setFormdata] = useState({
    protofiles: null,
    rawfiles: null,
    datafiles: null,
    date: new Date(2020, params.month, params.date),
    title: null,
    keywords: null,
    description: null,
    protocol: null,
    raw_data: null,
    analysis: null,
    conclusion: null
  });


  const handleFileChange = e => {
    const { name, files } = e.target;
    setFormdata(prevState => ({ ...prevState, [name]: files }));
  };

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormdata(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("date", formdata.date);
    if (formdata.protofiles) {
      for (const file of formdata.protofiles) {
        data.append("protofiles", file);
      }
    }
    if (formdata.rawfiles) {
      for (const file of formdata.rawfiles) {
        data.append("rawfiles", file);
      }
    }
    if (formdata.datafiles) {
      for (const file of formdata.datafiles) {
        data.append("datafiles", file);
      }
    }

    data.append("title", formdata.title);
    data.append("keywords", formdata.keywords);
    data.append("description", formdata.description);
    data.append("protocol", formdata.protocol);
    data.append("raw_data", formdata.raw_data);
    data.append("analysis", formdata.analysis);
    data.append("conclusion", formdata.conclusion);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${usertoken}`
      }
    };
    axios.post("http://localhost:4000/experiment", data, config).then(res => {
      console.log("****THE SERVER RESPONSE***", res);
      //
    });
  };

  return (
    <div>
      <h2>Log today's experiment here</h2>
      <form onSubmit={handleSubmit} id="experimentlogform">
        {/* <Input
          variant="standard"
          type="date"
          value={formdata.date}
          onChange={handleDateChange}
        ></Input> */}

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
        <Input
          onChange={handleFileChange}
          inputProps={{ multiple: true }}
          enctype="multipart/form-data"
          type="file"
          name="protofiles"
        ></Input>
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
        <Input
          onChange={handleFileChange}
          inputProps={{ multiple: true }}
          type="file"
          name="rawfiles"
        ></Input>
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
        <Input
          onChange={handleFileChange}
          inputProps={{ multiple: true }}
          type="file"
          name="datafiles"
        ></Input>
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
