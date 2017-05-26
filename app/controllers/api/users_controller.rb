class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def show
    @user = User.find(params["id"])
    @user.add_one_view
    render 'api/users/show'
  end

  def update
    @user = User.find(params["id"])
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    users = User.where.not(id: User.find(current_user.followees.pluck(:id))).where.not(id: current_user.id)
    @users = users.take(4)
  end

  private
  def user_params
    params.require(:user).permit(:username,
    :password,
    :views,
    :user_img_url,
    :user_site_url,
    :bio
    )
  end
end
