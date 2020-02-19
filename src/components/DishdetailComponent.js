import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (<div></div>)
        }
    }

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>);
        }
        const commentsList = comments.map(comment => {
            return (
                <div class="container">
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            month: 'short', day: '2-digit', year: 'numeric'
                            }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </div>
            );
        });
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {commentsList}
                </ul>
            </div>
        );
    }

    render() {
        const thisDish = this.props.dish
        if (thisDish == null) {
            return (<div></div>);
        }
        return (
            <div className='row'>
                {this.renderDish(thisDish)}
                {this.renderComments(thisDish.comments)}
            </div>
        );
    }
}

export default DishDetail;
