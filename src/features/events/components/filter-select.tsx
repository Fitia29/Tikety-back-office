import { ChevronDown } from "lucide-react"

type Props = {
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

export function FilterSelect({ label, value, options, onChange }: Props) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[39px] cursor-pointer appearance-none rounded-full border border-slate-300 bg-white pr-9 pl-3.5 text-[13px] text-slate-500 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-slate-400" />
    </div>
  )
}
