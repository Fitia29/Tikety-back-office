"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Armchair,
  BadgePercent,
  CalendarDays,
  CreditCard,
  History,
  LayoutDashboard,
  Search,
  Ticket,
  TicketCheck,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const navigationGroups = [
  {
    label: "Général",
    items: [{ label: "Tableau de bord", icon: LayoutDashboard }],
  },
  {
    label: "Gestion",
    items: [
      { label: "D’évènements", icon: CalendarDays, active: true },
      { label: "Salle", icon: Armchair },
      { label: "Type de ticket", icon: Ticket },
      { label: "Réservations ticket", icon: TicketCheck },
      { label: "Ticket", icon: BadgePercent },
      { label: "Paiement", icon: CreditCard },
    ],
  },
  {
    label: "Suivi",
    items: [{ label: "Historiques", icon: History }],
  },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const [hovered, setHovered] = useState(false)

  const collapsed = state === "collapsed"
  const compact = collapsed && !hovered
  const expandedByHover = collapsed && hovered

  return (
    <Sidebar
      collapsible="icon"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      gapClassName={
        expandedByHover ? "group-data-[collapsible=icon]:w-(--sidebar-width)" : undefined
      }
      className={cn(
        "border-r-0 [&_[data-sidebar=sidebar]]:bg-navy [&_[data-sidebar=sidebar]]:text-white",
        expandedByHover && "group-data-[collapsible=icon]:w-(--sidebar-width)"
      )}
    >
      <SidebarHeader
        className={cn(
          "gap-[34px] p-8 transition-[padding] duration-200",
          compact ? "items-center px-0" : "p-8"
        )}
      >
        <div className="flex w-full items-center justify-between">
          <a href="#" className={cn("flex items-center gap-1.5", compact && "mx-auto")}>
            <Image src="/images/logo.svg" alt="Tikety" width={36} height={29} />
            {!compact && (
              <span className="text-[26px] leading-none font-bold text-primary">
                Tikety
              </span>
            )}
          </a>
          {!compact && (
            <SidebarTrigger
              className="text-white hover:bg-white/10 hover:text-white"
              onClick={() => setHovered(false)}
            />
          )}
        </div>

        {!compact && (
          <label className="flex h-10 w-full items-center gap-2.5 rounded-full border-2 border-white/50 px-3.5 text-white/80 focus-within:ring-3 focus-within:ring-white/30">
            <Search className="size-4 shrink-0" />
            <input
              aria-label="Rechercher"
              placeholder="Rechercher..."
              className="min-w-0 flex-1 bg-transparent text-[12px] text-white outline-none placeholder:text-white/70"
            />
          </label>
        )}
      </SidebarHeader>

      <SidebarContent
        className={cn(
          "gap-0 pt-[34px] transition-[padding] duration-200",
          compact ? "px-0" : "px-8"
        )}
      >
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label} className="p-0 pb-6">
            {compact ? (
              <div className="mx-auto mb-3 h-5 w-6 border-b border-white/20" />
            ) : (
              <SidebarGroupLabel className="mb-3 h-5 px-0 text-sm font-normal whitespace-nowrap text-white/80 group-data-[collapsible=icon]:mt-0! group-data-[collapsible=icon]:opacity-100!">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarMenu className="gap-[26px]">
              {group.items.map(({ label, icon: Icon, active }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton
                    isActive={active}
                    render={<a href="#" />}
                    aria-label={label}
                    className={cn(
                      "gap-2.5 rounded-md text-base whitespace-nowrap text-white hover:bg-white/10 hover:text-white group-data-[collapsible=icon]:h-7!",
                      compact
                        ? "mx-auto justify-center group-data-[collapsible=icon]:w-10! group-data-[collapsible=icon]:p-0!"
                        : "group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:px-2.5!",
                      active && "bg-primary hover:bg-primary"
                    )}
                  >
                    <Icon className="size-[18px] shrink-0" />
                    {!compact && <span>{label}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
