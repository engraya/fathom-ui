import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Dialog, DialogTrigger, DialogContent } from "./Dialog";

function Example() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent title="Confirm deletion" description="This cannot be undone.">
        <p>Dialog body content.</p>
      </DialogContent>
    </Dialog>
  );
}

describe("Dialog", () => {
  it("is closed until the trigger is activated", () => {
    render(<Example />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens on trigger click with an accessible name", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAccessibleName("Confirm deletion");
    expect(screen.getByText("Dialog body content.")).toBeInTheDocument();
  });

  it("closes via the close button", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByRole("dialog");
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });

  it("closes on Escape", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });

  it("has no accessibility violations when open", async () => {
    const { baseElement } = render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByRole("dialog");
    expect(await axe(baseElement)).toHaveNoViolations();
  });
});
