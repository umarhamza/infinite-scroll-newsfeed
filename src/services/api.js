import axios from 'axios';
import { selectFields } from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getStoryIds = async () => {
  try {
    const res = await axios.get(newStoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json`)
      .then(({ data }) => data && selectFields(data));
    return res;
  } catch (err) {
    console.error(err);
  }
};