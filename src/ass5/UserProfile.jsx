import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Yasaswini";
  const age = 21;

  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "300px" }}>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
