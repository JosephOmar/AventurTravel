export interface Tour {
  id: string;
  tourOption: string;
  slug: string;
  title: string;
  name: string;
  imgSlider: string[];
  description: string;
  timeTravel: string;
  itinerary: string[];
  considerations: string[];
  additional: string[];
  price: number;
  imgCarousel: string[];
  comments: {
    img: string;
    name: string;
    description: string;
  }[];
}
