"use client";

import React, { useEffect } from "react";
import UnityPlayer from "@/components/event/UnityPlayer";
import AgendaWidget from "@/components/widgets/AgendaWidget";
import { Speaker } from "@/types/speakers";
import { speakersData } from "../../../public/data/speakers";
import { UnitySpeakerCard } from "@/components/cards/UnitySpeakerCard";
import { Separator } from "@/components/ui/separator";

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

    const speakers = speakersData.speakers;
    const speakerCount = speakers.length;
    const sessionCount = speakers.length;

    return (
        <main className="w-full min-h-screen flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto justify-center gap-4 mt-16 px-4 mb-16">
                <div className="flex flex-col items-start justify-start gap-8">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-2 flex flex-col gap-2">
                            <h2 className="text-xs font-semibold tracking-widest uppercase">Agenda</h2>
                            <AgendaWidget
                                interactive
                                selectedSpeakerId={selectedSpeaker?.id ?? null}
                                onSpeakerClick={(speaker) => {
                                    setSelectedSpeaker(speaker);
                                    if (window.unityInstance) {
                                        window.unityInstance.SendMessage(
                                            "SelectionManager",
                                            "Select",
                                            speaker.id.toString()
                                        );
                                        console.log("Sending selection to Unity:", speaker.id);
                                    }
                                }}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xs font-semibold tracking-widest uppercase">Pitch Overview</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { label: "Speakers", value: speakerCount },
                                    { label: "Sessions", value: sessionCount },
                                ].map(({ label, value }) => (
                                    <div key={label} className="bg-white border border-slate-200 rounded-sm p-3 flex flex-col gap-1">
                                        <p className="text-xs font-semibold uppercase tracking-widest">{label}</p>
                                        <p className="text-xl font-semibold">{value}</p>
                                    </div>
                                ))}
                            </div>
                            {selectedSpeaker ? (
                                <div className="w-full bg-white border border-slate-200 rounded-sm divide-y divide-slate-100">
                                    <div className="flex flex-col gap-3 p-4 text-sm">
                                        <div>
                                            <p className="font-semibold text-xs uppercase tracking-widest mb-1">Headline</p>
                                            <p>{selectedSpeaker.headline}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs uppercase tracking-widest mb-1">Key Stat</p>
                                            <p>{selectedSpeaker.keyStat}</p>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex flex-col gap-3 p-4 text-sm">
                                        <div>
                                            <p className="font-semibold text-xs uppercase tracking-widest mb-1">Problem</p>
                                            <p>{selectedSpeaker.problem}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs uppercase tracking-widest mb-1">Solution</p>
                                            <p>{selectedSpeaker.solution}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs uppercase tracking-widest mb-1">Ask</p>
                                            <p>{selectedSpeaker.ask}</p>
                                        </div>
                                    </div>
                                    <Separator />

                                    <div className="p-4 text-sm">
                                        <p className="font-semibold text-xs uppercase tracking-widest mb-1">Contact</p>
                                        <p className="font-medium">{selectedSpeaker.contactDetails.name}</p>
                                        <p className="text-muted-foreground">{selectedSpeaker.contactDetails.title}</p>
                                        <p className="text-muted-foreground">{selectedSpeaker.contactDetails.email}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full min-h-48 bg-white border border-slate-200 rounded-sm flex items-center justify-center p-6">
                                    <p className="text-sm text-center">
                                        Select a speaker to view pitch details.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <h1 className="text-sm font-semibold text-black tracking-widest uppercase">
                        Click a booth to explore speaker information in our virtual environment
                    </h1>
                    <div className="relative w-full aspect-video">
                        <UnityPlayer />
                        <UnitySpeakerCard speaker={selectedSpeaker} />
                    </div>
                </div>
            </div>
        </main>
    )
}