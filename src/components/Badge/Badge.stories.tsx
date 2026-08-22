import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Badge" },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "success", "warning", "danger", "info"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { variant: "neutral", children: "Draft" } };
export const Success: Story = { args: { variant: "success", children: "Paid" } };
export const Warning: Story = { args: { variant: "warning", children: "Pending" } };
export const Danger: Story = { args: { variant: "danger", children: "Failed" } };
export const Info: Story = { args: { variant: "info", children: "Beta" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="neutral">Draft</Badge>
      <Badge variant="success">Paid</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Failed</Badge>
      <Badge variant="info">Beta</Badge>
    </div>
  ),
};
