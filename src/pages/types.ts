import React from "react";

export type MainPage = {
  id: string;
  page: React.ComponentType;
  className?: string;
};

export enum PageLanguage {
  PL = "pl",
  ENG = "en",
}
