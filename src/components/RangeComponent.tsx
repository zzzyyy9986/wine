import { Range } from "react-range";
import * as React from "react";
import { useState } from "react";
import {useStore} from "../store/store";

export const RangeComponent = () => {
    const { globalSettings, globalEnvData } = useStore();
    const [data, setData] = useState({ values: [globalSettings.settingWidth] });

  const onRangeChange = (values) => {
    setData({ values: values });
      globalSettings.settingWidth = values[0]
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
      }}
    >
      <Range
        step={1}
        min={30}
        max={100}
        values={data.values}
        onChange={(values) => {
          onRangeChange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#f6a6a6",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              height: "42px",
              width: "42px",
            }}
          >
              <img width="100" height="100" src="https://img.icons8.com/sf-ultralight/100/wine-glass.png" alt="wine-glass"/>
              <div style={{position:"absolute",width:38 + 'px',height:40*globalSettings.settingWidth/100 +'px',background:'#8c0808',top: 54 + 'px',
                  right: -28 +'px',borderTopLeftRadius:15 + 'px',borderTopRightRadius:15+'px',transformOrigin:'top',transform:'rotate(180deg)'}}>

              </div>
          </div>
        )}
      />
    </div>
  );
};
