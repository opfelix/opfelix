// OpFelix - 关于页面JavaScript脚本

// 证书数据
const certificates = [
    {
        // icon: '🏆',
        title: 'H3CNE-RS+',
        date: '2023年获得',
        badge: '网络认证',
        image: 'img/cert/H3CNE-RS+.png',
        desc: 'H3C认证路由交换网络工程师H3C认证路由交换网络工程师，具备使用H3C网络设备设计和搭建中小型网络的能力，并对网络技术前沿技术有一定的了解。'
    },
    {
        // icon: '🎖️',
        title: 'H3CNE-Security',
        date: '2023年获得',
        badge: '安全认证',
        image: 'img/cert/H3CNE-Security.png',
        desc: 'H3C认证网络安全工程师，对中小型网络安全技术和应用有初步的了解，并具备协助设计中小型企业安全网络架构以及部署和维护相应解决方案的能力。'
    },
];

document.addEventListener('DOMContentLoaded', function() {
    // 创建图片全屏查看遮罩
    createImageOverlay();

    // 为证书图片添加点击查看大图功能
    const imageContainer = document.querySelector('.cert-detail-image-container');
    if (imageContainer) {
        imageContainer.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                viewLargeImage(e.target.src);
            }
        });
    }

    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCertModal();
            const overlay = document.querySelector('.image-overlay');
            if (overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// 打开证书详情弹窗
function openCertModal(index) {
    const cert = certificates[index];
    if (!cert) return;

    document.getElementById('certDetailIcon').textContent = cert.icon;
    document.getElementById('certDetailTitle').textContent = cert.title;
    document.getElementById('certDetailDate').textContent = cert.date;
    document.getElementById('certDetailBadge').textContent = cert.badge;
    document.getElementById('certDetailImage').src = cert.image;
    document.getElementById('certDetailDesc').textContent = cert.desc;

    document.getElementById('certModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭证书详情弹窗
function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 创建图片全屏查看遮罩
function createImageOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = '<img src="" alt="证书大图">';
    overlay.addEventListener('click', function() {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    document.body.appendChild(overlay);
}

// 查看大图
function viewLargeImage(src) {
    const overlay = document.querySelector('.image-overlay');
    const img = overlay.querySelector('img');
    img.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}