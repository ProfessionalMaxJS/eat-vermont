class Admin::BusinessesController < ApplicationController

def index
    render json: Business.all, status: :ok
end

end
