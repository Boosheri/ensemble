class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new
    
    alias_action :create, :read, :update, :destroy, :delete, to: :crud

    can(:crud, Post) do |post|
      post.user == user
    end

    can :crud, Follow do |fol|
      fol.user == user || fol.post.user == user
    end

    can :follow, Post do |post|
      user.persisted? && post.user != user
    end
    
  end
end
