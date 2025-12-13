import { useFetch } from "./Demo04_useFetch";

export default function Demo04_CustomHook() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log("render");

  if (isLoading) return <div>載入中...</div>;

  if (error) return <div>錯誤：{error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
