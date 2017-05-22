# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :user_img_url, :views, :user_site_url
json.photo_count @user.photo_count
# json.extract! @user, :username, :user_img_url
