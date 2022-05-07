import React from "react";

import Welcome from "../welcome/Welcome";
import Browsecat from "../browscat/Browsecat";
import Directtodeal from "../Onemoreblack/Directtodeal";
import Slider from "../slider/Slider";
const Homecontaint = () => {
  return (
    <div>
      <Slider />
      <Welcome />
      <Browsecat />
      <Directtodeal />
    </div>
  );
};

export default Homecontaint;
