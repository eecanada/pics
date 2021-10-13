import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID duFg4FuOQ59WE8ubtioncwLhYFFPr71WM--7gX-0nZU',
  },
});
