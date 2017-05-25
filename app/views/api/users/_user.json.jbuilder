json.extract! user, :id,
                    :username,
                    :user_img_url,
                    :views,
                    :user_site_url,
                    :photo_count,
                    :follower_count
json.following user.followees, :id
