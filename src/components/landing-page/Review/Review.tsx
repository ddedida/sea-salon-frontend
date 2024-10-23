"use client";

import React, { useState, useEffect, FormEvent } from "react";
import ReviewCard from "./ReviewCard";
import { FaStar } from "react-icons/fa6";

interface ReviewData {
  id: string;
  name: string;
  star: number;
  comment: string;
}

const Review = () => {
  const [stars, setStars] = useState(0);
  const [state, setState] = useState<ReviewData>({
    id: "",
    name: "",
    star: 0,
    comment: "",
  });
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReviews = localStorage.getItem("reviews");
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
    }
  }, []);

  // Save to localStorage when reviews state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  // Handle Stars
  const handleStar = (index: number) => {
    setStars(index + 1);
    setState({ ...state, star: index + 1 });
  };

  // Handle Submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (state.name === "" || state.star === 0 || state.comment === "") {
      alert("Please fill all fields!");
      return;
    }

    const uniqueId = crypto.randomUUID();
    const newReview = { ...state, id: uniqueId };
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews, newReview];
      if (typeof window !== "undefined") {
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
      }
      return updatedReviews;
    });

    // Reset form state
    setState({ id: "", name: "", star: 0, comment: "" });
    setStars(0);
  };

  return (
    <section className="flex h-fit w-full items-center justify-center bg-project-0">
      <div className="my-20 flex w-[1280px] flex-col gap-y-8">
        <h1 className="font-playFairDisplay text-5xl font-bold text-project-110">
          Reviews
        </h1>

        <div className="flex items-start justify-between">
          {/* Left Side */}
          <div className="flex h-fit w-[580px] flex-col gap-y-4">
            {/* Score */}
            <div className="flex h-fit w-full flex-col gap-y-2">
              <h3 className="h-fit w-full font-inter text-xl font-normal text-bw-primary">
                Bintang:
              </h3>
              <div className="flex h-fit w-full gap-x-4">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    className="flex h-10 w-10 items-center justify-center"
                    onClick={() => handleStar(index)}
                  >
                    <FaStar
                      className={`h-[26px] w-[26px] ${stars > index ? "fill-project-80" : "fill-bw-icon"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="flex h-fit w-full flex-col gap-y-2">
              <h3 className="font-inter text-xl font-normal text-bw-primary">
                Name:
              </h3>
              <input
                type="text"
                placeholder="Your name"
                className="h-fit w-full rounded-lg p-4 font-inter text-base font-normal text-bw-primary placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:text-bw-icon"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </div>

            {/* Comment */}
            <div className="flex h-fit w-full flex-col gap-y-2">
              <h3 className="font-inter text-xl font-normal text-bw-primary">
                Comment:
              </h3>
              <textarea
                placeholder="Write your review here..."
                className="flex h-fit min-h-40 w-full rounded-lg p-4 font-inter text-base font-normal text-bw-primary placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:text-bw-icon"
                value={state.comment}
                onChange={(e) =>
                  setState({ ...state, comment: e.target.value })
                }
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-2 flex w-full items-center justify-center rounded-lg bg-project-60 py-3 font-inter text-base font-bold text-white"
            >
              Submit
            </button>
          </div>

          {/* Right Side */}
          <div className="flex h-fit w-fit flex-col gap-y-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  id={review.id}
                  name={review.name}
                  star={review.star}
                  comment={review.comment}
                  onDelete={(id) => {
                    const updatedReviews = reviews.filter((r) => r.id !== id);
                    setReviews(updatedReviews);
                    if (typeof window !== "undefined") {
                      localStorage.setItem(
                        "reviews",
                        JSON.stringify(updatedReviews),
                      );
                    }
                  }}
                />
              ))
            ) : (
              <div className="flex h-[468px] w-[620px] items-center justify-center rounded-lg bg-project-20">
                <p className="font-inter text-xl font-medium text-bw-primary">
                  No reviews yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
