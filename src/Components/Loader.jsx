import React, { CSSProperties } from "react";
import { PropagateLoader } from "react-spinners";

function Loader() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const color = "#00FFFF";
  const loading = true;
  return (
    <>
      <PropagateLoader
        color={color}
        loading={loading}
        size={150}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default Loader;
