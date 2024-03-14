'use server';
import { redirect } from '@solidjs/router';
import { deleteCookie, setCookie, getCookie } from 'vinxi/http';

export const logInServer = async (form: FormData) => {
  setCookie('auth_token', 'test_token');
  return redirect('/');
};

export const logOutServer = async (form: FormData) => {
  deleteCookie('auth_token');
  return redirect('/login');
};

export const getUserProfileServer = async () => {
  const token = getCookie('auth_token');
  console.log(token);
  if (!token) {
    return redirect('/login');
  }
  return 20000000;
};
