import Image from "next/image";
import { Speaker } from "@/types/innovators";
import { Badge } from "../ui/badge";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
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
                <span className="font-bold text-black leading-snug">
                    {speaker.name}
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
        </div>
    );
}