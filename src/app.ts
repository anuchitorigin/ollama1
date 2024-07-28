import ollama from 'ollama';

// ### 1. Promise - Then - Catch ###
// ollama.chat({
//   model: 'llama3.1',
//   messages: [{ 
//     role: 'user', 
//     content: 'Why is the sky blue?' 
//   }],
// }).then((response) => {
//   console.log(response)
//   console.log('\n--- Chat completed. ---')
// }).catch((error) => {
//   console.error(error)
// });

// ### 2. Async - Await ###
// async function chat() {
//   const response = await ollama.chat({
//     model: 'llama3.1',
//     messages: [{ 
//       role: 'user', 
//       content: `
//         As a function caller, translate the input from the following templates into json format:
//         {instruction} {argument} -> { cmd: {command code}, arg: {argument} }
//         List of instructions:
//         - "Hello", "Hi" -> command code = "CMD_1"
//         - "Unlock", "Get key" -> command code = "CMD_2"
//       `,
//     }],
//   });
//   console.log(response);
// }

// setting stream: true
async function chat() {
  const message = { 
    role: 'user', 
    content: 'Why is the sky blue?' 
  }
  const response = await ollama.chat({ 
    model: 'llama3.1', 
    messages: [message], 
    stream: true,
  });
  for await (const part of response) {
    process.stdout.write(part.message.content)
  }
}

chat().then(() => {
  console.log('\n--- Chat completed. ---')
});