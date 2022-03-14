Rails.application.routes.draw do

  namespace :backend do
    resources :jobs
    resources :businesses
  end
  
  namespace :admin do
    resources :taken_down_jobs
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
