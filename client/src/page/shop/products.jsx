import React, { Component } from "react";
import {useSearchParams} from 'react-router-dom';
import axios from "axios";
import "../../style/products.css"

class Product extends Component {
  state = {
    product: [],
  };
	async componentDidMount() {

		let id = this.props.match.params.id;
    const url = `http://localhost:8000/shop/products/${id}`;
    const result = await axios.get(url);
    let newState = { ...this.state };
    // console.log(result.data)
    let productItem = result.data;

    const specs = productItem.spec_list
      ? productItem.spec_list.split(", ").map((item) => {
          const [specifications, price] = item.split(" - ");
          return { specifications, price };
        })
      : [];

    // const specs = JSON.parse(`[${productItem.specifications}]`);
    newState.product = [{ ...productItem, specifications: specs }];

    // newState.product = result.data.map(productItem => {
    //     // 將 specifications 字段解析為 JSON 陣列
    //     const specs = JSON.parse(`[${productItem.specifications}]`);
    //     return { ...productItem, specifications: specs };
    // });
    this.setState(newState);
    console.log(specs);
  }

  render() {
    return (
      <div className="bodyMargin">
        <div className="box1 d-flex justify-content-center row">
          <div className="itemImg col-7">
            <div className="container">
              <div className="mySlides">
                <div className="numbertext">1 / 6</div>
                <img src="https://cdn-v2.litomon.com/prod/2021/10/27/212591/fancycan-01_1.jpg.webp" />
              </div>
              <a className="prev" onClick="plusSlides(-1)">
                &#10094;
              </a>
              <a className="next" onClick="plusSlides(1)">
                &#10095;
              </a>
              <div className="row">
                <div className="column">
                  <img
                    className="demo cursor"
                    src="image\dogfeed1.png"
                    style={{ width: "100%" }}
                    onClick="currentSlide(1)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="itemSelect col-5 ">
            {this.state.product.map((productItem) => (
              <div key={productItem.product_id}>
                <h4>{productItem.product_name}</h4>
                <p>選擇規格</p>
                {productItem.specifications.map((spec, index) => (
                  <button key={index} className="btn1">
                    {spec.specifications}
                  </button>
                ))}
                <div>
                  <p>選擇口味</p>
                  <button className="btn1">魚</button>
                </div>
                <p>價錢</p>
                <div className="d-flex flex-sm-wrap">
                  <div className="d-flex flex-nowrap">
                    <p className="price1">$NT 195</p>
                    <button className="btn2">-</button>
                    <span>5</span>
                    <button className="btn2">+</button>
                  </div>
                  <button className="btn3" onClick={this.addToCart}>
                    加入購物車
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // async componentDidMount() {
  //     let id = this.props.match.params.id;
  //     let url = "http://localhost:8000/data/item/" + id;
  //     var result = await axios.get(url);
  //     let newState = { ...this.state};
  //     newState.todoItem = result.data;
  //     this.setState(newState);
  //     console.log(newState);
  // }
  addToCart = () => {
    console.log("吉依卡哇");
  };
}

export default Product;
