import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Modal, Button } from 'react-bootstrap';
import "../../style/shop.css"

function Shop() {

    const [product, setProduct] = useState([]);
    const [category, setcategory] = useState([]);
    const [price, setPrice] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);  //paginate 從0開始
    const [numPage, setNumPage] = useState(1);  //總頁數
    const [showModal, setShowModal] = useState(false);  //設定彈出視窗
    const [selectedProductId, setSelectedProductId] = useState(null);


    //Product----------------
    const [productData, setProductData] = useState([]);
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
    const { id } = "1";
    useEffect(() => {
        if (selectedProductId) {
            const getData = async () => {
                const result = await axios.get(`http://localhost:8000/product/data/item/${selectedProductId}`);
                setProductData(result.data);
                const spec = JSON.parse(`[${result.data.specifications}]`);
                setSpec(spec)
                setCart((prevCart) => ({
                    ...prevCart,
                    totalPrice: spec.length > 0 ? Number(spec[0].price) : Number(result.data.price)
                }))
            }; getData()
        }
    }, [selectedProductId]);



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
            productId: productData.product_id,
            productImg: productData.product_img,
            productName: productData.product_name,
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
        setShowModal(false)

    }




    //-----------------------

    useEffect(() => {
        const getProductData = async () => {
            //取得分頁資料
            const result = await axios.get(`http://localhost:8000/product/data/page/${currentPage + 1}`);
            setProduct(result.data.data)
            //設定最高與最低價格
            const priceData = result.data.data.map(productItem => {
                // 將 specifications 字段解析為 JSON 陣列
                const specs = JSON.parse(`[${productItem.specifications}]`);
                // 獲取第一筆和最後一筆價格
                const firstPrice = specs[0].price;
                const lastPrice = specs[specs.length - 1].price;
                return { firstPrice, lastPrice };
            }); setPrice(priceData)

            setNumPage(result.data.lastPage)  //總頁數

        }; getProductData()

    }, [currentPage])

    useEffect(() => {
        const getCategoryData = async () => {
            //取得分類資料
            const categoryData = await axios.get(`http://localhost:8000/product/data`);
            //設定提取不重複的類別資料
            const uniquecategory = Array.from(new Set(categoryData.data.map(productItem => productItem.category)))
            setcategory(uniquecategory)

        }; getCategoryData()
    }, [])


    //取得類別資料

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
    }

    return (
        <div >
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>加入購物車</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="itemSelect col-6 mt-4 ">
                        <div>
                            <h5>{product.product_name}</h5>
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
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-warning" onClick={addToCart}>加入購物車</button>
                    <Button variant="secondary" onClick={()=>setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div className='d-flex positon-absolute'>
                <div className="leftBar fixed-top">
                    {/* 分類導覽 */}
                    <ul>
                        <a href='/shop'><li>全部商品</li></a>
                        {category.map((category, index) =>
                            <a href={`/shop/category/${category}`} key={index}><li>{category}</li></a>
                        )}
                    </ul>
                </div>
                <div className="cardbox d-flex flex-wrap justify-content-center align-items-center">
                    {product.map((productItem, index) =>
                        <div className="cardalign col-4" key={productItem.product_id}>
                            <div className="itemCard">
                                <a href={`/shop/product/${productItem.product_id}`} className="text-decoration-none text-dark">
                                <div className="cardPicture object-fit-container">
                                    <img src={`/image/${productItem.product_img}`} alt={productItem.product_name} style={{ maxWidth: '100%' }} />
                                </div>
                                <div className="cardText"><p>{productItem.product_name}</p></div>
                                <div className="cardText"><p>{price[index].lastPrice}{price[index].firstPrice === price[index].lastPrice ? "" :`- ${price[index].firstPrice}`} 元</p></div>
                            </a>
                                <p><button className="addCartBtn" key={productItem.product_id} onClick={() => { setSelectedProductId(productItem.product_id); setShowModal(true) } }>加入購物車</button ></p>
                            </div>
                        </div>


                    )}
                    <div className="d-flex justify-content-center align-items-center">
                        <ReactPaginate
                            previousLabel="< 上一頁"
                            nextLabel="下一頁 >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3} //顯示的連續頁碼數量
                            marginPagesDisplayed={2} //開頭結尾顯示?個頁碼
                            pageCount={numPage} //指定總頁數
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active" //選取顯示樣式
                            renderOnZeroPageCount={null}  //頁數為0時不渲染分頁內容
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Shop;
