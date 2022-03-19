export interface PropertyInterface {
  id: number;
  coverPhoto: CoverPhoto;
  rentFrequency: string;
  rooms: number;
  baths: number;
  title: string;
  price: number;
  area: number;
  agency: Agency | null;
  isVerified: boolean;
  externalID: string;
}

export interface HomeProps {
  propertiesForSale: Array<PropertyInterface>;
  propertiesForRent: Array<PropertyInterface>;
}

interface CoverPhoto {
  id: number;
  externalID: string;
  title: string | null;
  url: string;
  orderIndex: number;
  nimaScore: number;
  main: boolean;
}

interface Agency {
  id: number;
  objectID: number;
  name: string;
  externalID: string;
  product: string;
  productScore: number;
  logo: { id: number; url: string } | null;
  slug: string;
  tier: number;
  commercialNumber: string | number | null;
}
