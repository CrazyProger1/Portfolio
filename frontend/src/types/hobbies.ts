export type HobbyTag = {
  id: number;
  name: string;
  slug: string;
};

export type Hobby = {
  id: number;
  name: string;
  image: string;
  description: string;
  started_at: string;
  ended_at?: string;
  tags: HobbyTag[];
};
