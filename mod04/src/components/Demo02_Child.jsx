import { useUser, useUserInfo } from "./Demo02_Provider.jsx";

export default function Demo02_Child() {
  const user = useUser();
  const userInfo = useUserInfo();

  return (
    <>
      <h3>Demo02_Child</h3>
      <p>
        User: {user.username} , {user.email}
      </p>
      <p>
        UserInfo: {userInfo.age} , {userInfo.country} , {userInfo.sex}
      </p>
    </>
  );
}
