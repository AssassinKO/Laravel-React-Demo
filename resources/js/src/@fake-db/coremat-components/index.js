import React from 'react';
import { Accessible, AccountCircle, AddShoppingCart, EventSeat, Tablet } from '@material-ui/icons';

export const coremat = {
  background: {
    color: '#9BE7FD',
    gradientColors: ['#03DAC5 -18.96%', '#6200EE 108.17%'],
    image: 'https://via.placeholder.com/830x301',
  },
  overlay: {
    color: '#000000',
    gradientColors: ['#03DAC5 -18.96%', '#6200EE 108.17%'],
    opacity: 0.3,
  },
  advancedCard: {
    icon: 'all-inclusive',
    avatar: 'https://via.placeholder.com/150x150',
    title: 'Complex Interaction',
    subTitle: 'September 14, 2016',
    contentTitle: 'Shrimp and Chorizo Paella',
    contentSubTitle: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
  },
  basicCard: {
    header: {
      icon: 'all-inclusive',
      avatar: 'https://via.placeholder.com/150x150',
      title: 'Complex Interaction',
      subTitle: 'September 14, 2016',
    },
    media: 'https://via.placeholder.com/575x480',
    content: {
      description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your\n' +
        '      guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    expendableContent: {
      text1: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      text2:
        'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\n' +
        '      heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\n' +
        '      browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken\n' +
        '      and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and\n' +
        '      pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add\n' +
        '      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
      text3:
        'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook\n' +
        '      without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to\n' +
        '      medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook\n' +
        '      again without stirring, until mussels have opened and rice is just tender, 5 to 7\n' +
        '      minutes more. (Discard any mussels that don’t open.)',
      text4: 'Set aside off of the heat to let rest for 10 minutes, and then serve.',
    },
  },
  timeline: [
    {
      point: '/images/pentagon.png',
      avatar: 'https://via.placeholder.com/150x150',
      time: '30 NOV, 1981',
      title: 'Established',
      icon: <EventSeat />,
      iconBG: 'green',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      point: '/images/pentagon1.png',
      avatar: 'https://via.placeholder.com/150x150',
      time: '20 APRIL, 1982',
      title: 'Completed first 50 projects',
      icon: <Tablet />,
      iconBG: 'purple',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,",
    },
    {
      point: '/images/pentagon.png',
      avatar: 'https://via.placeholder.com/150x150',
      time: '11 MAY, 1983',
      title: 'Took over JIMBA INC',
      icon: <Accessible />,
      iconBG: 'orange',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
    },
    {
      point: '/images/pentagon1.png',
      avatar: 'https://via.placeholder.com/150x150',
      time: '18 SEPT, 1984',
      title: 'Best builder award from usa builder board',
      icon: <AccountCircle />,
      iconBG: 'red',
      nodeText: '2 time',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      point: '/images/pentagon.png',
      avatar: 'https://via.placeholder.com/150x150',
      time: '30 NOV, 1985',
      title: 'completed first 100 projects',
      icon: <AddShoppingCart />,
      iconBG: 'blue',
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
  ],
  avatar: 'https://via.placeholder.com/150x150',
  avatars: [
    {
      title: 'John Smith',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      title: '',
      profile_pic: '',
    },
    {
      title: 'Nick Johns',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      title: 'Clair zita',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      title: 'Rock Hunter',
      profile_pic: '',
    },
    {
      title: 'Tom Wesly ',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      title: 'Lara Croft',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      title: 'Lucy Frandis',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    {
      title: 'Ira Shorter',
      profile_pic: '',
    },
    {
      title: 'Kaim Dayol',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
  ],
  mediaObject: {
    avatar: 'https://via.placeholder.com/150x150',
    title: 'John Doe',
    subtitle: 'Posted on February 19, 2016',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
  },
  carouselImages: [
    {
      title: 'John Smith',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
    {
      title: 'Nick Johns',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
    {
      title: 'Clair zita',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
    {
      title: 'Tom Wesly ',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
    {
      title: 'Lara Croft',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
    {
      title: 'Lucy Frandis',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
    {
      title: 'Kaim Dayol',
      profile_pic: 'https://via.placeholder.com/150x150',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ',
    },
  ],
  users: [
    {
      title: 'John Smith',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Nick Johns',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Clair zita',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Tom Wesly ',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Lara Croft',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Lucy Frandis',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Kaim Dayol',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'John Smith',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Nick Johns',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Clair zita',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      title: 'Tom Wesly ',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
  ],
  projects: [
    {
      projectName: 'Drift Angular',
      title: 'John Smith',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Wieldy React ',
      title: 'Nick Johns',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Drift Angular',
      title: 'Clair zita',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Jumbo React ',
      title: 'Tom Wesly ',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Wieldy React ',
      title: 'Lara Croft',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Jumbo React ',
      title: 'Lucy Frandis',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Drift Angular',
      title: 'Kaim Dayol',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Wieldy React ',
      title: 'John Smith',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Jumbo React ',
      title: 'Nick Johns',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Drift Angular',
      title: 'Clair zita',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
    {
      projectName: 'Wieldy React ',
      title: 'Tom Wesly ',
      profile_pic: 'https://via.placeholder.com/150x150',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
    },
  ],
  notifications: [
    {
      id: 1,
      name: 'Remy Sharp',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'all-inclusive',
      time: '5h',
      media: 'https://via.placeholder.com/600x400',
      status: 'unread',
    },
    {
      id: 2,
      name: 'Travis Howard',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'info',
      time: '10h',
      media: '',
      status: 'unread',
    },
    {
      id: 3,
      name: 'Sumitra Choudhary',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'all-inclusive',
      time: '1d',
      media: 'https://via.placeholder.com/600x400',
      status: 'unread',
    },
    {
      id: 4,
      name: 'Cindy Baker',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'favorite',
      time: '2d',
      media: 'https://via.placeholder.com/600x400',
      status: 'unread',
    },
    {
      id: 5,
      name: 'Agnes Walker',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'all-inclusive',
      time: '5d',
      media: 'https://via.placeholder.com/600x400',
      status: 'unread',
    },
    {
      id: 6,
      name: 'Trevor Henderson',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'info',
      time: '1w',
      media: '',
      status: 'unread',
    },
    {
      id: 7,
      name: 'Sumitra Choudhary',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'all-inclusive',
      time: '4w',
      media: 'https://via.placeholder.com/600x400',
      status: 'unread',
    },
    {
      id: 8,
      name: 'Sumitra Choudhary',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'favorite',
      time: '1m',
      media: 'https://via.placeholder.com/600x400',
      status: 'unread',
    },
    {
      id: 9,
      name: 'Trevor Henderson',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'info',
      time: '2m',
      media: '',
      status: 'unread',
    },
    {
      id: 10,
      name: 'Sharp Henderson',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'favorite',
      time: '5m',
      media: '',
      status: 'unread',
    },
    {
      id: 11,
      name: 'Travis  Baker',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'all-inclusive',
      time: '6m',
      media: 'https://via.placeholder.com/400x400',
      status: 'unread',
    },
    {
      id: 12,
      name: 'Agnes  Baker',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'info',
      time: '6m',
      media: 'https://via.placeholder.com/400x400',
      status: 'unread',
    },
    {
      id: 13,
      name: 'Sumitra Henderson',
      content: 'You have a new friend suggestion: ',
      avatar: 'https://via.placeholder.com/150x150',
      icon: 'all-inclusive',
      time: '7m',
      media: 'https://via.placeholder.com/600x400',
      status: 'read',
    },
  ],
};
