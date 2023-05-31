import React from "react";

export default function Titulo({ texto, cor, children }) {
  return (
    <h2 style={{ color: cor }}>
      {texto} {children}
    </h2>
  );
}
