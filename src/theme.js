export const theme = {
  colors: {
    accentColor: "#A63A50",
    buttonsColor: "#FDAD6D",
    titleColor: "#011936",
    textColor: "#43607C",
    additionalText: "#fff",
  },
  fontSizes: {
    title: "35px",
    text: "16px",
    buttonsText: "14px",
  },
  shadows: {
    cupcakesCard: "0px 2px 5px 0px rgba(67, 96, 124, 0.15)",
    base: "0px 2px 10px 0px rgba(67, 96, 124, 0.25)",
  },
  animations: {
    cubicBeizer: ".17,.67,.83,.67",
    delay: `500ms cubic-beizer(.17,.67,.83,.67})`,
  },
  spacings: (value) => `${4 * value}px`,
};
