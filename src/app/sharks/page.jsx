"use client";
import { SkillsData } from "../../components/Skills/SkillsData.jsx";
import ClaimButton from "../../components/ClaimButton/ClaimButton";
import SkillsList from "../../components/Skills/SkillsList";

export default function Sharks() {
    return (
        <>
            <ClaimButton title="Claim" />
            <SkillsList list={SkillsData} />
        </>
    );
}
