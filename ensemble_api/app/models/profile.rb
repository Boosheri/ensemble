class Profile < ApplicationRecord
    belongs_to :user
    has_many :role_tags, as: :tagable, dependent: :destroy
    # has_many :roles, as: :tagable, through: :role_tags, source: :dependent: :destroy
    has_one_attached :headshot

end
