import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Home from "./Components/Home";
import Resume from "./Components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/hello/time" component={Time} />
      <Route path="/hello/time/resume" component={Resume} />
    </BrowserRouter>
    // <BrowserRouter>
    //   <Link to="" style={{ margin: "0 5px" }}>
    //     홈
    //   </Link>
    //   <Link to="/time" style={{ margin: "0 5px" }}>
    //     현재시간
    //   </Link>
    //   <Link to="/hello" style={{ margin: "0 5px" }}>
    //     안녕
    //   </Link>
    //   <Link to="/resume" style={{ margin: "0 5px" }}>
    //     소개
    //   </Link>

    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/hello" render={() => <Hello name="개리" />} />
    //     <Route path="/time" component={Time} />
    //     <Route path="/resume" children={ResumeRouter} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
