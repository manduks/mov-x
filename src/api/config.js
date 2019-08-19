export const host = 'https://api.themoviedb.org/3';
const standardParams =
  '/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';

export default {
  discover: `${host}/discover/${standardParams}`,
  search: `${host}/search/${standardParams}&query=`,
};
