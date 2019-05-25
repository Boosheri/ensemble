class Post < ApplicationRecord
  belongs_to :user
  # has_many :role_tags, as: :tagable, dependent: :destroy
  has_many :follows, dependent: :destroy
  has_many :followers, through: :follows, source: :user
  has_many :users, through: :follows, dependent: :destroy
  has_many :post_roles, dependent: :destroy
  has_many :roles, through: :post_roles

  before_save :title => :title.to_s.titleize
  validates :title, presence: true

end
