import { Topbar } from "./component/topbar/Topbar";
import { Intro } from "./component/intro/Intro";
import Testimonial from "./component/testimonial/Testimonial";

import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Testimonial/>
      </div>
    </div>
  );
}

export default App;
