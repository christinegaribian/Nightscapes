Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index] do
      resource :follow, only: [:destroy, :create]
      resources :photos, only: [:create]
      get '/photos', to: 'photos#user_index'
      get '/feed', to: 'photos#feed_index'
    end
    resource :session, only: [:create, :destroy, :show]
    resources :photos, except: [:create]
  end
end
