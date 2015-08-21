var PostBoxImage = React.createClass({

    render: function() {
        var imgID = "img-id-" + this.props.postID;

        return (
            <div className="post-box-image">
                <img id={imgID} src={this.props.imageSource}/>
            </div>
        );
    }
});