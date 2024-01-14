export const styles = {
  button: {
    width: "10rem",
  },
  widgetContainer: {
    background: "#E887C9",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  widgetBox: {
    position: "relative",
    height: {
      md: "350px",
      sm: "500px",
    },
    alignSelf: "center",
    p: 5,
    width: "100%",
  },
  WidgetIcon: {
    display: "flex",
    justifyContent: "center",
  },
  widgetActions: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    py: 5,
  },
  yesButton: {
    position: "absolute",
    ml: "-200px",
  },
  noButton: {
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    position: "absolute",
    mr: "-200px",
  },
};
