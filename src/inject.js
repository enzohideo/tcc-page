export default function inject(query, html) {
  const elm = document.querySelector(query);
  elm.innerHTML = html;
}
