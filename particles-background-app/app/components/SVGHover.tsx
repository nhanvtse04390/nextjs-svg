"use client"
import React, { useState } from "react";

const SVGDiagramFullScreen = () => {
    const points = [
        { id: "point1", cx: 200, cy: 400, title: "Entrepreneurial Passion", description: "This is a longer description about point 1. It explains the details of entrepreneurial passion." },
        { id: "point2", cx: 600, cy: 200, title: "Intellectual Curiosity", description: "This is a longer description about point 2. It covers intellectual curiosity in detail." },
        { id: "point3", cx: 1000, cy: 350, title: "Intentional Integrity", description: "This is a longer description about point 3. Intentional integrity is vital in leadership." },
        { id: "point4", cx: 1400, cy: 500, title: "Innovation Mindset", description: "This is a longer description about point 4. Innovation mindset is key to progress." },
        { id: "point5", cx: 1800, cy: 300, title: "Intrinsically Inclusive", description: "This is a longer description about point 5. Being intrinsically inclusive fosters collaboration." },
    ];

    return (
        <div style={{position: "relative", width: "100vw", height: "100vh", overflow: "hidden"}}>
            <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet">
                {/* Vẽ các đường nối */}
                <line x1="200" y1="400" x2="600" y2="200" stroke="lightgray" strokeWidth="2"/>
                <line x1="600" y1="200" x2="1000" y2="350" stroke="lightgray" strokeWidth="2"/>
                <line x1="1000" y1="350" x2="1400" y2="500" stroke="lightgray" strokeWidth="2"/>
                <line x1="1400" y1="500" x2="1800" y2="300" stroke="lightgray" strokeWidth="2"/>

                {/* Vẽ các điểm khớp nối */}
                {points.map((point) => (
                    <g key={point.id} className="point-group">
                        <circle
                            cx={point.cx}
                            cy={point.cy}
                            r="10"
                            fill="gray"
                            className="hover-circle"
                            style={{cursor: "pointer", transition: "fill 0.3s ease"}}
                        />
                        {/* Title viết hoa, in đậm */}
                        <text
                            x={point.cx}
                            y={point.cy - 70}
                            fontSize="24"
                            fill="gray"
                            fontWeight="700"
                            className="hover-title"
                            style={{textTransform: "uppercase", transition: "fill 0.3s ease"}}
                        >
                            {point.title}
                        </text>
                    </g>
                ))}
            </svg>

            <svg width="1393.589" height="444.225" viewBox="0 0 1393.589 444.225" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m 1393.4,431 -206.71,-83.41 -231.108,5.377 -201.84,70 -72.5,-48.694 L 435.701,392.108 472.945,11.322 568.963,258.251 810.38,22.992"
                    className="light-gray-line"></path>
                <path d="M 1169.874,233.754 1287.11,28.856 1121.179,34.707 863.92,78.951 666.495,164.933 598.466,5.475"
                      className="light-gray-line"></path>
                <path d="M 1186.703,346.971 1170.311,233.271 956.225,353.11" className="light-gray-line"></path>
                <path d="m 863.492,78.973 92.683,273.666" className="light-gray-line"></path>
                <path d="M 435.201,392.763 215.028,441.103 0.413,123.403" className="light-gray-line"></path>
                <path d="m 473.317,11.012 207.329,103.1 129.312,-91.095 61.9,362.533"
                      className="light-gray-line"></path>
                <path d="m 1121.188,34.878 -166.8,321.436" className="light-gray-line"></path>
                <path d="M 214.458,441.102 307.878,137.04 513.597,254.172 681.513,374.046"
                      className="light-gray-line"></path>
                <circle cx="214.362" cy="439.40894" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="435.39801" cy="392.5271" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="308.263" cy="136.03589" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="680.65302" cy="114.00806" r="4.2140002" className="light-gray-circle"></circle>
                <circle cx="666.43701" cy="165.02002" r="4.2140002" className="light-gray-circle"></circle>
                <circle cx="598.39398" cy="4.8149414" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="810.22198" cy="23.029053" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="862.95203" cy="79.666992" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="1121.564" cy="35.087891" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="1287.564" cy="28.087891" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="1169.995" cy="233.86011" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="1186.587" cy="347.86401" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="955.94098" cy="352.67896" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="870.67102" cy="382.03101" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="681.32501" cy="374.40088" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="754.32501" cy="422.40088" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="473.19199" cy="10.833984" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="513.47699" cy="253.47998" r="4.8150001" className="light-gray-circle"></circle>
                <circle cx="568.53699" cy="258.29492" r="4.8150001" className="light-gray-circle"></circle>
                <path
                    d="m 10.591,190.852 147.752,-68.284 207.23,107.871 207.151,-107.221 206.167,108.084 208.635,-108.214 252.172,93.445 47.764,-71.376"
                    className="dark-gray-line"></path>
                <path
                    d="M 116.334,355.22 268.569,299.498 355.713,387.246 548.279,332.014 704.641,191.99 851.224,434.085"
                    className="dark-gray-line"></path>
                <path d="m 164.852,203.783 103.786,95.333 96.936,-68.223" className="dark-gray-line"></path>
                <path d="M 549.768,332.014 365.277,230.139" className="dark-gray-line"></path>
                <path d="M 355.709,385.751 365.735,230.599" className="dark-gray-line"></path>
                <circle cx="268.754" cy="299.57788" r="3.135" className="light-gray-circle"></circle>
                <circle cx="355.754" cy="386.57788" r="3.135" className="light-gray-circle"></circle>
                <circle cx="548.854" cy="331.57788" r="3.135" className="light-gray-circle"></circle>
                <circle cx="115.854" cy="355.5271" r="3.135" className="light-gray-circle"></circle>
                <circle cx="851.14099" cy="434.17212" r="3.135" className="light-gray-circle"></circle>
                <circle cx="704.83301" cy="192.13501" r="3.135" className="light-gray-circle"></circle>
                <circle cx="1099.141" cy="306.17212" r="3.135" className="light-gray-circle"></circle>
                <circle cx="1239.405" cy="216.5" r="3.135" className="light-gray-circle"></circle>
                <circle cx="1286.946" cy="145.89795" r="3.135" className="light-gray-circle"></circle>
                <circle cx="164.562" cy="203.86401" r="3.135" className="light-gray-circle"></circle>
                <circle cx="158.491" cy="123.79297" r="6.7930002" className="dark-gray-circle value-point"></circle>
                <circle cx="365.491" cy="230.79297" r="6.7930002" className="dark-gray-circle value-point"></circle>
                <circle cx="572.49103" cy="123.79297" r="6.7930002" className="dark-gray-circle value-point"></circle>
                <circle cx="779.49103" cy="230.79297" r="6.7930002" className="dark-gray-circle value-point"></circle>
                <circle cx="986.49103" cy="123.79297" r="6.7930002" className="dark-gray-circle value-point"></circle>
                <path d="m 1241.549,217.071 145.857,5.429" className="dark-gray-line"></path>
                <path d="m 779.491,230.793 319.168,75.859 141.039,-90.58" className="dark-gray-line"></path>
                <line y1="434.5" x2="1099.198" className="dark-gray-line" x1="851.198" y2="306.5"></line>
            </svg>

            {/* Các description cứng được tạo sẵn */}
            {points.map((point) => (
                <div
                    key={point.id}
                    className="description-box"
                    style={{
                        position: "absolute",
                        left: point.cx + 30,
                        top: point.cy + 30,
                        backgroundColor: "white",
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "10px",
                        maxWidth: "300px",
                        zIndex: 1000,
                        display: "none", // Bắt đầu bằng ẩn
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                >
                    {point.description}
                </div>
            ))}

            <style jsx>{`
                .point-group:hover .hover-title {
                    fill: black;
                }

                .point-group:hover + .description-box {
                    display: inline-block;
                }
            `}</style>
        </div>
    );
};

export default SVGDiagramFullScreen;
