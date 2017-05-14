```js
{
  currentUser: {
    id: 1,
    username: "Christine"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    postPhoto: {errors: ["title can't be blank"]}
  },
  sampleUser: {
    username: 'username',
    profilePictureUrl: "http://...",
    views: 35,
    followers: {
      1: {
        username: "username",
        profilePictureUrl: "http://..."
      }
    },
    following: {
      1: {
        username: "username2",
        profilePictureUrl: "http://..."
      },
      2: {
        username: "username3",
        profilePictureUrl: "http://..."
      }
    },
  },
  photos: {
    1: {
      title: "Sample State",
      description: "is useful to plan",
      location: "Twin Peaks, California, USA",
      user_id: 1,
      url: "http://...",
      views: 12,
      likes: 4,
      comments: {
        username: "username9",
        body: "comment"
      },
      tags: ["galaxy", "milky way "]
    }
  }
  toFollow: {
    1: {
      username: "username",
      userImgUrl: "http://...",
      photo_count: 12
    },
    2: {}, 3: {}, 4: {}, 5: {}
  }
}
```
