import { site } from "@/content/site";
import { WhatsappIcon } from "./icons";

export function WhatsappFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed right-5 bottom-5 z-30 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/15 transition-transform duration-300 hover:scale-105"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}
