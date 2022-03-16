Rails.application.routes.draw do

  namespace :backend do
    resources :jobs
    resources :businesses
    post '/login', to: "sessions#create"
    # get '/businesses/:id/posted_jobs', to: "jobs#posted_jobs" ##thought about 'fetching' from this route before I decided to instead add 'has_many :jobs' to /models/business.rb, and ':jobs' to /serializers/business_serializer.rb
  end
  
  namespace :admin do
    resources :taken_down_jobs
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
