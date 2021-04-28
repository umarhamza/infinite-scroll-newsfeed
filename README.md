# Creating infinite scroll for newsfeeds

This application initially loads 30 newsfeeds and then when the user scrolls to the bottom of the page, another 30 posts are loaded in using `useInfiniteScroll`.

### How I implemented this
1. First, we fetched all 500 articles from from Hacker News newsfeed.
2. Then we spliced the newsfeed array to show only 10 articles.
3. We implemented `useInfiniteScroll` to increment the articles by 30 when the user scrolls to the bottom of the page.
4. We used `React.memo` to ensure our component was not being redrawn multiple times.

![Preview](preview.png?raw=true)
