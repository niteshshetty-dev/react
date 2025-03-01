export const validateUser = (e) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "Login_data", index: e.target.options.selectedIndex }),
        1000;
    });
  };
};
