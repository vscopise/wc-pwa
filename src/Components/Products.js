import React from 'reactn';
import ProductCard from './Product-Card';
import {
    Grid,
} from '@material-ui/core';


import * as Constants from '../assets/constants';


export default class Products extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.setGlobal(
            fetch(Constants.apiUrl + 'wc/v3/products', {
                headers: {
                    authorization: 'Bearer ' + this.global.jwtToken,
                }
            })
            .then(response => response.json())
            .then(products => this.setState({
                products: products,
                isLoading: false
            }))
            .catch()
        )
    }

    render() {
        return(
            <div>
                {
                    ! this.state.isLoading &&
                    <Grid container spacing={16}>
                        {
                            this.state.products.map( product => (
                                <Grid item xs={4} key={product.id}>
                                    {}
                                    <ProductCard
                                        
                                        image={product.images.length>0 ? product.images[0].src : null}
                                        name={product.name}
                                        price={product.price}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                }
                {
                    this.state.isLoading &&
                    <span>loading...</span>
                }
            </div>
        )
    }
}