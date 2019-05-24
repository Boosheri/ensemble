class ProfileRole < ApplicationRecord
  belongs_to :role
  belongs_to :profile

  validates :role_id, uniqueness: { scope: :profile_id }
end
