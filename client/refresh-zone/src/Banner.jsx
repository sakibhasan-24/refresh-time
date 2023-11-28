export default function Banner() {
  return (
    <section>
      <div className="flex flex-col md:flex-col lg:flex-row items-center bg-yellow-900 text-white ">
        <div className="text-center font-semibold space-y-5">
          <h1 className="font-bold text-2xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
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
      <div className="max-w-6xl mx-auto my-6 bg-orange-200 rounded-md px-2 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="text-center">
          <img
            className="w-1/3 mx-auto"
            src="https://i.ibb.co/h8ZbW3n/2.png"
            alt="Awesome Aroma"
          />
          <h1 className="font-semibold">Awesome Aroma</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="text-center">
          <img
            className="w-1/3 mx-auto"
            src="https://i.ibb.co/q9Dzx1J/1.png"
            alt="Awesome Aroma"
          />
          <h1 className="font-semibold">High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className="text-center">
          <img
            className="w-1/3 mx-auto"
            src="https://i.ibb.co/yPSNJYB/3.png"
            alt="Awesome Aroma"
          />
          <h1 className="font-semibold">Pure Grades</h1>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="text-center">
          <img
            className="w-1/3 mx-auto"
            src="https://i.ibb.co/2yhNSw0/4.png"
            alt="Proper Roasting"
          />
          <h1 className="font-semibold">Proper Roasting</h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </section>
  );
}
