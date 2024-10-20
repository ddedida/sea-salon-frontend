import React from "react";
import { FaStar, FaTrash } from "react-icons/fa6";

type ReviewCardProps = {
  id: string;
  name: string;
  review: number;
  comment: string;
  onDelete: (id: string) => void; // Function prop to handle delete
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  name = "Your Name",
  review = 3,
  comment = "Write your review here...",
  onDelete,
}) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < review)
      stars.push(
        <FaStar key={i} className="h-[21px] w-[21px] fill-project-80" />,
      );
    else
      stars.push(<FaStar key={i} className="h-[21px] w-[21px] fill-bw-icon" />);
  }

  return (
    <div className="flex w-[620px] flex-col gap-y-2 rounded-lg bg-project-20 p-4">
      <div className="flex h-fit w-full items-center justify-between">
        <div className="flex flex-col">
          <h3 className="h-fit w-full font-inter text-xl font-semibold text-bw-primary">
            {name}
          </h3>
          <div className="flex h-fit w-fit gap-x-2">
            {stars.map((star, index) => (
              <span
                key={index}
                className="flex h-8 w-8 items-center justify-center"
              >
                {star}
              </span>
            ))}
          </div>
        </div>

        {/* Delete Button */}
        <button
          className="flex items-center justify-center rounded-full bg-red-500 p-2 text-white transition duration-150 ease-in-out hover:bg-red-400"
          onClick={() => onDelete(id)} // Call the onDelete function with the review ID
        >
          <FaTrash className="h-5 w-5" />
        </button>
      </div>
      <p className="h-fit w-full font-inter text-base font-normal text-bw-primary">
        {comment}
      </p>
    </div>
  );
};

export default ReviewCard;
