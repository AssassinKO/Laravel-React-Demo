import Box from '@material-ui/core/Box';
import React from 'react';
import { getCustomDateTime } from '../../@jumbo/utils/dateHelper';

export const statisticsGraphData = [
  { month: 'Jan', price: 200 },
  { month: 'Feb', price: 300 },
  { month: 'Mar', price: 550 },
  { month: 'Apr', price: 500 },
  { month: 'May', price: 700 },
  { month: 'Jun', price: 450 },
  { month: 'Jul', price: 770 },
  { month: 'Aug', price: 900 },
];

export const dealsAnalyticsData = [
  { month: 'Jan', queries: 400, deals: 400 },
  { month: 'Feb', queries: 500, deals: 600 },
  { month: 'Mar', queries: 400, deals: 300 },
  { month: 'Apr', queries: 350, deals: 200 },
  { month: 'May', queries: 700, deals: 700 },
  { month: 'Jun', queries: 100, deals: 600 },
  { month: 'Jul', queries: 500, deals: 50 },
  { month: 'Aug', queries: 350, deals: 550 },
  { month: 'Sep', queries: 300, deals: 200 },
  { month: 'Oct', queries: 200, deals: 500 },
  { month: 'Nov', queries: 200, deals: 600 },
  { month: 'Dec', queries: 200, deals: 100 },
];

export const popularAgents = [
  {
    id: 1,
    name: 'Albert Hall',
    deals: 23,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 3.5,
    profileCompleted: 10,
  },
  {
    id: 2,
    name: 'John Hall',
    deals: 20,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 4.5,
    profileCompleted: 10,
  },
  {
    id: 3,
    name: 'Jackson Hall',
    deals: 21,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 3.5,
    profileCompleted: 10,
  },
  {
    id: 4,
    name: 'Jonty Hall',
    deals: 22,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 4.5,
    profileCompleted: 10,
  },
  {
    id: 5,
    name: 'Jonathan Hall',
    deals: 23,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 3.5,
    profileCompleted: 10,
  },
  {
    id: 6,
    name: 'Shane Hall',
    deals: 24,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 4.5,
    profileCompleted: 10,
  },
  {
    id: 7,
    name: 'Lisa Hall',
    deals: 25,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 3.5,
    profileCompleted: 10,
  },
  {
    id: 8,
    name: 'Cheeni Hall',
    deals: 26,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 4.5,
    profileCompleted: 10,
  },
  {
    id: 9,
    name: 'Chilbram Hall',
    deals: 27,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 3.5,
    profileCompleted: 10,
  },
  {
    id: 10,
    name: 'Danny Hall',
    deals: 83,
    profilePic: 'https://via.placeholder.com/150x150',
    rating: 4.5,
    profileCompleted: 10,
  },
];

export const propertyTabCategories = [
  { name: 'New Jersey', slug: 'new_jersey' },
  { name: 'Colorado', slug: 'colorado' },
  { name: 'Albama', slug: 'albama' },
];

export const propertiesList = [
  {
    id: 1,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Luxury family home at beach side',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 26, 2020',
    availability: 'sale',
    isTrending: true,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'new_jersey',
  },
  {
    id: 2,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Sunset view Apartment in Colarado',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 25, 2020',
    availability: 'rent',
    isTrending: false,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'colorado',
  },
  {
    id: 3,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Best property in Albama',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 23, 2020',
    availability: 'rent',
    isTrending: false,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'albama',
  },
  {
    id: 4,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Best house deal in New jersey',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 24, 2020',
    availability: 'sale',
    isTrending: false,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'new_jersey',
  },
  {
    id: 5,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Luxury apartment in Colarado',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 28, 2020',
    availability: 'rent',
    isTrending: true,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'colorado',
  },
  {
    id: 6,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Plot in Albama',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 29, 2020',
    availability: 'sale',
    isTrending: true,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'albama',
  },
  {
    id: 7,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'House in New jersey',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 24, 2020',
    availability: 'sale',
    isTrending: false,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'new_jersey',
  },
  {
    id: 8,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Flat in Colarado',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 20, 2020',
    availability: 'rent',
    isTrending: true,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'colorado',
  },
  {
    id: 9,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: '3 BHK house in Albama',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 28, 2020',
    availability: 'sale',
    isTrending: false,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'albama',
  },
  {
    id: 10,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Best house for family in New Jersey',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 26, 2020',
    availability: 'rent',
    isTrending: true,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'new_jersey',
  },
  {
    id: 11,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Villa in Colarado',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 16, 2020',
    availability: 'rent',
    isTrending: true,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'colorado',
  },
  {
    id: 12,
    images: [
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 1',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 2',
      },
      {
        image: 'https://via.placeholder.com/640x420',
        title: 'image 3',
      },
    ],
    title: 'Sunrise view apartment in Albama',
    address: '2972, Washington Road, New Jersey',
    bedrooms: 3,
    bathrooms: 3,
    area: '1400 m2',
    owner: { id: 1, name: 'John Nash' },
    publishedDate: 'June 28, 2020',
    availability: 'sale',
    isTrending: false,
    price: '$670,500',
    pricePerSqFt: '$587/sqft',
    category: 'albama',
  },
];

export const recentActivities = [
  {
    id: 1,
    date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Alex Dolgove',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [
      {
        id: 123,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/640x420',
      },
      {
        id: 124,
        name: 'Media2',
        mediaUrl: 'https://via.placeholder.com/640x420',
      },
      {
        id: 125,
        name: 'Media3',
        mediaUrl: 'https://via.placeholder.com/640x420',
      },
    ],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Alex Dolgove
      </Box>,
      'left a 5 star review on Albama’s House',
    ],
  },
  {
    id: 2,
    date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Kailasha',
      profilePic: '',
    },
    mediaList: [],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Kailasha
      </Box>,
      'is looking for a house in New Jersey, USA',
    ],
  },
  {
    id: 3,
    date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Chelsea Johns',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      'Agent ',
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Chelsea Johns
      </Box>,
      'has added 7 new photos to the property ',
      <Box component="span" color="primary.main">
        Albama's house
      </Box>,
    ],
  },
  {
    id: 4,
    date: getCustomDateTime(-1, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Domnic Brown',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [
      {
        id: 123,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/640x420',
      },
      {
        id: 124,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/640x420',
      },
      {
        id: 125,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/640x420',
      },
    ],
    content: [
      'Welcome to a new agent ',
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Domnic Brown
      </Box>,
      'in the company.',
    ],
  },
  {
    id: 5,
    date: getCustomDateTime(-1, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Michael Dogov',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Michael Dogov
      </Box>,
      'is looking for an office space in Colarado, USA.',
    ],
  },
  {
    id: 6,
    date: getCustomDateTime(-2, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Domnic Harris',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Domnic Harris
      </Box>,
      "left a 5 star rating on Albama's property.",
    ],
  },
  {
    id: 7,
    date: getCustomDateTime(-2, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Garry Sobars',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      ' Callback request from ',
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Garry Sobars
      </Box>,
      'for the property ',
      <Box component="span" color="primary.main" className="pointer">
        Dmitri house
      </Box>,
    ],
  },
  {
    id: 8,
    date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Guptil Sharma',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [
      {
        id: 123,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/122x122',
      },
      {
        id: 124,
        name: 'Media2',
        mediaUrl: 'https://via.placeholder.com/122x122',
      },
      {
        id: 125,
        name: 'Media3',
        mediaUrl: 'https://via.placeholder.com/122x122',
      },
    ],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Guptil Sharma
      </Box>,
      "left a 5 star rating on Aloboma's house",
    ],
  },
  {
    id: 9,
    date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Jeson Born',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Jeson Born
      </Box>,
      'is looking for a house in New jersey, USA.',
    ],
  },
  {
    id: 10,
    date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Jimmy Jo',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      'Agent ',
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Jimmy Jo
      </Box>,
      'has added 7 new photos to the property ',
      <Box component="span" color="primary.main">
        Albama's house
      </Box>,
    ],
  },
  {
    id: 11,
    date: getCustomDateTime(-1, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Jonathan Lee',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [
      {
        id: 123,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/122x122',
      },
      {
        id: 124,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/122x122',
      },
      {
        id: 125,
        name: 'Media1',
        mediaUrl: 'https://via.placeholder.com/122x122',
      },
    ],
    content: [
      'Welcome to a new agent ',
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Jonathan Lee
      </Box>,
      'in the company.',
    ],
  },
  {
    id: 12,
    date: getCustomDateTime(-1, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Joshua',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Joshua
      </Box>,
      'is looking for an office space in Colarado, USA.',
    ],
  },
  {
    id: 13,
    date: getCustomDateTime(-2, 'days', 'MMM DD, YYYY'),
    user: {
      id: 12,
      name: 'Stella Johnson',
      profilePic: 'https://via.placeholder.com/150x150',
    },
    mediaList: [],
    content: [
      <Box component="span" color="primary.main" className="pointer" mr={1}>
        Stella Johnson
      </Box>,
      "left a 5 star rating on Albama's property.",
    ],
  },
];

export const newCustomers = [
  {
    id: 1,
    name: 'Albert Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 2,
    name: 'John Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  { id: 3, name: 'Jackson Hall', profilePic: '' },
  {
    id: 4,
    name: 'Jonty Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 5,
    name: 'Jonathan Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 6,
    name: 'Shane Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 7,
    name: 'Lisa Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  { id: 8, name: 'Cheeni Hall', profilePic: '' },
  {
    id: 9,
    name: 'Chilbram Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 10,
    name: 'Danny Hall',
    profilePic: 'https://via.placeholder.com/150x150',
  },
];
