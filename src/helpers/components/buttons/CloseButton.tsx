//Default imports
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

// Custom imports
import { ButtonSchema } from "@/utils/schemas/CommonSchema";
import { close_button } from "@/assets/css/styles";

// Main function
export default function CloseButton(props: ButtonSchema) {
  // Props
  const { ...rest } = props;

  // Render
  return <AiOutlineClose className={close_button} {...rest} />;
}
