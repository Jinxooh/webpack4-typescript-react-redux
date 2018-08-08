import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TodosActions } from '../actions/actionCreators';
import TodoList from '../components/Todos/TodoList';
import { StoreState } from '../reducers';
import { TodosItem } from '../reducers/todos';

interface Props {
  todoItems: [TodosItem];
  input: string;
}

class TodosContainer extends React.Component<Props> {
  onCreate = () => {
    const { input } = this.props;
    TodosActions.create(input);
  }

  onRemove = (id: number) => {
    TodosActions.remove(id);
  }

  onToggle = (id: number) => {
    TodosActions.toggle(id);
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    TodosActions.changeInput(value);
  }

  render() {
    const { input, todoItems } = this.props;
    const { onCreate, onRemove, onToggle, onChange } = this;
    return (
      <>
        <div>
          <Link to="/">Go to Home</Link>
        </div>
        <TodoList
          input={input}
          todoItems={todoItems}
          onCreate={onCreate}
          onRemove={onRemove}
          onToggle={onToggle}
          onChange={onChange}
        />
      </>
    );
  }
}

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems,
  }),
  () => ({}),
)(TodosContainer);
