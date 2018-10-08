class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['invalid login credentials'], status: 404
    end
  end

  def destroy
    # debugger
    if logged_in?
      logout()
      render json: {}
    else
      render json: ['not logged in'], status: 404
    end
  end
end
