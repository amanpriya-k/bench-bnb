class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(params.require(:bench)
             .permit(:description, :lat, :lng))
    if @bench.save
      render :show
    else
      render json: ['Invalid input'], status: 404
    end
  end

  def show
    @bench = Bench.find(params[:id])
  end

end
