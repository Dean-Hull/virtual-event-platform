import { Speaker } from '@/types/speakers';
import Image from 'next/image';

interface UnitySpeakerCardProps {
    speaker: Speaker | null;
}

export function UnitySpeakerCard({ speaker }: UnitySpeakerCardProps) {
    if (!speaker) return null;

    return (
        <div className='absolute bottom-4 left-4 flex flex-col rounded-lg overflow-hidden w-72 shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 p-4 z-10'>
            <div className='flex items-center gap-3'>
                <div className='shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-white/30'>
                    {speaker.thumbnail ? (
                        <Image
                            src={speaker.thumbnail}
                            alt={speaker.name}
                            width={40}
                            height={40}
                            className='object-cover w-full h-full'
                        />
                    ) : (
                        <div className='w-full h-full flex items-center justify-center text-sm font-semibold text-white/60 bg-white/15'>
                            {speaker.name.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div className='flex flex-col gap-0.5 min-w-0'>
                        <span className='font-semibold text-black text-sm tracking-widest uppercase'>
                            {speaker.name}
                        </span>
                        <span className='text-xs text-white/80 truncate'>
                            {speaker.contactDetails.title}
                        </span>
                    </div>
                </div>

                {speaker.timeOnStage && (
                    <span className='self-start text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-black'>
                        {speaker.timeOnStage}
                    </span>
                )}
            </div>
        </div>
    );
}