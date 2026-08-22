import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "you@example.com", "aria-label": "Email" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Invalid: Story = { args: { invalid: true, defaultValue: "not-an-email" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Locked" } };

export const WithLabel: Story = {
  render: () => (
    <label style={{ display: "grid", gap: "0.35rem", maxWidth: "20rem" }}>
      <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Email</span>
      <Input type="email" placeholder="you@example.com" />
    </label>
  ),
};
