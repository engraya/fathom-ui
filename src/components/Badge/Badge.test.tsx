import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders its content", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("defaults to the neutral variant", () => {
    render(<Badge>Draft</Badge>);
    expect(screen.getByText("Draft")).toHaveClass("fathom-badge", "fathom-badge--neutral");
  });

  it("applies the requested variant", () => {
    render(<Badge variant="success">Paid</Badge>);
    expect(screen.getByText("Paid")).toHaveClass("fathom-badge--success");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Badge variant="info">Info</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
