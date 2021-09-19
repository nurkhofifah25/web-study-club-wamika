import { Topbar } from "./component/topbar/Topbar";
import { Intro } from "./component/intro/Intro";
import Testimonial from "./component/testimonial/Testimonial";

import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Testimonial/>
      </div>
    </div>
  );
}

export default App;
