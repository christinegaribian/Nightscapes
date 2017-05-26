# [**Nightscapes**](https://nightscapes.herokuapp.com)

![](./docs/gifs/splash.gif)

Nightscapes is an online astrophotography community inspired by the popular
photo-sharing website, 500px. Despite its multi-page look and feel, it only
uses a single, initial HTTP request. The back-end utilizes Ruby on Rails
with a PostgreSQL database, and the front-end is built with the React.js/
Flux architectural framework.


## **Features and Implementation**


### **Photo Uploads**
Users can upload photos through a custom upload modal which makes an API
call to Cloudinary. The upload request
returns a url to the scaled-down version of the image, which is then stored
on the server. These smaller images, plus Cloudinary's high-speed
image delivery, noticeably improve site load-time.

### **Follows**

Follows are stored as a table joining users to itself. Upon login, an API
call is made to the database, and the resulting set of users that the
current user is following are stored in the front-end until the session is
destroyed.


A user can can be followed through either the profile page or the feed sidebar.
Since a user's followers are passed in as props to the user page component,
following a user through their page immediately re-renders the updated followers
count and button action text for that user.

The feed sidebar has a random assortment of five profiles that the current
user is not following. Toggling a follow button from here automatically
updates the feed and sidebar.

This is the user controller's method for picking these profiles, using Rails' Active
Record Query Interface:

```ruby
def index
  users = User.where.not(id: User.find(current_user.followees.pluck(:id)))
              .where.not(id: current_user.id)
  @users = users.shuffle.take(5)
end
```

### **Discover**
The Discover Page displays random photos for the user to peruse. The
 Justified Gallery package allows the images to be dynamically reordered
 and resized.
![](./docs/gifs/discover.gif)

## Future Plans
### **Infinite Scroll**
### **Tag-Based Search**
### **Likes**
### **Comments**
### **Notifications**
### **Direct Messaging**
