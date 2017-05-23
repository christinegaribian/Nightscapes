class User < ApplicationRecord

	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	# before_validation :ensure_session_token_uniqueness

  has_many :photos

  has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followings,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followers,
    through: :followings,
    source: :follower

  has_many :followees,
    through: :follows,
    source: :followee

  def photo_count
    self.photos.count
  end

  def follower_count
    self.followers.count
  end

  def add_one_view
    self.views += 1
    self.save!
    self
  end

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		# ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.urlsafe_base64
	end
  #
	# def ensure_session_token_uniqueness
  #   debugger
	# 	while User.find_by(session_token: self.session_token)
	# 		self.session_token = new_session_token
	# 	end
	# end
end
