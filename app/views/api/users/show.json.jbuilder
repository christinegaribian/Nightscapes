# json.partial! "api/users/user", user: @user

json.extract! @user, :id,
                     :username,
                     :user_img_url,
                     :views,
                     :user_site_url,
                     :photo_count,
                     :follower_count,
                     :followers,
                     :bio
json.following @user.followees
# json.extract! @user, :username, :user_img_url
