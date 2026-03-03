import Image from 'next/image';
import HeroImage from '@/images/hero/conny-schneider-xuTJZ7uD7PI-unsplash.jpg';
import AgendaWidget from '@/components/widgets/AgendaWidget';

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

            { /* Content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8 px-6'>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-center text-white">
                    Welcome to <span className="text-blue-500">LeadXP</span>
                </h1>
                <p className="text-lg text-white text-center w-full md:w-1/2 mx-auto font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </main>
    );
}