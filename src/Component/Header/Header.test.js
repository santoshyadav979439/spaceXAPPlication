import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
configure({ adapter: new Adapter() });
describe("<Mission />", () => {
  it('should have header "paceX Launch Programs"', () => {
    const component = shallow(<Header />);
    expect(component.find("div").text()).toEqual("SpaceX Launch Programs");
  });
  it("should have h1 tag", () => {
    const component = shallow(<Header />);
    expect(component.find("h1")).toHaveLength(1);
  });
});
