class Api::V1::CoursesController < Api::V1::BaseController
  skip_before_action :authenticate

  def index
    @courses = Course.all.order(created_at: :desc)

    render :json => @courses.to_json(:include => {
      :category => {}
      })
  end

  def show
    @course = Course.find(params[:id])

    render :json => @course
  end

  def create
    course = Course.new(course_params)

    if course.save
      render :json => { :message => "Curso creado" }
    else
      puts course.errors.to_json
      render :json => { :message => "No se pudo crear el curso" }, status: :bad_request
    end
  end

  # PUT /api/v1/courses/{id}
  def update
    course = Course.find(params[:id])

    if course.update(course_params)
      render :json => { :message => "Datos actualizados" }
    else
      puts course.errors.to_json
      render :json => { :message => "No se pudo cambiar la contraseña" }, status: :bad_request
    end
  end

  def destroy
    course = Course.find(params[:id])

    course.destroy
    render :json => { :message => "Reporte eliminado" }
  end

  private
  def course_params
    params.require(:data).permit(
      :category_id,
      :title,
      :description,
      :goal,
      :starred,
      :free,
      :pricetag,
      :discount,
      :duration,
      :background_url,
      :video_url,
      :priority
    )
  end
end