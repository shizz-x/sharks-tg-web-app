"use client";

import SkillsItem from "../../../components/Skills/SkillsItem.jsx";
import Image from "../../../../public/skills/Skill1.png";
import BigButton from "../../../components/Buttons/BigButton.jsx";
import Sect from "../../../components/Blocks/Sect.jsx";
export default function SkillOne() {
  return (
    <Sect>
      <SkillsItem title="Brand boost" image={Image.src} />
      <BigButton title="invite new friend" />
    </Sect>
  );
}
