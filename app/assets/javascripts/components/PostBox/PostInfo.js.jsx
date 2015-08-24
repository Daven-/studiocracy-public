var PostInfo = React.createClass({
    render: function() {
        var postPath= "/posts/"+ this.props.parentID;
        return (
            <div className="post-info">
                <a className="post-title" href={postPath}>
                    {this.props.postTitle}
                </a>
                <div className="post-price">
                    {this.props.postPrice}
                </div>
                <a className="post-comments-count" href={postPath}>
                    {this.props.postCommentsCount} comments
                </a>
            </div>
        );
    }
});