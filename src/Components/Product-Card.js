import React from 'react';
import Card from '@material-ui/core/Card';
import {
    CardActions,
    CardActionArea, 
    CardContent,
    CardMedia, 
    withStyles
} from '@material-ui/core';
import styles from '../assets/styles'

 
const ProductCard = (props) => (
    <Card className={props.classes.ProductCard}>
        <CardActionArea>
            {
                props.image &&
                <CardMedia
                    className={props.classes.ProductCardMedia}
                    image={props.image}
                    title={props.name}
                />
            }
            <CardContent>
                <h4>{props.name}</h4>
            </CardContent>
        </CardActionArea>
    </Card>
)

export default withStyles(styles)(ProductCard)