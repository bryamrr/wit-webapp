class UsersController < ApplicationController
  def create
    province = Province.find(user_params[:province])
    role = Role.find(2)

    @user = User.new(
        nickname: user_params["nickname"],
        fullname: user_params["fullname"],
        role: role,
        province: province,
        email: user_params["email"],
        password: user_params["password"],
        dni: user_params["dni"],
        sponsor_id: user_params["sponsor_id"]
      )

    if @user.save
      redirect_to "/bienvenido"
    else
      puts "Falló"
    end
  end

  def user_params
    params.require(:user).permit(:nickname, :fullname, :email, :password, :role, :province, :dni, :sponsor_id)
  end
end