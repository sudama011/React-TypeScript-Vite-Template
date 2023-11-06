import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  
  let errorMsg =
    error?.data?.message || "Sorry, an unexpected error has occurred.";

  if (typeof error.data === "string") errorMsg = error.data;

  console.error("Error printed by ErrorPage:", error);

  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <h1 className="mb-4 text-4xl font-bold">Oops!</h1>
      <h2 className="mb-1 text-2xl">{error.status}</h2>
      <p className="mb-1 text-lg">{error.statusText}</p>

      <p className="mb-4 text-lg">{errorMsg}</p>

      <div className="flex flex-row">
        <button
          className="px-4 py-2 mr-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
