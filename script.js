// script.js — simple blog-card injection + small effects
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // sample posts (replace with your summaries or generate from markdown later)
  const posts = [
    {title: "WSL2 で Neovim をかわいくする話", date:"2025-10-29", excerpt:"Neovim + Starship + tmux を統一してかわいい開発環境を作ったメモ。"},
    {title: "Azure 冗長構成の検証レポート", date:"2025-10-21", excerpt:"リージョン間フェイルオーバーで確認した手順と結果のまとめ。"},
    {title: "Excelで作る自動集計テンプレート", date:"2025-09-30", excerpt:"COUNTIFS とマクロで自治体提出用の集計を自動化した記録。"}
  ];

  const postsEl = document.getElementById('posts');
  if(postsEl){
    posts.forEach((p, i) => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `<h4>${p.title}</h4><small>${p.date}</small><p>${p.excerpt}</p>`;
      postsEl.appendChild(div);
      // reveal animation
      setTimeout(()=> div.classList.add('show'), 120 * i);
    });
  }
});
