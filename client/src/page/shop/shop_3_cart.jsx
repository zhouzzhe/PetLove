import axios from "axios";
import "../../style/cart.css";
import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [ordersData, setordersData] = useState([]);

  //讀取localstorage資料
  useEffect(() => {
    const storeItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    setCartItem(storeItem);
  }, []);

  //讀取ordersData
  useEffect(() => {
    const getordersData = async () => {
      const result = await axios.get("http://localhost:8000/shop/orderData");
      setordersData(result.data);
    };
    getordersData();
  }, []);

  //購物車增加數量
  let increment = (key) => {
    const increment = cartItem.map((Item) => {
      //判斷購物車id = 產品id
      if (Item.productId == key) {
        return {
          ...Item,
          quantity: Item.quantity + 1,
          //價格:算出單價以後在乘上數量
          totalPrice: (Item.totalPrice / Item.quantity) * (Item.quantity + 1),
        };
      }
      return Item;
    });
    setCartItem(increment);
    localStorage.setItem("cartItem", JSON.stringify(increment));
  };
  let decrement = (key) => {
    const decrement = cartItem
      .map((Item) => {
        if (Item.productId == key) {
          if (Item.quantity > 1) {
            return {
              ...Item,
              quantity: Item.quantity - 1,
              totalPrice:
                (Item.totalPrice / Item.quantity) * (Item.quantity - 1),
            };
            //如果數量不大於0 回傳NULL
          } else {
            return null;
          }
        }
        return Item;
      })
      //過濾Item 不是NULL的項目
      .filter((Item) => Item !== null);
    setCartItem(decrement);
    localStorage.setItem("cartItem", JSON.stringify(decrement));
  };

  const total =
    //reduce acc累加價格
    cartItem.reduce((acc, Item) => {
      return acc + (Item.totalPrice || 0);
    }, 0);

  // let checkout = async () => {
  //     const dataToServer = {
  //         cartItem: cartItem,
  //         total:total
  //     }
  //     await axios.post('http://localhost:8000/addToCart', dataToServer)
  //     window.location = '/'
  // }
  // console.log(cartItem);

  //結帳按鈕
  let checkout = async () => {
    // console.log(ordersData);

    //判斷是否為會員
    if (true) {
      //新增 orders ID(自動編號) 會員ID 總價格
      // const orderDataToSever = ordersData.map((item) => {
      const orderDataToSever = {
        user_id: 1, //補入session 登入的user_id
        total_price: total,
      };
      // console.log(orderDataToSever);
      const orderResponse = await axios.post(
        "http://localhost:8000/shop/addOrders",
        orderDataToSever
      );
      let oderId = orderResponse.data.order_id;
      //再新增orderdetail orderID= oders orderID 產品ID 產品名稱 產品規格 數量 單價
      const orderDetailDataToServer = cartItem.map((Item) => {
        return {
          order_id: oderId,
          product_id: Item.productId,
          product_name: Item.productName,
          product_spec: Item.productSpec,
          quantity: Item.quantity,
          price: Item.totalPrice,
        };
      });
      console.log(orderDetailDataToServer[0]);
      await axios.post(
        "http://localhost:8000/shop/addToCart",
        orderDetailDataToServer[0]
      );
      // window.location = '/';
      //不是的話進入登入頁面
    } else {
      // window.location = '/login'
    }
  };

  return (
    <div className="body">
      <div class="box d-flex justify-content-center align-items-center">
        <div class="title d-flex align-items-center">
          <div class="">購物車</div>
        </div>

        {cartItem.map((Item) => (
          <div class="nannyInfo d-flex flex-nowrap justify-content-center align-items-center">
            <img src={`/${Item.productImg}`} />
            <div>
              <p>{Item.productName}</p>
            </div>
            <div class="d-flex flex-nowrap">
              <p class="price1">單價：TWD{Item.totalPrice / Item.quantity}</p>
              <button
                class="btn2"
                key={Item.productId}
                onClick={() => decrement(Item.productId)}
              >
                -
              </button>
              <span>{Item.quantity}</span>
              <button class="btn2" onClick={() => increment(Item.productId)}>
                +
              </button>
            </div>
            <div>
              <p>TWD{Item.totalPrice}</p>
            </div>
          </div>
        ))}
        <hr
          width="100%"
          color="#ff6144"
          noshade="noshade"
          style={{
            margin: "80px",
            height: "5px",
            color: "#ff6144",
            backgroundColor: "#ff6144",
            opacity: "1",
          }}
        />
        <div class="d-flex flex-wrap align-items-center">
          <div class="subtotal d-flex justify-content-end">
            <ul class="subtotalItem">
              <li>商品總金額</li>
              <li>優惠折扣</li>
              <li>商品小計</li>
              <li>運費</li>
              <li>總計</li>
            </ul>

            <ul class="subtotalValue">
              <li>$TWD:{total}</li>
              <li>0</li>
              <li>$TWD:{total}</li>
              <li>$TWD: 60</li>
              <li>$TWD:{total + 60}</li>
            </ul>
          </div>

          <button class="checkoutBtn" onClick={checkout}>
            結帳
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
