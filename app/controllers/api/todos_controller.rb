class TodosController < ApplicationController

  def create!
    @todo = Todo.new(todos_params)
    @todo.save
  end

  def update!
    @todo = Todo.find(params[:id])
    @todo.update_attributes(todos_params)
  end

  def destroy!(id)
    todo_item_to_delete = Todo.find_by_id(id)
    todo_item_to_delete.destroy
  end

  private
  def todos_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
