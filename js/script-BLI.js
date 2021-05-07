function pigLatin(sound) {
  sound = sound.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  if (vowels.includes(sound[0])) {
    return str + "way";
  } else {
    for (let char of sound) {
      if (vowels.includes(char)) {
        vowelIndex = sound.indexOf(char);
        break;
      }
    }

    return sound.slice(vowelIndex) + sound.slice(0, vowelIndex) + "ay";
  }
}
