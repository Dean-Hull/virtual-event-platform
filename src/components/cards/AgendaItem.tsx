import Image from 'next/image';
import { Speaker } from '@/types/speakers';

interface AgendaCardProps {
    speaker: Speaker;
    onClick?: () => void;
    selected?: boolean;
}

export default function AgendaItem({ speaker, onClick, selected = false }: AgendaCardProps) {
    return (
        <div
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-4 py-3 border-b border-slate-100 last:border-b-0 cursor-pointer hover:bg-slate-50 ${selected ? 'bg-slate-100' : ''}`}
        >
            <span className="w-32 shrink-0 text-xs font-semibold tracking tabular-nums text-slate-400">
                {speaker.timeOnStage}
            </span>

            <div className="shrink-0 w-9 h-9 rounded-full overflow-hidden bg-slate-100 border border-blue-200">
                {speaker.thumbnail ? (
                    <Image
                        src={speaker.thumbnail}
                        alt={speaker.name}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-slate-400">
                        {speaker.name.charAt(0)}
                    </div>
                )}
            </div>

            <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-medium text-black truncate">
                    {speaker.contactDetails.name}
                </span>
                <span className="text-xs text-slate-400">
                    {speaker.contactDetails.title}
                </span>
            </div>

            {speaker.tags.length > 0 && (
                <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    {speaker.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-semibold tracking-wider uppercase text-slate-400 border border-slate-200 px-2 py-0.5 rounded-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}