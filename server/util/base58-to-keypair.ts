import bs58 from "bs58";

(()=> {
  const bytes = bs58.decode('private-key');
  console.log(JSON.stringify(Array.from(bytes)));
})()