import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogClose, DialogContent } from "./Dialog";
import { Button } from "../Button";

const meta = {
  title: "Components/Dialog",
  component: DialogContent,
  tags: ["autodocs"],
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // `render` supplies the full composition; args satisfy the required title prop.
  args: { title: "Delete project?" },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent
        title="Delete project?"
        description="This permanently removes the project and all of its data."
      >
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1.25rem" }}>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="danger">Delete</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  ),
};
