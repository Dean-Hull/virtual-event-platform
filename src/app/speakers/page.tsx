"use client";

import { SpeakerCard } from "@/components/cards/InnovatorCard";
import innovatorsData from "../../../public/data/speakers";

export default function Innovators() {
    return (
        <main className="w-full h-full bg-slate-100 flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mt-16 px-4 mb-16">
                {innovatorsData.speakers.map((speaker) => (
                    <div key={speaker.id}>
                        <SpeakerCard speaker={speaker} />
                    </div>
                ))}
            </div>
        </main>
    );
}