import moment from "moment";

export const dateFormat = date => {
  console.log(typeof date);
  return moment(date).format("D MMMM");
};

export const fileExtension = file => {
  const dotIndex = file.indexOf(".");
  return file.substring(dotIndex + 1, file.length);
};
