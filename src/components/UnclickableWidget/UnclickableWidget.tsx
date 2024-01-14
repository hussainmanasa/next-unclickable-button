import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import HeartIcon from "@/assets/heart.svg";
import { styles } from "./styles";

const UnclickableWidget = () => {
  const [title, setTitle] = useState("Will you be my Valentine ?");
  const [noBtnPosition, setNoBtnPosition] = useState<{
    top: number | "unset";
    left: number | "unset";
  }>({
    top: "unset",
    left: "unset",
  });
  const boxRef = useRef<HTMLInputElement>(null);
  const noBtnOnHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const boxRect = boxRef?.current;
    const noBtnRect = e.currentTarget.getBoundingClientRect();
    const i =
      Math.floor(
        Math.random() * ((boxRect?.clientWidth ?? 0) - noBtnRect.width)
      ) + 1;
    const j =
      Math.floor(
        Math.random() * ((boxRect?.clientHeight ?? 0) - noBtnRect.height)
      ) + 1;
    setNoBtnPosition({
      top: Math.abs(j),
      left: Math.abs(i),
    });
  };
  return (
    <Box sx={styles.widgetContainer}>
      <Paper ref={boxRef} sx={styles.widgetBox} elevation={8}>
        <Box sx={styles.WidgetIcon}>
          <Image src={HeartIcon} alt="heart"></Image>
        </Box>
        <Typography textAlign={"center"} variant="h3">
          {title}
        </Typography>
        <Box sx={styles.widgetActions}>
          <Button
            onClick={() => {
              setTitle("I Love you!!!!");
            }}
            sx={{
              ...styles.yesButton,
              ...styles.button,
            }}
            variant="contained"
          >
            Yes
          </Button>
          <Button
            onMouseEnter={noBtnOnHover}
            onClick={noBtnOnHover}
            sx={{
              ...styles.noButton,
              ...noBtnPosition,
              ...styles.button,
            }}
            variant="outlined"
          >
            No
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default UnclickableWidget;
