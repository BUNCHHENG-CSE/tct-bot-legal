export default function ContactInfo() {
  // ==========================================
  // EDIT YOUR CONTACT INFO HERE
  // Leave as an empty string "" to hide a method.
  // ==========================================
  const email = "arzur.clone@gmail.com";
  const discordServer = "https://discord.gg/KWeeZqPQu9";
  // ==========================================

  const hasEmail = email.trim() !== "";
  const hasDiscord = discordServer.trim() !== "";

  // If you have no contacts added, hide the section completely
  if (!hasEmail && !hasDiscord) {
    return null;
  }

  return (
    <p>
      For support or questions,{" "}
      {hasDiscord && (
        <a 
          href={discordServer} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5865F2] hover:underline font-medium transition-colors"
        >
          join our support server
        </a>
      )}
      {hasDiscord && hasEmail && " or "}
      {hasEmail && (
        <a 
          href={`mailto:${email}`} 
          className="text-[#5865F2] hover:underline font-medium transition-colors"
        >
          email us at {email}
        </a>
      )}
      .
    </p>
  );
}