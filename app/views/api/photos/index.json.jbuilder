@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :img_url
    json.user do
      json.username photo.user.username
      json.img_url photo.user.user_img_url
    end
  end
end
