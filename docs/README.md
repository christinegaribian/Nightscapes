# Nightscapes

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/vwohinzI/nightscapes

## Minimum Viable Product

Nightscapes is an online community based on astrophotography. It is inspired by the popular photo-sharing website, 500px, a single-page, full-stack web application with a multi-page look and feel. It utilizes Ruby on Rails on the back-end, a PostgreSQL database, and React.js with a Flux architectural framework on the front-end.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

  1. New account creation, login, and demo login
  2. A production README, replacing this README
  3. Hosting on Heroku
  4. Photo Posting
  5. Home Feed
  6. Follow/Unfollow of Users
  7. Profile Page
  8. Infinite Scroll

## Design Docs
  * [View Wireframes][wireframes]
  * [React Components][components]
  * [API endpoints][api-endpoints]
  * [DB schema][schema]
  * [Sample State][sample-state]

  [wireframes]: wireframes
  [components]: component-hierarchy.md
  [sample-state]: sample-state.md
  [api-endpoints]: api-endpoints.md
  [schema]: schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

  **Objective:** Functioning rails project with front-end Authentication

### Phase 2: Navbar, Photos CR(UD), Feed (2 days)

  **Objective:** Once the user has logged in, the navbar redirects to home, user and upload photo pages. Photos can be created and viewed through the API. Feed renders.

### Phase 3: Feed Sidebar and Photos (CR)UD (2 days)

  **Objective:** Feed Sidebar shows information about the current user, and suggestions of other users to follow.

### Phase 4: User Profile Page (1 day)

  **Objective:** User page displays navbar, user information, and the user's photo collection in a grid.

### Phase 5: Follows (1 day)

  **Objective:** Clicking 'followers'/'following' brings up the follow popup, which users can use to follow/unfollow each other.

### Phase 6: - Pagination / infinite scroll for Feed Index (1 day)

  **Objective:** Add infinite scroll to Feed


### Bonus Features (TBD)
  - [ ] Discover
  - [ ] Likes
  - [ ] Comments
  - [ ] Tag-Based Search for Users/Photos
  - [ ] Notifications
  - [ ] Edit Profile
