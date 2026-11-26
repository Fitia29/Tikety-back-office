import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  page: number
  total: number
  onChange: (page: number) => void
}

function getPages(page: number, total: number): (number | "…")[] {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1)
  if (page <= 4) return [1, 2, 3, 4, "…", total]
  if (page >= total - 3) return [1, "…", total - 3, total - 2, total - 1, total]
  return [1, "…", page - 1, page, page + 1, "…", total]
}

const base =
  "inline-flex size-7 items-center justify-center rounded-md bg-primary/15 text-sm text-primary transition-colors outline-none hover:bg-primary/25 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40"

export function Pagination({ page, total, onChange }: Props) {
  if (total <= 1) return null

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5">
      <button
        type="button"
        aria-label="Page précédente"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={base}
      >
        <ChevronLeft className="size-4" />
      </button>

      {getPages(page, total).map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className={cn(base, "pointer-events-none")}>
            ...
          </span>
        ) : (
          <button
            key={p}
            type="button"
            aria-current={p === page ? "page" : undefined}
            onClick={() => onChange(p)}
            className={cn(
              base,
              p === page && "bg-primary text-white hover:bg-primary"
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        aria-label="Page suivante"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        className={base}
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}
