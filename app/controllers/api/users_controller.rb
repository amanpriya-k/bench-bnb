class Api::UsersController < ApplicationController

  def create
    @user = User.new(params.require(:user).permit(:username, :password))
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

end
