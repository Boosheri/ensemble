Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts
      get('/my_posts', to: 'posts#my_posts')
      get('/relevant_posts', to: 'posts#relevant_posts')
      resource :follow, only: [:create, :destroy]
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create, :update] do
        resource :profile, only: [:create, :update]
        get :current, on: :collection
        
      end
    end
  end
end
