Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: "public#home"

  get 'campus/*path' => 'campus#index'

  get "/certificados", to: "public#certificates"
  get "/embajadores", to: "public#money"
  get "/login", to: "public#login"
  get "/registro", to: "public#register"
  get "/bienvenido", to: "public#welcome"

  get "/cursos", to: "courses#index"
  get "/cursos/:id", to: "courses#show"

  post "/registro", to: "users#create"
end
