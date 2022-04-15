import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Container, View, Box } from "native-base";
import { assets } from "../assets";

const AuthWrapper = (WrappedComponents) => {
  return class AuthHOC extends Component {
    render() {
      return (
        <Box>
          <ImageBackground
            style={styles.imageContainer}
            imageStyle={{ opacity: 0.04 }}
            source={assets.image_background}
          >
            <Container style={[styles.container]}>
              <View style={styles.cardStyle}>
                <WrappedComponents {...this.props} />
              </View>
            </Container>
          </ImageBackground>
        </Box>
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
