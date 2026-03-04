export interface Document {
    name: string;
    url: string;
}

export interface VideoItem {
    name: string;
    duration: string;
    url: string;
}

export const FAKE_DOCUMENTS = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    name: `Document ${i + 1}`,
    size: 'PDF',
    url: '#',
}));