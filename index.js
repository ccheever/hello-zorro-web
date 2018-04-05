import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.type("text/zorro-jsx");
  res.send(`
import React from 'react';
import { Text, View } from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: Expo.Constants.statusBarHeight,
          backgroundColor: '#ecf0f1',
        }}>
        <Text
          style={{
            fontSize: 28,
            margin: 24,
            textAlign: 'center',
          }}>
          Hello Zorro
        </Text>
      </View>
    );
  }
}
`);
});

let port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log("Serving Zorro app listening on port " + port)
);
