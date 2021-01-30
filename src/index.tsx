import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { Card, Content, Title, Grid, Numbers, NewButton } from "./components";
import { GlobalStyles, theme } from "./styles";
import { register } from "./core";
import configureStore from "./core/configure-store";
import { Provider } from "react-redux";

const { persister, store } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
            <Numbers />
            <NewButton />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

register();
