"use client";

import React, { useEffect } from 'react';

const BLOB_BASE = process.env.NEXT_PUBLIC_BLOB_URL;

export default function UnityPlayer() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `${BLOB_BASE}/Builds.loader.js`;
        script.onload = () => {
            (window as any).createUnityInstance(document.getElementById('unity-canvas'), {
                dataUrl: `${BLOB_BASE}/Builds.data`,
                frameworkUrl: `${BLOB_BASE}/Builds.framework.js`,
                codeUrl: `${BLOB_BASE}/Builds.wasm`,
            }).then((unityInstance: any) => {
                console.log('Unity instance created:', unityInstance);
            });
        };
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    return (
        <canvas
            id='unity-canvas'
            ref={canvasRef}
            className=''
            style={{ width: '100%', height: '100%' }}>
        </canvas>
    );
}