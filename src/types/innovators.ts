import { StaticImageData } from "next/image";

export interface Innovator {
    id: number;
    name: string;
    thumbnail: StaticImageData | null;
    tags: string[];
    headline: string;
    keyStat: string;
    problem: string;
    solution: string;
    ask: string;
    contactDetails: InnovatorContactDetails;
}

interface InnovatorContactDetails {
    name: string;
    title: string;
    email: string;
}