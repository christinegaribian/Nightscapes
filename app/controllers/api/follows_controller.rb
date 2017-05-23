class Api::FollowsController < ApplicationController
  def create
    @user = current_user
    follow = @user.followings.create!(follower_id: @user.id, followee_id: params[:user_id])
    render 'api/users/show'
    #
    # follow = Follow.new(follow_params)
    # if follow.save
    #   @user = current_user
    #   render 'api/users/show'
    # else
    #   render json: follow.errors.full_messages, status: 422
    # end
  end

  def destroy
    follow = Follow.find_by(
      follower_id: params[:follow][:follower_id],
      followed_id: params[:follow][:followee_id]
    )
    if follow.destroy
      @user = current_user
      render 'api/users/show'
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
