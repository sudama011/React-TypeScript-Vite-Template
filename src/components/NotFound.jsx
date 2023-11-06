import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = React.useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timerId = setTimeout(() => {
      navigate(-1);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-2 text-5xl font-bold text-gray-800 md:text-9xl dark:text-red-600">
        404
      </h1>
      <h2 className="mb-4 text-xl font-bold text-gray-700 md:text-3xl dark:text-red-400">
        Page Not Found
      </h2>
      <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
        Redirecting to the previous page in{" "}
        <span className="inline font-extrabold text-blue-700 dark:text-green-400">
          {count}
        </span>{" "}
        seconds.
      </p>
    </div>
  );
};

export default NotFound;
