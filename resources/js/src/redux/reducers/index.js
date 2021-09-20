import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Common from './Common';
import Dashboard from './Dashboard';
import TaskList from './TaskList';
import MailApp from './MailApp';
import Chat from './Chat';
import ContactApp from './ContactApp';
import ProfileApp from './ProfileApp';
import WallApp from './WallApp';
import Auth from './Auth';
import Users from './Users';

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    taskList: TaskList,
    dashboard: Dashboard,
    mailApp: MailApp,
    chat: Chat,
    auth: Auth,
    contactApp: ContactApp,
    profileApp: ProfileApp,
    wallApp: WallApp,
    usersReducer: Users,
  });
