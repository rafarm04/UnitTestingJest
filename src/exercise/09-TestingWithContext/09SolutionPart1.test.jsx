import React from "react";
import EasyButton from "../sharedComponent/EasyButton";
import { ThemeProvider } from "../sharedComponent/theme";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing different themes based on Theme context", () => {
  function LightThemeWrapper({ children }) {
    return <ThemeProvider initialTheme="light">{children}</ThemeProvider>;
  }
  function DarkThemeWrapper({ children }) {
    return <ThemeProvider initialTheme="dark">{children}</ThemeProvider>;
  }
  test("dummy test", () => {
    expect(true).toBe(true);
  });

  test("Render light theme", () => {
    const { rerender } = render(<EasyButton />, {
      wrapper: LightThemeWrapper,
    });

    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ background: "white", color: "black" });
  });
  test("Render dark theme", () => {
    const { rerender } = render(<EasyButton />, {
      wrapper: DarkThemeWrapper,
    });

    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ background: "black", color: "white" });
  });
  test("can switch from light to dark theme", () => {
    const { unmount } = render(<EasyButton />, {
      wrapper: LightThemeWrapper,
    });

    let button = screen.getByRole("button");
    expect(button).toHaveStyle({ background: "white", color: "black" });

    // Clean last render
    unmount();

    // Render again but with dark theme
    render(<EasyButton />, { wrapper: DarkThemeWrapper });

    button = screen.getByRole("button");
    expect(button).toHaveStyle({ background: "black", color: "white" });
  });
});
