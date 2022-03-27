class Backend::BusinessesController < ApplicationController
  before_action :set_business, only: [:show, :update, :destroy] #:posted_jobs,

  # GET /businesses
  def index
    @businesses = Business.all

    render json: @businesses
  end

  # GET /businesses/1
  def show
    render json: @business
  end

  # POST /businesses
  def create
    @business = Business.new(business_params)

    if @business.save
      session[:user_id] = @business.id
      render json: @business, status: :created #, location: @business
    else
      render json: {errors: @business.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /businesses/1
  def update
    # byebug
    user = Business.find(session[:user_id])
    # if user &.authenticate(params[:password]) ## can be added back in for additional auth, if desired
    user.update(business_params)
    if user.update
      render json: user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end

  end

  # DELETE /businesses/1
  def destroy
    @business.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_business
      @business = Business.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def business_params
      params.except(:jobs, :business).permit(:business_name, :town, :link, :username, :password, :password_confirmation, :id)
    end
end
