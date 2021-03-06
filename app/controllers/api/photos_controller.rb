class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def index
    @photos = Photo.all
  end

  def user_index
    @photos = Photo.where('user_id = ?', params[:user_id])
  end

  def feed_index
    @photos = Photo.includes(:user).where(user: current_user.followees)
  end

  def update

  end

  def destroy

  end



  private

  def photo_params
    params.require(:photo).permit(
      :user_id,
      :img_url,
      :title,
      :description,
      :width,
      :height
    )
  end
end
