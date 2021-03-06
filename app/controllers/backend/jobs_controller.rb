class Backend::JobsController < ApplicationController
  before_action :set_job, only: [:show, :destroy]

  # GET /jobs
  def index
    @jobs = Job.all

    render json: @jobs
  end

  # GET /jobs/1
  def show
    render json: @job
  end

  # POST /jobs
  def create
    # byebug
    user = Business.find(session[:user_id])
    # if user &.authenticate(params[:password]) ##can be added back in later for additional auth, if desired
    create_job_params = job_params.except(:password).merge(:business_id => session[:user_id])
      @job = Job.new(create_job_params)
    # if @job.save
    #   render json: @job, status: :create
    # else
    #   render json: @business.errors, status: :unprocessable_entity
    # end

    if @job.save
      render json: @job, status: :created
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # DELETE /jobs/1
  def destroy
    @job.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def job_params
      params.permit(:position, :hours, :rate, :phone, :email, :password)
    end
end
