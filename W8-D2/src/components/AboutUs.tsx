import Board from "../assets/Board.png";
import Person from "../assets/Person.png";
import Star from "./Star";

function AboutUs() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Board})` }}
        className="w-screen h-[40rem] bg-cover bg-no-repeat text-white flex flex-col justify-center items-center mt-5 text-center"
      >
        <p className="text-2xl">What Our Customers Say</p>
        <p className="text-[7rem] text-yellow-400">،،</p>
        <p className="text-4xl w-[45rem] font-serif mb-7 p-2 max-sm:w-[30rem]">
          Share a real testimonial that hits some of your benefits (but isn’t too sales-y).
        </p>
        <div className="flex flex-col items-center ">
            <img src={Person} alt="" />
            <p className="font-bold">REAL NAME</p>
            <p className="font-semibold">Location</p>
            <Star />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
