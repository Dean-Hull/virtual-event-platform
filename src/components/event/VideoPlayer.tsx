import React from 'react';
import { Button } from '../ui/button';
import { IoMdMic, IoMdMicOff } from 'react-icons/io';
import { IoChatbubbleEllipses, IoChatbubbleEllipsesOutline, IoDocument } from 'react-icons/io5';
import ChatWidget from '../widgets/ChatWidget';
import { DocumentsModal } from '../widgets/DocumentsModal';
import { FAKE_DOCUMENTS } from '@/types/content';

interface VideoPlayerProps {
    videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = React.useState(false);
    const [isChatOpen, setIsChatOpen] = React.useState(true);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className='flex flex-col gap-2'>
            <div className='relative aspect-video rounded-2xl'>
                <div className='h-full pointer-events-none'>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&modestbranding=1&rel=0`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>

                <ChatWidget isOpen={isChatOpen} />

                <div className='absolute bottom-4 left-4 flex flex-row gap-2'>
                    <Button
                        type='button'
                        variant={'outline'}
                        size={'icon'}
                        onClick={() => setIsMuted(!isMuted)}
                        className='text-blue-500 hover:text-slate-700 transition-colors p-1.5'>
                        {isMuted ? <IoMdMicOff size={24} /> : <IoMdMic size={24} />}
                    </Button>
                    <Button
                        type='button'
                        variant={'outline'}
                        size={'icon'}
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className='text-blue-500 hover:text-slate-700 transition-colors p-1.5'>
                        {isChatOpen ? <IoChatbubbleEllipses size={24} /> : <IoChatbubbleEllipsesOutline size={24} />}
                    </Button>
                    <Button
                        type='button'
                        variant={'outline'}
                        size={'icon'}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className='text-blue-500 hover:text-slate-700 transition-colors p-1.5'>
                        <IoDocument size={24} />
                    </Button>
                </div>

                <DocumentsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    documents={FAKE_DOCUMENTS}
                />
            </div>
        </div>
    );
}