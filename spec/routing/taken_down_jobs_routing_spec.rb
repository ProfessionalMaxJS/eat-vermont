require "rails_helper"

RSpec.describe TakenDownJobsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/taken_down_jobs").to route_to("taken_down_jobs#index")
    end

    it "routes to #show" do
      expect(get: "/taken_down_jobs/1").to route_to("taken_down_jobs#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/taken_down_jobs").to route_to("taken_down_jobs#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/taken_down_jobs/1").to route_to("taken_down_jobs#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/taken_down_jobs/1").to route_to("taken_down_jobs#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/taken_down_jobs/1").to route_to("taken_down_jobs#destroy", id: "1")
    end
  end
end
