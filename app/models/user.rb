class User < ApplicationRecord
  after_initialize :ensure_session_token
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  attr_reader :password
  
  def ensure_session_token 
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end
  
  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end
  
  def self.find_by_credentials(un, pw) 
    user = User.find_by(username: un)
    return user if (user && user.is_password?(pw))
    nil
  end
  
end
