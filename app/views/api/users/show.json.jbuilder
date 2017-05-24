# json.partial! "api/users/user", user: @user

json.extract! @user, :id,
                     :username,
                     :user_img_url,
                     :views,
                     :user_site_url,
                     :photo_count,
                     :follower_count,
                     :followers,
                     :followees,
                     :bio
# json.extract! @user, :username, :user_img_url
