import React, { Component } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { assets } from "../assets";

const AuthWrapper = (WrappedComponents) => {
  return class AuthHOC extends Component {
    render() {
      return (
        <View>
          <ImageBackground
            style={styles.imageContainer}
            imageStyle={{ opacity: 0.04 }}
            source={assets.image_background}
          >
            <View style={[styles.container]}>
              <View style={styles.cardStyle}>
                <WrappedComponents {...this.props} />
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
  };
};
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 5,
    width: "90%",
    flexWrap: "wrap",
  },
  cardStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    width: "100%",
    alignSelf: "center",
    minHeight: "75%",
  },
});
export { AuthWrapper };
