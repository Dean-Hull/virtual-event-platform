import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ChatMessage {
    id: number;
    message: string;
    timestamp: string;
}

interface ChatWidgetProps {
    isOpen: boolean;
}

export default function ChatWidget({ isOpen }: ChatWidgetProps) {
    const [messages, setMessages] = React.useState<ChatMessage[]>([]);
    const [input, setInput] = React.useState('');
    const messagesContainerRef = React.useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages(prev => [...prev, {
            id: Date.now(),
            message: input.trim(),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }]);
        setInput('');
    };

    return (
        <div className={`absolute top-4 right-4 bottom-4 w-72 flex flex-col rounded-md overflow-hidden bg-white border border-slate-200 pointer-events-auto shadow-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className='px-4 py-3 border-b border-slate-100'>
                <span className='text-xs font-semibold tracking-widest uppercase text-slate-400'>
                    Live Chat
                </span>
            </div>

            <div ref={messagesContainerRef} className='flex-1 overflow-y-auto px-4 py-3 space-y-3'>
                {messages.length === 0 && (
                    <p className='text-slate-400 text-xs text-center mt-4'>No messages yet</p>
                )}
                {messages.map(msg => (
                    <div key={msg.id} className='flex flex-col items-end gap-1'>
                        <div className='bg-slate-100 rounded-md px-3 py-2 max-w-[90%]'>
                            <p className='text-black text-sm leading-snug'>{msg.message}</p>
                        </div>
                        <span className='text-slate-400 text-[10px]'>{msg.timestamp}</span>
                    </div>
                ))}
            </div>

            <div className='px-3 py-3 border-t border-slate-100 flex gap-2'>
                <Input
                    type='text'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } }}
                    placeholder='Send a message...'
                    className='flex-1 text-sm text-black placeholder:text-slate-400 border border-slate-200 rounded-md px-3 py-1.5 outline-none focus:ring-1 focus:ring-slate-300'
                />
                <Button
                    type='button'
                    variant={'outline'}
                    onClick={sendMessage}
                    className='text-slate-400 hover:text-slate-700 transition-colors p-1.5'
                >
                    <Send size={15} />
                </Button>
            </div>
        </div>
    );
}
