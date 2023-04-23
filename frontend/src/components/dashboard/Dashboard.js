import React from "react";
import Carousel from "../carousel/Carousel";
import DashSecOne from "../dashSecOne/DashSecOne";
import DashSecTwo from "../dashSecTwo/DashSecTwo";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0"  }}>
      <div>
        <Carousel />
      </div>
      <div>
        <DashSecOne></DashSecOne>
      </div>
      <div>
        <DashSecTwo></DashSecTwo>
      </div>
    </div>
  );
};

export default Dashboard;
