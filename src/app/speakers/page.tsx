"use client";

import { useState } from "react";
import { SpeakerCard } from "@/components/cards/SpeakerCard";
import { speakersData } from "../../../public/data/speakers";
import { SpeakerTag } from "@/types/speakers";
import { Button } from "@/components/ui/button";

export default function Innovators() {
    const [selectedTags, setSelectedTags] = useState<string[]>([SpeakerTag.ALL]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) => {
            if (tag === SpeakerTag.ALL) {
                return [SpeakerTag.ALL];
            }

            const temp = prev.filter((item) => item !== SpeakerTag.ALL);
            if (temp.includes(tag)) {
                const next = temp.filter((item) => item !== tag);
                return next.length === 0 ? [SpeakerTag.ALL] : next;
            }
            return [...temp, tag];
        });
    };

    const filteredSpeakers = selectedTags.includes(SpeakerTag.ALL)
        ? speakersData.speakers
        : speakersData.speakers.filter((speaker) =>
            speaker.tags.some((tag) => selectedTags.includes(tag))
        );

    const allTags = Object.values(SpeakerTag);

    return (
        <main className="w-full min-h-screen flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto justify-center gap-4 mt-16 px-4 mb-16">
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-sm font-semibold text-black tracking-widest uppercase mb-4">
                        Meet the Speakers
                    </h1>
                    <p className="text-black font-light text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                { /* Filter */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {allTags.map((tag) => (
                        <Button
                            key={tag}
                            variant={selectedTags.includes(tag) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleTag(tag)}
                        >
                            {tag}
                        </Button>
                    ))}
                </div>

                { /* Speaker Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {filteredSpeakers.length > 0 ? (
                        filteredSpeakers.map((speaker) => (
                            <div key={speaker.id}>
                                <SpeakerCard speaker={speaker} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            No speakers found for the selected tags.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}