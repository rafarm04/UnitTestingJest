// javascript
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Counter from "../03-ReactDom/Counter";

test("it works", () => {
  const { container } = render(<Counter />);
  // container is the div that your component has been mounted onto.

  const input = container.querySelector("input");
  fireEvent.mouseEnter(input); // fires a mouseEnter event on the input

  screen.debug(); // logs the current state of the DOM (with syntax highlighting!)
});

/*
React Testing Library has the following automatic features:
- It automatically cleans up the DOM after each test. This means that you
  don't have to worry about cleaning up the DOM after each test. This is a
  good thing!
- It automatically wraps your tests in `act`. This means that you don't
    have to worry about wrapping your tests in `act`. This is a good thing!
- It automatically provides you with a `screen` object that contains
  methods for querying the DOM. This means that you don't have to worry
  about querying the DOM. This is a good thing!
- It automatically provides you with a `fireEvent` object that contains
  methods for firing events. This means that you don't have to worry about
  firing events. This is a good thing!
*/

describe("Counter", () => {
  test("counter increments and decrements when the buttons are clicked", () => {
    // swap createRoot and root.render with React Testing Library's render
    // Note that React Testing Library's render doesn't need you to pass a `div`
    // so you only need to pass one argument. render returns an object with a
    // bunch of utilities on it. For now, let's just grab `container` which is
    // the div that React Testing Library creates for us.

    render(<Counter />);

    // instead of `div` here you'll want to use the `container` you get back
    // from React Testing Library
    const increment = screen.getByText("Increment");
    const decrement = screen.getByText("Decrement");
    const message = screen.getByText((content) =>
      content.startsWith("Counter:"),
    );

    expect(message.textContent).toBe("Counter: 0");

    // replace the next two statements with `fireEvent.click(button)`
    // note that you can remove `act` completely!
    fireEvent.click(increment);
    expect(message.textContent).toBe("Counter: 1");

    fireEvent.click(decrement);
    expect(message.textContent).toBe("Counter: 0");
  });
});
