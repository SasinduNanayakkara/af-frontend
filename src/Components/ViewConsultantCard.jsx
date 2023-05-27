import React from "react";

function ViewConsultantCard({
  fname,
  lname,
  date,
  onClick,
  specilization,
  status,
  isSelected,
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
    <div className={`${ isSelected ? "bg-[#dfdede] rounded-lg pt-2 pb-2 pl-2 w-[26rem]" : ""} hover:bg-[#dfdede] cursor-pointer`} onClick={handleClick}>
      <div className="flex flex-row">
        <div className="w-2/3">
          <h3 className="font-bold">{fname}{" "}{lname}</h3>
          <h3 className="font-bold text-[#8B8B8B]">{specilization}</h3>
          <h5 className="text-[#8B8B8B]">
            {date}
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
