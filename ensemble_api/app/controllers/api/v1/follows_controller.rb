class Api::V1::FollowsController < Api::ApplicationController
    before_action :authenticate_user!
    
    def create
      post = Post.find params[:post_id]
      follow = Follow.new(user: current_user, post: post)
      
      unless can?(:follow, post)
        return redirect_to post_path(post)
      end
        if follow.save
            render(
                json: @post,
            )
        end
    end
  
    def destroy
      post = Post.find params[:post_id]
      follow = follow.find params[:id]
      
      follow.destroy
  
      render(
        json: @post,
      )
    end
    
end
