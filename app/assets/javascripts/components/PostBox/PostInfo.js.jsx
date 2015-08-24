var PostInfo = React.createClass({
    render: function() {
        var postPath= "/posts/"+ this.props.parentID;
        return (
            <div className="post-info">
                <a className="post-title" href={postPath}>
                    <i>
                        {this.props.postTitle}
                    </i>
                </a>
                <div className="post-price">
                    {this.props.postPrice}
                </div>
                <a className="post-comments-count" href={postPath}>
                    <i className="fa fa-comment post-box-info-comment-icon"></i>
                    {this.props.postCommentsCount} comments
                </a>
            </div>
        );
    }
});