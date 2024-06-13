export const Theme = {
  colors: {
    primary: "#FD7E3E",
    secondary: "white",
    lightOrange: "#FFDFCE",
    avatar: {
      active: {
        dot: "#FFC542",
        circle: "#FD7E3E",
        name:"white"
      },
      notActive: {
        dot: "black",
        circle: "white",
        name:"#36435A"
      },
    },
    syncIndicator: {
      success: "#3ED598",
      warning: "#FFC542",
      error: "red",
    },
    screenBackground:"rgb(234, 234, 234)",
    text:{
      primary:"#36435A",
      secondary: "white"
    },
    input:{
      borderColor:"#36435A72"
    }
  },
} as const;
