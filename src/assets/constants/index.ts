import { Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')
export const statusBar = StatusBar.currentHeight || 0

export const OTP_LENGTH = 4
export const CORRECT_OTP = '1234'

export const DEVICE = {
  width,
  height,
  statusBar,
}

export interface OnBoardingDataProps {
  id: number
  title: string
  subText: string
  imageUri: string
}

export const googleIcon = require('../images/Login/Google.png')
export const facebookIcon = require('../images/Login/Facebook.png')
export const formImage = require('../images/Login/undraw_city_life.png')

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
]

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
]

export const featureEstateList = [
  {
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
]

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
]

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
]
