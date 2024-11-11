import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../../style/cart.css"

function Cart() {
    const [cartItem, setCartItem] = useState([]);
    const [ordersData, setordersData] = useState([])

    //讀取localstorage的購物車資料
    useEffect(() => {
        const storeItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        setCartItem(storeItem);
    }, []);

    //讀取ordersData
    useEffect(() => {
        const getordersData = async () => {
            const result = await axios.get('http://localhost:8000/admin/ordersData');
            setordersData(result.data);
        }; getordersData();
    }, [])

    //購物車增加數量
    let increment = (key) => {
        const increment = cartItem.map((Item) => {
            //判斷購物車id = 產品id
            if (Item.productId == key) {
                return {
                    ...Item,
                    quantity: Item.quantity + 1,
                    //價格:算出單價以後在乘上數量
                    totalPrice: (Item.totalPrice / Item.quantity) * (Item.quantity + 1)
                }
            } return (Item)
        });
        setCartItem(increment);
        localStorage.setItem('cartItem', JSON.stringify(increment))
    }

    //購物車數量減少
    let decrement = (key) => {
        const decrement = cartItem.map((Item) => {
            if (Item.productId == key) {
                if (Item.quantity > 1) {
                    return {
                        ...Item,
                        quantity: Item.quantity - 1,
                        totalPrice: (Item.totalPrice / Item.quantity) * (Item.quantity - 1)
                    }
                    //如果數量不大於0 回傳NULL
                } else {
                    return null
                }
            } return (Item)

        })
            //過濾Item 不是NULL的項目
            .filter((Item) => Item !== null);
        setCartItem(decrement);
        localStorage.setItem('cartItem', JSON.stringify(decrement))
    }

    //計算總價
    const total =
        //reduce acc累加價格
        cartItem.reduce((acc, Item) => {
            return acc + (Item.totalPrice || 0)
        }, 0);
    //計算優惠
    const discount = parseInt(total * 0.88);  //優惠
    const discountPrice = total - discount;
    const freight = total >= 1000 ? 0 : 60;   //運費
    const freightMessage = total <= 1000 ?`再加購${1000-total}元就享免運` : "";
    //結帳按鈕
    let checkout = async () => {
        // console.log(ordersData);

        //判斷是否為會員
        if (true) {
            //新增 orders ID(自動編號) 會員ID 總價格
            const orderDataToSever = {
                user_id: 1,  //補入session 登入的user_id
                total_price: discount + freight, //總金額
                freight: freight
            }
            // console.log(orderDataToSever);
            const orderResponse = await axios.post('http://localhost:8000/admin/addOrders', orderDataToSever)
            let oderId = orderResponse.data.order_id;
            //再新增orderdetail orderID= oders orderID 產品ID 產品名稱 產品規格 數量 單價
            const orderDetailDataToServer = cartItem.map((Item => {
                return {
                    order_id: oderId,
                    product_id: Item.productId,
                    product_name: Item.productName,
                    product_spec: Item.productSpec,
                    taste: Item.taste,
                    quantity: Item.quantity,
                    price: Item.totalPrice,  //單價
                }
            }))
            const orderDataReq = orderDetailDataToServer.map((allProduct) =>
                axios.post('http://localhost:8000/admin/addToCart', allProduct)
            );
            await Promise.all(orderDataReq)

            localStorage.removeItem('cartItem');
            setCartItem([]);

            window.location = '/';
        } else {
            //不是會員的話進入登入頁面
            // window.location = '/login'
        }
    }
    return (
        <div className='body'>
            <div className="box d-flex justify-content-center align-items-center">
                <div className="title d-flex align-items-center">
                    <div className="">購物車</div>
                </div>

                {cartItem.map(Item => (
                    <div
                        className="nannyInfo d-flex flex-nowrap justify-content-center align-items-center"
                    >
                        <img src={`/image/${Item.productImg}`} />
                        <div>
                            <p>{Item.productName}{Item.productSpec}</p>
                        </div>
                        <div className="d-flex flex-nowrap">
                            <p className="price1">單價：TWD{Item.totalPrice / Item.quantity}</p>
                            <button className="btn2" key={Item.productId} onClick={() => decrement(Item.productId)}>-</button>
                            <span>{Item.quantity}</span>
                            <button className="btn2" onClick={() => increment(Item.productId)}>+</button>
                        </div>
                        <div>
                            <p>TWD{Item.totalPrice}</p>
                        </div>
                    </div>
                ))}
                <a href='/shop' className='ms-auto me-5 mt-5 text-decoration-none'>
                    <button className="checkoutBtn p-3" >繼續購物</button>
                </a>
                <p className="me-auto text-danger">全館88折</p>
                <p className="me-auto text-danger">{freightMessage}</p>
                <hr
                    width="100%"
                    color="#ff6144"
                    noshade="noshade"
                    style={{
                        margin:'30px',
                        height: '5px',
                        color: '#ff6144',
                        backgroundColor: '#ff6144',
                        opacity: '1'
                    }}
                />
                <div className="d-flex flex-wrap align-items-center">

                    <div className="subtotal d-flex justify-content-end">
                        <ul className="subtotalItem">
                            <li>商品總金額</li>
                            <li>優惠折扣</li>
                            <li>商品小計</li>
                            <li>運費</li>
                            <li>總計</li>
                        </ul>

                        <ul className="subtotalValue">
                            <li>$TWD:{total}</li>
                            {/* 若折扣金額大於0 顯示-金額 */}
                            <li>{discountPrice >= 0 ? -discountPrice : 0}</li>
                            <li>$TWD:{discount}</li>
                            <li>$TWD: {total>0 ? freight : 0}</li>
                            <li>$TWD:{discount + freight}</li>
                        </ul>
                    </div>


                    <button className="checkoutBtn p-5 ms-5" onClick={checkout}>結帳</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;