import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import CreatorDetail from "../pages/CreatorDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import SongDetail from "../pages/SongDetail";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={10}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/songs" component={ProductList} />
            <Route exact path="/songs/:name" component={SongDetail} />
            <Route exact path="/creators/:name" component={CreatorDetail} />
            <Route path="/cart" component={CartDetail} />,
            <Route path="/song/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}