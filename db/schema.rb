# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170524171411) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "photos", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.string   "img_url",     null: false
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_photos_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                      null: false
    t.string   "session_token",                                                                                                 null: false
    t.string   "password_digest",                                                                                               null: false
    t.integer  "views",           default: 0
    t.string   "user_img_url",    default: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495506026/user-512_uuqwl0.png"
    t.datetime "created_at",                                                                                                    null: false
    t.datetime "updated_at",                                                                                                    null: false
    t.string   "user_site_url"
    t.text     "bio",             default: ""
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
