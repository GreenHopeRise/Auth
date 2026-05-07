import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === "Light" ? "white" : "black",
    color: theme === "Light" ? "black" : "white",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
  };
  return (
    <div>
      <div style={styles}>
        <h3>Card Component</h3>
        <p>Theme is working via Context 🚀</p>
      </div>
    </div>
  );
};

export default Card;
