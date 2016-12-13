class Api::V1::ProvincesController < Api::V1::BaseController
  def index
    @categories = Category.all
    render :json => @categories
  end
end