import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductPage from "./Pages/Product";
import RecentListPage from "./Pages/RecentList";
import { Container } from "./Styles/globalStyles";
import GlobalStyle from "./Styles/globalStyles";

let interval;

class App extends React.Component {
  componentDidMount() {
    interval = setInterval(() => {
      this.checkTheTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  checkTheTime = () => {
    const midnight = "00:00:00";
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let currentTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;

    if (currentTime === midnight) localStorage.removeItem("recentList");
  };

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/recentList'></Redirect>
            </Route>
            <Route path='/product' component={ProductPage} />
            <Route path='/recentList' component={RecentListPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
