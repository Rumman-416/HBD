import React, { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";
import PuzzlePiece from "./PuzzlePiece";
import { Link } from "react-router-dom";

const images = [
  // add your images in this manner in the image folder
  // "images/p1.png",
  // "images/p2.png",
  // "images/p3.png",
  // "images/p4.png",
  // "images/p5.png",
  // "images/p6.png",
  // "images/p7.png",
  // "images/p8.png",
  // "images/p9.png",
];

const Puzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState(null);
  const [showbutton, setShowButton] = useState(false);
  useEffect(() => {
    const generatePuzzle = () => {
      const shuffledImages = shuffle(images);
      const pieces = shuffledImages.map((image, index) => ({
        id: index,
        image,
      }));
      setPieces(pieces);
    };

    generatePuzzle();
  }, []);

  const handleClick = (index) => {
    if (selectedPieceIndex === null) {
      setSelectedPieceIndex(index);
    } else {
      if (index !== selectedPieceIndex) {
        const newPieces = [...pieces];
        const temp = newPieces[index];
        newPieces[index] = newPieces[selectedPieceIndex];
        newPieces[selectedPieceIndex] = temp;
        setPieces(newPieces);
        if (isPuzzleSolved(newPieces)) {
          console.log("Puzzle solved!"); // Log a message to the console
          setShowButton(true);
        }
      }
      setSelectedPieceIndex(null);
    }
  };

  const isPuzzleSolved = (currentPieces) => {
    // Check if puzzle is solved by comparing image URLs
    const solvedImages = images.join(",");
    const currentImages = currentPieces.map((piece) => piece.image).join(",");
    return solvedImages === currentImages;
  };

  return (
    <div className="  w-full flex flex-col justify-center items-center">
      <img src="images/hiro.png" alt="" className=" relative " />
      <div className=" relative top-[-15vh] font-medium text-2xl text-center">
        <h1 className=" font-hbd">Hey Boi !!!</h1>
        <h1 className=" font-hbd w-40">
          <span className=" text-pink-900">Welcome</span> to the real
          <span className="  text-blue-800"> adulthood</span>
        </h1>
      </div>
      <div className=" font-hbd pb-8">
        <h1 className=" text-2xl">Solve this puzzle to get your gift</h1>
      </div>
      <div className="grid grid-cols-3 ">
        {pieces.map((piece, index) => (
          <PuzzlePiece
            key={piece.id}
            image={piece.image}
            onClick={() => handleClick(index)}
            isSelected={index === selectedPieceIndex}
          />
        ))}
      </div>
      <div>
        {showbutton ? (
          <div>
            <Link to="/boi-gift">
              <input
                type="button"
                value="Gift"
                className=" h-10 bg-red-500 w-20 text-white m-10 rounded-md"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Puzzle;
