import { createContext, useState } from "react";

export const Context = createContext();

export function CounterProvider({ children }) {
const [count, setCount] = useState(0);

return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
}
