

const CardComponent =({
    title,    
    price,
    discountPercentage,
    rating,
    description,
    thumbnail,
    date
})=>{

   


    return(
        <>
        <div className="card-container">
            <div className="top-content">
            <div className="title">{title}</div>
             <div className="rating">Rating:{rating}</div>
            </div>
            <div className="divide-vertical">
                <div className="thumbnail">
                    <img className="thumbnail_img" src={thumbnail} alt={title}/>
                </div>
            
            

                <div className="price-ratings"> 
                    {/* <div className="description">{description}</div> */}
                    <div > 
                        <div className="price">Price:{`$${price}`}</div>
                        <div className="discounted-price">Discount:{`$${discountPercentage}`}</div>
                    </div>
                    
                </div>
            </div>

          <div className="date">{date}</div>
        </div>
        </>
    )
}

export default CardComponent;