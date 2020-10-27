import * as React from "react";
import { AppRegistry } from "react-native";
import Routes from "./source/routing/Routes";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import { Provider } from "mobx-react";
import store from "./source/mobx/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
