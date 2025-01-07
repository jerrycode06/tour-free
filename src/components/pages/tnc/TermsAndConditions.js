import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
        //   width: "85%",
        //   maxWidth: "900px",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Element */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            backgroundColor: "#166534",
            borderRadius: "50%",
            zIndex: "-1",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "200px",
            height: "200px",
            backgroundColor: "#fef1de",
            borderRadius: "50%",
            zIndex: "-1",
          }}
        ></div>

        <h1
          style={{
            color: "#166534",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "40px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            animation: "fadeInDown 1s ease-out",
          }}
        >
          Terms and Conditions
        </h1>
        <div
          style={{
            height: "3px",
            width: "100px",
            backgroundColor: "#166534",
            margin: "0 auto 30px",
            animation: "expand 1.5s ease-out",
          }}
        ></div>

        <ol
          style={{
            lineHeight: "1.8",
            color: "#555",
            fontSize: "16px",
            paddingLeft: "20px",
            listStyleType: "decimal",
            animation: "fadeIn 1s ease-out",
          }}
        >
          <li>
            This is only a land package and prices are subject to availability. Package prices may change during peak
            seasons or if dates or schedules change.
          </li>
          <li>Offered packages are as per the current promotions.</li>
          <li>Booking will be considered confirmed as per the payment policy.</li>
          <li>Final vouchers will be issued only once full payment has been received.</li>
          <li>The booking is deemed cancelled if full payment is not received within 15 days prior to departure.</li>
          <li>
            The customer agrees that the customized package is as per their will and choice. The final price reflects the
            inclusions selected by the customer. Any changes will be reflected in the final price.
          </li>
          <li>Customers’ final confirmation will include exact components selected and reviewed by the customer during booking.</li>
          <li>Mentioned itineraries are tentative and may change based on real-time scenarios.</li>
          <li>The displayed prices are calculated as per the prevailing exchange rate at the time of costing.</li>
          <li>
            Desert Hoppers Tourism LLC reserves the right to amend hotels to a similar category in case of non-availability.
          </li>
          <li>
            Prices are subject to changes due to currency fluctuations, supplier charges, or rail charge hikes. These changes
            must be paid in full before departure.
          </li>
          <li>Any visa cost fluctuations will be borne by the passenger.</li>
          <li>Late-night or early-morning airport transfers will incur additional charges.</li>
          <li>
            Standard check-in/out times for hotels are 3:00 PM/11:00 AM. Early check-in/out is subject to additional charges.
          </li>
          <li>100% cancellation fees apply once the booking is confirmed.</li>
          <li>Credit notes for remaining amounts after cancellations can be used for future bookings.</li>
          <li>
            For seat-in-coach (sharing basis) tours, clients must adhere to the provided timing. Missed transfers are the
            client’s responsibility, and additional costs will apply.
          </li>
          <li>
            Passports must be valid for at least six months from the return date of departure. Clients must ensure valid
            documentation.
          </li>
          <li>
            Desert Hoppers Tourism LLC is not responsible if passengers cannot travel due to circumstances. The cancellation
            policy will apply.
          </li>
        </ol>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes expand {
            0% {
              width: 0;
            }
            100% {
              width: 100px;
            }
          }
          ol li {
            transition: transform 0.3s ease, color 0.3s ease;
          }
          ol li:hover {
            transform: translateX(10px);
            color: #166534;
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
};

export default TermsAndConditions;
