import { convertTimeDate } from "@/utils/convertTimeDate";
import React from "react";

const EventDateTime = ({ datetime }: { datetime: string }) => {
  const {
    date,
    time: { WAT, BST },
  } = convertTimeDate(datetime);

  return (
    <p className="text-center mt-3 py-5 text-lg">
      <span> Sign up to join us on </span>
      <span className="font-medium">{date}</span>
      {" at "}
      <span className="font-medium">{WAT}</span>
      {` | `}
      <span className="font-medium">{BST}</span>.
    </p>
  );
};

export default EventDateTime;
