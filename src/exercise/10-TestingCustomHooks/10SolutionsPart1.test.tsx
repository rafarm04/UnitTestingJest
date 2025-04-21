import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import useCounter from "../sharedComponent/useCounter";

describe("Testing hooks with useCounter Component", () => {
  // Component using the hook
  function UseCounterHook() {
    const { count, increment, decrement } = useCounter();
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }

  afterEach(() => cleanup());

  test("initial count is 0 and buttons update the count", async () => {
    render(<UseCounterHook />);
    const user = userEvent.setup();

    expect(screen.getByRole("heading")).toHaveTextContent("Count: 0");

    await user.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByRole("heading")).toHaveTextContent("Count: 1");

    await user.click(screen.getByRole("button", { name: /decrement/i }));
    expect(screen.getByRole("heading")).toHaveTextContent("Count: 0");
  });
});
