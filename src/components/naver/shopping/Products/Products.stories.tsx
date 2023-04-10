import type { Meta, StoryObj } from "@storybook/react";
import { Products } from "./Products";

const meta = {
  title: "naver/shopping/Products",
  component: Products,
} satisfies Meta<typeof Products>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Original: Story = {
  args: {
    type: "original",
  },
};

export const Improved: Story = {
  args: {
    type: "improved",
  },
};
