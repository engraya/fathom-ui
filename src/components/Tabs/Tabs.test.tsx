import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

function Example() {
  return (
    <Tabs defaultValue="a">
      <TabsList aria-label="Sections">
        <TabsTrigger value="a">First</TabsTrigger>
        <TabsTrigger value="b">Second</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Panel A</TabsContent>
      <TabsContent value="b">Panel B</TabsContent>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("shows only the default panel", () => {
    render(<Example />);
    expect(screen.getByText("Panel A")).toBeVisible();
    expect(screen.queryByText("Panel B")).not.toBeInTheDocument();
  });

  it("switches panels when a tab is clicked", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("tab", { name: "Second" }));
    expect(screen.getByText("Panel B")).toBeVisible();
    expect(screen.queryByText("Panel A")).not.toBeInTheDocument();
  });

  it("moves selection with the arrow keys", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("tab", { name: "First" }));
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Second" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Example />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
