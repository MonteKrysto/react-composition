import React from "react";
import { Player } from "../../../components";
import "../../tailwind.output.css";

export default {
  title: "Compound Components/Player",
  component: Player,
};

const Template = (args, { argTypes }) => {
  return (
    <Player>
      <Player.Image src='' />
      <Player.Description title='Test Stream' subTitle='This is a test stream' />
      <Player.Favorite />
      <Player.Start />
      <Player.Rewind />
      <Player.Pause />
      <Player.Forward />
      <Player.Overlay />
      <Player.End />
    </Player>
  );
};

export const Default = Template.bind({});
Default.args = {
  data: "test",
};
