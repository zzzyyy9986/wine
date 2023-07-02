import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { IDataRow } from "./interfaces/IDataRow";
import { uuidv4 } from "./utils";
import { useStore } from "./store/store";
import { MainPage } from "./components/MainPage";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {NewChart} from "./components/NewChart";

// import { Switch } from "react-router";

const App = () => {
  const { globalEnvData } = useStore();

  return (
    <div className="App">
      {/*<MainPage />*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<NewChart/>} />
          <Route path="/leaderboard" element={<h1>sdfdsf</h1>} />
        </Routes>
      </BrowserRouter>
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
