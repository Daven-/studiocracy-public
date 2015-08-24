var UserBar = React.createClass({
    render: function() {

        //Set to default icon if no icon found
        if(!this.props.userThumbSrc || this.props.userThumbSrc == "default_icon.jpg"){
            var userThumb = "/assets/default_icon.jpg";
        }
        else{
            var userThumb = this.props.userThumbSrc;
        }

        return (
            <div className="user-bar">
                <a href={this.props.userPath}>
                    <img className="user-thumbnail" src={userThumb}/>
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