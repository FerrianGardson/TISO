export default function Card({ cl, image, title, text, link, linktext }) {
  return (
    <div className={`card ${cl}`}>
      <div className="wrap"><img src={image} alt={title} /></div>
      <h4>{title}</h4>
      <p>{text}</p>
      <a href={link}>{linktext}</a>
    </div>
  );
}