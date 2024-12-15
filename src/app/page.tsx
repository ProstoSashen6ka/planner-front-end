import axios from "axios";

async function getUser() {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      email: "dkj@test.com",
      password: "njdsfgh"
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {

  getUser()
  return (
    <div></div>
  );
}
