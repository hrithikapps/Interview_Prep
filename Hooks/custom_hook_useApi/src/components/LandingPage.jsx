import useFetch from "../utils/useFetch";

export const LandingPage = () => {
  const { isLoading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data);

  if (isLoading) return <h3>Loading. . .</h3>;
  if (error) return <h3> {`Error : ${error.message}`}</h3>;

  return (
    <>
      <h2>Data Fetched</h2>
      {data && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}> {item.name} </li>;
          })}
        </ul>
      )}
    </>
  );
};
