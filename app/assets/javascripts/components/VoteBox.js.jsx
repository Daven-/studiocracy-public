/**
 * Created by jd on 8/16/15.
 */

var VoteBox = React.createClass({

    //Set initial states from props
    getInitialState: function() {
        return {
            hasUpvote: this.props.initialHasUpvote,
            hasDownvote: this.props.initialHasDownvote
        };
    },

    //On upvote, change hasUpvote state and perform AJAX PUT
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
            var downvoteClasses = classNames ({
                'downvote':this.state.hasDownvote,
                'nullvote':!(this.state.hasDownvote)
            });

            var downvoteButton =
                <div className={downvoteClasses} onClick={this.toggleDownvote}>
                    ▼
                </div>;


            //Recalculates votecount based on states
            var calculatedVoteCount = this.props.initialVoteCount;
            if (this.state.hasUpvote){
                calculatedVoteCount += 1;
            }
            if (this.state.hasDownvote){
                calculatedVoteCount -= 1;
            }
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