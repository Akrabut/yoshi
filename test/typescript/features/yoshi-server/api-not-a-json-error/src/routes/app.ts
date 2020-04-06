import { route } from 'yoshi-server';
import HttpClient from 'yoshi-server-client';
import { greet } from '../api/greeting.api';

const client = new HttpClient({ baseUrl: 'http://localhost:3000' });

export default route(async function() {
  const result = await client.request({ method: greet, args: ['Yaniv'] });

  return result;
});