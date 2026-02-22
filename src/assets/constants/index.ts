import { Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')
export const statusBar = StatusBar.currentHeight || 0

export const DEVICE = {
  width,
  height,
  statusBar,
}

export const logo = require('../images/logo.png')
export const onBoardingImage = require('../images/Onboarding/image-2.png')

export const onBoardingData = [
  {
    id: 1,
    title: 'Find best place to stay in good price',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    imageUri:
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Fast sell your property in just one click ',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    imageUri:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Find perfect choice for your future house ',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    imageUri:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
]
