import React from "react";
import { createPortal } from "react-dom";

export default function Demo10_portal({ show, onClose, children }) {
  if (!show) return null;

  // return (
  //   <div
  //     style={{
  //       position: "absolute",
  //       top: 0,
  //       left: 0,
  //       width: "100vw",
  //       height: "100vh",
  //       background: "rgba(0,0,0,0.5)",
  //       zIndex: 1,
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //     onClick={onClose}
  //   >
  //     <div
  //       style={{ background: "#fff", padding: 100, borderRadius: 8 }}
  //       onClick={(e) => e.stopPropagation()}
  //     >
  //       {children}
  //     </div>
  //   </div>
  // );

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{ background: "#fff", padding: 100, borderRadius: 8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
