class Api::V1::UsersController < Api::ApplicationController
	
	before_action :authenticate_user!, only: [ :show, :current, :update, ]

	def current
		render json: current_user
	end

	def show
		if params[:id] == "current"
			user = current_user
		else
			user = User.find params[:id]
		end
			render(
			json: user,
		)
	end

	def create
		user = User.new user_params
		if user.save
			session[:user_id] = user.id
			render json: {id: user.id}
		else
			render(
			json: { errors: user.errors.messages },
			status: 422
			)
		end
	end
  
	def update
		if params[:id] == "current"
			user = current_user
		else
			user = User.find params[:id]
		end
		user.update!(user_params)
		render(
			json: { status: 200 }
		)
	end

    private

  def user_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :email, 
      :password, 
      :password_confirmation,
      headshot: []
    )
	end
	
end
  