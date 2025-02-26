export async function authenticateUser(token) {
  try {
    const response = await fetch(
      "http://localhost:8000/restapis/authenticate/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      }
    );

    const data = await response.json();
    console.log("Authentication response:", data);
    return data; // { authenticated: true/false, message: "..." }
  } catch (error) {
    console.error("Error authenticating user:", error);
    return { authenticated: false, message: "Error during authentication" };
  }
}
