"use client"

import { useMemo, useState } from "react"
import { Search, UsersRound } from "lucide-react"
import { events } from "../data/events"
import { EventCard } from "./event-card"
import { FilterSelect } from "./filter-select"
import { Pagination } from "./pagination"

const PAGE_SIZE = 6

const toOptions = (values: string[]) =>
  [...new Set(values)].sort().map((v) => ({ value: v, label: v }))

const statusOptions = [
  { value: "published", label: "Publié" },
  { value: "draft", label: "Brouillon" },
]
const venueOptions = toOptions(events.map((e) => e.venue))
const genreOptions = toOptions(events.map((e) => e.genre))

export function EventsPage() {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("")
  const [venue, setVenue] = useState("")
  const [genre, setGenre] = useState("")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return events.filter(
      (e) =>
        (!q ||
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)) &&
        (!status || e.status === status) &&
        (!venue || e.venue === venue) &&
        (!genre || e.genre === genre)
    )
  }, [query, status, venue, genre])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, totalPages)
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  // Toute modification de filtre ramène à la première page
  const withReset = (setter: (v: string) => void) => (v: string) => {
    setter(v)
    setPage(1)
  }

  return (
    <div className="px-[22px] pt-[22px] pb-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-[28px] leading-9 font-medium text-primary">
            Gestion d’évènement
          </h1>
          <p className="mt-2 max-w-[650px] text-sm leading-5 text-slate-500">
            Centralisez, planifiez et publiez vos événements. Suivez leurs statuts
            et gérez l’ensemble des informations logistiques en un seul endroit.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex h-[50px] shrink-0 items-center gap-2.5 rounded-full bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <UsersRound className="size-5" />
          Passer en mode organisateur
        </button>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-1.5">
        <label className="mr-1.5 flex h-[39px] w-[405px] max-w-full items-center gap-2.5 rounded-full border border-slate-300 bg-white px-3.5 text-slate-400 focus-within:ring-3 focus-within:ring-ring/50">
          <Search className="size-4 shrink-0" />
          <input
            value={query}
            onChange={(e) => withReset(setQuery)(e.target.value)}
            aria-label="Rechercher un évènement"
            placeholder="Rechercher un évènement, titre, description..."
            className="min-w-0 flex-1 bg-transparent text-[13px] text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
        <FilterSelect label="Statut" value={status} options={statusOptions} onChange={withReset(setStatus)} />
        <FilterSelect label="Lieu" value={venue} options={venueOptions} onChange={withReset(setVenue)} />
        <FilterSelect label="Genre" value={genre} options={genreOptions} onChange={withReset(setGenre)} />
      </div>

      {visible.length > 0 ? (
        <div className="mt-[50px] grid grid-cols-1 gap-4 min-[1200px]:grid-cols-2">
          {visible.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="mt-[50px] rounded-[18px] border border-dashed border-slate-300 py-16 text-center text-sm text-slate-500">
          Aucun évènement ne correspond à votre recherche.
        </p>
      )}

      <div className="mt-8">
        <Pagination page={current} total={totalPages} onChange={setPage} />
      </div>
    </div>
  )
}
