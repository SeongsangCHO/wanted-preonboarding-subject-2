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
import Header from "./Components/Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/recentList'></Redirect>
            </Route>
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/recentList' component={RecentListPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
