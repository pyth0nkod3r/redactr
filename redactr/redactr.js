function word_scrambler() {
	const post = document.getElementById('post').value;
	const selection = document.getElementById('selection').value.split(' ');
  const scrambler = document.getElementById('scrambler').value;

  const startTime = performance.now();

  let scrambled_word = post;

  selection.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    scrambled_word = scrambled_word.replace(regex, scrambler);
  });

  const endTime = performance.now();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  document.getElementById('output').textContent = scrambled_word;
  document.getElementById('wordsScanned').textContent = post.split(/\s+/).length;
  document.getElementById('wordsMatched').textContent = selection.length;
  document.getElementById('charactersScrambled').textContent = post.length - scrambled_word.length;
  document.getElementById('timeTaken').textContent = timeTaken;
}
