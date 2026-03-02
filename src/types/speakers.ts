import { StaticImageData } from "next/image";

export interface Speaker {
    id: number;
    name: string;
    thumbnail: StaticImageData | null;
    tags: string[];
    headline: string;
    keyStat: string;
    problem: string;
    solution: string;
    ask: string;
    contactDetails: SpeakerContactDetails;
}

interface SpeakerContactDetails {
    name: string;
    title: string;
    email: string;
}

export enum SpeakerTag {
    ALL = "All",
    AI = "AI",
    HEALTHCARE = "Healthcare",
    SAAS = "SaaS",
    IOT = "IoT",
    SUSTAINABILITY = "Sustainability",
    SMART_CITIES = "Smart Cities",
    FINTECH = "FinTech",
    BLOCKCHAIN = "Blockchain",
    PAYMENTS = "Payments",
    EDTECH = "EdTech",
    AGRI_TECH = "AgriTech",
    CLIMATE = "Climate",
    CYBERSECURITY = "Cybersecurity",
    ENTERPRISE = "Enterprise",
    BIO_TECH = "BioTech",
    ROBOTICS = "Robotics",
    MANUFACTURING = "Manufacturing",
    AUTOMATION = "Automation",
    MENTAL_HEALTH = "Mental Health",
    WELLNESS = "Wellness",
    CLIMATE_TECH = "Climate Tech",
}