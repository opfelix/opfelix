// OpFelix - 公共JavaScript脚本

document.addEventListener('DOMContentLoaded', function() {
    // 页面加载完成后的初始化操作
    console.log('OpFelix website loaded successfully');
    
    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});