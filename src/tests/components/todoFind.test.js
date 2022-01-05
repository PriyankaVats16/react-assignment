import { shallow } from "enzyme";
import TodoFind from "/src/components/todoFind";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TodoFind", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<TodoFind />);
    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
  });
  it("should search for correct value", () => {
    const props = { onSearchChange: jest.fn() };
    const component = shallow(<TodoFind {...props} />);
    component.find("input").invoke("onChange")({
      currentTarget: { value: "abc" },
      preventDefault: () => null
    });
    component.update();
    expect(props.onSearchChange).toHaveBeenCalled();
    expect(props.onSearchChange).toHaveBeenCalledWith("abc");
  });
});
