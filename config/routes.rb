Rails.application.routes.draw do
  resources :tasks
  resources :upls
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :projects do 
    resources :upls
  resources :tasks

  end
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
