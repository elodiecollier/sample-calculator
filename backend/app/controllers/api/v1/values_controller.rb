class Api::V1::ValuesController < ApplicationController
  def index
    values = Value.all()
    render json:values, status: 200
  end

  def new
    value = Value.new
  end

  def create
    original_value = value_params[:original].to_f
    calculated_value = (value_params[:original].to_f * 2) **2
    value = Value.new(original: original_value, calculated: calculated_value)
    if value.save
      render json:value, status: 200
    else
      render json:{ error: "creating error..." }
    end
  end

  def show
    value = Value.find(params[:id])
    if value
      render json:value , status: 200
    else
      render json: { error: "Value not found!" }
    end
  end

  def update 
    value = Value.find(params[:id])
    if value 
      value.update(original: params[:original], calculated: params[:calculated])
      render json: "Value updated succesfully"
    else
      render json:{ error: "Value not found"}
    end
  end

  def new
    value = Value.new
  end

  def destroy 
    value = Value.find(params[:id])
    if value
      value.destroy
      render json: "Value deleted successfully"
    end
  end

  private
  def value_params
    params.require(:value).permit(:original, :calculated)
  end

end
