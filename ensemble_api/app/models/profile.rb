class Profile < ApplicationRecord
    belongs_to :user
    has_many :role_tags, as: :tagable, dependant: :destroy
    has_one_attached :headshot

end
