import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col max-w-7xl justify-center items-center p-2 mt-10">
            <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
              <div className="text-5xl font-bold ">
                Manage Your Expenses Easily With EzyExpense
              </div>
              <br />
              <div className="text-xl font-semibold text-black-400 ">
                We are providing easiest way to to manage expenses, Get a full
                view so you know where to save.
              </div>
            </div>
            <div>
              <Image src="/hero1.jpg" alt="" width={500} height={600} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
