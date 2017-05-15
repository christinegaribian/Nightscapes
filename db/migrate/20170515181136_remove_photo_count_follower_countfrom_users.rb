class RemovePhotoCountFollowerCountfromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :photo_count
    remove_column :users, :follower_count
  end
end
