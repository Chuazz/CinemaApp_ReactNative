import {format} from 'date-fns';
import {FILM_API, FILM_API_KEY} from '@env';

const CURR_DATE = format(new Date(), 'yyyy-MM-dd');

const filmAPI = {
  img: 'https://image.tmdb.org/t/p/w500',
  list: (page: number = 1, language: string = 'vi-VN') => {
    return `${FILM_API}?
            sort_by=release_date.desc&
            api_key=${FILM_API_KEY}&
            language=${language}&
            page=${page}&
            primary_release_date.lte=${CURR_DATE}`;
  },
};

export default filmAPI;
