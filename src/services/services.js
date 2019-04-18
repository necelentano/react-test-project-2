export const loginUser = (username, password) => {
    if (username === "Admin" && password === "12345") {
      localStorage.setItem("isLogged", true);
    } else {
      localStorage.setItem("isLogged", false);
    }
  };
  
export const logoutUser = () => {
    localStorage.setItem("isLogged", false);
  };
  