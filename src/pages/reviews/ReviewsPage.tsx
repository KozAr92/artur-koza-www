import Scrollbar from "react-scrollbars-custom";
import "../../styles/Reviews.css";
import { ReviewTail } from "./ReviewTail.tsx";
import { useEffect, useState } from "react";

type Review = {
  id: number;
  title: string;
  link: string;
  description: string;
};

type Reviews = Review[];

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Reviews>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/Data/reviews.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Reviews = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className={"reviews-page"}>
      <Scrollbar style={{ width: "100%" }}>
        <div>
          {reviews.map((review) => (
            <ReviewTail
              title={review.title}
              link={review.link}
              description={review.description}
              key={review.id}
            />
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};
