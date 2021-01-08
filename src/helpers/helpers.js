export const calcAverage = (movieAverage) => {
  if (movieAverage >= 8) {
    return "green";
  } else if (movieAverage >= 5) {
    return "orange";
  } else {
    return "red";
  }
};
