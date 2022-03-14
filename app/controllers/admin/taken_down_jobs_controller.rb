class Admin::TakenDownJobsController < ApplicationController
  before_action :set_taken_down_job, only: [:show, :update, :destroy]

  # GET /taken_down_jobs
  def index
    @taken_down_jobs = TakenDownJob.all

    render json: @taken_down_jobs
  end

  # GET /taken_down_jobs/1
  def show
    render json: @taken_down_job
  end

  # POST /taken_down_jobs
  def create
    @taken_down_job = TakenDownJob.new(taken_down_job_params)

    if @taken_down_job.save
      render json: @taken_down_job, status: :created, location: @taken_down_job
    else
      render json: @taken_down_job.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /taken_down_jobs/1
  def update
    if @taken_down_job.update(taken_down_job_params)
      render json: @taken_down_job
    else
      render json: @taken_down_job.errors, status: :unprocessable_entity
    end
  end

  # DELETE /taken_down_jobs/1
  def destroy
    @taken_down_job.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_taken_down_job
      @taken_down_job = TakenDownJob.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def taken_down_job_params
      params.require(:taken_down_job).permit(:position, :hours, :rate, :phone, :email, :job_filled_here, :business_id)
    end
end
