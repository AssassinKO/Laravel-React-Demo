import mock from '../../mockConfig';
import { user } from '../../../@fake-db/apps/profile';

const userDetail = user;

mock.onGet('/profile').reply(200, userDetail);
