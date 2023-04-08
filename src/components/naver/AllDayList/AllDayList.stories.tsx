import type { Meta, StoryObj } from "@storybook/react";
import { AllDayList } from "./AllDayList";

const meta = {
  title: "naver/AllDayList",
  component: AllDayList,
} satisfies Meta<typeof AllDayList>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 나오나
 */

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
