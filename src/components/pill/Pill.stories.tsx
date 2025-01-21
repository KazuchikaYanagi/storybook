import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Pill, PillProps } from "./Pill";

const meta: Meta<typeof Pill> = {
  title: "Design System/core/Pill",
  component: Pill,
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      type: "string",
      defaultValue: "md",
      description: "size of the overall pill size",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Pill>;

const PillWithHook = ({ size, text }: PillProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const clickHandler = () => {
    setIsVisible(false);
  };

  return isVisible && <Pill size={size} text={text} onClick={clickHandler} />;
};

export const Primary: Story = {
  name: "React",
  storyName: "Primary Pill Story",
  args: {
    text: "React",
  },
  render: (args) => <PillWithHook {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const closeIcon = canvas.getByRole("button", { name: "&times;" });
    await userEvent.click(closeIcon);

    expect(closeIcon).toBeInTheDocument();
  },
};

// import { Meta, StoryObj } from "@storybook/react";
// import Pill from "./Pill";

// const meta = {
//   title: "Pill",
//   component: Pill,
//   args: {
//     size: "md",
//     children: "React",
//   },
//   argTypes: {
//     size: {
//       control: { type: "radio" },
//       options: ["xs", "sm", "md"],
//     },
//   },
// } satisfies Meta<typeof Pill>;

// export default meta;

// type Story = StoryObj<typeof Pill>;

// export const extraSmall: Story = {
//   args: {
//     size: "xs",
//   },
//   // argTypes: {
//   //   size: {
//   //     pillSizes,
//   //     controls: { type: "radio" },
//   //   },
//   //   onClick: {
//   //     actions: "clicked",
//   //   },
//   // },
// } satisfies Story;

// export const Small: Story = {
//   args: {
//     size: "sm",
//   },
//   // argTypes: {
//   //   size: {
//   //     pillSizes,
//   //     controls: { type: "radio" },
//   //   },
//   //   onClick: {
//   //     actions: "clicked",
//   //   },
//   // },
// } satisfies Story;

// export const Medium: Story = {
//   args: {
//     size: "md",
//   },
//   // argTypes: {
//   //   size: {
//   //     pillSizes,
//   //     controls: { type: "radio" },
//   //   },
//   //   onClick: {
//   //     actions: "clicked",
//   //   },
//   // },
// } satisfies Story;
