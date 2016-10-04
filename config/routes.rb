Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: "public#home"

  get "/certificados", to: "public#certificates"

  get "/cursos", to: "courses#index"

end
