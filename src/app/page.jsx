"use client";
import { SkillsData } from "../components/Skills/SkillsData.jsx";
import ClaimButton from "../components/Buttons/ClaimButton.jsx";
import SkillsList from "../components/Skills/SkillsList";

export default function Sharks() {
    return (
        <section>
            <ClaimButton title="Claim" />
            <SkillsList list={SkillsData} />
        </section>
    );
}
