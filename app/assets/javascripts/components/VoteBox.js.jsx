/**
 * Created by jd on 8/16/15.
 */

var VoteBox = React.createClass({

    propTypes: {
        initialVoteCount: React.PropTypes.number.isRequired,
        initialHasUpvote: React.PropTypes.bool.isRequired,
        initialHasDownvote: React.PropTypes.bool.isRequired,
        votableType: React.PropTypes.string.isRequired,
        parentID: React.PropTypes.number.isRequired,
        hasDownvoteButton: React.PropTypes.bool
    },

    //Set initial states from props
    getInitialState: function() {
        return {
            hasUpvote: this.props.initialHasUpvote,
            hasDownvote: this.props.initialHasDownvote
        };
    },

    //On upvote, change hasUpvote state
    toggleUpvote: function(){
        this.setState({
                hasUpvote: !(this.state.hasUpvote)
            },
            //This callback prevents user from having both upvote and downvote
            function(){
                if (this.state.hasUpvote && this.state.hasDownvote){
                    this.setState({
                        hasDownvote: false
                    });
                }

                //Build AJAX request URL
                var routeDest;
                if(this.state.hasUpvote){
                    routeDest = "like";
                }
                else{
                    routeDest = "unlike";
                }

                var URL = "/" + this.props.votableType + "/" + this.props.parentID + "/" + routeDest;
                console.log(URL);

                $.ajax({
                    url     : URL,
                    type    : 'put',
                    error: function(){
                        toastr.warning('Vote could not be submitted.');
                    }
                })
            }
        );
    },

    //On downvote, change hasDownvote state and perform AJAX PUT
    toggleDownvote: function(){
        this.setState({
                hasDownvote: !(this.state.hasDownvote)
            },
            function(){
                //This callback prevents user from having both upvote and downvote
                if (this.state.hasUpvote && this.state.hasDownvote){
                    this.setState({
                        hasUpvote: false
                    });
                }

                //Build AJAX request URL
                var routeDest;
                if(this.state.hasUpvote){
                    routeDest = "dislike";
                }
                else{
                    routeDest = "undislike";
                }

                var URL = "/" + this.props.votableType + "/" + this.props.parentID + "/" + routeDest;
                console.log(URL);

                $.ajax({
                    url     : URL,
                    type    : 'put',
                    data    : {id : this.props.parentID},
                    error: function(){
                        toastr.warning('Vote could not be submitted.');
                    }
                })
            }
        );
    },

    render: function() {

        //classNames addon for setting classes
        var upvoteClasses = classNames ({
            'upvote':this.state.hasUpvote,
            'nullvote':!(this.state.hasUpvote)
        });

        //Checks whether component has downvotes enabled
        if (this.props.hasDownvoteButton) {

            //classNames addon for setting classes
            var downvoteClasses = classNames({
                'downvote': this.state.hasDownvote,
                'nullvote': !(this.state.hasDownvote)
            });

            var downvoteButton =
                <div className={downvoteClasses} onClick={this.toggleDownvote}>
                    ▼
                </div>;
        }

        var calculatedVoteCount = this.props.initialVoteCount;

        //Recalculates votecount based on states
        if (this.state.hasUpvote){
            calculatedVoteCount += 1;
        }
        if (this.state.hasDownvote){
            calculatedVoteCount -= 1;
        }

        //Need to adjust for any votes the user made when pages was loaded
        //Otherwise upvotes will be double-counted
        if (this.props.initialHasUpvote){
            calculatedVoteCount -= 1;
        }
        if (this.props.initialHasDownvote){
            calculatedVoteCount += 1;
        }

        return (
            <div className="voteBox">
                <div className={upvoteClasses} onClick={this.toggleUpvote}>
                    ▲
                </div>
                <div className='num_votes'>
                    {calculatedVoteCount}
                </div>
                {downvoteButton}
            </div>
        );
    }
});