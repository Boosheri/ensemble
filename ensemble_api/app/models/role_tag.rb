class RoleTag < ApplicationRecord
  belongs_to :role
  belongs_to :role_relation, polymorphic: true
  
end
