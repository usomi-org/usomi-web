"use client";

export default function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20
                       hover:bg-white/20 transition-all duration-300 group">
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                {title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}