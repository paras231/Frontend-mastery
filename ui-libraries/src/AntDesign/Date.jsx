import React from "react";
import { DatePicker, Space } from "antd";
import "./design.css";

const { RangePicker } = DatePicker;
const Date = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <RangePicker
        className="datebg"
        onChange={onChange}
        format="DD-MM-YYYY HH:mm"
      />
    </>
  );
};

export default Date;
