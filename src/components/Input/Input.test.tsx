import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Input } from "./Input";

describe("Input", () => {
  it("accepts typed text", async () => {
    render(<Input aria-label="Email" />);
    const input = screen.getByLabelText("Email");
    await userEvent.type(input, "hi@example.com");
    expect(input).toHaveValue("hi@example.com");
  });

  it("sets aria-invalid when invalid", () => {
    render(<Input aria-label="Email" invalid />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass("fathom-input--invalid");
  });

  it("is not invalid by default", () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByLabelText("Email")).not.toHaveAttribute("aria-invalid");
  });

  it("can be disabled", () => {
    render(<Input aria-label="Email" disabled />);
    expect(screen.getByLabelText("Email")).toBeDisabled();
  });

  it("has no accessibility violations with an associated label", async () => {
    const { container } = render(
      <>
        <label htmlFor="email">Email</label>
        <Input id="email" />
      </>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
