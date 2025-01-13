import React from "react";

const PrivacyPolicy = () => {
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
            maxWidth: "900px",
            width: "100%",
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
        sectionTitle: {
            color: "#166534",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "20px",
            marginBottom: "10px",
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
                <h1 style={styles.header}>Privacy Policy</h1>
                <div style={styles.divider}></div>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        At <strong style={styles.highlight}>Deserthoppers.com</strong>, we value our customers’ privacy and are committed to protecting the personal information shared with us. This notice outlines our practices for collecting, using, and safeguarding your information. It is available on our homepage and at every point where personally identifiable information may be requested.
                    </p>
                    <div>
                        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
                        <p style={styles.paragraph}>
                            We collect various types of information, including:
                        </p>
                        <ul style={styles.content}>
                            <li>Personal Details: Login credentials, email address, and contact numbers.</li>
                            <li>Transactional Data: Travel bookings, PNR details, co-passenger information, preferences, and special requests.</li>
                            <li>Demographics: Gender, age/date of birth, and nationality.</li>
                            <li>Payment Information: Records of purchases, payment methods, invoice details, and payment dates.</li>
                            <li>Browsing & Device Data: Browsing activity, device type, IP address, and internet service provider.</li>
                            <li>Other Information: Logs, cookies, mobile analytics, location data, and device identifiers.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 style={styles.sectionTitle}>2. Security Measures</h2>
                        <p style={styles.paragraph}>
                            - SSL encryption secures sensitive data transmission.<br />
                            - Only the last four digits of credit card numbers are displayed during booking confirmation.<br />
                            - Customers are advised to safeguard their passwords and sign off when using shared devices.
                        </p>
                    </div>
                    <div>
                        <h2 style={styles.sectionTitle}>3. Collection Methods</h2>
                        <p style={styles.paragraph}>
                            - Directly from you when you interact with our platform (e.g., making a booking).<br />
                            - Automatically through your device during website or app usage.<br />
                            - From third-party sources like travel partners or social networks.<br />
                            - By creating internal records based on your interactions with us.
                        </p>
                    </div>
                    <div>
                        <h2 style={styles.sectionTitle}>4. Purpose of Collecting Information</h2>
                        <p style={styles.paragraph}>
                            - To process bookings, payments, and other travel-related transactions.<br />
                            - To personalize your user experience and improve our services.<br />
                            - To enhance the website’s usability based on user feedback.<br />
                            - To comply with regulatory and legal requirements.
                        </p>
                    </div>
                    <div>
                        <h2 style={styles.sectionTitle}>5. Information Sharing</h2>
                        <p style={styles.paragraph}>
                            We may share your data with:
                        </p>
                        <ul style={{ paddingLeft: "20px" }}>
                            <li>Customer support and travel partners to fulfill your bookings.</li>
                            <li>Customs, immigration, and regulatory authorities, as required by law.</li>
                            <li>Payment processors for transaction authentication.</li>
                            <li>Third-party service providers for analytics, marketing, and operational support.</li>
                            <li>Affiliates and parent companies to inform you about services and products of interest.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 style={styles.sectionTitle}>10. Contact Us</h2>
                        <p style={styles.paragraph}>
                            If you have any questions about this policy or concerns about your data, please reach out to us.  <br />
                            Email: <a href="mailto:enquiry@deserthoppers.com" style={styles.highlight}>enquiry@deserthoppers.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
