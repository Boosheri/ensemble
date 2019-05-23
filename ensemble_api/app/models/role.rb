class Role < ApplicationRecord
    has_many :role_tags, dependent: :nullify
    
end
