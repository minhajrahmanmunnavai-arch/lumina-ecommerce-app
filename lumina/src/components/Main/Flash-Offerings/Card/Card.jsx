import ProductCard from "./CardDesign"

const Card = () => {

    const itemDetails = [
        {
            img : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
            discount: "15%",
            shopName: "Lumina Horology",
            itemName: "WATCHES",
            productTitle: "Titan Minimalist Chronograph",
            reating: "142",
            price: "380",
            discoutnPrice: "450"
        },
        {
            img : "https://i.pinimg.com/1200x/1d/b2/41/1db241ddce4aa158ff5f10896287ddfc.jpg",
            discount: "17%",
            shopName: "Studio Atelier",
            itemName: "Lighting",
            productTitle: "Artisanal Ribbed Ceramic Lamp",
            reating: "89",
            price: "240",
            discoutnPrice: "290"
        },
        {
            img : "https://i.pinimg.com/736x/78/8e/a7/788ea75b563a6b90ba9ad821ad104d91.jpg",
            discount: "16%",
            shopName: "Atelier Nord",
            itemName: "Accessories",
            productTitle: "Vachetta Leather Weekender",
            reating: "96",
            price: "520",
            discoutnPrice: "620"
        },
        {
            img : "https://i.pinimg.com/1200x/4f/9b/8e/4f9b8e095ef000b058a8ea9c3bac0602.jpg",
            discount: "12%",
            shopName: "Acoustic Audio",
            itemName: "Audio",
            productTitle: "Wireless Headphones",
            reating: "230",
            price: "349",
            discoutnPrice: "390"
        }
    ]


  return (
    <div className="flex gap-7 justify-between">
        {itemDetails.map((elem, idx) => (
            <ProductCard 
                key={idx}
                img={elem.img}
                discount={elem.discount}
                shopName={elem.shopName}
                itemName={elem.itemName}
                productTitle={elem.productTitle}
                reating={elem.reating}
                price={elem.price}
                discoutnPrice={elem.discoutnPrice}
            />
        ))}
    </div>
  )
}

export default Card