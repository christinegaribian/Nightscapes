class CreateChangeDefaultUserPictures < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :user_img_url, :string, :default => "https://res.cloudinary.com/dl091hw7z/image/upload/v1495506026/user-512_uuqwl0.png"
  end
end
