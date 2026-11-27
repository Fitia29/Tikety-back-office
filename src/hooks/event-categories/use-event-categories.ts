import { EventCategoryParams } from "@/interfaces/event-categories/event-categories-type";
import { eventCategoriesService } from "@/services/event-categories/event-categories-services";
import { useQuery } from "@tanstack/react-query";

export function useEventCategories(params?: EventCategoryParams) {
  const query = useQuery({
    queryKey: ["event-categories", params],
    queryFn: () => eventCategoriesService.getAll(params),
  });

  return { ...query, eventCategories: query.data?.data ?? [] };
}
