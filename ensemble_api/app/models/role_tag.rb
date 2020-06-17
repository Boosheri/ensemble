class RoleTag < ApplicationRecord
    belongs_to :role
    belongs_to :tagable, polymorphic: true
    
  end
