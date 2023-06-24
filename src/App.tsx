import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { IDataRow } from "./interfaces/IDataRow";
import { uuidv4 } from "./utils";
import { useStore } from "./store/store";
import { RangeHistory } from "./components/RangeHistory";
import { ListOfHistoryData } from "./components/ListOfHistoryData";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";

// import { Switch } from "react-router";
const App = () => {
  const { globalEnvData } = useStore();
  const addComponent = () => {
    let item: { [id: string]: IDataRow } = {
      "виноградник №2": {
        id: uuidv4(),
        coordinates: [
          [59.91174337077401, 10.750425582038146],
          [59.912, 10.756],
        ],
        history: {
          "2022-12-01": {
            temperature: 10,
            airHumidity: 20,
            windSpeed: 30,
            precipitation: 40,
          },
          "2023-01-01": {
            temperature: 30,
            airHumidity: 50,
            windSpeed: 20,
            precipitation: 11,
          },
        },
      },
    };
    globalEnvData.add("виноградник 2", item["виноградник №2"]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<h1>sdfdsf</h1>} />
          <Route path="/leaderboard" element={<h1>sdfdsf</h1>} />
        </Routes>
      </Router>
    </div>
  );
  {
    /*<BrowserRouter>*/
  }
  {
    /*  <Switch>*/
  }
  {
    /*    <Route path="/">*/
  }
  {
    /*      <div className="container-fluid">*/
  }
  {
    /*        <div className="row">*/
  }
  {
    /*          <div className="col-md-8">*/
  }
  {
    /*            <FavoritesMap />*/
  }
  {
    /*          </div>*/
  }
  {
    /*          <div className="col-md-4">{<SettingPanel />}</div>*/
  }
  {
    /*        </div>*/
  }
  {
    /*      </div>*/
  }
  {
    /*    </Route>*/
  }
  {
    /*    <Route path="/callback"></Route>*/
  }
  {
    /*  </Switch>*/
  }
  {
    /*</BrowserRouter>*/
  }
};

export default App;
