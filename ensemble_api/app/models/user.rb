class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :follows, dependent: :destroy
    has_many :posts, through: :follows, dependent: :destroy
    has_one :profile
    
    has_secure_password

    accepts_nested_attributes_for :profile, reject_if: :all_blank, allow_destroy: true

    validates(:email, presence: true, uniqueness: true, format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i)

    def full_name
        "#{first_name} #{last_name}".strip.to_s.titleize
      end
end
