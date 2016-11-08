class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to 'public#welcome'
    else
      puts "Falló"
    end
  end
end