import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../../style/shop-inside.css"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Product() {
    const [product, setProduct] = useState([]);
    const [spec, setSpec] = useState([])
    const [cart, setCart] = useState({
        selectspec: '',
        totalPrice: 0,
        quantity: 1,
    });

    let increment = () => {
        //prevCart -> 獲取先前(最新)的狀態
        setCart((prevCart) => ({
            ...prevCart,//展開並保留Cart
            quantity: prevCart.quantity + 1,
            //算出單價再乘於總價
            totalPrice: (prevCart.totalPrice / prevCart.quantity) * (prevCart.quantity + 1)
        }));

    }
    let decrement = () => {
        if (cart.quantity > 1) {
            setCart((prevCart) => ({
                ...prevCart,
                quantity: prevCart.quantity - 1,
                totalPrice: (prevCart.totalPrice / prevCart.quantity) * (prevCart.quantity - 1)
            }))
        }
    }

    let specButton = (specItem,price) => {
        setCart((prevCart) => ({
            ...prevCart,
            selectspec: specItem,
            totalPrice: Number(price),
            quantity:1,
        }))
        console.log(price);

    }

    let addToCart = () => {
        //設定要儲存的資料
        const cartData = {
            productId: product.product_id,
            productImg:product.product_img,
            productName: product.product_name,
            productSpec: cart.selectspec,
            quantity: cart.quantity,
            taste: spec[0]?.taste,
            totalPrice: Number(cart.totalPrice),
        }
        let cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        const existItem = cartItem.find(item => item.productId === cartData.productId)
        if (existItem) {
            console.log('商品存在，更新購物車');
            existItem.quantity += cart.quantity
            existItem.totalPrice +=cart.totalPrice
        } else {
            console.log('新增到購物車');
            cartItem.push(cartData)
        }
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        alert(`商品已加入購物車${JSON.stringify(cartItem)}`)
    }
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:8000/shop/products/${id}`);
            setProduct(result.data);
            console.log(`[${result.data.specifications}]`);
            const spec = JSON.parse(`[${result.data.specifications}]`);
            // const spec = result.data.specifications
            setSpec(spec)
        }; getData()
    }, [id]);


    return (
        <div className="bodyMargin">
            <div className="box1 d-flex justify-content-center row">
                <div className="itemImg col-7">
                    <div className="container">
                        <div className="mySlides">
                            <div className="numbertext">1 / 6</div>
                            {/* <img src="https://cdn-v2.litomon.com/prod/2021/10/27/212591/fancycan-01_1.jpg.webp" /> */}
                        </div>
                        {/* <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                            <a className="next" onClick={plusSlides(1)}>&#10095;</a> */}

                        <div className="row">
                            <div className="column">
                                <img src={`/${product.product_img}`} className="demo cursor" style={{ width: "75%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="itemSelect col-5 ">
                    <div>
                        <h4>{product.product_name}</h4>
                        <p>選擇規格</p>
                        {spec.map((specItem, index) => (
                            <button id='spec' className='btn' key={index}
                                onClick={() => specButton(specItem.spec, specItem.price)}
                            >{specItem.spec}
                            </button>
                        ))}
                        <div>
                            <p>選擇口味</p>
                            <button className="btn btn-outline-dark">{spec[0]?.taste}</button>
                        </div>
                        <p >價錢</p>
                        <div className="d-flex flex-sm-wrap">
                            <p className="price1">TWD.{cart.totalPrice}</p>
                            <div className="d-flex flex-nowrap">
                                <button className="btn2" onClick={decrement}>-</button>
                                <span>{cart.quantity}</span>
                                <button className="btn2" onClick={increment}>+</button>
                            </div>
                            <button className="btn3"onClick={addToCart}>加入購物車</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}


export default Product;