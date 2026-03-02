"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/navItems';

interface NavItemProps {
    label: string;
    path: string;
}

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-md">
            <div className='w-full max-w-7xl flex flex-row justify-between items-center h-full mx-auto'>
                <h1 className="text-xl font-semibold tracking-tighter">LeadXP</h1>
                <div className='uppercase text-sm font-semibold flex flex-row items-center tracking-tighter'>
                    {navItems.map((item => (
                        <NavItem
                            key={item.name}
                            label={item.name}
                            path={item.href}
                        />
                    )))}
                </div>
            </div>
        </header>
    );
}

export function NavItem({ label, path }: NavItemProps) {
    const pathname = usePathname();
    const selected = pathname === path;

    return (
        <Link href={path} className={`mx-4 ${selected ? 'text-blue-500' : 'text-black'} hover:text-blue-500`}>
            {label}
        </Link>
    );
}