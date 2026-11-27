import { DefaultSearchParams } from "../common/global";

export interface EventCategory {
  id: string;
  name: string;
  description: string;
}

export interface EventCategoryParams extends DefaultSearchParams {}
