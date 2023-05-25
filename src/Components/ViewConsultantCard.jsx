import { render } from "@testing-library/react";
import React from "react";

function ViewConsultantCard({
  name,
  date,
  time,
  onClick,
  specilization,
  status,
}) {
  const handleClick = () => {
    onClick();
  };

  let statusClass = "";
  let statusBackgroundClass = "";

  if (status === "Pending") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#007320]";
  } else if (status === "Approved") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#F5A624]";
  } else if (status === "Rejected") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#FF1F00]";
  } else if (status === "Removed") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#FD7373]";
  }

  return (
    <div className=" px-3 my-3" onClick={handleClick}>
      <div className="flex flex-row">
        <div className="w-2/3">
          <h3 className="font-bold">{name}</h3>
          <h3 className="font-bold text-[#8B8B8B]">{specilization}</h3>
          <h5 className="text-[#8B8B8B]">
            {date} | {time}
          </h5>
        </div>
        <div className="w-1/3 flex justify-center">
          <p
            className={`font-medium ${statusClass} ${statusBackgroundClass} h-5 px-3 py-1 flex items-center justify-center rounded-2xl text-[0.85rem]`}
          >
            {status}
          </p>
        </div>
        
      </div>
      
    </div>
  );
}

export default ViewConsultantCard;
