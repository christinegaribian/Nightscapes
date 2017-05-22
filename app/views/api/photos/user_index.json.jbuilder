@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :img_url, :created_at

    json.user do
      json.id photo.user.id
      json.username photo.user.username
      json.img_url photo.user.user_img_url
    end
  end
end
