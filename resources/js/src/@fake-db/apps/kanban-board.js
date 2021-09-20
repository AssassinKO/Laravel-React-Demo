import { getCustomDateObject } from '../../@jumbo/utils/dateHelper';

export const kanbanBoard = {
  boards: {
    lanes: [
      {
        currentPage: 1,
        id: 'board-tasks',
        title: 'Tasks',
        cards: [
          {
            id: 1,
            laneId: 'board-tasks',
            title: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random',
            description: '',
            memberIds: [1, 3],
            dueDate: new Date(2021, 6, 30),
            activities: [
              {
                id: 3,
                user: {
                  id: 1,
                  name: 'Albert Hall',
                  profilePic: 'https://via.placeholder.com/150x150',
                  email: 'albert-hall@example.com',
                },
                comment: 'This is my first comment',
                type: 'comment',
                isCover: true,
                createdAt: getCustomDateObject(-1, 'day'),
              },
              {
                id: 2,
                user: {
                  id: 1,
                  name: 'Albert Hall',
                  profilePic: 'https://via.placeholder.com/150x150/',
                  email: 'albert-hall@example.com',
                },
                name: 'avatar3.jpg',
                thumbnail: 'https://via.placeholder.com/150x150',
                fullImage: 'https://via.placeholder.com/500x300',
                metaData: { type: 'image/jpg', size: 8637 },
                type: 'attachment',
                isCover: true,
                createdAt: getCustomDateObject(-1.16, 'day'),
              },
              {
                id: 1,
                user: {
                  id: 1,
                  name: 'Albert Hall',
                  profilePic: 'https://via.placeholder.com/150x150',
                  email: 'albert-hall@example.com',
                },
                content: 'added this card to Tasks.',
                type: 'activity',
                createdAt: getCustomDateObject(-9, 'hours'),
              },
            ],
          },
        ],
      },
      {
        currentPage: 1,
        id: 'board-progress',
        title: 'In Progress',
        cards: [],
      },
      {
        currentPage: 1,
        id: 'board-done',
        title: 'Done',
        cards: [],
      },
    ],
  },
  members: [
    {
      id: 1,
      name: 'Albert Hall',
      profilePic: 'https://via.placeholder.com/150',
      email: 'albert-hall@example.com',
    },
    {
      id: 2,
      name: 'John Lee',
      profilePic: 'https://via.placeholder.com/150',
      email: 'john-lee@example.com',
    },
    {
      id: 3,
      name: 'Jackson Mucha',
      profilePic: 'https://via.placeholder.com/150',
      email: 'jackson-mucha@example.com',
    },
    {
      id: 4,
      name: 'Jonty Rhodes',
      profilePic: 'https://via.placeholder.com/150',
      email: 'jonty-rhodese@example.com',
    },
    {
      id: 5,
      name: 'Jonathan Twose',
      profilePic: 'https://via.placeholder.com/150',
      email: 'jonathan-twose@example.com',
    },
    {
      id: 6,
      name: 'Shane Krypto',
      profilePic: 'https://via.placeholder.com/150',
      email: 'shane-krypto@example.com',
    },
    {
      id: 7,
      name: 'Lisa Den',
      profilePic: 'https://via.placeholder.com/150',
      email: 'lisa-den@example.com',
    },
    {
      id: 8,
      name: 'Cheeni Kam',
      profilePic: 'https://via.placeholder.com/150',
      email: 'cheeni-kam@example.com',
    },
    {
      id: 9,
      name: 'Chilbram Putty',
      profilePic: 'https://via.placeholder.com/150',
      email: 'chilbran-putty@example.com',
    },
    {
      id: 10,
      name: 'Danny Morris',
      profilePic: 'https://via.placeholder.com/150',
      email: 'banny-morris@example.com',
    },
  ],
};
