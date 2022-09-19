import React from "react";

export default function Ratings({review, rating}) {
  // console.log(rating);
  console.log(review, rating);
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "fa-solid fa-star"
              : rating >= 0.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa-solid fa-star"
              : rating >= 1.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa-solid fa-star"
              : rating >= 2.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa-solid fa-star"
              : rating >= 43.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fa-solid fa-star"
              : rating >= 4.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>  {review} Reviews</span>
    </div>
  );
}
