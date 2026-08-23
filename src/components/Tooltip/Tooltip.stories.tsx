import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: "Saves your changes and publishes", children: "Publish" },
  render: () => (
    <div style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
      <Tooltip content="Saves your changes and publishes">
        <Button>Publish</Button>
      </Tooltip>
    </div>
  ),
};

export const Sides: Story = {
  args: { content: "Tooltip", children: "Hover me" },
  render: () => (
    <div style={{ display: "flex", gap: "1.5rem", padding: "4rem", justifyContent: "center" }}>
      <Tooltip content="Top" side="top"><Button variant="secondary">Top</Button></Tooltip>
      <Tooltip content="Right" side="right"><Button variant="secondary">Right</Button></Tooltip>
      <Tooltip content="Bottom" side="bottom"><Button variant="secondary">Bottom</Button></Tooltip>
      <Tooltip content="Left" side="left"><Button variant="secondary">Left</Button></Tooltip>
    </div>
  ),
};
