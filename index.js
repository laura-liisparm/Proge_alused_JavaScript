function camelToTitleCase(words) {
  words = words.trim().charAt(0).toUpperCase() + words.trim().slice(1);
  let i = 0;
  words = words.split("");
  for (i; i < words.length; i += 1) {
    if (
      i > 0 &&
      i < words.length - 1 &&
      words[i] === words[i].toUpperCase() &&
      (words[i - 1] != words[i - 1].toUpperCase() ||
        words[i + 1] != words[i + 1].toUpperCase())
    ) {
      words.splice(i, 0, " ");
      i += 1;
    } else {
    }
  }
  words = words.join("");
  console.log(words);
}

camelToTitleCase("insertHTML");
camelToTitleCase("insertAdjacentHTML");
camelToTitleCase("firstHTMLElement");
camelToTitleCase("releaseDate");
camelToTitleCase("");
