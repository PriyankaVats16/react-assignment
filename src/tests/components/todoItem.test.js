import { shallow } from "enzyme";
import TodoItem from "/src/components/todoItem";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
const props = {
  todo: jest.fn(),
  removeTodo: jest.fn(),
  updatedTodos: jest.fn()
};
describe("TodoItem", () => {
  it("should call removeTodo prop when delete is clicked", () => {
    const component = shallow(<TodoItem {...props} />);
    component.find("button#delete-button").simulate("click");
    expect(component.find("button#delete-button")).toHaveLength(1);
    expect(props.removeTodo).toHaveBeenCalled();
  });

  it("should show submit edit when edit is clicked", () => {
    const component = shallow(<TodoItem {...props} />);
    component.find("button#edit-button").simulate("click");
    expect(component.find("button#submit-edit-button")).toHaveLength(1);
  });

  it("should show call updateTodo prop when submit  edit is clicked", () => {
    const component = shallow(<TodoItem {...props} />);
    component.find("button#edit-button").simulate("click");
    expect(component.find("button#submit-edit-button")).toHaveLength(1);
    component.find("button#submit-edit-button").simulate("click");
    expect(props.updatedTodos).toHaveBeenCalled();
  });
});
