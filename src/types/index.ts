export type propertyType = {
  id: number;
  name: string;
  rating: number;
  price: number;
  coverImage: string;
  images: string[];
  location: {
    city: string;
    address: string;
    lat: number;
    long: number;
  };
  roomFacilities: {
    id: string;
    label: string;
    value: number;
    icon: string;
  }[];
  locationFacilities: {
    id: string;
    label: string;
    value: number;
    icon: string;
  }[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
  reviews: {
    userName: string;
    userImage: string;
    rating: number;
    comment: string;
  }[];
};
