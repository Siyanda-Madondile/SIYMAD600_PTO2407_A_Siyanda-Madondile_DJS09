const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
import { Permissions, LoyaltyUser } from "./enums.ts";
import { Review } from "./interfaces.ts";


export function showReviewTotal(
    value: number,
    reviewer: string,
    isLoyalty: LoyaltyUser
  ): void {
    const star = LoyaltyUser.GOLD_USER ? "\u2B50" : "";
    reviewTotalDisplay.innerHTML = `${value.toString()} Review${makeMultiple(
      value
    )} | last reviewed by: ${reviewer} ${isLoyalty ? star : ""}`;
  }

  export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
      returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
  }

  export function showDetails(
    authorityStatus: boolean | Permissions,
    element: HTMLDivElement,
    price: number
  ) {
    if (authorityStatus) {
      const priceDisplay = document.createElement("div");
      priceDisplay.innerHTML = price.toString() + "/night";
      element.appendChild(priceDisplay);
    }
  }

  export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
      return "s";
    } else return "";
  }

export function getTopTwoReviews(reviews : Review[]) : Review[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
   }