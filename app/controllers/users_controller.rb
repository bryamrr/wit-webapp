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
        sponsor: user_params["sponsor"]
      )

    if @user.save
      MailchimpWrapper.subscribe(@user)
      redirect_to "/bienvenido"
    else
      puts "Falló"
    end
  end

  def login
    # data = {
    #   nickname: params[:user][:nickname],
    #   password: params[:user][:password]
    # }
    # user = User.authenticate(data)

    # if user
    #   token = user.tokens.create

    #   puts user.role[:name]

    #   if user.role[:name] == "Admin"
    #     redirect_to("/admin/inicio", :user => user)
    #   else
    #     redirect_to "/campus/inicio"
    #   end
    # else
    #   puts "Falló"
    # end
  end

  def user_params
    params.require(:user).permit(:nickname, :fullname, :email, :password, :role, :province, :dni, :sponsor)
  end
end