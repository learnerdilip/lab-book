import React from "react";
import { useSelector } from "react-redux";
import FileViewer from "react-file-viewer";
import moment from "moment";
import { Button, Tooltip } from "@material-ui/core";
import { useHistory } from "react-router";

// import { CustomErrorComponent } from "custom-error";

export default function PrevExperimentLog(props) {
  console.log("---the props in prev exp comp---", props, props.match.params.id);

  const state = useSelector(reduxState => reduxState.experiments.experiments);

  const currExperiment = state.filter(
    item => item._id === props.match.params.id
  );
  const {
    date,
    title,
    keywords,
    description,
    protocol,
    raw_data,
    data_analysis,
    conclusion,
    image
  } = currExperiment[0];

  const dotIndex = image.indexOf(".");
  var res = image.substring(dotIndex + 1, image.length);
  // console.log("---the substring index-------", image.length - 3, image.length);

  const history = useHistory();
  const handleOpen = id => {
    history.push(`/log/edit/${id}`);
  };

  return (
    <div id="prevexperimentcontainer">
      <h2> Work log for {moment(date).format("DD MMMM, YYYY")}</h2>
      <Tooltip title="Edit this document">
        <Button
          onClick={() => handleOpen(props.match.params.id)}
          variant="outlined"
          color="primary"
        >
          <span role="img" aria-label="edit">
            📝
          </span>
        </Button>
      </Tooltip>
      {/* <h2>
        DATE <p></p> {dateFormat(date)}
      </h2> */}
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
      <div className="prevexperimentfield">
        <h2>RAW DATA</h2>
        <p>{raw_data}</p>
      </div>
      <div className="prevexperimentfield">
        <h2>DATA ANALYSIS</h2>
        <p>{data_analysis}</p>
      </div>
      <div className="prevexperimentfield">
        <h2>CONCLUSION</h2>
        <p>{conclusion}</p>
      </div>
      <FileViewer fileType={res} filePath={image} />
    </div>
  );
}
