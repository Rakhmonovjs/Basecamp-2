Rails.application.routes.draw do
  resources :messengers
  resources :messages do
  resources :messengers
    
  end
  resources :tasks
  resources :upls
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :projects do 
    resources :upls
  resources :tasks
  resources :messages
  end
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
