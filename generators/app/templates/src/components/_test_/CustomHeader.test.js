import React from "react";
import { shallow } from "enzyme";
import { CustomHeader } from "../../components";

describe("Button", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(
        <CustomHeader
          title={"HeaderTitle"}
          isLeft={true}
          leftIcon="menu"
          leftButtonHandler={() => {}}
          isRight={true}
          rightIcon="menu"
          rightButtonHandler={() => {}}
        />
      );
      expect(component).toMatchSnapshot();
    });
  });
});
