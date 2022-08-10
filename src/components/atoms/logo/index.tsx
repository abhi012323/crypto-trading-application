import React from "react";

interface LogoIcon {
  src: string;
  width: string;
  height: string;
}
const Logo = (props: LogoIcon) => {
  return (
    <>
      <img
        data-testid="logo"
        src={props.src}
        width={props.width}
        height={props.height}
      />
    </>
  );
};

export default Logo;
