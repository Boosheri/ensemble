class Post < ApplicationRecord
  belongs_to :user
  has_many :role_tags, as: :tagable, dependent: :destroy
  has_many :follows, dependent: :destroy

  before_save :title => :title.to_s.titleize
  validates :title, presence: true

end
