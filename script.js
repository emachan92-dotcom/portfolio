// script.js
// ページ読み込み時に作品カードを少しフェードイン
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.work-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
    }, i * 200);
  });
});

/* style.css に追加 */
.work-card {
  opacity: 0;
}
