import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addOnsData from "./add-ons.json";
export default function Summary() {
  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();
  const planType = userInfo.planType;
  const planTitle = userInfo.plan.title;

  function getPlanType() {
    if (planType === "month") {
      return planTitle + "(Monthly)";
    }
    return planTitle + "(Yearly)";
  }

  function getPlanPrice() {
    if (planType === "month") {
      return userInfo.plan.monthPlan + "/mo";
    }
    return userInfo.plan.yearPlan + "/yr";
  }
  console.log(addOnsData);
  const GetAddOns = userInfo.addOnsTitles.map((addOn) => {
    let pri = 0;
    let addDetails = addOnsData.filter((add) => add.title === addOn)[0];
    console.log(addDetails);
    if (planType === "month") {
      pri = addDetails.price.month + "/mo";
    } else {
      pri = addDetails.price.year + "/yr";
    }

    return (
      <div key={addOn}>
        <span>{addOn}</span>
        <span>+${pri}</span>
      </div>
    );
  });
  function totalPrice() {
    let price = 0;
    userInfo.addOnsTitles.forEach((addOn) => {
      let addDetails = addOnsData.filter((add) => add.title === addOn)[0];
      if (planType === "month") {
        price += addDetails.price.month;
      } else {
        price += addDetails.price.year;
      }
    });
    if (planType === "month") {
      price += userInfo.plan.monthPlan;
      return price + "/mo";
    } else {
      price += userInfo.plan.yearPlan;
      return price + "/yr";
    }
  }
  return (
    <>
      <main>
        <div id="totalPrice">
          <div>
            <span>{getPlanType()}</span>
            <button>Change</button>
          </div>
          <span>+${getPlanPrice()}</span>
        </div>
        <div style={{ border: "1px solid green" }}>{GetAddOns}</div>
        <p className="">
          <span>Total(per {planType})</span>
          <span>+${totalPrice()}</span>
        </p>
      </main>
    </>
  );
}
