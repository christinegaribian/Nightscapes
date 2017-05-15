class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, uniqueness: true
      t.string :session_token, null: false, uniqueness: true
      t.string :password_digest, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :views, default: 0
      t.integer :photo_count, default: 0
      t.integer :follower_count, default: 0
      t.string :user_img_url, default: "https://openclipart.org/download/247320/abstract-user-flat-4.svg"

      t.timestamps
    end
  end
end
