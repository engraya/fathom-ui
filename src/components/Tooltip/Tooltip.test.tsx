import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("reveals its content when the trigger is focused", async () => {
    render(
      <Tooltip content="Saves your work" delayDuration={0}>
        <button>Save</button>
      </Tooltip>
    );
    await userEvent.tab();
    expect(screen.getByRole("button", { name: "Save" })).toHaveFocus();
    expect(await screen.findByRole("tooltip")).toHaveTextContent("Saves your work");
  });

  it("has no accessibility violations while open", async () => {
    const { baseElement } = render(
      <Tooltip content="Saves your work" delayDuration={0}>
        <button>Save</button>
      </Tooltip>
    );
    await userEvent.tab();
    await screen.findByRole("tooltip");
    // `region` is a page-level landmark rule; not meaningful for an isolated
    // component render where the tooltip portals to <body>.
    expect(
      await axe(baseElement, { rules: { region: { enabled: false } } })
    ).toHaveNoViolations();
  });
});
