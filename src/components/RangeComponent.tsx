import { Range } from "react-range";
import * as React from "react";
import { useState } from "react";

export const RangeComponent = () => {
  const [data, setData] = useState({ values: [0] });

  const onRangeChange = (values) => {
    setData({ values: values });
  };

  return (
    <div
      className="mt-3"
      style={{
        position: "absolute",
        width: "300px",
        height: "30px",
        zIndex: 999,
        right: 30 + "px",
        background: "red",
      }}
    >
      <Range
        step={1}
        min={0}
        max={100}
        values={data.values}
        onChange={(values) => {
          onRangeChange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              backgroundColor: "#999",
            }}
          />
        )}
      />
    </div>
  );
};
