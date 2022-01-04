import { shallow } from "enzyme";
import TodoFind from "/src/components/todoFind";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TodoFind", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<TodoFind />);
    expect(component).toMatchSnapshot();
  });
});
