import React from "react";

const TermsAndConditionsMain = () => {
    const styles = {
        container: {
            backgroundColor: "#f3f4f6",
            minHeight: "100vh",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
        },
        card: {
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            position: "relative",
            maxWidth: "900px",
            width: "100%",
        },
        circleTop: {
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            backgroundColor: "#166534",
            borderRadius: "50%",
            zIndex: "-1",
        },
        circleBottom: {
            position: "absolute",
            bottom: "60px",
            left: "60px",
            width: "200px",
            height: "200px",
            backgroundColor: "#fef1de",
            borderRadius: "50%",
            zIndex: "-1",
        },
        header: {
            color: "#166534",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "25px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
        },
        divider: {
            height: "3px",
            width: "100px",
            backgroundColor: "#166534",
            margin: "0 auto 30px",
        },
        content: {
            lineHeight: "1.8",
            color: "#333",
            fontSize: "16px",
        },
        paragraph: {
            marginBottom: "20px",
            textAlign: "justify",
        },
        highlight: {
            fontWeight: "bold",
            color: "#166534",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.header}>Terms and Conditions</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        These <span style={styles.highlight}>Terms and Conditions</span>, together with any other written information we brought to your attention during the process of confirming your booking, apply to your booking with Desert Hoppers Tourism LLC. Please read the Terms and Conditions carefully prior to using Desert Hoppers Tourism website and making any bookings. If you do not agree with any portion of the Terms and Conditions, you cannot use the website in any method or make a booking.
                    </p>
                    <p style={styles.paragraph}>
                        All communications concerning customer service or your booking need to be sent to:
                        <br />
                        <span style={styles.highlight}>Desert Hoppers Tourism LLC</span>, 87556 - 370 Hamsha A Building, Unique World Business Center, Ansar Gallery - Al Karama - Dubai.
                        <br />
                        Or, email us: <a href="mailto:enquiry@deserthoppers.com" style={styles.highlight}>enquiry@deserthoppers.com</a>.
                    </p>
                    <br />  
                </div>

                <h1 style={styles.header}>CONTRACT</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        When making your reservation we, as a representative, would organize it for you to come into an agreement with the principal(s) or other supplier(s) such as tour operator / airline / cruise firm / lodging firm etc. as mentioned on your receipt(s). We could reserve you a holiday deal, in which instance you would hold one agreement with the principal, or we could reserve the services that make up your trip with various principals or suppliers, in which instance you would have different agreements with every one of them.
                    </p>
                    <p style={styles.paragraph}>
                        As a representative, we take no accountability for the actions or cuts of the principal(s) or supplier(s) or for the services offered by them. The principal’s(s’) or supplier’s(s’) Terms & Conditions would relate to your reservation and we suggest that you read them cautiously as they do hold significant details about your reservations.
                    </p>
                    <br />
                </div>

                <h1 style={styles.header}>BOOKING</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Passengers must make sure that all the names, timings are accurate as per their passports, and that the travel itinerary is correct. Changes might not be allowed after the tickets are provided and alterations may cost additional charges.
                        <br />
                        During a booking, all details will be read back to you and the respective details will be confirmed with the principal(s) or the supplier(s). On receipt of all travel documents please check whether the details such as names, dates and timings are accurate and advise us immediately if any correction to be done. Also, please be noted that all the tickets supplied are non-refundable, non-changeable and non-transferable unless otherwise mentioned.
                        <br />
                        The booking information that you provide to us will be passed on only to the relevant suppliers of your travel arrangements or other particular persons who are a part of the provision of your travel arrangements. Further, if required by any authorities, or as required by law, the information may be provided to public authorities such as customs or immigration. This applies to any sensitive information that you provide such as details of any disabilities, or dietary and religious requirements. Certain information may also be passed on to security or credit checking companies. If you are travelling to the United States, the US Customs and Border Protection will receive this information for the purposes of preventing and combating terrorism and other transnational serious crimes. In making this booking, your consent to this information being passed on to the relevant persons.
                        <br />
                        Airfares are promised upon ticketing only. If there would be any problem with the payment, we would inform you as soon as possible via email or phone. Otherwise, we would send you the ticket within 48 hours of your booking with us.
                        <br />
                        The free baggage allowance offered to the passenger differs based on the route, class/cabin seating and as per the norms of the Individual airline. Airlines might charge an extra fee for checked-in baggage, additional baggage or other voluntary services. Please contact the airlines straight for the most current updates concerning the baggage payment, weight and sizes of the bags.
                        <br />
                        Passengers need to be at the airport 3 hours prior to the departure as tickets could not be refunded or changed because of a no show at the airport.
                        <br />
                        Passengers are held accountable for all their travel documentation plus visas. Visas might be needed for the whole journey for both the destination and transit. Please check with the embassy accordingly.
                    </p>
                    <br />
                </div>

                <h1 style={styles.header}>PAYMENT</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Customers are required to pay an installment or the whole amount at the time of booking. If only a part payment is made, the balance has to be paid on or before the travel date. Failing to do so may result in cancellation of the booking by the principal(s) or supplier(s). This may involve cancellation fees set out in their Terms and Conditions. Unless otherwise mentioned in the booking conditions or advised the entire amount paid for the bookings will be held on behalf of the principal(s) or supplier(s) concerned.
                    </p>
                    <br />
                </div>

                <h1 style={styles.header}>CANCELLATION and AMENDMENT</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Written cancellation or amendment request to be sent by you and it will not take effect until received by us. Upon your book cancellation or amendments, the principal(s) or supplier(s) may charge the cancellation or amendment fee as per their Terms and Conditions (which may be at times the 100% of the total cost).
                        <br />
                        If you want to change any item, other than expanding the number of persons in your booking, you would have to pay a modification fee of INR 200 per booking, including the airline/supplier charges (if any). From time to time, we are obliged to gather extra taxes. You would be told about any extra taxes before the ticket issuance/re-issuance. After ticket issuance, many of the airlines do not permit modifications.
                        <br />
                        Desert Hoppers Tourism LLC nor its principal or supplier will be in charge of cancellation, delayed boarding and no refunds will be provided.
                        <br />
                    </p>
                </div>

                <h1 style={styles.header}>
                    INSURANCE
                </h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        We firmly suggest that you take out sufficient travel insurance in order to cover you and your party as many of the principal(s) or supplier(s) require you to do so as a condition of booking with them. Certain destinations have made taking out a travel Insurance compulsory; hence, we would suggest you to check with the relevant embassy or the Foreign and Commonwealth Office. These insurance cover may cover you and your party against the cost of cancellation by you; the cost of assistance (including repatriation) in the event of accident or illness; loss of baggage and money; and other expenses. Insurance cover are also available to cover you against the financial failure of the principal(s)/ suppliers(s) of your travel arrangements.
                        <br />
                        If the insurance is provided by us, please check it carefully to ensure that all the details are correct and that all relevant information has been provided by you. Failing to do so may affect the insurance cover.
                        <br />
                        <br />
                    </p>
                </div>

                <h1 style={styles.header}>
                    Visa Guidelines
                </h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Please carry applicable visa for the respective country you are visiting or transiting through. Please check-out the concerned airline and embassy for concerned Visa requirements.
                        <br />
                    </p>
                </div>
                <br />

                <h1 style={styles.header}>
                    PASSPORTS
                </h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Though we can provide general information about the passport and visa requirements related to your trip, it is your responsibility to get them confirmed from the relevant Embassies and/or Consulates. Neither we nor the principal(s) or supplier(s) accept any responsibility if you cannot travel because you have not complied with such requirements. Please take special note that for all air travel, airlines require photographic identification of a specific type.
                        <br />
                        Passports need to be valid for at least 6 months past the period of your stay.
                        <br />
                        New passport rules for Travelers to the United States of America has made it compulsory, that anyone travelling to the US for holidays or business below the Visa Waiver Program, needs to have the newest Biometric Passport or a Machine-Readable Passport that has an electronic chip, even if the electronic visa has been permitted. The biometric passport has a string of lines that could be swiped by the US Customs/Immigration/Border Protection officers that would rapidly verify the passport holder's identity and gather other details about the holder.
                        <br />
                        We need Passport Details for some airlines because airline do not allow us to issue the ticket without complete passport information. You may receive an e-mail from our side for these details on your updated e-mail address. In case of delay in response, airline may cancel your seat and you may have to pay the fare difference for the new flight booking as fares are subject to availability of seats.
                        <br />
                    </p>
                </div>

                <h1 style={styles.header}>HEALTH</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Though Desert Hoppers Tourism LLC can provide general health recommendation and formalities involved in your booking, it is your responsibility to check with your own doctor for your specific circumstances. Proposed vaccinations for travel might alter at any time. It is your duty to make sure that you get all the needed vaccinations, take all needed medication and follow all medical guidance in connection.
                    </p>
                    <br />

                </div>

                <h1 style={styles.header}>FINAL TRAVEL ARRANGEMENTS</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Please ensure that all your travel, passport, visa and insurance documents are in order and that you arrive in plenty of time for checking in at the airport. It may be necessary to reconfirm your flight with the airline prior to departure. Please ask us for details at least 72 hours before your outbound flight. You should take a note of any reference number or contact name when reconfirming. If you fail to reconfirm you may be refused permission to board the aircraft and you are unlikely to receive any refund.
                    </p>
                    <br />
                </div>

                <h1 style={styles.header}>CONFIRMATION</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        After the booking, Desert Hoppers Tourism LLC sends you an affirmation email that determines that Desert Hoppers Tourism LLC has acknowledged your service booking demand. Kindly keep in mind that this mail is only an acceptance of your purchase and the last verification would be given in the wake of checking the accessibility of your service that you asked for from the principal or supplier.
                    </p>
                    <br />
                </div>

            </div>
        </div>
    );
};

export default TermsAndConditionsMain;
