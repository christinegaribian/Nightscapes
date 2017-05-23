class Api::FollowsController < ApplicationController
  def create
    @user = current_user
    follow = Follow.create!(follower_id: @user.id, followee_id: params[:user_id])
    render 'api/users/show'
  end

  def destroy
    @user = current_user
    follow = @user.follows.find_by(followee_id: params[:user_id])
    follow.destroy!
    render 'api/users/show'
  end
end
