import AvatarComp from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import avatar from "../../../assets/images/avatar.png";
export default {
  title: "Atoms/Avatar",
  component: AvatarComp,
} as ComponentMeta<typeof AvatarComp>;

const AvatarTemplate: ComponentStory<typeof AvatarComp> = (args: any) => (
  <AvatarComp {...args} />
);

export const primaryAvatar = AvatarTemplate.bind({});
primaryAvatar.args = {
  image: avatar,
};
