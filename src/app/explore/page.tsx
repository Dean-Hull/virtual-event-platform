"use client";

import React, { useEffect } from "react";
import UnityPlayer from "@/components/event/UnityPlayer";
import AgendaWidget from "@/components/widgets/AgendaWidget";
import { Speaker } from "@/types/speakers";
import { speakersData } from "../../../public/data/speakers";

export default function Explore() {
    const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);

    useEffect(() => {
        window.onUnityObjectSelected = (id: string) => {
            const speaker = speakersData.speakers.find(
                s => s.id.toString() === id
            );
            if (speaker) setSelectedSpeaker(speaker);
        };

        return () => {
            window.onUnityObjectSelected = null;
        };
    }, []);

    return (
        <main className="w-full min-h-screen flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto justify-center gap-4 mt-16 px-4 mb-16">
                <div className="flex flex-col items-start justify-start gap-8">
                    <AgendaWidget
                        interactive
                        selectedSpeakerId={selectedSpeaker?.id ?? null}
                        onSpeakerClick={setSelectedSpeaker}
                    />
                    <UnityPlayer />
                </div>
            </div>
        </main>
    )
}