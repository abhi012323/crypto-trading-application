import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from ".";

export default {
  title: "molecules/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const primary = Template.bind({});
primary.args = {
  footerArray: ["Dashboard", "Careers", "Legal & Privacy", "© 2021 Minet"],
};
