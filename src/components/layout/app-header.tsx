import Image from "next/image"
import { Bell, ChevronDown, Settings, User } from "lucide-react"

export function AppHeader() {
  return (
    <header className="flex h-[85px] shrink-0 items-center justify-between gap-6 border-b border-slate-200 bg-white px-[22px]">
      <p className="text-paragraphe font-semibold text-foreground">
        Envie de lancer votre propre événement ? Basculez en mode organisateur dès
        maintenant.
      </p>

      <div className="flex items-center gap-[34px]">
        <div className="flex h-[53px] items-center gap-4 rounded-full border border-slate-300 px-4 text-slate-800">
          <button type="button" aria-label="Profil" className="hover:text-primary">
            <User className="size-[18px]" />
          </button>
          <button type="button" aria-label="Notifications" className="relative hover:text-primary">
            <Bell className="size-[18px]" />
            <span className="absolute top-0 right-0 size-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
          <button type="button" aria-label="Paramètres" className="hover:text-primary">
            <Settings className="size-[18px]" />
          </button>
        </div>

        <div className="-ml-[17px] h-[53px] w-px bg-slate-200" aria-hidden />

        <button
          type="button"
          className="-ml-[17px] flex h-[47px] items-center gap-2.5 rounded-full border border-slate-300 py-0 pr-3.5 pl-1.5"
        >
          <Image
            src="/images/avatar.jpg"
            alt=""
            width={34}
            height={34}
            className="size-[34px] rounded-full object-cover"
          />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-medium text-slate-900">Sahir Sillia</span>
            <span className="max-w-[78px] truncate text-[10px] text-slate-400">
              stephanievololo@mail.com
            </span>
          </span>
          <ChevronDown className="size-4 text-slate-700" />
        </button>
      </div>
    </header>
  )
}
