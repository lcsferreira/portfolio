import React from "react";

interface ChipCardProps {
  children: React.ReactNode;
  className?: string;
  iconUrl?: string;
}

const ChipCard: React.FC<ChipCardProps> = ({
  children,
  className = "",
  iconUrl,
}) => {
  return (
    <div
      className={`inline-flex items-center px-4 py-2 mx-2 bg-gray-800/50 backdrop-blur-md rounded-full border border-white/20  text-white font-medium ${className}`}
    >
      {iconUrl && (
        <img src={iconUrl} alt={`${children} icon`} className="w-6 h-6 mr-2" />
      )}
      {children}
    </div>
  );
};

export default ChipCard;
