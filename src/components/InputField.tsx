import React from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="inputBox"
      ></input>
      <button className="inputSubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
