import React from "react";
import { Container, Grid } from "@material-ui/core";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/porfolio/Portfolio";

import Resume from "./components/resume/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import'./App.css';

function App() {
  return (
    <Container className={'top_60'} >
      <Grid container spacing={3} >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
         
        >
         <Profile/>
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/">
              <Resume />
            </Route>
            </Switch>
            
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
