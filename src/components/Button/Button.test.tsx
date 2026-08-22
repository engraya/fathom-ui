import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its children and defaults to type=button", () => {
    render(<Button>Save</Button>);
    const btn = screen.getByRole("button", { name: "Save" });
    expect(btn).toHaveAttribute("type", "button");
  });

  it("fires onClick", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Go" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not fire onClick when disabled", async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Go
      </Button>
    );
    await userEvent.click(screen.getByRole("button", { name: "Go" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="danger" size="lg">
        Delete
      </Button>
    );
    const btn = screen.getByRole("button", { name: "Delete" });
    expect(btn).toHaveClass("fathom-btn", "fathom-btn--danger", "fathom-btn--lg");
  });

  it("renders as its child element with asChild", () => {
    render(
      <Button asChild>
        <a href="/next">Next</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: "Next" });
    expect(link).toHaveClass("fathom-btn");
    expect(link).toHaveAttribute("href", "/next");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Button>Accessible</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
