export default function Banner() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center bg-yellow-900 text-white ">
      <div className="text-center font-semibold space-y-5">
        <h1 className="font-bold text-2xl">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p>
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-yellow-950 px-4 py-2 text-lg font-bold rounded-lg">
          Learn More
        </button>
      </div>
      <div className="w-full">
        <img
          className="rounded-2xl px-2 py-4 w-full"
          src="https://i.ibb.co/4J5M6Q9/17.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
