class Api::V1::FollowsController < Api::ApplicationController
    before_action :authenticate_user!
    
    def create
      post = Post.find params[:id]
      follow = Follow.new(user: current_user, post: post.id)
      # unless can?(:follow, post)
      #   return redirect_to post_path(post)
      # end
        if follow.save
            render(
                json: {status: 200},
            )
        else
          render(
            json: {status: 400},
          )
        end
    end
  
    def destroy
      post = Post.find params[:post_id]
      follow = post.follow.find params[:id]
      
      follow.destroy
  
      render(
        json: post,
      )
    end
   
end
