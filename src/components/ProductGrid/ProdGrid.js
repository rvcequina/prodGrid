import CardComponent from "../CardComponent/CardComponent.js";
import useProductGrid from "./useProductGrid";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Modal from "../ModalComponent.js";
import Loader from "../Loader.js";
const ProdGrid = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [showAds,setShowAds] =useState(false)
  const { showLoading, error, productList, isVisible } =
    useProductGrid(pageNumber);


  
  
  
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (showLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isVisible) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log(productList)
        }
      });
      if (node) observer.current.observe(node);
    },
    [showLoading, isVisible]
  );

  useEffect(()=>{
    if(pageNumber%2 == 0){
      setShowAds(true)
    }
  },[pageNumber])

  useEffect(() => {
    setPageNumber(1);

  }, [""]);

  const handleAds = ()=>{
    setShowAds(false)
  }

  return (
    <>
      <div className="product-container">
        <div className="product-grid">
        {productList.map((items, index) => {
          if (productList.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={items.id}>
                <CardComponent
                title={items.title}  
                price={items.price}
                discountPercentage={items.discountPercentage}
                rating={items.rating}
                description={items.description}
                thumbnail={items.thumbnail}
                date={items.date}
                />
              </div>
            );
          } else {
            return <div key={items.id}>
               <CardComponent
                title={items.title}  
                price={items.price}
                discountPercentage={items.discountPercentage}
                rating={items.rating}
                description={items.description}
                thumbnail={items.thumbnail}
                date={items.date}
                />
            </div>;
          }
        })}
        </div>
        <div className="loading"></div>
        <div>{error && "Error"}</div>
      </div>

      {showLoading &&
      
      <Loader>
       <div class="loader"></div>
      </Loader>

      }
        
      {
        showAds &&
        <Modal>
        <div className="sponsors">
         <div className="close" onClick={handleAds}>Close</div>
         <div>
         <p>But first, a word from our sponsors:</p>
          <img
            className='ad'
            src={`http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`}
            alt='ad'/>
         </div>
         </div>
        </Modal>
      }

      
    </>
  );
};

export default ProdGrid;
