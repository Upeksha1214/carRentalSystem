import React from "react";
import Login from "../pages/Home";
import CarManage from "../pages/admin/carManage/carManage";

import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import DriverAdd from "../pages/admin/driverManage/driverManage";





 function App() {
  return (

      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Login data={{customerId : 'C-001'}}/>}/>
        <Route path="/manageCar" element={<CarManage/>} />
        <Route path="/manageDriver" element={<DriverAdd/>} />
       </Routes>
      </BrowserRouter>

  );
}

export default App;
