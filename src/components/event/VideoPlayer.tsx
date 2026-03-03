import React from 'react';
import { Button } from '../ui/button';
import { IoMdMic, IoMdMicOff } from 'react-icons/io';
import { IoChatbubbleEllipses, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import ChatWidget from '../widgets/ChatWidget';

interface VideoPlayerProps {
    videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = React.useState(false);
    const [isChatOpen, setIsChatOpen] = React.useState(true);

    return (
        <div className='relative aspect-video rounded-2xl overflow-hidden'>
            <div className='h-full pointer-events-none'>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&modestbranding=1&rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
                <ChatWidget isOpen={isChatOpen} />
            </div>
            <Button
                type='button'
                variant={'outline'}
                size={'icon'}
                onClick={() => setIsMuted(!isMuted)}
                className='absolute bottom-4 left-4'>
                {isMuted ? <IoMdMicOff size={24} /> : <IoMdMic size={24} />}
            </Button>
            <Button
                type='button'
                variant={'outline'}
                size={'icon'}
                onClick={() => setIsChatOpen(!isChatOpen)}
                className='absolute bottom-4 left-16'>
                {isChatOpen ? <IoChatbubbleEllipses size={24} /> : <IoChatbubbleEllipsesOutline size={24} />}
            </Button>
        </div>
    );
}