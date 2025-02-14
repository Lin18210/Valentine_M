import { useState } from "react";
import { Link } from "react-router-dom";
import images1 from "../images/images.jpg"; 
import no1 from "../images/No 1.jpg";      
import no2 from "../images/No 2.jpg";      
import no3 from "../images/No 3.jpg";    
import no4 from "../images/No 4.jpg";

const images = [images1, no1, no2, no3, no4]; // Array of images

const messages = [
  "No",
  "Ha Why No??",
  "Hr min ka ak lo ma pyw nk ly kwrr",
  "Hyg min ka ma hok tok bu kwa",
];

export default function ValentinePage() {
  const [clicks, setClicks] = useState(0);
  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);
  const [showNoButton, setShowNoButton] = useState(true);

  const handleNoClick = () => {
    if (clicks < 3) {
      setClicks((prev) => prev + 1);
      setNoScale((prev) => Math.max(0.65, prev - 0.1));
      setYesScale((prev) => prev + 0.5);
    } else {
      setClicks(4);
      setShowNoButton(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-300 flex flex-col items-center pt-10 px-4">
      {/* Image Display */}
      <img
        src={images[clicks]}
        alt="Tom"
        className="rounded-lg w-[500px] h-[400px] object-cover max-w-[90%] md:w-[380px] md:h-[304px] sm:w-[280px] sm:h-[220px]"
      />

      {/* Valentine Question */}
      <h1 className="text-4xl md:text-3xl sm:text-xl mt-8 mb-6 text-center font-semibold">
        Will you be my Valentine? :3
      </h1>

      {/* Buttons */}
      <div className={`flex mt-3 gap-8 flex-wrap justify-center`}>
        <Link
          to="/yes"
          className="bg-green-600 text-white mt-3 px-6 py-3 rounded-lg text-xl md:text-lg sm:text-sm transition-transform duration-100 hover:scale-105"
          style={{
            transform: `scale(${yesScale})`,
            width: !showNoButton ? "150px" : "auto",
          }}
        >
          Yes
        </Link>

        {showNoButton && (
          <button
            onClick={handleNoClick}
            className="bg-red-500 text-white mt-3 px-6 py-3 rounded-lg text-xl md:text-lg sm:text-sm transition-transform duration-100 hover:scale-105"
            style={{ transform: `scale(${noScale})` }}
          >
            {messages[clicks]}
          </button>
        )}
      </div>
    </div>
  );
}
