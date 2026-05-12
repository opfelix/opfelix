// OpFelix - 运维·AI·开源资源站
// JavaScript 脚本文件

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

    // 创建图片全屏查看遮罩
    createImageOverlay();
});

// 证书数据
const certificates = [
    {
        icon: '🏆',
        title: 'Linux运维专家认证',
        date: '2024年获得',
        badge: '专业认证',
        image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=professional%20linux%20certificate%20award%20gold%20medal%20elegant%20design&image_size=landscape_16_9',
        desc: '通过严格的理论考试和实操考核，获得Linux运维专家认证。该认证证明了在Linux系统管理、网络配置、安全防护等方面的专业能力。'
    },
    {
        icon: '🎖️',
        title: '阿里云ACP认证',
        date: '2023年获得',
        badge: '云服务认证',
        image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=alibaba%20cloud%20certificate%20ACP%20professional%20blue%20tech%20design&image_size=landscape_16_9',
        desc: '阿里云云计算助理工程师认证，掌握云服务器ECS、对象存储OSS、云数据库RDS等核心云服务的部署与运维技能。'
    },
    {
        icon: '⭐',
        title: 'CNCF CKA认证',
        date: '2024年获得',
        badge: 'Kubernetes',
        image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=CNCF%20CKA%20certificate%20Kubernetes%20container%20orchestration%20modern%20design&image_size=landscape_16_9',
        desc: 'CNCF Kubernetes管理员认证，具备在生产环境中部署、管理和维护Kubernetes集群的专业能力。'
    },
    {
        icon: '🏅',
        title: '开源贡献者奖',
        date: '2023年度',
        badge: '社区荣誉',
        image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=open%20source%20contributor%20award%20trophy%20community%20honor%20gold&image_size=landscape_16_9',
        desc: '在开源社区积极贡献代码和文档，推动多个知名开源项目发展，荣获年度开源贡献者称号。'
    },
    {
        icon: '💡',
        title: '技术博客之星',
        date: '2024年度',
        badge: '内容创作',
        image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=technology%20blog%20star%20award%20writing%20content%20creation%20lightbulb&image_size=landscape_16_9',
        desc: '技术博客累计阅读量突破百万，多篇文章被各大技术平台转载，荣获年度技术博客之星称号。'
    },
    {
        icon: '🔧',
        title: 'DevOps工程师认证',
        date: '2023年获得',
        badge: 'DevOps',
        image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=DevOps%20engineer%20certification%20pipeline%20automation%20modern%20tech&image_size=landscape_16_9',
        desc: 'DevOps工程师专业认证，掌握CI/CD流水线搭建、自动化运维、基础设施即代码等核心技能。'
    }
];

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

// 为证书图片添加点击查看大图功能
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.cert-detail-image-container');
    if (imageContainer) {
        imageContainer.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                viewLargeImage(e.target.src);
            }
        });
    }
});

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