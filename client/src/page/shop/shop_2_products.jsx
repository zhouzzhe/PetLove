import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import "../../style/shop-inside.css"

function Product() {
    const [product, setProduct] = useState([]);
    const [spec, setSpec] = useState([])
    const [cart, setCart] = useState({
        selectspec: '',
        totalPrice: 0,
        quantity: 1,
    });
    //儲存選取規格
    const [specSelect, setSpecSelect] = useState(null);
    //儲存選取口味
    const [tasteSelect, setTasteSelect] = useState(null);
    const { id } = useParams();
    //取得產品ID下的商品
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:8000/product/data/item/${id}`);
            setProduct(result.data);
            //將資料庫資料轉換成JSON物件
        const spec = JSON.parse(`[${result.data.specifications}]`);
            setSpec(spec)
            setCart((prevCart) => ({
                ...prevCart,
                totalPrice: spec.length > 0 ? Number(spec[0].price) : Number(result.data.price)
            }))
        }; getData()
    }, [id]);

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

    let specButton = (specItem, price) => {
        setCart((prevCart) => ({
            ...prevCart,
            selectspec: specItem,
            totalPrice: Number(price),
            quantity: 1,
        }))
        setSpecSelect(specItem);
        console.log(price);

    }

    let addToCart = () => {
        //設定要儲存的資料
        const cartData = {
            productId: product.product_id,
            productImg: product.product_img,
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
            existItem.totalPrice += cart.totalPrice
        } else {
            console.log('新增到購物車');
            cartItem.push(cartData)
        }
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        alert(`商品已加入購物車`)
    }


    return (
        <div>
            <div className="d-flex justify-content-evenly row">
                <div className="text-center col-6">
                    <div>
                        <img src={`/image/${product.product_img}`} className="demo cursor" style={{ width: "70%" }}/>
                    </div>
                </div>
                <div className="itemSelect col-6 mt-4 ">
                    <div>
                        <h4>{product.product_name}</h4>
                        <p>選擇規格</p>
                        {spec.map((specItem, index) => (
                            //選中的項目等於顯示的項目變更按鈕樣式
                            <button id='spec' className={`text-dark mx-1 border-2 ${specSelect === specItem.spec ? 'btn  btn-outline-dark' : 'btn  btn-outline-warning'} `} key={index}
                                onClick={() => specButton(specItem.spec, specItem.price)}
                            >{specItem.spec || "無"}
                            </button>
                        ))}
                        <div>
                            <p>選擇口味</p>
                            {spec[0]?.taste &&
                                (<button className={`text-dark mx-1 border-2 ${tasteSelect === spec[0]?.taste ? 'btn  btn-outline-dark' : 'btn  btn-outline-warning'}`}
                                    onClick={() => setTasteSelect(spec[0]?.taste)}>{spec[0]?.taste}</button>)}
                        </div>
                        <p >價錢</p>
                        <div className="d-flex flex-sm-nowrap row">
                            <p className="price1 col-2">TWD.{cart.totalPrice}</p>
                            <div className="d-flex flex-nowrap col-4">
                                <button className="btn2" onClick={decrement}>-</button>
                                <span>{cart.quantity}</span>
                                <button className="btn2" onClick={increment}>+</button>
                            </div>
                            <button className="btn3 col-4" onClick={addToCart}>加入購物車</button>
                        </div>
                        <hr/>
                        <div>商品介紹:<br/>{product.introduction }</div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Product;