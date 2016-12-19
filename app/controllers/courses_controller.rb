class CoursesController < ApplicationController
  def index
    @courses_starred = Course.where(starred: true).order(priority: :asc)
    @courses_marketing = Category.find(1).courses
    @courses_development = Category.find(2).courses
    @courses_personal = Category.find(3).courses
  end

  def show
    @course = Course.find(params[:id])
  end
end
