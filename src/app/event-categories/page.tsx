"use client";

import EventCategoriesTable from "@/features/event-categories/event-categories-table";
import { useEventCategories } from "@/hooks/event-categories/use-event-categories";
import { useState } from "react";

const MOCK = [
  {
    id: "test",
    name: "test",
    description: "test",
  },
  {
    id: "test",
    name: "test",
    description: "test",
  },
  {
    id: "test",
    name: "test",
    description: "test",
  },
];

export default function EventCategoriesPage() {
  const [page, setPage] = useState(1);

  const { eventCategories, isLoading, isError } = useEventCategories();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-bold text-title leading-[32px] text-primary">
            {"Gestion des catégories des évènements"}
          </h1>
          <p className="font-[500] text-paragraph leading-[20px] text-secondary-foreground">
            {
              "Centralisez, planifiez et publiez vos événements. Suivez leurs statuts et gérez l'ensemble des informations logistiques en un seul endroit."
            }
          </p>
        </div>

        {/* Dialog */}
      </div>

      <EventCategoriesTable
        eventCategories={MOCK}
        page={page}
        onChangePage={setPage}
      />
    </div>
  );
}
