import React from "react";

import Welcome from "../welcome/Welcome";
import Browsecat from "../browscat/Browsecat";
import Directtodeal from "../Onemoreblack/Directtodeal";
import Secblack from "../Secblack/Secblack";
import Slider from "../slider/Slider";
const Homecontaint = () => {
  return (
    <div>
      <Secblack />
      <Slider />
      <Welcome />
      <Browsecat />
      <Directtodeal />
    </div>
  );
};

export default Homecontaint;
