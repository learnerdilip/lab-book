import React from "react";
import { useSelector } from "react-redux";
import FileViewer from "react-file-viewer";
import moment from "moment";
import { Button, Tooltip } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { fileExtension } from "../../helperfunctions";

// import { CustomErrorComponent } from "custom-error";

export default function PrevExperimentLog() {
  const params = useParams();
  console.log("*****PARAMS*******", params);

  const state = useSelector(reduxState => reduxState.experiments.experiments);

  const currExperiment = state.filter(item => item._id === params.id);
  const {
    date,
    title,
    keywords,
    description,
    protocol,
    raw_data,
    data_analysis,
    conclusion,
    proto_files,
    data_files,
    raw_files
  } = currExperiment[0];

  const history = useHistory();
  const handleOpen = id => {
    history.push(`/log/edit/${id}`);
  };

  return (
    <div id="prevexperimentcontainer">
      <h2> Work log for {moment(date).format("DD MMMM, YYYY")}</h2>
      <Tooltip title="Edit this document">
        <Button
          onClick={() => handleOpen(params.id)}
          variant="outlined"
          color="primary"
        >
          <span role="img" aria-label="edit">
            📝
          </span>
        </Button>
      </Tooltip>
      <div className="prevexperimentfield">
        <h2>TITLE</h2>
        <p>{title}</p>
      </div>
      <div className="prevexperimentfield">
        <h2>KEYWORDS</h2>
        <p>{keywords}</p>
      </div>
      <div className="prevexperimentfield">
        <h2>DESCRIPTION</h2>
        <p>{description}</p>
      </div>
      <div className="prevexperimentfield">
        <h2>PROTOCOL</h2>
        <p>{protocol}</p>
      </div>
      {proto_files.map(file => (
        <FileViewer fileType={fileExtension(file)} filePath={file} />
      ))}
      <div className="prevexperimentfield">
        <h2>RAW DATA</h2>
        <p>{raw_data}</p>
      </div>
      {raw_files.map(file => (
        <FileViewer fileType={fileExtension(file)} filePath={file} />
      ))}
      <div className="prevexperimentfield">
        <h2>DATA ANALYSIS</h2>
        <p>{data_analysis}</p>
      </div>
      {data_files.map(file => (
        <FileViewer fileType={fileExtension(file)} filePath={file} />
      ))}
      <div className="prevexperimentfield">
        <h2>CONCLUSION</h2>
        <p>{conclusion}</p>
      </div>
    </div>
  );
}
