var UserBar = React.createClass({
    render: function() {
        return (
            <div className="user-bar">
                <a href={this.props.userPath}>
                    <img className="user-thumbnail" src={this.props.userThumbSrc}/>
                    <span className="user-name">
                        {this.props.userName}
                    </span>
                    <span className='user-bar-arrow'>
                    >
                    </span>
                </a>
            </div>
        );
    }
});