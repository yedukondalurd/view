/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import MainPage from "containers/MainPage/Loadable";
import MapPage from "containers/MapPage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - View" defaultTitle="View">
        <meta name="description" content="View application" />
      </Helmet>
      <MainPage>
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </MainPage>
    </AppWrapper>
  );
}
