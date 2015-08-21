var UserBar = React.createClass({
    render: function() {
        return (
            <div className="user-bar">
                <img className="user-thumbnail" src={this.props.userThumbSrc}/>
                <div className="user-name">
                    {this.props.userName}
                </div>
                >
            </div>
        );
    }
});