const Cart = ({ items }) => {
  return (
    <div>
      <h1>
        <span>Network</span>
        <span>Structure</span>
      </h1>
      {items.map((item, index) => (
        <div key={index}>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <span>{item.title}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
