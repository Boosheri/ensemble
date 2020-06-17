class Profile < ApplicationRecord
    belongs_to :user
    has_one_attached :headshot

    has_many :profile_roles, dependent: :destroy
    has_many :roles, through: :profile_roles

end
