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

  # #GET /businesses/1/jobs
  # def posted_jobs
  #   render json: @business.jobs.all
  # end
  ##thought about 'fetching' with this method before I decided to instead add 'has_many :jobs' to /models/business.rb, and ':jobs' to /serializers/business_serializer.rb

  # POST /businesses
  def create
    @business = Business.new(business_params)

    if @business.save
      render json: @business, status: :created, location: @business
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /businesses/1
  def update
    if @business.update(business_params)
      render json: @business
    else
      render json: @business.errors, status: :unprocessable_entity
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
      params.require(:business).permit(:business_name, :town, :link, :username, :password_digest)
    end
end