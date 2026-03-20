import React from "react";
import { Button } from "antd";

const BaseButton = ({ variant, children, ...props }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "add":
        return {
          backgroundColor: "#20b532ff",
          color: "white",
          border: "1px solid #20b532ff",
        };
      case "import":
        return {
          backgroundColor: "#007bff",
          color: "white",
          border: "1px solid #007bff",
        };
      case "export":
        return {
          backgroundColor: "#007bff",
          color: "white",
          border: "1px solid #007bff",
        };
      case "resetPassword":
        return {
          outline: "1px solid #e7e4e4ff",
          color: "#292929ff",
          border: "1px solid #e7e4e4ff",
        };
      default:
        return "primary";
    }
  };
  return (
    <Button style={getVariantStyle()} {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
