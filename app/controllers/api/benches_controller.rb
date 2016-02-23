require "rubygems"
require "json"

class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def index
    @benches = Bench.in_bounds(JSON.parse(params[:bounds]))
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description)
  end
end
