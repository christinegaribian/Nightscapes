class Api::FollowsController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    # debugger
    follow = Follow.create(follower_id: current_user.id, followee_id: params[:user_id])
    render 'api/users/show'
  end

  def destroy
    @user = User.find(params[:user_id])
    follow = current_user.follows.find_by(followee_id: params[:user_id])
    follow.destroy!
    render 'api/users/show'
  end
end
