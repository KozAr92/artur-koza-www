import Scrollbar from "react-scrollbars-custom";
import "./Reviews.css"
import {REVIEWS} from "./reviews.ts";
import {ReviewTail} from "./ReviewTail.tsx";

export const ReviewsPage = () => {
  return (
    <div className={"reviews-page"}>
      <Scrollbar style={{ width: "100%" }}>
        <div>
            {REVIEWS.map((review) => (
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
