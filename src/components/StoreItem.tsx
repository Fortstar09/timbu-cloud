import "./style/store.css";
import { Link } from "react-router-dom";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  descrip: string;
  imgUrl: string;
};

// export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
export function StoreItem({
  id,
  name,
  price,
  descrip,
  imgUrl,
}: StoreItemProps) {
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
        <p style={{display:"none"}}>{id}</p>
      </div>
      <Link to="/Cart" className="button">
          <span>Add to cart</span>
          <img src="/img/shop-cart.svg" alt="items" />
      </Link>
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
