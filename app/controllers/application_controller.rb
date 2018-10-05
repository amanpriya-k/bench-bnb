class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user = User.find_by(session_token: session[:session_token])
  end

end
