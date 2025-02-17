import React from "react";

const hotelsData = [
    {
        package_name: "3 Star Budgeted Hotel in Dubai",
        destination_name: "UAE",
        nights: "Per Room Per Night",
        price: "AED 199",
        inclusions: "1 Night Accommodation in Standard Room",
        terms: [
            "Rates are subject to availability and change during peak seasons.",
            "Final vouchers are issued only after full payment is received.",
        ],
    },
    {
        package_name: "4 Star Hotel in Dubai",
        destination_name: "UAE",
        nights: "Per Room Per Night",
        price: "AED 275",
        inclusions: "1 Night Accommodation in Standard Room",
        terms: [
            "Rates may change during peak seasons or due to schedule changes.",
            "Final vouchers are issued only after full payment is received.",
        ],
    },
    {
        package_name: "5 Star Luxury Hotel in Dubai",
        destination_name: "UAE",
        nights: "Per Room Per Night",
        price: "AED 375",
        inclusions: "1 Night Accommodation in Standard Room",
        terms: [
            "Rates may change during peak seasons or due to schedule changes.",
            "Final vouchers are issued only after full payment is received.",
        ],
    },
];

const HotelsDubai = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>🏨 Dubai Hotel Packages</h2>
            <div style={styles.cardContainer}>
                {hotelsData.map((hotel, index) => (
                    <div key={index} className="hotel-card" style={styles.card}>
                        <div style={styles.cardHeader}>
                            <h3 style={styles.cardTitle}>{hotel.package_name}</h3>
                            <span style={styles.priceTag}>{hotel.price}</span>
                        </div>
                        <div style={styles.cardBody}>
                            <p><strong>📍 Destination:</strong> {hotel.destination_name}</p>
                            <p><strong>🛏️ Nights:</strong> {hotel.nights}</p>
                            <p><strong>✅ Inclusions:</strong> {hotel.inclusions}</p>
                            <ul style={styles.termsList}>
                                {hotel.terms.map((term, idx) => (
                                    <li key={idx} style={{display: "flex", gap: "4px"}}>
                                        ⚠️ <p>{term}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <style>
                {`
          .hotel-card {
            transition: all 0.3s ease-in-out;
          }
          .hotel-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 768px) {
            .cardContainer {
              grid-template-columns: 1fr;
            }
          }
        `}
            </style>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "1200px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
    },
    heading: {
        textAlign: "center",
        color: "#333",
        marginBottom: "20px",
        fontSize: "28px",
        fontWeight: "600",
    },
    cardContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
    },
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        borderLeft: "5px solid #fe8000",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        fontFamily: '"Quicksand", sans-serif'
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #eee",
        paddingBottom: "10px",
        marginBottom: "10px",
    },
    cardTitle: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#333",
    },
    cardBody: {
        color: "#555",
        lineHeight: "1.6",
    },
    priceTag: {
        backgroundColor: "#fe8000",
        color: "white",
        padding: "5px 12px",
        borderRadius: "6px",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        marginLeft: "5px"
    },
    termsList: {
        paddingLeft: "20px",
        marginTop: "10px",
    },
};

export default HotelsDubai;
