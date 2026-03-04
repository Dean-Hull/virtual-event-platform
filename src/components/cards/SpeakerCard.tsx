import React from "react";
import Image from "next/image";
import { Speaker } from "@/types/speakers";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IoDocument } from "react-icons/io5";
import { DocumentsModal } from "../widgets/DocumentsModal";
import { FAKE_DOCUMENTS } from "@/types/content";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="relative flex flex-col rounded-md overflow-hidden bg-white">
            <div className="relative w-full overflow-hidden bg-blue-50 h-96">
                {speaker.thumbnail && (
                    <Image
                        src={speaker.thumbnail}
                        alt={`${speaker.name}'s profile picture`}
                        fill
                        className="object-cover object-top"
                    />
                )}
            </div>

            <div className="flex flex-col px-5 pt-4 pb-5 gap-1">
                <span className="font-semibold uppercase tracking-wider text-black flex justify-between items-center">
                    {speaker.name}
                    <Button
                        type='button'
                        variant={'outline'}
                        size={'icon'}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className='text-blue-500 hover:text-slate-700 transition-colors p-1.5'>
                        <IoDocument size={24} />
                    </Button>
                </span>
                <span className="text-gray-500">
                    {speaker.contactDetails.title}
                </span>
                <p className="text-gray-700 mt-1 leading-relaxed">
                    {speaker.headline}
                </p>

                {speaker.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {speaker.tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>

            <DocumentsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} documents={FAKE_DOCUMENTS} />
        </div>
    );
}