"use client";

import Image from 'next/image';
import HeroImage from '@/images/hero/conny-schneider-xuTJZ7uD7PI-unsplash.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AppView } from '@/routes/appView';

export default function Home() {
    return (
        <main className='relative w-screen h-screen overflow-hidden'>
            <div className='absolute inset-0'>
                <Image
                    src={HeroImage}
                    alt="Hero Image"
                    fill
                    priority
                    className="object-cover" />
                <div className='absolute inset-0 bg-black/50' />
            </div>

            {/* Content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8 px-6'>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-center text-white">
                    Welcome to <span className="text-blue-500">LeadXP</span>
                </h1>
                <p className="text-lg text-white text-center w-full md:w-1/3 mx-auto font-light">
                    Welcome to LeapXP Virtual, today we're hosting 10 young innovators who will be sharing their groundbreaking ideas hoping to earn an opportunity to bring their passion to life.
                </p>
                <Button
                    asChild
                    variant='default'
                    className='py-4 px-4 text-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors uppercase tracking-tight font-semibold rounded-md'>
                    <Link href={AppView.SPEAKERS}>View Speakers</Link>
                </Button>
            </div>
        </main>
    );
}