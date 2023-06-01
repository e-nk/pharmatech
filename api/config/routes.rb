Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
   # Custom routes for MyAccountsController
  #  get '/my_account', to: 'my_accounts#show', as: 'show_my_account'
   get '/my_account/edit', to: 'my_accounts#edit', as: 'edit_my_account'
   patch '/my_account', to: 'my_accounts#update', as: 'update_my_account'
   post '/my_account', to: 'my_accounts#create', as: 'create_my_account'
   get '/my_account', to: 'my_accounts#account_info', as: 'account_info'


  
end
