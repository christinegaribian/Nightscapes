json.extract! @photo, :id, :img_url, :title, :description, :created_at

json.user do
  json.id @photo.user.id
  json.username @photo.user.username
  json.img_url @photo.user.user_img_url
end
