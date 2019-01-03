import React from 'reactn'; // <-- reactn
import Product from './Product'

//const token = global.token;
//import * as Constants from './constants'


export default class Products extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        };
    }
    componentDidMount() {
            fetch(this.global.apiUrl + 'wc/v3/products', {
                headers: {
                    authorization: 'Bearer ' + this.props.jwtToken,
                }
            })
            .then(response => response.json())
            .then(products => this.setState({
                products: products,
                isLoading: false
            }))
            .catch()
    }

    render() {
        return(
            <div>
                {
                    ! this.state.isLoading &&
                    <div>
                        {
                            this.state.products.map( product => (
                                <Product product={product} key={product.id}/>
                            ))
                        }

                    </div>
                }
            </div>
        )
    }
}