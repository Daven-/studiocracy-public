class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_filter :require_permission, only: :destroy

  def like
    @comment = Comment.find(params[:id])
    @comment.liked_by current_user
    render nothing: true
  end

  def unlike
    @comment = Comment.find(params[:id])
    @comment.unliked_by current_user
    render nothing: true
  end

  def dislike
    @comment = Comment.find(params[:id])
    @comment.disliked_by current_user
    render nothing: true
  end

  def undislike
    @comment = Comment.find(params[:id])
    @comment.undisliked_by current_user
    render nothing: true
  end

  def require_permission
    if current_user != Comment.find(params[:id]).user
      flash[:alert] = "that's not your comment"
    end
  end

  def create
    @comment_hash = params[:comment]
    @obj = @comment_hash[:commentable_type].constantize.find(@comment_hash[:commentable_id])
    @parent_id = @comment_hash[:parent_id]

    @comment = Comment.build_from(@obj, current_user.id, @comment_hash[:body])
    
    if @comment.save
      if @parent_id
        # make child comment
        @parent_comment = Comment.find(@parent_id.to_i)
        if !@comment.move_to_child_of(@parent_comment)
          render :js => "toastr.warning(could not make child comment)"
        end
      end
      puts "TIME TO RENDER THE PARTIAL"
      render :partial => "comments/comment", :locals => { :comment => @comment }, :layout => false, :status => :created
    else
      render :js => "alert('error saving comment');"
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :js => "toastr.warning('Comment deleted')"
    else
      render :js => "toastr.warning('error deleting comment')"
    end
  end
end