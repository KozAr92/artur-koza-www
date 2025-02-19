export type EventItem = {
  id: number;
  title: string;
  type: string;
  date: {
    day: number;
    month: string;
    year: number;
    hour: number;
    minute: number;
  };
  location: string;
  link?: string;
  tickets?: string;
  description?: string;
};

export const EventsList: EventItem[] = [
  {
    id: 1,
    title: "Ein Deutsches Requiem",
    type: "oratorio-type",
    date: {
      day: 21,
      month: "feb",
      year: 2025,
      hour: 19,
      minute: 0,
    },
    location: "Polska Filharmonia Bałtycka",
    link: "https://filharmonia.lodz.pl",
    tickets: "https://filharmonia.lodz.pl",
    description:
      "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    id: 2,
    title: "Z głową w chmurach",
    type: "choral-type",
    date: {
      day: 8,
      month: "mar",
      year: 2025,
      hour: 19,
      minute: 0,
    },
    location: "Filharmonia Łódzka im. Artura Rubinsteina",
    link: "https://filharmonia.lodz.pl",
    tickets: "https://filharmonia.lodz.pl",
    description:
      "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    id: 3,
    title: "CZYŻby koncert",
    type: "symphonic-type",
    date: {
      day: 6,
      month: "apr",
      year: 2025,
      hour: 19,
      minute: 0,
    },
    location: "Filharmonia Łódzka im. Artura Rubinsteina",
    link: "https://filharmonia.lodz.pl",
    tickets: "https://filharmonia.lodz.pl",
    description:
      "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    id: 4,
    title: "Via crucis",
    type: "oratorio-type",
    date: {
      day: 11,
      month: "apr",
      year: 2025,
      hour: 19,
      minute: 0,
    },
    location: "Filharmonia Łódzka im. Artura Rubinsteina",
    link: "https://filharmonia.lodz.pl",
    tickets: "https://filharmonia.lodz.pl",
    description:
      "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    id: 5,
    title: "Ein Deutsches Requiem",
    type: "oratorio-type",
    date: {
      day: 16,
      month: "may",
      year: 2025,
      hour: 19,
      minute: 0,
    },
    location: "Filharmonia Łódzka im. Artura Rubinsteina",
    link: "https://filharmonia.lodz.pl",
    tickets: "https://filharmonia.lodz.pl",
    description:
      "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
];
