import React from "react";
import { useSelector } from "react-redux";
import FileViewer from "react-file-viewer";
import { dateFormat } from "../../helperfunctions";
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
    description,
    protocol,
    raw_data,
    data_analysis,
    conclusion,
    image
  } = currExperiment[0];

  // console.log("----the curretn ITEM---", image.indexOf("."));
  const dotIndex = image.indexOf(".");
  var res = image.substring(dotIndex + 1, image.length);
  // console.log("---the substring index-------", image.length - 3, image.length);

  return (
    <div>
      <h2>THE PREV EXPERIMRNT</h2>
      <h2>DATE: {dateFormat(date)}</h2>
      <h2>TITLE: {title}</h2>
      <h2>DESCRIPTION: {description}</h2>
      <h2>PROTOCOL: {protocol}</h2>
      <h2>RAW DATA: {raw_data}</h2>
      <h2>DATA ANALYSIS: {data_analysis}</h2>
      <h2>CONCLUSION: {conclusion}</h2>
      <FileViewer fileType={res} filePath={image} />
    </div>
  );
}
