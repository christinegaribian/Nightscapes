class Photo < ApplicationRecord
  validates :user_id, :img_url, :title, presence: true
  belongs_to :user
end
