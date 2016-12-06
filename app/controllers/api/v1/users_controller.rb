class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :authenticate, :only => [:login]

  # POST /api/v1/users/login
  def login
    data = {nickname: params[:nickname], password: params[:password]}
    user = User.authenticate(data)

    if user
      token = user.tokens.create
      render :json => { :token => token.token, :nickname => user.nickname, :role => user.role[:name], :first_entry => user.first_entry }
      if user.first_entry === false
        puts "AQUI =======>"
        user.update_column(:first_entry, true)
        puts user.errors.full_messages
        puts user.to_json
        puts user[:first_entry]
      end
    else
      render :json => { :errors => "Credenciales incorrectas" }, status: :unauthorized
    end
  end

  # POST /api/v1/users/logout
  def logout
    token = Token.find_by(token: bearer_token)

    if token.delete
      render :json => { :message => "El token ha expirado" }
    else
      render :json => { :errors => token.errors.full_messages }
    end
  end

  # GET /api/v1/users/{nickname}
  def show
    user = User.find_by(nickname: params[:id])
    if @current_user == user
      render :json => user.to_json(
        :except => [:created_at, :updated_at, :encrypted_password, :salt],
        :include => [:province => { }]
      )
    else
      render :json => { :message => "Usuario no encontrado" }
    end
  end

  # PUT /api/v1/users/{nickname}/change_password
  def change_password
    user = User.find_by(nickname: params[:nickname])
    if (user)
      encrypted_password = BCrypt::Engine.hash_secret(params[:data][:old_password], user[:salt])
      if user[:encrypted_password] == encrypted_password
        new_encrypted_password = BCrypt::Engine.hash_secret(params[:data][:new_password], user[:salt])
        user.update_attribute(:encrypted_password, new_encrypted_password)
        render :json => { :message => "Cambio de contraseña correcto" }
      else
        render :json => { :message => "No se pudo cambiar la contraseña" }, status: :bad_request
      end
    else
      render :json => { :message => "No se pudo cambiar la contraseña" }, status: :not_found
    end
  end

end