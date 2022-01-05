import { shallow } from "enzyme";
import TodoForm from "/src/components/todoForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TodoFind", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<TodoForm />);
    expect(component).toHaveLength(1);
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("button")).toHaveLength(1);
  });
  it("should add correct value", () => {
    const props = { addTodo: jest.fn() };
    const component = shallow(<TodoForm {...props} />);
    component.find("input").invoke("onChange")({
      currentTarget: { value: "task" },
      preventDefault: () => null
    });
    component.update();
    component.find("form").invoke("onSubmit")({ preventDefault: () => null });
    expect(props.addTodo).toHaveBeenCalled();
    expect(props.addTodo).toHaveBeenCalledWith("task");
  });
});
