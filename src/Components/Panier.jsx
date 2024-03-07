import React from 'react'
import Header from './Header'


const CartItem = ({ image, productName, description, price, quantity, total }) => {
    return (
        <tr class="text-center">
            <td class="product-remove"><a href="#"> <i class="fa fa-circle-minus"></i> </a></td>

            <td class="image-prod">
                <img className="img" src={image} />
            </td>

            <td class="product-name">
                <h3>{productName}</h3>
                <p>{description}</p>
            </td>

            <td class="price">{price}</td>

            <td class="quantity">
                <div class="input-group mb-3">
                    <input type="number" name="quantity" class="quantity form-control input-number" min="1" max="100" />
                </div>
            </td>

            <td class="total">{total}</td>
        </tr>
    );
}



const Panier = () => {
    return (
        <div>
            <Header />
            {/* Page Header Start */}
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Panier</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">Panier</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/*  Page Header End */}

            <section class="container-fuild  py-6">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ftco-animate">
                            <div class="cart-list">
                                <table class="table">
                                    <thead class="thead-primary">
                                        <tr class="text-center">
                                            <th>&nbsp;</th>
                                            <th>Image</th>
                                            <th>Product name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <CartItem
                                            image="./assets/img/product-5.jpg"
                                            name="Bell Pepper"
                                            description="Far far away, behind the word mountains, far from the countries"
                                            price="$4.90"
                                            total="$4.90"
                                        />
                                        <CartItem
                                            image="./assets/img/product-1.jpg"
                                            name="Bell Pepper"
                                            description="Far far away, behind the word mountains, far from the countries"
                                            price="$4.90"
                                            total="$4.90"
                                        />
                                        <CartItem
                                            image="./assets/img/product-2.jpg"
                                            name="Bell Pepper"
                                            description="Far far away, behind the word mountains, far from the countries"
                                            price="$4.90"
                                            total="$4.90"
                                        />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
                            <div class="cart-total mb-3">
                                <h3>Coupon Code</h3>
                                <p>Enter your coupon code if you have one</p>
                                <form action="#" class="info">
                                    <div class="form-group">
                                        <label for="">Coupon code</label>
                                        <input type="text" class="form-control text-left px-3" placeholder="" />
                                    </div>
                                </form>
                            </div>
                            <p><a href="checkout.html" class="btn btn-primary py-3 px-4">Apply Coupon</a></p>
                        </div>
                        <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
                            <div class="cart-total mb-3">
                                <h3>Estimate shipping and tax</h3>
                                <p>Enter your destination to get a shipping estimate</p>
                                <form action="#" class="info">
                                    <div class="form-group">
                                        <label for="">Country</label>
                                        <input type="text" class="form-control text-left px-3" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="country">State/Province</label>
                                        <input type="text" class="form-control text-left px-3" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="country">Zip/Postal Code</label>
                                        <input type="text" class="form-control text-left px-3" placeholder="" />
                                    </div>
                                </form>
                            </div>
                            <p><a href="checkout.html" class="btn btn-primary py-3 px-4">Estimate</a></p>
                        </div>
                        <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
                            <div class="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p class="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p class="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p class="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr />
                                <p class="d-flex total-price">
                                    <span>Total</span>
                                    <span>$17.60</span>
                                </p>
                            </div>
                            <p><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Panier