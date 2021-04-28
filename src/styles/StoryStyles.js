import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    padding-top: 0;
    margin-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin: 0 0 5px 0;
  font-size: 18px;
  line-height: 1.8;

  a {
    color: #2e2e2e;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:first-child {
      margin-right: 10px;
  }

  > span:not(:first-child)::before {
    content: '•';
    display: inline-block;
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || 'red'};
`;