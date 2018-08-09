import mock from './mock'

// returns a 'mocked' data 
class ProductService {
    static getProducts() {
        return mock.products
    }
}

export default ProductService;