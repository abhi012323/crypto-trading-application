import { Avatar } from "@mui/material";
import React from "react";

type AvatarProps = {
  image: string;
};
const AvatarComp = (props: AvatarProps) => {
  const { image } = props;
  return <Avatar src={image} data-testid="avatar" />;
};

export default AvatarComp;
