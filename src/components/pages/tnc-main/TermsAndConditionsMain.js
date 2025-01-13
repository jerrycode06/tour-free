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
            fontSize: "40px",
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
                {/* <div style={styles.circleTop}></div> */}
                {/* <div style={styles.circleBottom}></div> */}
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
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsMain;
