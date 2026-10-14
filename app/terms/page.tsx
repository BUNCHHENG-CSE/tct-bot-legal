import LastUpdated from "../components/LastUpdated";
import ContactInfo from "../components/ContactInfo";
export default function TermsOfService() {
  return (
    <div className="flex flex-col h-full bg-[#2b2d31]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
      {/* Fixed Header Area */}
      <div className="shrink-0 p-8 md:p-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02]">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Terms of Service
        </h1>
        <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10 w-fit">
          <LastUpdated />
        </span>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-8 md:p-10 custom-scrollbar">
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By inviting TCT-Bot ("the Bot") to your Discord server or using
              any of its commands, you agree to these Terms of Service. If you
              do not agree, please remove the Bot from your server.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              TCT-Bot provides various features including but not limited to:
              Moderation, Ticket systems, Giveaways, Music playback, AI
              text/image generation, RSS/Feeds, and Utility commands. These
              services are provided "as is" and "as available."
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              3. User Conduct
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#5865F2]">
              <li>
                Use the Bot to violate Discord's Terms of Service or Community
                Guidelines.
              </li>
              <li>
                Abuse, exploit, or attempt to disrupt the Bot's functionality
                (e.g., spamming commands, attempting to bypass moderation).
              </li>
              <li>
                Use the AI features (aiask, aiimagine) to generate illegal,
                harmful, or explicit content.
              </li>
              <li>Use the Bot for malicious purposes or to harass others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              4. Moderation and Termination
            </h2>
            <p>
              We reserve the right to blacklist any user or server from using
              TCT-Bot at any time, without notice, for violating these Terms.
              Moderation commands (modban, modkick, etc.) are executed at the
              discretion of server administrators; the developers of TCT-Bot are
              not responsible for how server admins use these tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              The developers of TCT-Bot are not liable for any damages, data
              loss, or issues arising from the use of the Bot, including but not
              limited to music playback failures, AI inaccuracies, or moderation
              actions taken by server administrators.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              6. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Bot after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              7. Contact
            </h2>
            <p>
              For support or questions, join our support server or contact us
              at:{" "}
              <span className="text-white font-medium">
                <ContactInfo />
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
