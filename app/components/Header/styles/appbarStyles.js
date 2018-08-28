export const appbarStyles = theme => ({
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute"
  },
  appBarShift: {
    width: `calc(100% - ${theme.navDrawerWidth}px)`
  },
  "appBarShift-left": {
    marginLeft: theme.navDrawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  }
});
