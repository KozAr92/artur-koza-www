import { ContactPage } from "./contact/ContactPage.tsx";
import { AboutPage } from "./about/AboutPage.tsx";
import { MainPage } from "./types.ts";
import { EventsPage } from "./events/EventsPage.tsx";
import { ReviewsPage } from "./reviews/ReviewsPage.tsx";

export const PAGES: MainPage[] = [
  { id: "about", page: AboutPage },
  { id: "events", page: EventsPage },
  { id: "reviews", page: ReviewsPage },
  { id: "contact", page: ContactPage, className: "main-contact-page" },
];
