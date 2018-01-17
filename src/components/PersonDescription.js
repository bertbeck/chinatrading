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
            <CardBody className="text-center">                
                <CardTitle>
                    <strong>{ props.name }</strong>
                </CardTitle>

                <CardText>
                    { props.description2 }
                </CardText>
            </CardBody>            
        </Card>        
    )
}

export default Post