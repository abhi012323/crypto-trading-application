import { Typography, Grid } from "@mui/material";
import Button from "../../atoms/button";
import theme from "../../../theme/index";
import Avatar from "../../atoms/avatar";
import Icon from "../../atoms/icon";
import { useNavigate } from "react-router-dom";
interface Props {
  title: string;
  button1text: string;
  button2text: string;
  image: string;
  src: string;
  width: string;
  height: string;
}
const Header = ({
  title,
  button1text,
  button2text,
  image,
  src,
  width,
  height,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      bgcolor="white"
      width="100%"
      sx={{
        height: "82px",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX:2
      }}
    >
      <Grid item>
        <Typography
          variant="h6"
          sx={{
            color: `${theme.palette.textColor.highEmphasis}`,
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item sx={{ marginRight: "12px" }}>
            <Button
              text={button1text}
              buttonVariant="contained"
              type="secondary"
              onClick={() => {
                navigate("/sell");
              }}
            />
          </Grid>
          <Grid item sx={{ marginRight: "42px" }}>
            <Button
              text={button2text}
              buttonVariant="contained"
              type="primary"
              onClick={() => {
                navigate("/buy");
              }}
            />
          </Grid>
          <Grid item sx={{ marginRight: "10px" }}>
            <Avatar image={image} />
          </Grid>
          <Grid item>
            <Icon src={src} width={width} height={height} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
