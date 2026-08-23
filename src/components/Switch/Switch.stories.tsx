import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { "aria-label": "Notifications" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const On: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
      <Switch id="notify" />
      <span style={{ fontFamily: "var(--fathom-font)", fontSize: "0.9rem" }}>
        Email notifications
      </span>
    </label>
  ),
};
