"use client";

import React from "react";

interface VideoPlayerProps {
    videoId: string;
}

const VIDEO_ID = process.env.NEXT_VIDEO_ID;

export default function Keynote({ videoId }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = React.useState(true);

    return (
        <main className="w-full min-h-screen flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto justify-center gap-4 mt-16 px-4 mb-16">
                <div className='relative aspect-video rounded-2xl overflow-hidden'>
                    <div className='h-full pointer-events-none'>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&playlist=${VIDEO_ID}&modestbranding=1&rel=0`}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}