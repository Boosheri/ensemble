class Profile < ApplicationRecord
    belongs_to :user
    has_one_attached :headshot
    
end
