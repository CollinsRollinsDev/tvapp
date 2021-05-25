import React from "react";

function Event() {
    const eventsHeader = {
        color: "white",
        textShadow:" black 1px 1px 3px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        padding: "2% 4%",
        position: "fixed",
        zIndex:"3",
        backgroundColor: "rgb(111, 111, 245)",
    }
  return (
    <div>
      <div style={eventsHeader}>
        <div className="profileIcon"></div>
        <h2>Events</h2>
        <div className="appMenu">Menu</div>
      </div>
    </div>
  );
}

export default Event;
