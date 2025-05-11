import React from 'react';


const CircleProgress = ({ percentage }) => {
  const dots = Array.from({ length: 20 }); // more dots = smoother circle

  return (
    <div className="circle-container">
      <svg className="circle-svg" viewBox="0 0 100 100">
        {dots.map((_, i) => {
          // Adjust starting point to top (-90 degrees)
          const angle = (i / dots.length) * -360 - 90;
          const radians = (angle * Math.PI) / 180;
          const radius = 40;
          const x = 50 + radius * Math.cos(radians);
          const y = 50 + radius * Math.sin(radians);
          const isFilled = (i / dots.length) * 100 < percentage;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={isFilled ? 'currentColor' : '#eee'}
            />
          );
        })}
        <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#333">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
