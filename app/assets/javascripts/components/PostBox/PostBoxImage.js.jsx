var PostBoxImage = React.createClass({

    propTypes: {
        parentID: React.PropTypes.number.isRequired,
        imageSource: React.PropTypes.string.isRequired
    },

    render: function() {
        var imgID = "img-id-" + this.props.parentID;
        var postPath= "/posts/"+ this.props.parentID;

        return (
            <div className="post-box-image">
                <a href={postPath}>
                    <img id={imgID} src={this.props.imageSource}/>
                </a>
            </div>
        );
    }
});