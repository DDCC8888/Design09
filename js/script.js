// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 数字计数器动画
const counters = document.querySelectorAll('.counter-value');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
};

// 监听元素是否在视口中
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (document.querySelector('#about')) {
    observer.observe(document.querySelector('#about'));
}

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark/95', 'shadow-lg');
        navbar.classList.remove('bg-dark');
    } else {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-dark/95', 'shadow-lg');
    }
});

// 初始化导航栏状态
window.dispatchEvent(new Event('scroll'));

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 这里可以添加表单验证和提交逻辑
        alert('感谢您的咨询，我们将尽快与您联系！');
        contactForm.reset();
    });
}