"use client";
import { contactList } from "../../components/List/contactList.jsx";
import { List } from "../../components/List/List.jsx";
import Place from "../../components/Buttons/Place.jsx";
import StickyBar from "../../components/StickyBar/StickyBar.jsx";
import ScrollArea from "../../components/ScrollArea/ScrollArea.jsx";
export default function Top() {
    return (
        <section>
            <StickyBar>
                <Place title="Claim" />
            </StickyBar>

            <ScrollArea>
                <List list={contactList} />
            </ScrollArea>
        </section>
    );
}
