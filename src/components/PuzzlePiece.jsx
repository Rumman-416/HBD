// PuzzlePiece.js
import React from "react";

const PuzzlePiece = ({ image, onClick, isEmpty }) => {
  const emptyClass = isEmpty ? "border-red-500" : "";
  return (
    <div
      className={`w-20 h-20   cursor-pointer ${emptyClass}`}
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="Puzzle Piece"
      />
    </div>
  );
};

export default PuzzlePiece;
