import { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchedData() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal,
        }).then((res) => res.json());
        setData(data);
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted:", error.message);
        } else {
          console.log("Error in fetching the data", error.message);
        }
      }
    }

    fetchedData();

    return () => {
      controller.abort();
      console.log(controller.signal.aborted);
    };
  }, []);

  return (
    <>
      <div>
        <div className="data-container">
          {isLoading ? (
            <p>Data is fetching..</p>
          ) : (
            <p> {JSON.stringify(data)}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FetchData;
