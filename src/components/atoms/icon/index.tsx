import React from "react";

type IconProps = {
  src: string;
  width: string;
  height: string;
};

const Icon = (props: IconProps) => {
  const { src, width, height } = props;
  return <img data-testid="icon" src={src} width={width} height={height} />;
};

export default Icon;
