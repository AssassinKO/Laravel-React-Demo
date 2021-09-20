import moment from 'moment';

export const TaskStatus = Object.freeze({
  COMPLETED: 1,
  IN_PROGRESS: 2,
  NOT_STARTED: 3,
});

export const users = [
  {
    id: 1,
    email: 'robert@example.com',
    name: 'Alex Dolgove',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 2,
    name: 'Chelsea Johns',
    profilePic: 'https://via.placeholder.com/150x150',
    email: 'mukesh@example.com',
  },
  {
    id: 3,
    email: 'sonu@example.com',
    name: 'Domnic Brown',
    profilePic: 'https://via.placeholder.com/150x150',
  },
  {
    id: 4,
    name: 'Michael Dogov',
    profilePic: 'https://via.placeholder.com/150x150',
    email: 'dennis@example.com',
  },
  {
    id: 5,
    name: 'Domnic Harris',
    profilePic: 'https://via.placeholder.com/150x150',
    email: 'atul@example.com',
  },
  {
    id: 6,
    name: 'Garry Sobars',
    profilePic: 'https://via.placeholder.com/150x150',
    email: 'murli@example.com',
  },
  {
    id: 7,
    name: 'Guptil Sharma',
    profilePic: 'https://via.placeholder.com/150x150',
    email: 'tanmay@example.com',
  },
];
export const tasks = [
  {
    id: 1,
    title: 'Create branding guide for React Master project.',
    taskList: 1,
    assigned: {
      ...users[0],
    },
    attachments: [
      {
        id: 1,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 2,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 3,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 4,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 5,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
    ],
    collaborators: [
      {
        id: 6,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      {
        id: 7,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
    ],
    isStared: true,
    isCompleted: true,
    comments: [
      {
        id: 1,
        user: users[0],
        message: 'Hi @Mukesh k. Do I have any anyting left in this task?',
        createdAt: '',
      },
      {
        id: 2,
        user: users[1],
        message: 'Hi @John Smith Everything Done! Fantastic job ',
        createdAt: '',
      },
      {
        id: 3,
        user: users[0],
        message: 'Hi @Mukesh Great ',
        createdAt: '',
      },
    ],
    subTasks: [
      {
        id: 11,
        title: 'Define color pallate',
        status: TaskStatus.COMPLETED,
        createdAt: '',
        assigned: {
          ...users[0],
        },
        updatedAt: '',
      },
      {
        id: 12,
        title: 'Create style guide docs.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        assigned: {
          ...users[0],
        },
        updatedAt: '',
      },
      {
        id: 13,
        title: 'React Master project.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        assigned: {
          ...users[0],
        },
        updatedAt: '',
      },
      {
        id: 14,
        title: 'Define color pallate',
        status: TaskStatus.COMPLETED,
        createdAt: '',
        assigned: {
          ...users[0],
        },
        updatedAt: '',
      },
      {
        id: 15,
        title: 'Create style guide docs.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        assigned: {
          ...users[0],
        },
        updatedAt: '',
      },
    ],
    dueDate: moment().subtract(2, 'days'),
  },
  {
    id: 2,
    title: 'Create branding guide for React Master project. 2',
    taskList: 1,
    assigned: {
      ...users[1],
    },
    attachments: [
      {
        id: 1,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 2,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 3,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
    ],
    collaborators: [
      {
        id: 6,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      {
        id: 7,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
    ],
    isStared: false,
    isCompleted: false,
    comments: [
      {
        id: 1,
        user: users[0],
        message: 'Hi @Mukesh k. Do I have any anyting left in this task?',
        createdAt: '',
      },
      {
        id: 2,
        user: users[1],
        message: 'Hi @John Smith Everything Done! Fantastic job ',
        createdAt: '',
      },
    ],
    subTasks: [
      {
        id: 11,
        title: 'Define color pallate',
        status: TaskStatus.COMPLETED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
      {
        id: 12,
        title: 'Create style guide docs.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
      {
        id: 13,
        title: 'React Master project.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
    ],
    dueDate: moment().subtract(1, 'days'),
  },
  {
    id: 3,
    title: 'Create branding guide for React Master project. 3',
    taskList: 1,
    assigned: {
      ...users[0],
    },
    attachments: [
      {
        id: 1,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 2,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 3,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
    ],
    collaborators: [
      {
        id: 6,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      {
        id: 7,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
    ],
    isStared: true,
    isCompleted: true,
    comments: [
      {
        id: 1,
        user: users[0],
        message: 'Hi @Mukesh k. Do I have any anyting left in this task?',
        createdAt: '',
      },
      {
        id: 2,
        user: users[1],
        message: 'Hi @John Smith Everything Done! Fantastic job ',
        createdAt: '',
      },
    ],
    subTasks: [
      {
        id: 11,
        title: 'Define color pallate',
        status: TaskStatus.COMPLETED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
      {
        id: 12,
        title: 'Create style guide docs.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
    ],
    dueDate: moment(),
  },
  {
    id: 4,
    title: 'Create branding guide for React Master project. 4',
    taskList: 2,
    assigned: {
      ...users[1],
    },
    collaborators: [
      {
        id: 6,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      {
        id: 7,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
    ],
    isStared: false,
    isCompleted: false,
    comments: [
      {
        id: 1,
        user: users[0],
        message: 'Hi @Mukesh k. Do I have any anyting left in this task?',
        createdAt: '',
      },
      {
        id: 2,
        user: users[1],
        message: 'Hi @John Smith Everything Done! Fantastic job ',
        createdAt: '',
      },
    ],
    attachments: [
      {
        id: 1,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 2,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 3,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
    ],
    subTasks: [
      {
        id: 11,
        title: 'Define color pallate',
        status: TaskStatus.COMPLETED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
      {
        id: 12,
        title: 'Create style guide docs.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
    ],
    dueDate: moment().add(1, 'days'),
  },
  {
    id: 5,
    title: 'Create branding guide for React Master project. 5',
    taskList: 2,
    assigned: {
      ...users[1],
    },
    attachments: [
      {
        id: 1,
        name: 'Test Image.png',
        path: '',
        metaData: {
          size: 35536,
          type: 'image/png',
        },
      },
      {
        id: 2,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
      {
        id: 3,
        name: 'Test Image.png',
        path: '',
        metaData: {},
      },
    ],
    collaborators: [
      {
        id: 6,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      {
        id: 7,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
    ],
    isStared: true,
    isCompleted: true,
    comments: [
      {
        id: 1,
        user: users[0],
        message: 'Hi @Mukesh k. Do I have any anyting left in this task?',
        createdAt: '',
      },
      {
        id: 2,
        user: users[1],
        message: 'Hi @John Smith Everything Done! Fantastic job ',
        createdAt: '',
      },
    ],
    subTasks: [
      {
        id: 11,
        title: 'Define color pallate',
        status: TaskStatus.COMPLETED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
      {
        id: 12,
        title: 'Create style guide docs.',
        status: TaskStatus.NOT_STARTED,
        createdAt: '',
        updatedAt: '',
        assigned: {
          ...users[0],
        },
      },
    ],
    dueDate: moment().add(2, 'days'),
  },
];

export const taskLists = [
  {
    id: 1,
    name: 'General',
    color: '#FF8C00',
  },
  {
    id: 2,
    name: 'Jumbo React',
    color: '#0795F4',
  },
];
