class Api::V1::PostsController < Api::ApplicationController

    before_action :authenticate_user!, only: [ :create, :update, :destroy, :my_posts, :relevant_posts ]
    before_action :find_post, only: [ :show, :update, :destroy ]
    before_action :find_my_posts, only: [ :my_posts ]
    before_action :find_relevant_posts, only: [ :relevant_posts ]
  
    def index
        posts = Post.order(created_at: :desc)

        render(
            json: posts,
            each_serializer: PostCollectionSerializer
        )
    end

    def roles
        roles = Role.order(created_at: :desc)

        render(
            json: roles,
        )
    end

    def show
        # @follow = @post.follow.find_by(user: current_user)
        render(
          json: @post,
        )
    end
    
    def create
        post = Post.new post_params
        post.user = current_user

        post.save!
        render json: { id: post.id }, status: 201
    end

    def update
        @post.update!(post_params)
        render json: { id: @post.id }
    end

    def destroy
        @post.destroy
        render json: { status: 200 }
    end

    def my_posts
        posts = @posts.order(created_at: :desc)
        render(
            json: posts,
            each_serializer: PostCollectionSerializer
          )
    end

    def relevant_posts
        posts = @posts.order(created_at: :desc)
        render(
            json: posts,
            each_serializer: PostCollectionSerializer
          )
    end

    private
    
    def find_post
    @post ||= Post.find params[:id]
    end

    def find_my_posts
    @posts = Post.where(user: current_user)
    end

    def find_relevant_posts
        postIds = []
            relevantPosts = PostRole.where(:role_id => current_user.profile.roles).joins(:post).each do |post| postIds.push(post.post_id) end

        @posts = Post.where(:id => postIds.uniq) 
        
    end

    def post_params
    params.require(:post).permit(
        :id,
        :title, 
        :body,
        :production_type,
        :gender,
        :min_age,
        :max_age,
        :paid,
        :union,
        :roles,
        :contact_name,
        :contact_email,
        :created_at,
        :updated_at
        )
    end
    
end
