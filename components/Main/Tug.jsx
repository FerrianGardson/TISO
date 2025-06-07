import { useState } from "react";
import specsMap from "@/components/specsMap";

export default function Tug({
  cl,
  image,
  title,
  subtitle,
  text,
  link,
  linktext,
  specs,
}) {
  const [popupSrc, setPopupSrc]   = useState(null);
  const [visiblePreviews, setVisiblePreviews] = useState(["01", "02", "03"]);

  const handlePreviewClick = (suffix) =>
    setPopupSrc(`/img/${image}_${suffix}_full.png`);

  const handleClose = (e) => {
    if (e.target.classList.contains("popup")) setPopupSrc(null);
  };

  /** выкидываем сломавшуюся картинку из state → React удалит элемент из DOM */
  const dropBroken = (suffix) =>
    setVisiblePreviews(prev => prev.filter(s => s !== suffix));

  return (
    <div className={`tug ${cl}`}>
      {/* --- контент ------------------------- */}
      <div className="content self-stretch">
        <img src={`/img/${image}.png`} alt={title} />
        <div>
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
        <p>{text}</p>
        <a href={link}>{linktext}</a>
      </div>

      {/* --- превьюшки ----------------------- */}
      <div className="photo">
        {visiblePreviews.map(suffix => (
          <img
            key={suffix}
            src={`/img/${image}_${suffix}.png`}
            alt=""
            onClick={() => handlePreviewClick(suffix)}
            onError={() => dropBroken(suffix)}   /* ← Удаляем из массива */
          />
        ))}
      </div>

      <div className="stroke" />

      {/* --- характеристики ------------------ */}
      <div className="specs">
        {specs && Object.entries(specs).map(([key, val]) => {
          const spec = specsMap[key];
          if (!spec) return null;

          const unit = spec.label.includes(",")
            ? spec.label.split(",")[1].trim()
            : "";

          return (
            <div key={key} className="spec">
              <img src={spec.icon} title={spec.label} alt={spec.label} />
              <span className="value">
                {val}{unit && ` ${unit}`}
              </span>
            </div>
          );
        })}
      </div>

      {/* --- поп-ап -------------------------- */}
      {popupSrc && (
        <div className="popup" onClick={handleClose}>
          <img src={popupSrc} className="popup-image" />
        </div>
      )}
    </div>
  );
}
