class User < ApplicationRecord
    has_many :role_tags, as: :role_relation
    has_many :follows dependent: :destroy
end
