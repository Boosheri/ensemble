class Api::V1::FollowsController < Api::ApplicationController
    before_action :authenticate_user!
    
    def create
      post = Post.find params[:_json]
      follow = Follow.new(user_id: current_user.id, post_id: post.id)
      unless can?(:follow, post)
        return redirect_to post_path(post)
      end
        if follow.save
            render(
                json: {status: 200, follow: true},
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
        json: {status: 200, follow: false},
    ) else
    render(
      json: {status: 400},
    )
  end
   
end
