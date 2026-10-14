import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const features = [
    { title: "Moderation", desc: "Keep your server safe with ban, kick, and timeout commands.", icon: "🛡️" },
    { title: "Tickets", desc: "Professional support ticket system for your members.", icon: "🎫" },
    { title: "Music", desc: "High-quality music playback and queue management.", icon: "🎵" },
    { title: "AI Tools", desc: "Ask AI questions or generate images right in Discord.", icon: "✨" },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center w-full my-auto py-8">
      {/* my-auto centers the content vertically on large screens, but allows scrolling on small screens */}
      
      <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden ring-4 ring-[#5865F2]/30 shadow-[0_0_30px_rgba(88,101,242,0.3)]">
         <Image src="/tct-bot-logo.png" alt="TCT-Bot Logo" fill className="object-cover" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 tracking-tight">
        TCT-Bot Legal Center
      </h1>
      
      <p className="text-sm md:text-base text-gray-400 mb-6 max-w-xl leading-relaxed">
        Welcome to the official legal hub for TCT-Bot. Please review our policies to understand how we handle your data and what rules apply when using our services in your Discord server.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10">
        <Link 
          href="/terms" 
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-2.5 px-6 text-sm rounded-lg transition-all duration-300 shadow-lg shadow-[#5865F2]/20 hover:-translate-y-0.5"
        >
          Read Terms of Service
        </Link>
        <Link 
          href="/privacy" 
          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-2.5 px-6 text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
        >
          Read Privacy Policy
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full text-left">
        {features.map((feature, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
            <div className="text-2xl mb-2">{feature.icon}</div>
            <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}