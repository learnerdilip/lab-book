import moment from "moment";

export const dateFormat = date => {
  console.log(typeof date);
  return moment(date).format("D MMMM");
};
