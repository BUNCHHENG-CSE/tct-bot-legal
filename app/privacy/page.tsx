import LastUpdated from "../components/LastUpdated";
import ContactInfo from "../components/ContactInfo";
export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col h-full bg-[#2b2d31]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
      {/* Fixed Header Area */}
      <div className="shrink-0 p-8 md:p-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02]">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how TCT-Bot ("the Bot") collects,
              uses, and protects your data. We are committed to protecting your
              privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              2. Data We Collect
            </h2>
            <p className="mb-3">
              To function properly, TCT-Bot may collect and store the following
              data:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#5865F2]">
              <li>
                <strong className="text-white">
                  User IDs, Server IDs, and Channel IDs:
                </strong>{" "}
                Used for configuration, moderation, ticket systems, and
                giveaways.
              </li>
              <li>
                <strong className="text-white">Message Content:</strong>{" "}
                Commands (e.g., tct!aiask, tct!aiimagine) are processed to
                generate responses. Moderation logs (modwarn, modban) store user
                IDs and reasons for infractions. Ticket transcripts may store
                messages sent within ticket channels.
              </li>
              <li>
                <strong className="text-white">Configuration Data:</strong>{" "}
                Settings for welcome/goodbye messages, log channels (setlog),
                and feed URLs (feedadd).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              3. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#5865F2]">
              <li>
                To provide and maintain the Bot's features (Moderation, Tickets,
                Giveaways, Music, AI, Feeds, Utility).
              </li>
              <li>
                To process AI prompts. Please note: Prompts submitted via aiask
                and aiimagine are sent to third-party AI providers to generate
                the requested output.
              </li>
              <li>To enforce our Terms of Service and prevent abuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell your data. We only share data with third-party APIs
              (like AI providers) as necessary to fulfill the bot's commands, or
              if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              5. Data Retention
            </h2>
            <p>
              Data is retained only as long as necessary to provide the Bot's
              services. If you remove the Bot from your server, or request data
              deletion, your configuration data will be deleted from our active
              databases.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to, or deletion of, your
              data. To do so, please contact us at{" "}
              <span className="text-white font-medium">
                <ContactInfo />
              </span>
              . Server administrators can also use commands like tct!modpurge or
              ticket closing commands to manage their own server data.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              7. Children's Privacy
            </h2>
            <p>
              TCT-Bot is not intended for use by anyone under the age of 13. We
              do not knowingly collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy. We will notify users of any
              significant changes by posting an announcement in our support
              server.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              9. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
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
