"use client";

import BigButton from "@/components/Buttons/BigButton.jsx";
import StickyBar from "@/components/StickyBar/StickyBar.jsx";
import Soon from "@/components/Buttons/Soon.jsx";
import Sect from "@/components/Blocks/Sect.jsx";

export default function Airdrop() {
  return (
    <Sect>
      <StickyBar>
        <Soon title="Comming November" />
      </StickyBar>
      <BigButton title="invite new friend" />
    </Sect>
  );
}
