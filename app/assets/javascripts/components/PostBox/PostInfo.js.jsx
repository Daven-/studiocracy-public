var PostInfo = React.createClass({
    render: function() {
        return (
            <div className="post-info">
                <div className="post-title">
                    {this.props.postTitle}
                </div>
                <div className="post-price">
                    {this.props.postPrice}
                </div>
                <div className="post-comments-count">
                    {this.props.postCommentsCount} comments
                </div>
            </div>
        );
    }
});