import { renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import useCounter from "../sharedComponent/useCounter";

describe("useCounter custom hook", () => {
  test("should allow customization of the initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));

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
    const { result } = renderHook(() =>
      useCounter({ initialCount: 5, step: 2 }),
    );

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
