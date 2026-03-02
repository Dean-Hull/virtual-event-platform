import Image from "next/image";
import { Innovator } from "@/types/innovators";
import { Badge } from "../ui/badge";

export function InnovatorCard({ innovator }: { innovator: Innovator }) {
    return (
        <div className="relative flex flex-col rounded-md overflow-hidden bg-white">
            <div className="relative w-full overflow-hidden bg-blue-50 h-96">
                {innovator.thumbnail && (
                    <Image
                        src={innovator.thumbnail}
                        alt={`${innovator.name}'s profile picture`}
                        fill
                        className="object-cover object-top"
                    />
                )}
            </div>

            <div className="flex flex-col px-5 pt-4 pb-5 gap-1">
                <span className="font-bold text-black leading-snug">
                    {innovator.name}
                </span>
                <span className="text-gray-500">
                    {innovator.contactDetails.title}
                </span>
                <p className="text-gray-700 mt-1 leading-relaxed">
                    {innovator.headline}
                </p>

                {innovator.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {innovator.tags.map((tag) => (
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