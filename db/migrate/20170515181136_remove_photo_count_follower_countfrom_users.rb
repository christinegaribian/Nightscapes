class RemovePhotoCountFollowerCountfromUsers < ActiveRecord::Migration[5.0]

  def up
    remove_column :users, :photo_count
    remove_column :users, :follower_count
  end

  def down
    add_column :users, :photo_count, :integer
    add_column :users, :follower_count, :integer
  end
end
