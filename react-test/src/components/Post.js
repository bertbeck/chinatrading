import React, { Component } from 'react'
import Card from '../components/Card'
import CardBody from '../components/CardBody'
import CardText from '../components/CardText'

const Post = (props) => {
    return (        
        <Card className="card-cascade wider">            
            <div className="view gradient-card-header peach-gradient">
                <h2 className="h2-responsive mb-2">{ props.title }</h2>
                <p>
                    <i className="fa fa-calendar"></i>
                    { props.date }
                </p>
            </div>
            
            <CardBody className="text-center">                
                <CardText className="mr-2 ml-2">
                    { props.text }
                </CardText>
                <a href="#" className="orange-text mt-1 d-flex flex-row-reverse">
                    <h5 className="waves-effect p-2">
                        Read more
                        <i className="fa fa-chevron-right"></i>
                    </h5>
                </a>
            </CardBody>            
        </Card>        
    )
}

export default Post