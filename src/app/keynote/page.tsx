"use client";

import VideoPlayer from "@/components/event/VideoPlayer";
import React from "react";

const VIDEO_ID = process.env.NEXT_VIDEO_ID;

export default function Keynote() {
    return (
        <main className="w-full min-h-screen flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto justify-center gap-4 mt-16 px-4 mb-16">
                <VideoPlayer videoId={VIDEO_ID || ""} />
            </div>
        </main>
    );
}