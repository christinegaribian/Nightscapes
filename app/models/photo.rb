class Photo < ApplicationRecord
  validates :user_id, :img_url, :title, presence: true

  after_initialize :ensure_fields

  belongs_to :user

  def ensure_fields
    self.views ||= 0
    self.save
  end
end
