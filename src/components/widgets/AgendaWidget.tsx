import { Speaker } from "@/types/speakers";
import speakersData from "../../../public/data/speakers";
import AgendaItem from "../cards/AgendaItem";

interface AgendaWidgetProps {
    interactive?: boolean;
    selectedSpeakerId?: number | string | null;
    onSpeakerClick?: (speaker: Speaker) => void;
}

export default function AgendaWidget({ interactive = true, selectedSpeakerId, onSpeakerClick }: AgendaWidgetProps) {
    return (
        <div className="w-full h-auto bg-white overflow-y-auto border border-slate-200 rounded-sm divide-y divide-slate-100">
            {speakersData.speakers.map((speaker: Speaker) => (
                <AgendaItem 
                key={speaker.id} 
                speaker={speaker}
                selected={speaker.id === selectedSpeakerId}
                onClick={interactive
                    ? () => onSpeakerClick?.(speaker)
                    : undefined} />
            ))}
        </div>
    );
}