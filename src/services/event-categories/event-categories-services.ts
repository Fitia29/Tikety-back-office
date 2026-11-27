import {
  EventCategory,
  EventCategoryParams,
} from "@/interfaces/event-categories/event-categories-type";
import { genericGetList } from "../common";

const URL = "";

export const eventCategoriesService = {
  getAll: (params?: EventCategoryParams) =>
    genericGetList<EventCategory>(URL, params),
};
