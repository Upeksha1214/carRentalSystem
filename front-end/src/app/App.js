import React from "react";
import Login from "../pages/Home";
import CarManage from "../pages/admin/carManage/carManage";

import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import DriverSchedule from "../pages/admin/driverShedule/driverSchedule";
import ManageDriver from "../pages/admin/driverManage/ManageDriver";







 function App() {
  return (

      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Login data={{customerId : 'C-001'}}/>}/>
        <Route path="/manageCar" element={<CarManage/>} />
        <Route path="/manageDriverShedule" element={<DriverSchedule/>} />
        <Route path="/manageDriver" element={<ManageDriver/>} />



       </Routes>
      </BrowserRouter>

  );
}

export default App;
