
// 处理大纲链接的点击事件
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有大纲链接
  const outlineLinks = document.querySelectorAll('.outline-link');

  // 为每个链接添加点击事件监听器
  outlineLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // 获取目标ID
      const href = this.getAttribute('href');
      if (!href || href === '#') {
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // 平滑滚动到目标元素
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 标记有ID的标题
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach(heading => {
    if (heading.id) {
      heading.classList.add('has-id');
    }
  });
});
