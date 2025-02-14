import yesImage from "../images/Yes.jpg";

export default function YesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-300 flex flex-col items-center pt-20 px-4">
      <img
        src={yesImage}
        alt="Tom Happy"
        className="rounded-lg w-[500px] h-[400px] object-cover md:w-[380px] md:h-[304px] sm:w-[300px] sm:h-[240px]"
      />

      <h1 className="text-5xl md:text-3xl sm:text-xl mt-12 mb-8 font-steph text-center">
        Thanks for being my Valentine!:3333
      </h1>
    </div>
  );
}
