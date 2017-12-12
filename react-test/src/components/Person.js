import React, { Component } from 'react'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import CardTitle from '../components/CardTitle'
import CardBody from '../components/CardBody'
import CardText from '../components/CardText'
import Button from '../components/Button'

const Post = (props) => {
    return (        
        <Card className="card-cascade">            
            <a className="waves-effect waves-light">
                <CardImage className="img-fluid" src={ props.photo }/>
            </a>
            <CardBody className="text-center">                
                <CardTitle>
                    <strong>{ props.name }</strong>
                </CardTitle>
                
                <h5>{ props.role }</h5>

                <CardText>
                    { props.description }
                </CardText>
                <Button tag="a" floating={true} size="small" className="btn-fb" >
                    <i className="fa fa-facebook"></i>
                </Button>
                <Button tag="a" floating={true} size="small" className="btn-tw" >
                    <i className="fa fa-twitter"></i>
                </Button>
                <Button tag="a" floating={true} size="small" className="btn-dribbble" >
                    <i className="fa fa-dribbble"></i>
                </Button>
            </CardBody>            
        </Card>        
    )
}

export default Post