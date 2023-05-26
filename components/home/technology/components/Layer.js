const Layer = ({ images, title, description }) => (
  <div>
    <h4>{title}</h4>
    <p>{description}</p>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Image ${index}`} />
        {index < images.length - 1 && <hr />}
      </div>
    ))}
  </div>
);

export default Layer;
