import React from "react";
import { shallow } from "enzyme";
import CheckBoxInput from "../CheckBoxInput";

describe("Button", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(
        <CheckBoxInput label="checkbox test label" isChecked={true} />
      );
      expect(component).toMatchSnapshot();
    });
  });
});
