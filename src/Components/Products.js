import React from 'reactn';
import ProductCard from './Product-Card';
import {
    Grid,
} from '@material-ui/core';


//const token = global.token;
import * as Constants from '../constants';


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
                            this.state.products.map( element => (
                                <Grid item xs={4}>
                                    <ProductCard
                                        key={element.id}
                                        image={element.images[0].id}
                                        name={element.name}
                                        price={element.price}
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