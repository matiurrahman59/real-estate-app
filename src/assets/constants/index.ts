import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
export const statusBar = StatusBar.currentHeight || 0;

export const OTP_LENGTH = 4;
export const CORRECT_OTP = '1234';

export const DEVICE = {
  width,
  height,
  statusBar,
};

export interface OnBoardingDataProps {
  id: number;
  title: string;
  subText: string;
  imageUri: string;
}

export const googleIcon = require('../images/Login/Google.png');
export const facebookIcon = require('../images/Login/Facebook.png');
export const formImage = require('../images/Login/undraw_city_life.png');

export const onBoardingData: OnBoardingDataProps[] = [
  {
    id: 1,
    title: 'Find best place to \n\stay in/n/good price',
    subText:
      'Search homes in top locations with easy access to everything you need.',
    imageUri:
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Fast sell your property \n\in just/n/one click ',
    subText: 'List your property and connect with buyers in just a few clicks.',
    imageUri:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Find perfect choice for \n\your/n/future house ',
    subText: 'Work with experienced agents to find the best property deals.',
    imageUri:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'Discover luxury homes \n\with/n/best facilities',
    subText:
      'Explore premium houses with modern design and comfortable living.',
    imageUri:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const signInScreenImages = [
  {
    imageUri:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const OfferEstateList = [
  {
    id: 1,
    name: 'Halloween Sale',
    discount: 31,
    imageUrl:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  },
  {
    id: 2,
    name: 'Summer Sale',
    discount: 20,
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  },
  {
    id: 3,
    name: 'Winter Sale',
    discount: 25,
    imageUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
  },
  {
    id: 4,
    name: 'Spring Sale',
    discount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    id: 5,
    name: 'Black Friday Sale',
    discount: 40,
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
  },
  {
    id: 6,
    name: 'New Year Sale',
    discount: 18,
    imageUrl:
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
  },
  {
    id: 7,
    name: 'Christmas Sale',
    discount: 30,
    imageUrl:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
  },
  {
    id: 8,
    name: 'Flash Sale',
    discount: 50,
    imageUrl:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
  },
];

export const featureEstateList = [
  {
    id: 1,
    name: 'Concord Nahar Bilash',
    rating: 4.9,
    location: {
      city: 'Baridhara, Dhaka',
      lat: 23.8103,
      long: 90.424,
    },
    price: 57200,
    imageUri:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=60',
  },
  {
    id: 2,
    name: 'Ananta Terraces',
    rating: 4.8,
    location: {
      city: 'Madani Avenue, Dhaka',
      lat: 23.8223,
      long: 90.4349,
    },
    price: 52800,
    imageUri:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&q=60',
  },
  {
    id: 3,
    name: 'Gulshan Lake View Residences',
    rating: 4.7,
    location: {
      city: 'Gulshan, Dhaka',
      lat: 23.7808,
      long: 90.4147,
    },
    price: 67100,
    imageUri:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=60',
  },
  {
    id: 4,
    name: 'Banani Heights Tower',
    rating: 4.6,
    location: {
      city: 'Banani, Dhaka',
      lat: 23.7937,
      long: 90.4066,
    },
    price: 42900,
    imageUri:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&q=60',
  },
  {
    id: 5,
    name: 'Bashundhara Premium Suites',
    rating: 4.5,
    location: {
      city: 'Bashundhara R/A, Dhaka',
      lat: 23.813,
      long: 90.4243,
    },
    price: 34100,
    imageUri:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=60',
  },
];

export const topLocations = [
  {
    name: 'Gulshan',
    imageUri:
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&q=60',
  },
  {
    name: 'Banani',
    imageUri:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=60',
  },
  {
    name: 'Baridhara',
    imageUri:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=60',
  },
  {
    name: 'Bashundhara',
    imageUri:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=500&q=60',
  },
  {
    name: 'Dhanmondi',
    imageUri:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=60',
  },
  {
    name: 'Uttara',
    imageUri:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&q=60',
  },
];

export const topAgents = [
  {
    name: 'Rahman',
    imageUri:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=60',
  },
  {
    name: 'Fatema',
    imageUri:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=60',
  },
  {
    name: 'Karim',
    imageUri:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=60',
  },
  {
    name: 'Nusrat',
    imageUri:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=60',
  },
  {
    name: 'Shakil',
    imageUri:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=60',
  },
  {
    name: 'Riya',
    imageUri:
      'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=500&q=60',
  },
];

export const topLocationList = [
  {
    name: 'Gulshan',
    imageUri:
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&q=60',
  },
  {
    name: 'Banani',
    imageUri:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=60',
  },
  {
    name: 'Baridhara',
    imageUri:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=60',
  },
  {
    name: 'Bashundhara',
    imageUri:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=500&q=60',
  },
  {
    name: 'Dhanmondi',
    imageUri:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=60',
  },
  {
    name: 'Uttara',
    imageUri:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&q=60',
  },
];

export const topAgentList = [
  {
    name: 'Rahman',
    imageUri:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=60',
  },
  {
    name: 'Fatema',
    imageUri:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=60',
  },
  {
    name: 'Karim',
    imageUri:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=60',
  },
  {
    name: 'Nusrat',
    imageUri:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=60',
  },
  {
    name: 'Shakil',
    imageUri:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=60',
  },
  {
    name: 'Riya',
    imageUri:
      'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=500&q=60',
  },
];

export const dhakaEstateList = [
  {
    id: 1,
    name: 'Luxury Apartment in Gulshan',
    rating: 4.8,
    price: 85000,
    coverImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Road 11, Gulshan-2, Dhaka',
      lat: 23.7935,
      long: 90.4149,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 3, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 2, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 2, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 1, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 1, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 1850, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 2, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 3, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 4, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 2,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 10, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 3, icon: 'mosque' },
    ],
    agent: {
      name: 'Rafiqul Islam',
      phone: '+880 1711-234567',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    reviews: [
      {
        userName: 'Tanvir Ahmed',
        userImage: 'https://randomuser.me/api/portraits/men/45.jpg',
        rating: 5,
        comment:
          'Fantastic apartment with great views. The neighborhood is very safe and clean.',
      },
      {
        userName: 'Nusrat Jahan',
        userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4.5,
        comment:
          'Very spacious and well-maintained. Close to everything you need.',
      },
    ],
  },
  {
    id: 2,
    name: 'Modern Flat in Banani',
    rating: 4.6,
    price: 72000,
    coverImage:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Block C, Banani, Dhaka',
      lat: 23.7937,
      long: 90.4066,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 3, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 2, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 1, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 1, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 1, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 1650, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 1, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 2, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 3, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 3,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 15, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 2, icon: 'mosque' },
    ],
    agent: {
      name: 'Shahriar Hossain',
      phone: '+880 1812-345678',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    reviews: [
      {
        userName: 'Mehedi Hassan',
        userImage: 'https://randomuser.me/api/portraits/men/22.jpg',
        rating: 4.5,
        comment:
          'Great location in Banani. Easy access to cafes and restaurants.',
      },
      {
        userName: 'Farida Begum',
        userImage: 'https://randomuser.me/api/portraits/women/31.jpg',
        rating: 5,
        comment:
          'The flat is well-designed and feels very homely. Highly recommended!',
      },
    ],
  },
  {
    id: 3,
    name: 'Cozy Apartment in Dhanmondi',
    rating: 4.4,
    price: 55000,
    coverImage:
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800',
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Road 27, Dhanmondi, Dhaka',
      lat: 23.7461,
      long: 90.3742,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 2, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 2, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 2, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 1, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 1, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 1400, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 3, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 2, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 5, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 2,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 12, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 4, icon: 'mosque' },
    ],
    agent: {
      name: 'Kamal Uddin',
      phone: '+880 1911-456789',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
    reviews: [
      {
        userName: 'Sabbir Rahman',
        userImage: 'https://randomuser.me/api/portraits/men/33.jpg',
        rating: 4,
        comment:
          'Dhanmondi is a great area. The apartment is clean and well-ventilated.',
      },
      {
        userName: 'Taslima Khatun',
        userImage: 'https://randomuser.me/api/portraits/women/55.jpg',
        rating: 4.5,
        comment: 'Loved the balcony views and the proximity to Dhanmondi Lake.',
      },
    ],
  },
  {
    id: 4,
    name: 'Spacious Duplex in Uttara',
    rating: 4.7,
    price: 90000,
    coverImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Sector 7, Uttara, Dhaka',
      lat: 23.8759,
      long: 90.3795,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 4, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 3, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 2, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 2, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 2, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 2800, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 2, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 4, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 6, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 3,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 8, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 5, icon: 'mosque' },
    ],
    agent: {
      name: 'Aminul Karim',
      phone: '+880 1611-567890',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
    },
    reviews: [
      {
        userName: 'Rezaul Haque',
        userImage: 'https://randomuser.me/api/portraits/men/41.jpg',
        rating: 5,
        comment:
          'Uttara is very peaceful. The duplex is huge and perfect for a family.',
      },
      {
        userName: 'Shirina Akter',
        userImage: 'https://randomuser.me/api/portraits/women/62.jpg',
        rating: 4.5,
        comment:
          'Beautiful duplex with ample space. Kids love the neighborhood.',
      },
    ],
  },
  {
    id: 5,
    name: 'Premium Suite in Baridhara',
    rating: 4.9,
    price: 110000,
    coverImage:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Block J, Baridhara, Dhaka',
      lat: 23.8103,
      long: 90.4244,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 4, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 4, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 3, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 2, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 2, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 3200, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 3, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 3, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 4, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 2,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 6, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 3, icon: 'mosque' },
    ],
    agent: {
      name: 'Nasrin Sultana',
      phone: '+880 1511-678901',
      image: 'https://randomuser.me/api/portraits/women/72.jpg',
    },
    reviews: [
      {
        userName: 'Imran Chowdhury',
        userImage: 'https://randomuser.me/api/portraits/men/82.jpg',
        rating: 5,
        comment:
          'Baridhara is the best area in Dhaka. This suite is absolutely premium.',
      },
      {
        userName: 'Roksana Parvin',
        userImage: 'https://randomuser.me/api/portraits/women/81.jpg',
        rating: 5,
        comment: 'Exceptional quality and location. Worth every taka!',
      },
    ],
  },
  {
    id: 6,
    name: 'Affordable Flat in Mirpur',
    rating: 4.2,
    price: 35000,
    coverImage:
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Section 10, Mirpur, Dhaka',
      lat: 23.8223,
      long: 90.3654,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 3, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 2, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 1, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 1, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 0, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 1200, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 2, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 3, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 7, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 1,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 20, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 6, icon: 'mosque' },
    ],
    agent: {
      name: 'Jahangir Alam',
      phone: '+880 1711-789012',
      image: 'https://randomuser.me/api/portraits/men/91.jpg',
    },
    reviews: [
      {
        userName: 'Belal Hossain',
        userImage: 'https://randomuser.me/api/portraits/men/12.jpg',
        rating: 4,
        comment:
          'Great value for money in Mirpur. Decent flat for a small family.',
      },
      {
        userName: 'Sultana Razia',
        userImage: 'https://randomuser.me/api/portraits/women/14.jpg',
        rating: 4.5,
        comment:
          'Peaceful area and helpful neighbors. Good for working professionals.',
      },
    ],
  },
  {
    id: 7,
    name: 'Modern Studio in Mohakhali',
    rating: 4.3,
    price: 28000,
    coverImage:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'DOHS, Mohakhali, Dhaka',
      lat: 23.7799,
      long: 90.4025,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 1, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 1, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 1, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 1, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 0, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 750, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 4, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 2, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 3, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 2,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 18, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 3, icon: 'mosque' },
    ],
    agent: {
      name: 'Farhana Islam',
      phone: '+880 1811-890123',
      image: 'https://randomuser.me/api/portraits/women/92.jpg',
    },
    reviews: [
      {
        userName: 'Shafiul Azam',
        userImage: 'https://randomuser.me/api/portraits/men/23.jpg',
        rating: 4,
        comment:
          'Perfect for bachelors. Very close to office hubs in Mohakhali.',
      },
      {
        userName: 'Mitu Akter',
        userImage: 'https://randomuser.me/api/portraits/women/25.jpg',
        rating: 4.5,
        comment: 'Compact but smartly designed. Love the natural lighting.',
      },
    ],
  },
  {
    id: 8,
    name: 'Family Residence in Bashundhara',
    rating: 4.7,
    price: 78000,
    coverImage:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    images: [
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
    ],
    location: {
      city: 'Dhaka',
      address: 'Block D, Bashundhara R/A, Dhaka',
      lat: 23.823,
      long: 90.4257,
    },
    roomFacilities: [
      { id: 'bedrooms', label: 'bedrooms', value: 4, icon: 'bed' },
      { id: 'bathrooms', label: 'bathrooms', value: 3, icon: 'bath' },
      { id: 'balconies', label: 'balconies', value: 2, icon: 'building' },
      { id: 'livingRooms', label: 'livingRooms', value: 1, icon: 'couch' },
      { id: 'kitchen', label: 'kitchen', value: 1, icon: 'utensils' },
      { id: 'parking', label: 'parking', value: 1, icon: 'parking' },
      { id: 'sqft', label: 'sqft', value: 2400, icon: 'ruler-combined' },
    ],
    locationFacilities: [
      { id: 'hospitals', label: 'hospitals', value: 2, icon: 'hospital' },
      { id: 'gasStations', label: 'gasStations', value: 3, icon: 'gas-pump' },
      { id: 'schools', label: 'schools', value: 5, icon: 'school' },
      {
        id: 'shoppingMalls',
        label: 'shoppingMalls',
        value: 4,
        icon: 'shopping-bag',
      },
      { id: 'restaurants', label: 'restaurants', value: 10, icon: 'utensils' },
      { id: 'mosques', label: 'mosques', value: 4, icon: 'mosque' },
    ],
    agent: {
      name: 'Rubel Miah',
      phone: '+880 1911-901234',
      image: 'https://randomuser.me/api/portraits/men/35.jpg',
    },
    reviews: [
      {
        userName: 'Zahirul Islam',
        userImage: 'https://randomuser.me/api/portraits/men/55.jpg',
        rating: 5,
        comment:
          'Bashundhara is a planned area and this home is perfectly situated.',
      },
      {
        userName: 'Hasna Hena',
        userImage: 'https://randomuser.me/api/portraits/women/35.jpg',
        rating: 4.5,
        comment:
          'Spacious and family-friendly. The kids have plenty of space to play.',
      },
    ],
  },
];
