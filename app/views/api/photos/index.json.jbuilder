@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :img_url
  end
end
