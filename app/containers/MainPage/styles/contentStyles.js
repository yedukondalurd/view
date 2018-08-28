export const contentStyles = theme => ({
  content: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: "white",
    overflow: "auto",
    // padding: 24,
    // height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      // height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
});
