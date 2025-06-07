export default function AdvantageBox({ image, title, text, klass = "" }) {
  return (
    <div className={`advantage col-3 ${klass}`}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}