json.extract! @photo, :id, :img_url, :title, :description

json.user do
  json.username @photo.user.username
  json.img_url @photo.user.user_img_url
  # json.url url_for(@photo.user.user_img_url)
end
