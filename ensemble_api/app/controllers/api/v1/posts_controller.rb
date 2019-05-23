class Api::V1::PostsController < Api::ApplicationController

    before_action :authenticate_user!, only: [ :create, :update, :destroy ]
    before_action :find_post, only: [ :show, :update, :destroy ]
  
    def index
      posts = Post.order(created_at: :desc)

      render(
        json: posts,
        each_serializer: PostCollectionSerializer
      )
    end

    def show
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
    
      private
      def find_post
        @post ||= Post.find params[:id]
      end
    
      def post_params
        params.require(:post).permit(:title, :body)
      end
    end
    
end
