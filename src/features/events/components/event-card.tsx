import Image from "next/image"
import { CalendarDays, Link2, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatEventDate, type EventItem } from "../data/events"

function MorePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-[26px] items-center rounded-full border border-slate-300 px-3 text-xs whitespace-nowrap text-slate-400">
      {children}
    </span>
  )
}

export function EventCard({ event }: { event: EventItem }) {
  const published = event.status === "published"

  return (
    <article className="flex gap-3.5 rounded-[18px] border border-slate-300 bg-white p-2.5">
      <div className="relative h-[208px] w-[246px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="246px"
          className="object-cover"
        />
        <span className="absolute top-3 left-2 rounded-full bg-navy px-2.5 py-[5px] text-[11px] leading-none font-medium text-white">
          {event.genre}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col text-slate-500">
        <h3 className="truncate text-xl leading-7 font-semibold text-slate-900">
          {event.title}
        </h3>
        <p className="mt-[7px] line-clamp-2 text-sm leading-5">{event.description}</p>

        <div className="mt-[7px] flex items-center gap-2 text-[13px]">
          <CalendarDays className="size-4 shrink-0 text-slate-400" />
          <span className="whitespace-nowrap text-slate-700">
            {formatEventDate(event.date)}
          </span>
          {event.extraDates > 0 && (
            <MorePill>+{event.extraDates} autres dates</MorePill>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2 text-[13px]">
          <MapPin className="size-4 shrink-0 text-slate-400" />
          <span className="truncate text-slate-700">{event.venue}</span>
          {event.extraVenues > 0 && (
            <MorePill>+{event.extraVenues} autres lieux</MorePill>
          )}
        </div>

        <a
          href="#"
          className="mt-[7px] flex w-fit items-center gap-2 text-[13px] hover:text-primary"
        >
          <Link2 className="size-4 shrink-0 text-slate-400" />
          {event.file}
        </a>

        <span
          className={cn(
            "mt-auto inline-flex h-[26px] w-fit items-center rounded-full px-4 text-sm font-medium text-white",
            published ? "bg-[#17691f]" : "bg-[#b8b8b8]"
          )}
        >
          {published ? "Publié" : "Brouillon"}
        </span>
      </div>
    </article>
  )
}
