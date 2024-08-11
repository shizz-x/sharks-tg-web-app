"use client";

import StickyBar from "@/components/StickyBar/StickyBar.jsx";
import Soon from "@/components/Buttons/Soon.jsx";
import TaskList from "@/components/TaskList/TaskList.jsx";

export default function Friends() {
    return (
        <section>
            <StickyBar>
                <Soon title="Get daily reward" />
            </StickyBar>
            <TaskList />
        </section>
    );
}
