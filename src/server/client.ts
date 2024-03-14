import { cache, action } from '@solidjs/router';
import { getUserProfileServer, logInServer, logOutServer } from './rpc';

export const logInAction = action(logInServer);

export const logOutAction = action(logOutServer);

export const getUserProfile = cache(getUserProfileServer, 'userProfile');
