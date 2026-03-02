import UnityPlayer from "@/components/event/UnityPlayer";

export default function Explore() {
    return (
        <main className="w-full min-h-screen flex flex-col items-start justify-start space-y-8 mt-16">
            <div className="w-full max-w-7xl mx-auto justify-center gap-4 mt-16 px-4 mb-16">
                <UnityPlayer />;
            </div>
        </main>
    )
}