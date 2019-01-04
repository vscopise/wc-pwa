import React from 'react';
import Card from '@material-ui/core/Card';
import {
    CardActions,
    CardActionArea, 
    CardContent,
    CardMedia, 
} from '@material-ui/core';


const ProductCard = (props) => (
    <Card>
        <CardActionArea>
            <CardMedia
                image={props.image}
                title={props.name}
            />
            <CardContent>
                <h2>{props.name}</h2>
            </CardContent>
        </CardActionArea>
    </Card>
)

export default ProductCard