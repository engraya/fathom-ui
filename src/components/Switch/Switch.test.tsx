import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders as a switch that is off by default", () => {
    render(<Switch aria-label="Wi-Fi" />);
    expect(screen.getByRole("switch", { name: "Wi-Fi" })).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("toggles on click and reports the change", async () => {
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Wi-Fi" onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("honors defaultChecked", () => {
    render(<Switch aria-label="Wi-Fi" defaultChecked />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("can be disabled", () => {
    render(<Switch aria-label="Wi-Fi" disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("has no accessibility violations when labelled", async () => {
    // A role="switch" button takes its name from aria-label(ledby), not <label for>.
    const { container } = render(
      <>
        <span id="wifi-label">Wi-Fi</span>
        <Switch aria-labelledby="wifi-label" />
      </>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
