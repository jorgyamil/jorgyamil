import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MovieTitle() {
  const router = useRouter();
  const [isNo, setIsNo] = useState();

  function submitHandler() {
    setIsNo("*No se puede :( debe hacer click en si");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-row text-center text-4xl">
      <div>
        Oye, quieres ver
        <p className="flex items-center justify-center font-bold">
          La temporada 3 de <p className="text-red-500 ml-2.5"> Atlanta</p>
        </p>
        conmigo?
        <div className="flex items-center justify-center mt-8 text-2xl">
          <button
            className="rounded-md border-solid py-1 px-4 hover:bg-black hover:text-white"
            onClick={() => router.push("/movie")}
          >
            Si
          </button>
          <button
            className="rounded-md border-solid py-1 px-4 hover:bg-black hover:text-white ml-20"
            onClick={submitHandler}
          >
            No
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute text-red-500 text-sm font-medium mt-8">
            <p>{isNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieTitle;
