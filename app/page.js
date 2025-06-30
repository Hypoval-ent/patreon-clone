import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base  ">
        <div className="font-bold flex gap-6 md:gap-20 md:text-5xl justify-center items-center text-3xl">
          Get Me a Chai
          <span>
            <img className="invertImg" src="/tea.gif" width={88} alt="" />
          </span>
        </div>

        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects.
        </p>

        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      {/* Line break */}
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl font-bold text-center mb-14">
          Yours Fans can buy you Chai
        </h1>

        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/man.gif"
              width={88}
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Yours fans are available to support you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/coin.gif"
              width={88}
              alt=""
            />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">
              Your fans are willing are willing to contribute financially
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/group.gif"
              width={88}
              alt=""
            />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">
              Your fans are ready to collaborate with you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </div>
      </div>
    </>
  );
}
