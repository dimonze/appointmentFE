export interface Venue {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  opening_hours: string;
  created_at: string;
  updated_at: string;
  images: Array<Image>;
  ratings: Array<Rating>;
}

interface Image {
  id: number;
  url: string;
}

interface Rating {
  id: number;
  score: number;
  user_id: number;
}
