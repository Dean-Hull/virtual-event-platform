"use client";

import React, { useEffect } from 'react';

const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_URL;

declare global {
    interface Window {
        unityInstance: any;
        createUnityInstance: any;
        onUnityObjectSelected: ((id: string) => void) | null;
    }
}

export default function UnityPlayer() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!BLOB_URL) {
            console.error('Blob URL not defined. Please set the environment variable.')
            return;
        }

        if (window.createUnityInstance) return;

        const script = document.createElement('script');
        script.src = `${BLOB_URL}/Builds.loader.js`;
        
        script.onload = () => {
            if (!canvasRef.current) return;

            (window as any).createUnityInstance(canvasRef.current, {
                dataUrl: `${BLOB_URL}/Builds.data`,
                frameworkUrl: `${BLOB_URL}/Builds.framework.js`,
                codeUrl: `${BLOB_URL}/Builds.wasm`,
            }).then((unityInstance: any) => {
                window.unityInstance = unityInstance;
                console.log('Unity instance created:', unityInstance);
            });
        };
        document.body.appendChild(script);

        return () => { 
            document.body.removeChild(script);
            window.unityInstance = undefined;
        };
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