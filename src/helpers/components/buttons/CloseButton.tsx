//Default imports
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

// Custom imports
import { close_button } from "@/assets/css/styles";
import { ButtonSchema } from "@/utils/schemas/ComponentsSchema";

// Main function
export default function CloseButton(props: ButtonSchema) {
  // Props
  const { css, ...rest } = props;

  // Render
  return <AiOutlineClose className={css ?? close_button} {...rest} />;
}
