import { getCustomDateTime } from '../../@jumbo/utils/dateHelper';

export const user = {
  id: 3432434,
  name: 'Kiley Brown',
  cover_pic: 'https://via.placeholder.com/348x332',
  username: 'kiley',
  location: 'Florida, USA',
  profile_pic: 'https://via.placeholder.com/150x150',
  followers: 2342,
  following: 47,
  email: 'domnicharris@example.com',
  website: 'www.domnic.com',
  phone: '+1-987(454)987',
  friends: {
    total: 327,
    frndProfiles: [
      {
        id: 4523,
        profile_pic: 'https://via.placeholder.com/150x150',
        name: 'Svetlana Harris',
        status: 'online',
      },
      {
        id: 5454,
        profile_pic: 'https://via.placeholder.com/150x150',
        name: 'Mark Taylor',
        status: 'offline',
      },
      {
        id: 3434,
        profile_pic: 'https://via.placeholder.com/150x150',
        name: 'Maxmilian',
        status: 'away',
      },
      {
        id: 3455,
        profile_pic: 'https://via.placeholder.com/150x150',
        name: 'Jonas Milian',
        status: 'away',
      },
      {
        id: 5634,
        profile_pic: 'https://via.placeholder.com/150x150',
        name: 'Josh Brake',
        status: 'offline',
      },
    ],
    mutual: 27,
  },
  pictures: [
    {
      id: 123,
      url: 'https://via.placeholder.com/150x150',
      size: '1.2 mb',
      name: 'Aunt',
    },
    {
      id: 456,
      url: 'https://via.placeholder.com/150x150',
      size: '2.2 mb',
      name: 'Doctor',
    },
    {
      id: 456,
      url: 'https://via.placeholder.com/150x150',
      size: '4.2 mb',
      name: 'Candid',
    },
    {
      id: 76456,
      url: 'https://via.placeholder.com/80x80',
      size: '1.9 mb',
      name: 'Watch',
    },
    {
      id: 456,
      url: 'https://via.placeholder.com/150x150',
      size: '1.6 mb',
      name: 'Me',
    },
    {
      id: 456,
      url: 'https://via.placeholder.com/150x150',
      size: '1.4 mb',
      name: 'Candid',
    },
  ],
  company: 'G-axon Tech Pvt. Ltd.',
  birthday: 'Oct 25, 1994',
  college: 'Oxford University',
  locality: 'Switzerland',
  family: [
    {
      id: 4343,
      name: 'John',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      id: 5454,
      name: 'Dhruva Sharma',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      id: 8965,
      name: 'Lily Taylor',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      id: 3457,
      name: 'Josh',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
  ],
  events: [
    {
      id: 123,
      type: 'Musical Concert',
      title: 'Sundance Film Festival',
      location: 'Downsview Park, Toronto, Canada',
      date: 'Feb 23, 2020',
      thumb: 'https://via.placeholder.com/575x480',
    },
    {
      id: 433,
      type: 'Magic Show',
      title: 'Underwater Musical Festival',
      location: 'Downsview Park, Toronto, Canada',
      date: 'Feb 11, 2020',
      thumb: 'https://via.placeholder.com/575x480',
    },
    {
      id: 654,
      type: 'Musical Concert',
      title: 'Village Feast Fac',
      location: 'Downsview Park, Toronto, Canada',
      date: 'Jan 02, 2020',
      thumb: 'https://via.placeholder.com/575x480',
    },
  ],
  interests: ['Music', 'Graphic Design', 'Drawing', 'Sports', 'Tourism'],
  communities: [
    {
      id: 33232,
      name: 'Friends',
      thumb: 'https://via.placeholder.com/112x103',
    },
    {
      id: 45435,
      name: 'Event',
      thumb: 'https://via.placeholder.com/112x103',
    },
    {
      id: 43323,
      name: 'Birthday',
      thumb: 'https://via.placeholder.com/112x103',
    },
    {
      id: 78565,
      name: 'Family',
      thumb: 'https://via.placeholder.com/112x103',
    },
    {
      id: 87967,
      name: 'Work',
      thumb: 'https://via.placeholder.com/112x103',
    },
    {
      id: 90777,
      name: 'Other',
      thumb: 'https://via.placeholder.com/112x103',
    },
  ],
};

export const postsList = [
  {
    id: 123,
    owner: {
      name: 'Kiley Brown',
      profile_pic: 'https://via.placeholder.com/150x150',
      id: 3432434,
    },
    date: getCustomDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    attachments: [
      {
        id: 123,
        path: 'https://via.placeholder.com/318x175',
        preview: 'https://via.placeholder.com/318x175',
        metaData: { type: 'images/jpg', size: 4543 },
      },
      {
        id: 455,
        path: 'https://via.placeholder.com/318x175',
        preview: 'https://via.placeholder.com/318x175',
        metaData: { type: 'images/jpg', size: 2345 },
      },
    ],
    content: 'Nature beauty at its best.',
    liked: true,
    likes: 345,
    shares: 124,
    views: 12,
    comments: [
      {
        id: 21,
        owner: {
          name: 'James Jennie',
          profile_pic: 'https://via.placeholder.com/150x150',
          id: 343432,
        },
        liked: true,
        comment: 'Wow! Excellent, these images are so beautiful.',
        date: getCustomDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
      },
    ],
  },
  {
    id: 4353,
    owner: {
      name: 'Sara Taylor',
      profile_pic: 'https://via.placeholder.com/150x150',
      id: 344343,
    },
    date: getCustomDateTime(-2, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    attachments: [
      {
        id: 544,
        path: 'https://via.placeholder.com/196x135',
        preview: 'https://via.placeholder.com/196x135',
        metaData: { type: 'images/jpg', size: 4056 },
      },
      {
        id: 676,
        path: 'https://via.placeholder.com/196x135',
        preview: 'https://via.placeholder.com/196x135',
        metaData: { type: 'images/jpg', size: 4056 },
      },
      {
        id: 545,
        path: 'https://via.placeholder.com/196x135',
        preview: 'https://via.placeholder.com/196x135',
        metaData: { type: 'images/jpg', size: 4056 },
      },
    ],
    content: 'Nature beauty at its best.',
    liked: false,
    likes: 4545,
    shares: 334,
    views: 54654,
    comments: [
      {
        id: 5465,
        owner: {
          name: 'James Jennie',
          profile_pic: 'https://via.placeholder.com/150x150',
          id: 343432,
        },
        liked: true,
        comment: 'Wow! Excellent, these images are so beautiful.',
        date: getCustomDateTime(0, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
      },
    ],
  },
  {
    id: 4354,
    owner: {
      name: 'Domnic Harris',
      profile_pic: 'https://via.placeholder.com/150x150',
      id: 3432434,
    },
    date: getCustomDateTime(-3, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    attachments: [
      {
        id: 5677,
        path: 'https://via.placeholder.com/660x284',
        preview: 'https://via.placeholder.com/660x284',
        metaData: { type: 'images/jpg', size: 4056 },
      },
    ],
    content: '',
    liked: true,
    likes: 454,
    shares: 67,
    views: 5465,
    comments: [],
  },
];
