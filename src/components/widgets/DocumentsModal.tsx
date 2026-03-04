import { Document } from "@/types/content";
import { Button } from "../ui/button";
import { ExternalLink, FileText, X } from "lucide-react";

interface DocumentsModalProps {
    isOpen: boolean;
    onClose: () => void;
    documents: Document[];
}

export function DocumentsModal({ isOpen, onClose, documents }: DocumentsModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}>
            <div
                className="bg-white rounded-lg shadow-sm border border-slate-200 w-full max-w-3xl mx-4"
                onClick={e => e.stopPropagation()}>

                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                        Documents
                    </span>
                    <Button variant={'outline'} size="icon" onClick={onClose} className="text-blue-500 h-7 w-7">
                        <X size={14} fill="currentColor" />
                    </Button>
                </div>

                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                    {documents.map(doc => (
                        <div key={doc.name} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors">
                            <div className="shrink-0 w-8 h-8 bg-blue-50 rounded-sm flex items-center justify-center">
                                <FileText size={14} className="text-blue-500" fill="currentColor" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-black uppercase tracking-tight">{doc.name}</p>
                            </div>
                            <a
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-blue-500 transition-colors">
                                <ExternalLink size={14} fill="currentColor" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="px-5 py-3 border-t border-slate-200">
                    <p className="text-xs text-slate-400 tracking-widest uppercase">{documents.length} document{documents.length !== 1 ? 's' : ''}</p>
                </div>
            </div>
        </div>
    )
}