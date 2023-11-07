document.getElementById("scrambleForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const content = document.getElementById("textContent").value;
  const scrambleWords = document.getElementById("scrambleWords").value.split(" ");
  const scrambledContent = scrambleWords.reduce(function(content, word) {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    return content.replace(regex, scrambleWord(word));
  }, content);

  document.getElementById("scrambledContent").textContent = scrambledContent;
});

function scrambleWord(word) {
  // Implementation for scrambling the word
  // Here, you can use any algorithm you prefer to scramble the word
  const shuffledWord = word.split("").sort(function() {
    return Math.random() - 0.5;
  }).join("");
  return shuffledWord;
}