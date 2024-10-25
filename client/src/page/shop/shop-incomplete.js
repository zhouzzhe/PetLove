import React, { Component } from 'react';
import axios from 'axios';

class Shop extends Component {
    state = {
        product: []
    };

    async componentDidMount() {
            // 發送請求獲取數據
            const result = await axios.get("http://localhost:8000/shop");
            // 創建新 state 並處理每個產品的 specifications
            let newState = { ...this.state };
            newState.product = result.data.map(productItem => {
                // 將 specifications 字段解析為 JSON 陣列
                const specs = JSON.parse(`[${productItem.specifications}]`);
                // 獲取第一筆和最後一筆價格
                const firstPrice = specs[0].price;
                const lastPrice = specs[specs.length - 1].price;
                // 將價格範圍添加到每個產品項目中
                return { ...productItem, firstPrice, lastPrice };
            });

            // 更新 state
            this.setState(newState);
    }

    render() {
        return (
            <body className='bodyMargin'>
                <div className='d-flex'>
                    <div className="leftBar sticky-top">
                        <ul>
                            <a href=""><li>乾飼料</li></a>
                            <a href=""><li>罐頭</li></a>
                            <a href=""><li>零食區</li></a>
                            <a href=""><li>玩具區</li></a>
                            <a href=""><li>貓砂盆</li></a>
                            <a href=""><li>其他用品</li></a>
                        </ul>
                    </div>
                    <div className="cardbox d-flex flex-wrap justify-content-center align-items-center">
                        {this.state.product.map(productItem =>
                            <div className="cardalign col-4" key={productItem.product_id}>
                                <a href={`/shop/product/${productItem.product_id}`} className="itemCard">
                                    <div className="cardPicture object-fit-container">
                                        <img src={productItem.product_img} alt={productItem.product_name} style={{ maxWidth: '100%' }} />
                                    </div>
                                    <div className="cardText"><p>{productItem.product_name}</p></div>
                                    <div className="cardText"><p>{productItem.lastPrice} - {productItem.firstPrice} 元</p></div>
                                    <a href={`/shop/cart/${productItem.product_id}`} ><button className="addCartBtn">加入購物車</button></a>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </body>
        );
    }

}

export default Shop;
