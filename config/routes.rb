Rails.application.routes.draw do
  resource :api, only: [] do
    resources :todos, except: [:new, :edit]
  end
end
