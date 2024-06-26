import axios from "axios";

// Gets the JWT token to allow the user make requests
export default async function getToken(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ message: "No userId provided!" });
  }

  try {
    const response = await axios.get(
      `https://embedded.runalloy.com/2024-03//users/${userId}/token`,

      {
        headers: {
          Authorization: `bearer ${process.env.API_KEY}`,
        },
      }
    );

    res.status(200).json({ message: "success", data: response.data });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Could not generate token!" });
  }
}
