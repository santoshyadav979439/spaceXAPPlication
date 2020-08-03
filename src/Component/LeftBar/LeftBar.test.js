import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LeftBar from "../../Component/LeftBar/LeftBar";

configure({ adapter: new Adapter() });
describe("<Mission />", () => {
  it("should have LeftBar class ", () => {
    const component = shallow(<LeftBar />);
    expect(component.find(".LeftBar")).toHaveLength(1);
  });
});
//wrap.hasClass('class') Loader wrap.contains(<div />)  wrap.is('.classname')
