"use client"
// components/CoreValues.js
import React, { useState } from 'react';
import styles from './CoreValues.module.css';

const values = [
    { name: 'Integrität', description: 'Description for Integrität...', position: { x: 280, y: 420 } },
    { name: 'Kundenorientierung', description: 'Description for Kundenorientierung...', position: { x: 230, y: 80 } },
    { name: 'Mitarbeiterzufriedenheit', description: 'Description for Mitarbeiterzufriedenheit...', position: { x: 478, y: 178 } },
    { name: 'Leidenschaft', description: 'Description for Leidenschaft...', position: { x: 720, y: 80 } },
    { name: 'Innovation', description: 'Description for Innovation...', position: { x: 678, y: 377 } },
];

const CoreValues = () => {
    const [clickedIndex, setClickedIndex] = useState(null);  // Quản lý trạng thái click
    
    const handleClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);  // Toggle trạng thái click
    };
    
    return (
        <div className={styles.container}>
            <svg
                className={styles.lines}
                viewBox="0 0 1000 500"
                width="100%"
                height="auto"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Các đường line khép kín theo hình dạng yêu cầu */}
                <polyline points="300,450 250,100 500,200 750,100 700,400 300,450" fill="none" stroke="#47e281" strokeWidth="1" />
                
                {/* Các ngôi sao và text tại các mối nối */}
                {values.map((value, index) => (
                    <g key={index}>
                        {/* Ngôi sao */}
                        <polygon
                            points="50,15 61,35 82,35 66,50 72,72 50,60 28,72 34,50 18,35 39,35"
                            fill={clickedIndex === index ? "#005ae1" : "#47e281"}  // Đổi màu khi click
                            stroke="blue"
                            strokeWidth="2"
                            style={{
                                transform: `translate(${value.position.x}px, ${value.position.y}px) scale(0.5)`,
                                cursor: 'pointer'
                            }}
                            onClick={() => handleClick(index)}
                        />
                        {/* Text */}
                        <text
                            x={value.position.x - 30}
                            y={value.position.y - 10}
                            className={styles.label}
                            style={{
                                fill: clickedIndex === index ? '#47e281' : '#005ae1',  // Đổi màu khi click
                                cursor: 'pointer',
                                transition: 'fill 0.3s ease',
                            }}
                            onClick={() => handleClick(index)}
                        >
                            {value.name}
                        </text>
                        
                        {/* Hiển thị mô tả ngay dưới ngôi sao đã click */}
                        {clickedIndex === index && (
                            <foreignObject x={value.position.x - 30} y={value.position.y + 30} width="200" height="100">
                                <div className={styles.description}>
                                    <p>{value.description}</p>
                                </div>
                            </foreignObject>
                        )}
                    </g>
                ))}
            </svg>
            
            {/* Responsive cho mobile */}
            <div className={styles.mobileContainer}>
                {values.map((value, index) => (
                    <div key={index} className={styles.mobileRow}>
                        {/* Ngôi sao */}
                        <div className={styles.starContainer}>
                            <svg width="30" height="30">
                                <polygon
                                    points="15,3 18,12 27,12 20,18 22,27 15,22 8,27 10,18 3,12 12,12"
                                    fill={clickedIndex === index ? "#47e281" : "#005ae1"}
                                    stroke="blue"
                                    strokeWidth="2"
                                    onClick={() => handleClick(index)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </svg>
                        </div>
                        {/* Title bên cạnh ngôi sao */}
                        <div className={styles.titleContainer} onClick={() => handleClick(index)}>
                            <h3 className={clickedIndex === index ? styles.activeTitle : styles.title}>
                                {value.name}
                            </h3>
                            {/* Mô tả hiển thị khi click */}
                            {clickedIndex === index && (
                                <div className={styles.description}>
                                    <p>{value.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;
