class Follow < ApplicationRecord
  validates :follower, :followee, presence: true
  # validates :follower, uniqueness: { scope: :followee }

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :User
end
