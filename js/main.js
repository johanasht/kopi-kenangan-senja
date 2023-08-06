function encrypt(text) {
    const vowels = "aeiou";
    let encryptedText = "";
  
    for (let char of text) {
      if (/[a-zA-Z]/.test(char) && !vowels.includes(char.toLowerCase())) {
        encryptedText += char + 'o' + char.toLowerCase();
      } else {
        encryptedText += char;
      }
    }
  
    return encryptedText;
  }
  
  function main() {
    const user_input = prompt("Masukkan kata yang ingin dienkripsi:");
    const encrypted_result = encrypt(user_input);
    console.log("Hasil enkripsi:", encrypted_result);
  }
  
  main();
  