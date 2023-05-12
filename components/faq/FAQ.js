function FaqItem({ title, text, secondText }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{text}</p>
        <p>{secondText}</p>
      </div>
    </div>
  );
}

export default FaqItem;
