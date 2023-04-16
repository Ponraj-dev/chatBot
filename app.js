// const form =document.getElementById("chat-form")
// const input =document.getElementById("chat-input")
// const message = document.getElementById("chat-messages")
// const apiKey ="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";

// form.addEventListener("submit",async (e)=>
// {
//     e.preventDefault();
//     const message =input.value;
//     input.value="";

//     message.innerHTML +=`<div class="message user-message"> 
//     <img src='./icons/user.png' alt="user icon"<span>${message}</span>
//     </div>`;

//     const response = await axios.post(
//         "https://api.openai.com/v1/completions",
//         {
//             prompt: message,
//             model:"text-devinci-003",
//             temperature:0,
//             max_token:1000,
//             top_p:1,
//             frequency_penalty:0.0,
//             presence_penalty:0.0,
//         },
//         {
//             header:{
//                 "content-type":"application/json",
//                 Authorization: `Bearer  ${apiKey}`
//             },
//         }
//     );
//     const chatbotResponse =response.data.choices[0].text;


//     message.innerHTML +=`<div class="message user-message"> 
//     <img src='./icons/user.png' alt="user icon"<span>${chatbotResponse}</span>
//     </div>`;



// });



const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = "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";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";

  messages.innerHTML += `<div class="message user-message">
  <img src="user.png" alt="user icon"> <span>${message}</span>
  </div>`;

  // Use axios library to make a POST request to the OpenAI API
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: message,
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const chatbotResponse = response.data.choices[0].text;

  messages.innerHTML += `<div class="message bot-message">
  <img src="jarvis.png" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
});