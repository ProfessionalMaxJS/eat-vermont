class Backend::SessionsController < ApplicationController

#Store cookies to recognized logged in user
def create
    # byebug
    user = Business.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
    render json: user, status: :ok
    else
      render json: {error: "Invalid Username or Password"}, status: :unauthorized
    end
end

def show
  if(session[:user_id])
    render json: {logged_in: true, user_id: session[:user_id], status: :ok}
  else
    render json: {logged_in: false, status: :unauthorized}
  end
end

def destroy
  session.delete :user_id
  render json: {}, status: :no_content
end

end
