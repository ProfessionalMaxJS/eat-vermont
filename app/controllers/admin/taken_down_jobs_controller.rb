class Admin::TakenDownJobsController < ApplicationController
  # before_action :set_taken_down_job, only: [:show, :update, :destroy]

  # GET /taken_down_jobs
  def index
    @taken_down_jobs = TakenDownJob.all

    render json: @taken_down_jobs
  end

  # POST /taken_down_jobs
  def create
    old_job = Job.find(params[:job_id])

    new_params = taken_down_job_params.except(:job_id).merge(position: old_job[:position], hours: old_job[:hours], rate: old_job[:rate], phone: old_job[:phone], email: old_job[:email], business_id: old_job[:business_id])
    @taken_down_job = TakenDownJob.new(new_params)
    
    Job.destroy(old_job.id)
    
    user = Business.find(session[:user_id])
    # byebug
    render json: user.jobs, status: :ok 

    # if @taken_down_job.save
    #   render json: @taken_down_job, status: :created
    # else
    #   render json: @taken_down_job.errors, status: :unprocessable_entity
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_taken_down_job
    #   @taken_down_job = TakenDownJob.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def taken_down_job_params
      params.require(:taken_down_job).permit(:job_id, :job_filled_here)
      # params.permit(:job_id, :position, :hours, :rate, :phone, :email, :job_filled_here, :business_id)
    end
end
