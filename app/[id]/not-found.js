import React from "react";

export default function NotFound() {
  const styles = {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <h1>Blog doesn't exist</h1>
    </div>
  );
}
