/**
 * Created by jd on 8/16/15.
 *
 * MainPostBox is a repeated component featuring a post's image, upvote count, title, price, comments, and poster.
 * It takes in the following parameters to build smaller components:
 * imageSource (String) -- the URL source for the post's main image
 * postTitle (String) -- The title of the post
 * postPrice (String) -- The price of the post formatted as a currency string
 * postCommentsCount (int) -- The number of comments a post has
 * userThumbSrc (String) -- The url source for the poster's profile thumbnail
 * userName (String) -- the poster's name
 * ** All parameters of VoteBox component must also be included **
 */

var MainPostBox = React.createClass({

    propTypes: {
        parentID: React.PropTypes.number.isRequired,

        // PostBoxImage
        imageSource: React.PropTypes.string.isRequired,

        // PostInfo
        postTitle: React.PropTypes.string.isRequired,
        postPrice: React.PropTypes.string,
        postCommentsCount: React.PropTypes.string.isRequired,

        // UserBar
        userThumbSrc: React.PropTypes.string,
        userName: React.PropTypes.string.isRequired,

        //VoteBox props
        initialVoteCount: React.PropTypes.number.isRequired,
        initialHasUpvote: React.PropTypes.bool.isRequired,
        initialHasDownvote: React.PropTypes.bool.isRequired,
        votableType: React.PropTypes.string.isRequired,
        hasDownvoteButton: React.PropTypes.bool
    },

    render: function() {
        var postboxID = 'postbox-id-' + this.props.parentID;

        return (
            <div className="main-post-box" id={postboxID}>
                < PostBoxImage
                    parentID = {this.props.parentID}
                    imageSource = {this.props.imageSource}
                    />
                < VoteBox
                    parentID = {this.props.parentID}
                    initialVoteCount= {this.props.initialVoteCount}
                    initialHasUpvote= {this.props.initialHasUpvote}
                    initialHasDownvote= {this.props.initialHasDownvote}
                    votableType= {this.props.votableType}
                    hasDownvoteButton= {this.props.hasDownvoteButton}
                    />
                < PostInfo
                    postTitle = {this.props.postTitle}
                    postPrice = {this.props.postPrice}
                    postCommentsCount = {this.props.postCommentsCount}
                    />
                < UserBar
                    userThumbSrc = {this.props.userThumbSrc}
                    userName = {this.props.userName}
                    />
            </div>
        );
    }
});