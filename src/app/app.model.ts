export interface NewsItem {
  id: number;
  title: string;
  url?: string;
  by: string;
  score?: number;
  time: number;
  kids?: number[];
  descendants?: number;
}

export interface Comment {
  id: number;
  by: string;
  text: string;
  kids?: number[];
}
