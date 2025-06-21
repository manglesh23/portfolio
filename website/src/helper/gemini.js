import axios from "axios";
const gemini = async (prompt) => {
  try{
  console.log("gemini called");

  let data = JSON.stringify({
    user_question: prompt,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:7000/gemini/gemini",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let response = await axios(config);
  return response;
}catch(e){
  console.error(e);
}
};

export default gemini;
