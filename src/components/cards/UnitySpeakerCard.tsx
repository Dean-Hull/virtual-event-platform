import Image from "next/image";
import { Speaker } from "@/types/speakers";

interface UnitySpeakerCardProps {
    speaker: Speaker | null;
}

export function UnitySpeakerCard({ speaker }: UnitySpeakerCardProps) {
    if (!speaker) return null;

    return (
        <div className="absolute top-4 left-4 z-10 rounded-2xl px-5 pt-4 pb-5 flex flex-col gap-2 w-96 shadow-2xl bg-white/30 backdrop-blur-xl border border-white/20">
            <div className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                    {speaker.thumbnail ? (
                        <Image
                            src={speaker.thumbnail}
                            alt={speaker.name}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-white/60 bg-white/15">
                            {speaker.name.charAt(0)}
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-bold text-black text-sm leading-snug uppercase tracking-wide truncate">
                        {speaker.name}
                    </span>
                    <span className="text-black/60 text-xs truncate">
                        {speaker.contactDetails.title}
                    </span>
                </div>
            </div>

            {speaker.timeOnStage && (
                <span className="self-start text-sm font-bold tracking-widest uppercase py-1 text-black">
                    {speaker.timeOnStage}
                </span>
            )}

            {speaker.headline && (
                <p className="font-light text-sm leading-relaxed line-clamp-2 uppercase tracking-tigher text-black/80">
                    {speaker.headline}
                </p>
            )}

            {speaker.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                    {speaker.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-semibold tracking-wider uppercase text-black border border-slate-500 px-2 py-0.5 rounded-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}