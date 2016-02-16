Rails.application.routes.draw do
  root to: 'staticpages#root'

  namespace :api do
    resources :todos, except: [:new, :edit]
  end
end
