Rails.application.routes.draw do

  namespace :api do
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
  end

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
end
