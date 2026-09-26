import Reveal from "@/components/ui/Reveal";
import { Github, Linkedin, MessageCircle, Mail, Phone, Download } from "lucide-react";
import { PROFILE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-8">
        <Reveal>
          <p className="font-mono text-accent text-[12.5px] mb-4">Contact</p>
          <h2 className="text-[2rem] sm:text-5xl font-bold max-w-[14ch] leading-tight">
            Looking for a developer who can own the frontend and work across the stack?
          </h2>
          <p className="text-muted max-w-[52ch] mt-4">
            Based in Dubai and available for UAE-based Full Stack and Frontend roles, from product teams to digital agencies.
          </p>
          <a
            href={PROFILE.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-full bg-accent text-[#151208]"
          >
            <Download size={14} /> Download Resume
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mt-11 max-w-[640px]">
          <a href={`mailto:${PROFILE.email}`} className="border-b border-line hover:border-accent hover:text-accent pb-3.5 text-[15.5px] flex items-center gap-2.5">
            <Mail size={15} />
            <span>
              <span className="font-mono text-muted text-xs block mb-1">Email</span>
              {PROFILE.email}
            </span>
          </a>
          <a href={`tel:${PROFILE.phone}`} className="border-b border-line hover:border-accent hover:text-accent pb-3.5 text-[15.5px] flex items-center gap-2.5">
            <Phone size={15} />
            <span>
              <span className="font-mono text-muted text-xs block mb-1">Call</span>
              {PROFILE.phoneDisplay}
            </span>
          </a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="border-b border-line hover:border-accent hover:text-accent pb-3.5 text-[15.5px] flex items-center gap-2.5">
            <MessageCircle size={15} />
            <span>
              <span className="font-mono text-muted text-xs block mb-1">WhatsApp</span>
              {PROFILE.whatsappDisplay}
            </span>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="border-b border-line hover:border-accent hover:text-accent pb-3.5 text-[15.5px] flex items-center gap-2.5">
            <Linkedin size={15} />
            <span>
              <span className="font-mono text-muted text-xs block mb-1">LinkedIn</span>
              Nizamudeen N
            </span>
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="border-b border-line hover:border-accent hover:text-accent pb-3.5 text-[15.5px] flex items-center gap-2.5">
            <Github size={15} />
            <span>
              <span className="font-mono text-muted text-xs block mb-1">GitHub</span>
              Nizamudeen07
            </span>
          </a>
          <div className="border-b border-line pb-3.5 text-[15.5px] sm:col-span-2">
            <span className="font-mono text-muted text-xs block mb-1">Location</span>
            {PROFILE.location}
          </div>
        </div>
      </div>
    </section>
  );
}
