import React ,{ useRef } from "react";
import "./style.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const input_Ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        input_Ref.current?.blur();
      }}
    >
    Enter To Do Items:
      <input
      
        ref={input_Ref}
        type="input"
        className="input"
        placeholder="Enter Something"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputField;
