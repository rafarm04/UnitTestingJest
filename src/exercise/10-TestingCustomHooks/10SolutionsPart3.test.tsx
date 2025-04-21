import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import useCounter from "../sharedComponent/useCounter";

function setup(props: { initialCount?: number; step?: number }) {
  const result = { current: {} as ReturnType<typeof useCounter> };

  function TestComponent() {
    result.current = useCounter(props); // use the hook with given props
    return null;
  }

  render(<TestComponent />);
  return result;
}

describe("useCounter custom hook", () => {
  test("should allow customization of the initial count", () => {
    const result = setup({ initialCount: 10 });

    expect(result.current.count).toBe(10);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(10);
  });

  test("should allow customization of the step", () => {
    const result = setup({ initialCount: 5, step: 2 });

    expect(result.current.count).toBe(5);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(7);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(5);
  });
});
