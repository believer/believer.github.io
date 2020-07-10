// Changes #tag to <span data-tag="tag">#tag</span>
[...document.querySelectorAll(".markdown-body li")].forEach((node) => {
  if (node.innerText.includes("#")) {
    const text = node.innerText.match(/#\w+/);

    if (text[0]) {
      const tag = text[0].substring(1).toLowerCase();
      node.innerHTML = node.innerText.replace(
        /#\w+/g,
        `<span class="tag" data-tag=${tag}>${text[0]}</span`
      );
    }
  }
});
