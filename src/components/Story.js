import React, { useEffect, useState, memo } from 'react';
import Moment from 'react-moment';
import { getStory } from '../services/api';
import { StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper } from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  const { title, url, by, time } = story;

  return story && url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitle>
        <a href={url}>{title}</a>
      </StoryTitle>

      <StoryMeta>
        <span data-testid='story-by'>
          <StoryMetaElement color='#000'>By:</StoryMetaElement> {by}
        </span>
        <span data-testid='story-time'>
          <StoryMetaElement color='#000'>Posted: </StoryMetaElement>{' '}
          {mapTime(time)}
        </span>
        <span data-testid='story-date'>
          <StoryMetaElement color='#000'>Date: </StoryMetaElement>
          <Moment unix format='MMM, Do YYYY'>
            {time}
          </Moment>
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});
