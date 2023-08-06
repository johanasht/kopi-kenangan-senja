
// soal 1
// let text = prompt('Input String')
// let vowels = 'aiueo'
// let answer = ''
// for(let char_text of text){
//     if(/[a-zA-Z]/.test(char_text) && !vowels.includes(char_text.toLowerCase()))
//     {
//         answer += char_text + 'o' + char_text.toLowerCase();
//     }
//     else
//     {
//         answer += char_text;
//     }
// }
// console.log(answer)

// function reverseGameMode(input) {
//     const [transform, instructions] = input.split('\n');
  
//     if (transform === '0') {
//       // Reverse the instructions
//       const reversedInstructions = instructions.split('').map((char) => {
//         if (char === '0') return '1';
//         if (char === '1') return '0';
//         return char;
//       });
  
//       return reversedInstructions.join('');
//     } else if (transform === 'r') {
//       // Reverse the characters of the instruction string
//       return instructions.split('').reverse().join('');
//     } else {
//       // Handle other cases if needed
//       return 'Unsupported transform type';
//     }
//   }

// console.log(reverseGameMode('0\n001'));
// console.log(reverseGameMode('r\n*\nr*r*r****rr**rr***'));

// cosntructor
// function Orang(namaDepan,namaBelakang) {
//   this.namaDepan = namaDepan;
//   this.namaBelakang = namaBelakang;

//   this.namaLengkap = function(){
//     console.log(this. namaDepan + this.namaBelakang);
//   }
// };

// var orangSatu = new Orang("Fajar", "Sobirin");
// var orangDua = new Orang("Sarah", "Basuki");

// orangSatu.namaLengkap();
// orangDua.namaLengkap();

var motivasi = 'Saya pikir semua orang harus belajar koding, karena koding mengajarkan orang berpikir!';
console.log(`${motivasi.length} karakter`);