// OpFelix - 公共JavaScript脚本

document.addEventListener('DOMContentLoaded', function() {
    // 页面加载完成后的初始化操作
    console.log('OpFelix website loaded successfully');
    
    // 加载公共的header和footer
    loadHeader();
    loadFooter();
    
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

// 加载header
function loadHeader() {
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
                // 根据当前页面设置active状态
                setActiveNav();
            }
        })
        .catch(error => console.error('加载header失败:', error));
}

// 加载footer
function loadFooter() {
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('加载footer失败:', error));
}

// 设置导航栏active状态
function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href)) {
            link.style.color = '#00b4ff';
        } else {
            link.style.color = '';
        }
    });
}