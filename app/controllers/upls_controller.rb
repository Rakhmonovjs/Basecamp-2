class UplsController < ApplicationController
  before_action :set_project, only: %i[ show edit  destroy ]
  before_action :set_upl, only: %i[ show edit update destroy ]

  # GET /upls or /upls.json
  def index
    @project = Project.find(params[:project_id])

    @upls = @project.upls.all
  end

  # GET /upls/1 or /upls/1.json
  def show
  end

  # GET /upls/new
  def new
    @upl = Upl.new
  end

  # GET /upls/1/edit
  def edit
  end

  # POST /upls or /upls.json
  def create
    @upl = Upl.new(upl_params)

   if(@upl.save)
    redirect_to project_upls_path(@upl.project_id)
   end
  end

  # PATCH/PUT /upls/1 or /upls/1.json
  def update
      if @upl.update(upl_params)
        redirect_to project_upls_path(@upl.project_id)
      else
      end
  end

  # DELETE /upls/1 or /upls/1.json
  def destroy
    @upl.destroy
      redirect_to project_upls_path


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_upl
      @upl = Upl.find(params[:id])
    end

    def set_project
      @project = Project.find(params[:project_id])
    end
    # Only allow a list of trusted parameters through.
    def upl_params
      params.require(:upl).permit(:name, :project_id, :fayl)
    end
end
