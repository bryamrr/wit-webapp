class User < ApplicationRecord
  attr_accessor :password

  belongs_to :role
  belongs_to :province

  has_many :tokens, :dependent => :destroy
  has_many :enrollments
  has_many :movements

  validates :nickname, presence: true, uniqueness: true
  validates :email, presence: true, email: true
  validates :role, presence: true
  validates :province, presence: true
  validates :password, presence: true
  validates :dni, presence: true, uniqueness: true
  validates_format_of :password, :with => /\A(?=.{6,14})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=!*]).*\z/

  before_create :encrypt_password

  private
  def encrypt_password
    self.salt = BCrypt::Engine.generate_salt
    self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
  end
end
