// Test case:
highlightKeyword(
  "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!",
  "javascript"
);
function highlightKeyword(content, keyword) {
  const T = new RegExp(`(${keyword})`, "gi");
  console.log(T);
  if (!T.test(content)) {
    return content;
  }
  const D = content.replace(T, "<strong>$1</strong>");
  console.log(D);
}
// Output:
// "Học <strong>JavaScript</strong> không khó, Học <strong>javascript</strong> khó đã có CodeFarm lo, CodeFarm - Học là có việc!"
