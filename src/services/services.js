export const loginUser = (username, password) => {
    if (username === "Admin" && password === "12345") {
      return true;
    } else {
      return false;
    }
  };