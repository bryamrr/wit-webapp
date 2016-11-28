class Api::V1::UsersController < Api::V1::BaseController
  skip_before_filter :authenticate, :only => [:login, :logout]

  # POST /api/v1/users/login
  def login
    puts params
    data = {nickname: params[:nickname], password: params[:password]}
    user = User.authenticate(data)

    if user
      token = user.tokens.create
      render :json => { :token => token.token, :nickname => user.nickname, :role => user.role[:name] }
    else
      render :json => { :errors => "Credenciales incorrectas" }, status: :unauthorized
    end
  end

  # POST /api/v1/users/logout
  def logout

    token = Token.where(token: params[:data][:token]).first

    if token.delete
      render :json => { :message => "El token ha expirado" }
    else
      render :json => { :errors => token.errors.full_messages }
    end
  end
end