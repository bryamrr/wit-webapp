Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: "public#home"

  get "/certificados", to: "public#certificates"
  get "/embajadores", to: "public#money"
  get "/registro", to: "public#register"

  get "/cursos", to: "courses#index"
  get "/cursos/:id", to: "courses#show"

end
