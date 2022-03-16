class Backend::SessionsController < ApplicationController

#Store cookies to recognized logged in user
def create
    # byebug
    user = Business.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
    render json: {user: user, session: session }, status: :ok
    else
      render json: {error: "Invalid Username or Password"}, status: :unauthorized
    end
end

end
