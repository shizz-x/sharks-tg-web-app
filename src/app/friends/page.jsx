"use client";

import BigButton from "@/components/Buttons/BigButton.jsx";
import StickyBar from "@/components/StickyBar/StickyBar.jsx";
import Soon from "@/components/Buttons/Soon.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import Image from "../../../public/airdrop.png";
import ScrollArea from "@/components/ScrollArea/ScrollArea.jsx";
import { contactList } from "@/components/List/contactList.jsx";
import { List } from "@/components/List/List.jsx";

export default function Friends() {
  return (
    <section>
      <StickyBar>
        <Soon title="You have 6 friends" />
      </StickyBar>

      <ScrollArea>
        <Banner
          // title="invite new friend"
          image={Image.src} // Use the imported image directly
        />
        <BigButton title="invite new friend" />
        <List list={contactList} />
      </ScrollArea>
    </section>
  );
}
