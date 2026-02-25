import { Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')
export const statusBar = StatusBar.currentHeight || 0

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
