"use client"

import { ArrowUpRight, ChevronDown, Globe, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import Link from "next/link"

const user = {
  name: "Sahir Sillia",
  email: "stephanievololo@mail.com",
  role: "Administrateur",
  avatar: "/images/avatar.jpg",
  initials: "SS",
}

export function UserMenu() {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Menu du compte"
        className="group flex h-[47px] cursor-pointer items-center gap-2.5 rounded-full border border-slate-300 bg-white pr-3.5 pl-1.5 outline-none transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-3 focus-visible:ring-ring/50 aria-expanded:border-primary aria-expanded:bg-primary/5"
      >
        <Avatar className="size-[34px]">
          <AvatarImage src={user.avatar} alt="" />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-sm font-medium text-slate-900">{user.name}</span>
          <span className="max-w-[78px] truncate text-[10px] text-slate-400">
            {user.email}
          </span>
        </span>
        <ChevronDown className="size-4 text-slate-700 transition-transform duration-200 group-aria-expanded:rotate-180" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-[272px] rounded-2xl p-1.5 shadow-[0_12px_40px_-8px_rgba(10,18,61,0.25)]"
      >
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <Avatar className="size-11">
            <AvatarImage src={user.avatar} alt="" />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
            <p className="truncate text-xs text-slate-500">{user.email}</p>
            <span className="mt-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {user.role}
            </span>
          </div>
        </div>

        <DropdownMenuSeparator className="my-1.5" />

        <DropdownMenuGroup>
          <DropdownMenuItem
            render={<Link href="/" />}
            className="gap-3 rounded-xl px-2.5 py-2 text-sm font-medium"
            >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Globe className="size-4" />
            </span>
            <span className="flex-1">Accéder au site</span>
            <ArrowUpRight className="size-4 text-slate-400" />
        </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1.5" />

        <DropdownMenuItem
          variant="destructive"
          onClick={handleLogout}
          className="gap-3 rounded-xl px-2.5 py-2 text-sm font-medium"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
            <LogOut className="size-4" />
          </span>
          Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}