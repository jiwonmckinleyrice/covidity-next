import React from "react";
import DaumPostcode from "react-daum-postcode";

export const PostCode = ({ onAddressSelect }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onAddressSelect(fullAddress, data.sido, data.sigungu);
  };

  return <DaumPostcode onComplete={handleComplete} />;
};
