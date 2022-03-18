export interface Response {
  id: number;
  name: string;
  name_l: string;
  agentsCount: number;
  externalID: string;
  product: string;
  productScore: number;
  location: string;
  location_l: string;
  slug: string;
  slug_l: string;
}

export interface HomeProps {
  propertiesForSale: Response;
  propertiesForRent: Response;
}
