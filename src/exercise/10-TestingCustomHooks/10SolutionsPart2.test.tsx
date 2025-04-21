import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import useCounter from "../sharedComponent/useCounter";

// Step 1: We'll store the result of the hook here
let result: ReturnType<typeof useCounter>;

// Step 2: The test component
function TestComponent(props: { initialCount?: number; step?: number }) {
  result = useCounter(props);
  return null; // no UI needed
}

describe("Testing useCounter directly with a TestComponent", () => {
  test("initial count and step behavior", () => {
    // Render with props
    render(<TestComponent initialCount={5} step={2} />);

    // Check initial state
    expect(result.count).toBe(5);

    // Simulate hook updates
    act(() => {
      result.increment();
    });
    expect(result.count).toBe(7); // 5 + 2

    act(() => {
      result.decrement();
    });
    expect(result.count).toBe(5); // 7 - 2
  });
});
