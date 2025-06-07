export default function Tug({ cl, image, title, text, link, linktext, ph1, ph2, ph3, specs }) {
  return (
    <div className={`tug ${cl}`}>
      <div className="wrap"><img src={image} alt={title} /></div>
      <h4>{title}</h4>
      <p>{text}</p>
      {specs && (
  <div className="specs">
    {Object.entries(specs).map(([key, value]) => (
      <div key={key} className="spec">
        <span className="label">{key}:</span>
        <span className="value">{value}</span>
      </div>
    ))}
  </div>
)}

      <a href={link}>{linktext}</a>
    </div>
  );
}