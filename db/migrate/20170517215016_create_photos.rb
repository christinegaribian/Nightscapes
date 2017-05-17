class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :img_url, null: false
      t.string :title, null: false
      t.text :description
      t.integer :width
      t.integer :height
      t.timestamps
    end
  end
end
