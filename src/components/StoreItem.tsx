import "./style/store.css";
// import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext"
// import { useEffect } from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  descrip: string;
  imgUrl: string;
};

fetch("")

// const Api key = "0d9a126891a241f3aff8d6dbf24afdaa20240712152652043993"
// const App id = "MCTZHZVUL3EVPHU"
//  const organisation ID = "f888505d81914a6c8967389265a4c456"

// "https://api.timbu.cloud/products?organization_id=123&reverse_sort=false&page=2&size=10&APP_ID=123&A=d9a126891a241f3aff8d6dbf24afdaa20240712152652043993"
// curl -X GET "https://api.timbu.cloud/products?organization_id=123&reverse_sort=false&page=2&size=10&APP_ID=123&API_KEY=1234567890"

// export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
export function StoreItem({
  id,
  name,
  price,
  descrip,
  imgUrl,
}: StoreItemProps) {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    // removeFromCart,
  } = useShoppingCart()

 const quantity = getItemQuantity(id)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "/api/products?organization_id=f888505d81914a6c8967389265a4c456&reverse_sort=false&page=2&size=1&Appid=MCTZHZVUL3EVPHU&Apikey=0d9a126891a241f3aff8d6dbf24afdaa20240712152652043993"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);
  

  return (
    <>
      <img src="/img/linear-heart.svg" className="love" alt="" />
      <img src={imgUrl} alt=""></img>
      <div className="item-des">
        <div className="item-name">
          <h3 className="name">{name}</h3>
          <h3 className="price">${price}</h3>
        </div>
        <p>{descrip}</p>
        <p style={{ display: "none" }}>{id}</p>
      </div>
      {quantity === 0 ? (
        <div className="button" onClick={() => increaseCartQuantity(id)} >
          <span>Add to cart</span>
          <img src="/img/shop-cart.svg" alt="items" />
        </div>
      ) : (
        <div className="view">
          <span onClick={() => decreaseCartQuantity(id)}>-</span>
          <p>{quantity}</p>
          <span onClick={() => increaseCartQuantity(id)}>+</span>
        </div>
      )}
    </>
  );
}

// <Card className="h-100">
//   <Card.Img
//     variant="top"
//     src={imgUrl}
//     height="355px"
//     style={{ objectFit: "cover" }}
//   />
//   <Card.Body className="d-flex flex-column">
//     <Card.Title className="d-flex justify-content-between align-items-baseline">
//       <span className="fs-4">{name}</span>
//       <span className="ms-2 text-muted">${price}</span>
//     </Card.Title>
//     <hr />

//     <Card.Text>
//     </Card.Text>

//     <div className="mt-auto">
//           {quantity === 0 ? (
//             <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
//               + Add To Cart
//             </Button>
//           ) : (
//             <div
//               className="d-flex align-items-center flex-column"
//               style={{ gap: ".5rem" }}
//             >
//               <div
//                 className="d-flex align-items-center justify-content-center"
//                 style={{ gap: ".5rem" }}
//               >
//                 <Button>-</Button>
//                 <div>
//                   <span className="fs-3">{quantity}</span> in cart
//                 </div>
//                 <Button>+</Button>
//               </div>
//               <Button
//                 onClick={() => removeFromCart(id)}
//                 variant="danger"
//                 size="sm"
//               >
//                 Remove
//               </Button>
//             </div>
//           )}
//         </div>
//   </Card.Body>
// </Card>
