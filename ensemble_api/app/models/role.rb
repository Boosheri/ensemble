class Role < ApplicationRecord
    has_many :role_tags, dependent: :destroy
    
    validates(:title, presence: true, uniqueness: true)
    
    def role_titles
        self.roles.map{ |r| r.name }.join(", ")
    end

    def role_titles=(role)
        self.roles = role.strip.split(/\s*,\s*/).map do |title|
            Role.find_or_initialize_by(name: title)
        end
    end
end
