import { CREATE_POST, GET_FEED_POSTS, GET_USER_DETAIL, UPDATE_POST } from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  userDetail: null,
  recentActivities: [],
  feedPosts: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER_DETAIL: {
      return { ...state, userDetail: action.payload };
    }

    case GET_FEED_POSTS: {
      return { ...state, feedPosts: action.payload };
    }

    case CREATE_POST: {
      return {
        ...state,
        feedPosts: [action.payload, ...state.feedPosts],
      };
    }

    case UPDATE_POST: {
      return {
        ...state,
        feedPosts: state.feedPosts.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }
    default:
      return state;
  }
};
