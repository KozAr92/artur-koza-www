import { ContactPage } from "./contact/ContactPage.tsx";
import { AboutPage } from "./about/AboutPage.tsx";
import { MainPage } from "./types.ts";
import { EventsPage } from "./events/EventsPage.tsx";

export const PAGES: MainPage[] = [
  { id: "about", page: AboutPage },
  { id: "events", page: EventsPage },
  { id: "media", page: AboutPage },
  { id: "contact", page: ContactPage, className: "main-contact-page" },
];
