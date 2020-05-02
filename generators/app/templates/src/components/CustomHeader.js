import React from "react";
import { Header, Left, Right, Button, Icon, Body, Title } from "native-base";
import PropTypes from "prop-types";

const CustomHeader = ({
  title,
  isLeft = true,
  leftIcon = "menu",
  leftButtonHandler,
  isRight,
  rightIcon = "menu",
  rightButtonHandler,
}) => (
  <Header style={{ justifyContent: "space-between" }}>
    <Left>
      {isLeft && (
        <Button transparent onPress={() => leftButtonHandler()}>
          <Icon name={leftIcon} />
        </Button>
      )}
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      <Button transparent onPress={() => rightButtonHandler()}>
        {isRight && <Icon name={rightIcon} />}
      </Button>
    </Right>
  </Header>
);

export { CustomHeader };
CustomHeader.propTypes = {
  title: PropTypes.string,
  isLeft: PropTypes.bool,
  leftIcon: PropTypes.string,
  leftButtonHandler: PropTypes.func,
  isRight: PropTypes.bool,
  rightIcon: PropTypes.string,
  rightButtonHandler: PropTypes.func,
};
