class AddIndexToUserIdInPhotos < ActiveRecord::Migration[5.0]
  def change
    add_index :photos, :user_id
  end
end
