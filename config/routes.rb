Rails.application.routes.draw do

  namespace :backend do
    resources :jobs, only: [:index, :show, :create, :destroy]
    resources :businesses, only: [:create, :show, :destroy]
    patch '/businesses/:id', to: "businesses#update"
    post '/login', to: "sessions#create"
    get '/user_id', to: "sessions#show"
    delete '/logout', to: "sessions#destroy"
    # get '/businesses/:id/posted_jobs', to: "jobs#posted_jobs" ##thought about 'fetching' from this route before I decided to instead add 'has_many :jobs' to /models/business.rb, and ':jobs' to /serializers/business_serializer.rb
  end
  
  namespace :admin do
    get '/all_signups', to: "businesses#index"
    resources :taken_down_jobs, only: [:index, :create]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
