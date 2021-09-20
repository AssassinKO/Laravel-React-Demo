import { Translate, FontDownload, Hotel, Send, LocationOn } from '@material-ui/icons';
import React from 'react';

export const products = [
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Alarm Clock',
    variant: 'Gold ',
    mrp: '$990 ',
    price: '$699 ',
    offer: '29 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 5,
    description: 'Horo is a home grown brand with utmost emphasis on quality goods to users... ',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Bizinto 1 Three Pin',
    variant: 'White',
    mrp: '$490 ',
    price: '$399 ',
    offer: '29 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 4,
    description: 'Bizinto is an indirectly manufacture of Power strip in Delhi and supplying...',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Samons Flameless',
    variant: 'Black',
    mrp: '$49 ',
    price: '$39 ',
    offer: '30 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.3,
    description: 'Now light your cigarette buds with ease by using this USB Rechargeable...',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Sony MDR-ZX110',
    variant: 'White',
    mrp: '$29 ',
    price: '$15 ',
    offer: '49 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.5,
    description: 'Experience great sound quality with weight and foldable headphones...',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'iPhone 7',
    variant: 'Black,500Htz',
    mrp: '$400 ',
    price: '$359 ',
    offer: '49 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 4.2,
    description: 'Bluetooth speaker, Karaoke singing, Car Stereo, instrument recording etc... •',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Stonx v2.1',
    variant: 'Black',
    mrp: '$29 ',
    price: '$15 ',
    offer: '49 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.1,
    description: '1 Bluetooth Dongle, 1 Aux Cable, 1 Usb Cable, 1 Manual...',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'T-Shirts',
    variant: 'White',
    mrp: '$10 ',
    price: '$5 ',
    offer: '50 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.1,
    description: '1 Bluetooth Dongle, 1 Aux Cable, 1 Usb Cable, 1 Manual...',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Led',
    variant: 'Gold ',
    mrp: '$10 ',
    price: '$20 ',
    offer: '50%',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 5,
    description: 'Horo is a home grown brand with emphasis on quality goods to our users... ',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'football',
    variant: 'Black',
    mrp: '$490 ',
    price: '$399 ',
    offer: '29 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 4,
    description: 'Bizinto is an indirectly manufacture of Power strip in Delhi and supplying in all over india...',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'wach',
    variant: 'Black',
    mrp: '$49 ',
    price: '$39 ',
    offer: '30 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.3,
    description: 'Now light your cigarette buds with ease by using this USB Rechargeable Electronic Flameless Lighter.',
  },
  {
    image: 'https://via.placeholder.com/600x450',
    title: 'fan',
    variant: 'White,full speed',
    mrp: '$29 ',
    price: '$15 ',
    offer: '49 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.5,
    description: 'Experience great sound quality with these light weight and fordable headphones.',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Padraig Q7 Handheld',
    variant: 'Black,500Htz',
    mrp: '$56 ',
    price: '$35 ',
    offer: '49 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 4.2,
    description: 'Bluetooth speaker, Karaoke singing, Car Stereo, instrument recording, interviews, podcasting, etc. •',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'speaker Car Bluetooth ',
    variant: 'Black',
    mrp: '$29 ',
    price: '$15 ',
    offer: '49 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.1,
    description: '1 Bluetooth Dongle, 1 Aux Cable, 1 Usb Cable, 1 Manual',
  },
  {
    image: 'https://via.placeholder.com/600x450',
    title: 'Running Shoes',
    variant: 'Black',
    mrp: '$10 ',
    price: '$5 ',
    offer: '50 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 3.1,
    description: '1 Bluetooth Dongle, 1 Aux Cable, 1 Usb Cable, 1 Manual',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Alarm Clock',
    variant: 'Gold ',
    mrp: '$990 ',
    price: '$699 ',
    offer: '29 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 5,
    description: 'Horo is a home grown brand with utmost emphasis on quality goods ',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Bizinto 1 Three Pin',
    variant: 'White',
    mrp: '$490 ',
    price: '$399 ',
    offer: '29 %',
    reviews: [
      {
        rating: 5,
        count: 3,
      },
      {
        rating: 4,
        count: 5,
      },
      {
        rating: 3,
        count: 5,
      },
      {
        rating: 2,
        count: 0,
      },
      {
        rating: 1,
        count: 3,
      },
    ],
    rating: 4,
    description: 'Bizinto is an indirectly manufacture of Power strip in Delhi and supplying...',
  },
];

export const calloutsData = [
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Cedar Barrel Sauna',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
  },
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Traditional Saunas',
    description:
      'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Traditional Saunas',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Cedar Barrel Sauna',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Traditional Saunas',
    description:
      ' All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
  },
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Infrared Saunas',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    image: 'https://via.placeholder.com/500x330',
    title: 'Infrared Saunas',
    description:
      "Many desktop publishing packages and web page editor now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

export const pricingList = [
  {
    price: 25,
    title: 'Personal',
    products: [
      { icon: <Translate />, title: 'Easy Translation' },
      { icon: <FontDownload />, title: 'Easy Translation' },
      { icon: <Hotel />, title: 'Easy Translation' },
      { icon: <Send />, title: 'Easy Translation' },
      { icon: <LocationOn />, title: 'Easy Translation' },
    ],
  },
  {
    price: 99,
    title: 'BUSINESS',
    products: [
      { icon: <Translate />, title: 'Easy Translation' },
      { icon: <FontDownload />, title: 'Easy Translation' },
      { icon: <Hotel />, title: 'Easy Translation' },
      { icon: <Send />, title: 'Easy Translation' },
      { icon: <LocationOn />, title: 'Easy Translation' },
    ],
  },
  {
    price: 49,
    title: 'PROFESSIONAL',
    products: [
      { icon: <Translate />, title: 'Easy Translation' },
      { icon: <FontDownload />, title: 'Easy Translation' },
      { icon: <Hotel />, title: 'Easy Translation' },
      { icon: <Send />, title: 'Easy Translation' },
      { icon: <LocationOn />, title: 'Easy Translation' },
    ],
  },
];
