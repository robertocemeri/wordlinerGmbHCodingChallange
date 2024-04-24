// properties.ts

export interface Property {
    id: number;
    address: string;
    description: string;
    price: number;
    status: 'Available' | 'Sold' | 'Under Contract';
  }
  
  const properties: Property[] = [
    {
      id: 1,
      address: '123 Main St',
      description: 'Beautiful house in a quiet neighborhood',
      price: 2500.23,
      status: 'Available',
    },
    {
      id: 2,
      address: '456 Elm St',
      description: 'Spacious apartment with a view',
      price: 1500,
      status: 'Available',
    },
    {
        id: 3,
        address: '789 Oak St',
        description: 'Cozy cottage near the beach',
        price: 300,
        status: 'Sold',
    },
    {
        id: 4,
        address: '101 Pine St',
        description: 'Luxury penthouse with city views',
        price: 10020,
        status: 'Under Contract',
    },
    {
        id: 5,
        address: '202 Maple St',
        description: 'Rustic cabin in the woods',
        price: 502300,
        status: 'Available',
    },
    {
        id: 6,
        address: '303 Cedar St',
        description: 'Modern townhouse in the heart of the city',
        price: 4000,
        status: 'Available',
    },
    {
        id: 7,
        address: '404 Walnut St',
        description: 'Historic mansion with a garden Historic mansion with a garden Historic mansion with a garden Historic mansion with a garden Historic mansion with a garden' ,
        price: 750000,
        status: 'Available',
    },
    {
        id: 8,
        address: '505 Birch St',
        description: 'Charming bungalow with a porch',
        price: 200000,
        status: 'Available',
    },
    {
        id: 9,
        address: '606 Spruce St',
        description: 'Quaint cottage with a picket fence',
        price: 100000,
        status: 'Available',
    },
    {
        id: 10,
        address: '707 Ash St',
        description: 'Contemporary loft with an open floor plan',
        price: 300000,
        status: 'Available',
    },
    {
        id: 11,
        address: '808 Sycamore St',
        description: 'Stylish condo in a trendy neighborhood',
        price: 500000,
        status: 'Available',
    },
    {
        id: 12,
        address: '909 Hemlock St',
        description: 'Spacious duplex with a backyard',
        price: 700000,
        status: 'Available',
    },
    {
        id: 13,
        address: '1010 Fir St',
        description: 'Cozy studio with a view of the park',
        price: 1000000,
        status: 'Available',
    },
    {
        id: 14,
        address: '1111 Redwood St',
        description: 'Rustic cabin in the mountains',
        price: 2000000,
        status: 'Available',
    },
    {
        id: 15,
        address: '1212 Cedar St',
        description: 'Modern townhouse with a rooftop deck',
        price: 3000000,
        status: 'Available',
    },
    {
        id: 8,
        address: '505 Birch St',
        description: 'Charming bungalow with a porch',
        price: 200000,
        status: 'Available',
    },
    {
        id: 9,
        address: '606 Spruce St',
        description: 'Quaint cottage with a picket fence',
        price: 100000,
        status: 'Available',
    },
    {
        id: 10,
        address: '707 Ash St',
        description: 'Contemporary loft with an open floor plan',
        price: 300000,
        status: 'Available',
    },
    {
        id: 11,
        address: '808 Sycamore St',
        description: 'Stylish condo in a trendy neighborhood',
        price: 500000,
        status: 'Available',
    },
    {
        id: 12,
        address: '909 Hemlock St',
        description: 'Spacious duplex with a backyard',
        price: 700000,
        status: 'Available',
    },
    {
        id: 13,
        address: '1010 Fir St',
        description: 'Cozy studio with a view of the park',
        price: 1000000,
        status: 'Available',
    },
    {
        id: 14,
        address: '1111 Redwood St',
        description: 'Rustic cabin in the mountains',
        price: 2000000,
        status: 'Available',
    },
    {
        id: 15,
        address: '1212 Cedar St',
        description: 'Modern townhouse with a rooftop deck',
        price: 3000000,
        status: 'Available',
    }
  ];
  
export default properties;
  
export const propertyStatusOptions = [
    {
        value: 'Available',
        label: 'Available',
    },
    {
        value: 'Sold',
        label: 'Sold',
    },
    {
        value: 'Under Contract',
        label: 'Under Contract',
    }
];

export const sortOptions = [
    {
        value: 'asc',
        label: 'Asc',
    },
    {
        value: 'desc',
        label: 'Desc',
    },
];
