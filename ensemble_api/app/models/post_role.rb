class PostRole < ApplicationRecord
  belongs_to :role
  belongs_to :post

  validates :role_id, uniqueness: { scope: :post_id }
end
