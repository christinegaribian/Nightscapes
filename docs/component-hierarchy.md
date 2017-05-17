## Component Hierarchy

**SessionFormContainer**
  * SessionForm

**NavbarContainer**
  * Navbar

**HomeContainer**
  * Feed
    * FeedItem
  * FeedSidebar
    * UserBox
    * FollowBoxContainer
      * FollowBoxItem
        * PhotoDetail

**UserPageContainer**
  * UserHeader
  * PhotoCollection
    * PhotoItem
      * PhotoDetail

**DiscoverPageContainer**
  * DiscoverIndex
    * DiscoverIndexItem


**PhotoDetail**
  * PhotoLikes
  * PhotoComments
    * PhotoCommentsIndex
      * PhotoCommentsForm
      * PhotoCommentsDetail
  * PhotoTags
    * PhotoTagIndexItem



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/users/:userId" | "UserPageContainer" |
| "/users/:userId/edit" | "Edit Profile Modal Container" |
| "/upload" | "Upload Photo Modal Container" |
| "/photos/:photoId" | "PhotoDetail" |
| "/discover" | "DiscoverPageContainer" |
