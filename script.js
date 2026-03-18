const foodData = [
    // 汉堡 4
    { id: 1, name: "经典多汁牛肉汉堡", category: "汉堡", price: 38.00, rating: 4.7, reviews: 320, distance: 0.8, time: "10-20 分钟", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop", sales: 2400 },
    { id: 11, name: "双层芝士培根堡大号", category: "汉堡", price: 48.00, rating: 4.8, reviews: 512, distance: 1.0, time: "15-25 分钟", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1665&auto=format&fit=crop", sales: 1800 },
    { id: 12, name: "香脆炸鸡腿堡", category: "汉堡", price: 29.00, rating: 4.6, reviews: 420, distance: 1.2, time: "15-20 分钟", img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=1587&auto=format&fit=crop", sales: 3100 },
    { id: 13, name: "黑椒烤牛排堡", category: "汉堡", price: 55.00, rating: 4.9, reviews: 210, distance: 2.1, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1594212691516-7ca2d3accc0a?q=80&w=1587&auto=format&fit=crop", sales: 900 },
    // 披萨 3
    { id: 2, name: "意式经典香肠披萨", category: "披萨", price: 58.00, rating: 4.8, reviews: 213, distance: 1.2, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop", sales: 1200 },
    { id: 8, name: "黑松露芝士双拼披萨", category: "披萨", price: 88.00, rating: 4.9, reviews: 156, distance: 1.3, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop", sales: 600 },
    { id: 14, name: "夏威夷风情鲜虾披萨", category: "披萨", price: 65.00, rating: 4.5, reviews: 300, distance: 1.5, time: "25-35 分钟", img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1740&auto=format&fit=crop", sales: 1100 },
    // 寿司 3
    { id: 3, name: "和风刺身寿司大拼盘", category: "寿司", price: 128.00, rating: 4.9, reviews: 150, distance: 2.5, time: "15-25 分钟", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1740&auto=format&fit=crop", sales: 800 },
    { id: 15, name: "炙烤三文鱼手握", category: "寿司", price: 35.00, rating: 4.8, reviews: 220, distance: 0.9, time: "10-20 分钟", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1625&auto=format&fit=crop", sales: 1500 },
    { id: 16, name: "特级金枪鱼刺身", category: "寿司", price: 88.00, rating: 4.9, reviews: 110, distance: 1.8, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1632&auto=format&fit=crop", sales: 400 },
    // 健康轻食 3
    { id: 4, name: "牛油果鸡胸肉轻食沙拉", category: "健康轻食", price: 45.00, rating: 4.9, reviews: 410, distance: 1.5, time: "15-20 分钟", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740&auto=format&fit=crop", sales: 1500 },
    { id: 17, name: "地中海果蔬燕麦盆", category: "健康轻食", price: 38.00, rating: 4.7, reviews: 180, distance: 1.1, time: "10-20 分钟", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1753&auto=format&fit=crop", sales: 700 },
    { id: 18, name: "低脂鲜虾红藜麦饭", category: "健康轻食", price: 52.00, rating: 4.8, reviews: 290, distance: 0.6, time: "15-20 分钟", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop", sales: 1300 },
    // 甜点饮品 3
    { id: 19, name: "法式提拉米苏蛋糕", category: "甜点饮品", price: 32.00, rating: 4.9, reviews: 500, distance: 0.5, time: "10-15 分钟", img: "https://images.unsplash.com/photo-1571115177098-24de4384a136?q=80&w=1740&auto=format&fit=crop", sales: 1900 },
    { id: 20, name: "抹茶奥利奥雪冰", category: "甜点饮品", price: 24.00, rating: 4.7, reviews: 620, distance: 1.3, time: "15-20 分钟", img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1587&auto=format&fit=crop", sales: 2200 },
    { id: 21, name: "草莓流心舒芙蕾", category: "甜点饮品", price: 28.00, rating: 4.8, reviews: 310, distance: 2.2, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1664&auto=format&fit=crop", sales: 850 },
    // 咖啡 2
    { id: 5, name: "拿铁咖啡配可颂", category: "咖啡", price: 32.00, rating: 4.6, reviews: 180, distance: 0.5, time: "5-15 分钟", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1634&auto=format&fit=crop", sales: 3100 },
    { id: 22, name: "冰美式特浓", category: "咖啡", price: 18.00, rating: 4.5, reviews: 890, distance: 0.3, time: "5-10 分钟", img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1587&auto=format&fit=crop", sales: 5600 },
    // 粉面粥 3
    { id: 6, name: "招牌牛肉面", category: "粉面粥", price: 28.00, rating: 4.5, reviews: 800, distance: 1.1, time: "15-25 分钟", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1064&auto=format&fit=crop", sales: 4200 },
    { id: 23, name: "重庆红油小面", category: "粉面粥", price: 15.00, rating: 4.4, reviews: 1200, distance: 1.8, time: "15-20 分钟", img: "https://images.unsplash.com/photo-1590184462130-10db685b85a3?q=80&w=1587&auto=format&fit=crop", sales: 6000 },
    { id: 24, name: "生滚海鲜鲜虾粥", category: "粉面粥", price: 35.00, rating: 4.8, reviews: 340, distance: 2.4, time: "25-35 分钟", img: "https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?q=80&w=1740&auto=format&fit=crop", sales: 1100 },
    // 工作便当 2
    { id: 7, name: "日式鳗鱼饭工作便当", category: "工作便当", price: 52.00, rating: 4.8, reviews: 290, distance: 2.0, time: "25-35 分钟", img: "https://images.unsplash.com/photo-1576402120072-af56999a4e23?q=80&w=1528&auto=format&fit=crop", sales: 900 },
    { id: 25, name: "台式照烧鸡腿双拼饭", category: "工作便当", price: 26.00, rating: 4.6, reviews: 530, distance: 0.9, time: "10-20 分钟", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1613&auto=format&fit=crop", sales: 2500 }
];

let cart = [];
let favorites = new Set();
let currentCategory = 'all';
let currentSort = '综合排序';
let searchQuery = '';
const API_HOST = 'https://gourmetdrop-backend.onrender.com';
let pollingInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderFoodGrid();
    setupEventListeners();
}

function renderFoodGrid() {
    const grid = document.getElementById('food-grid');
    grid.innerHTML = '';

    let filtered = foodData.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (currentSort === '销量最高') {
        filtered.sort((a, b) => b.sales - a.sales);
    } else if (currentSort === '距离最近') {
        filtered.sort((a, b) => a.distance - b.distance);
    } else if (currentSort === '好评优先') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <span class="material-symbols-rounded">search_off</span>
                <p>未找到符合条件的美食，尝试其他关键字吧~</p>
            </div>`;
        return;
    }

    filtered.forEach(item => {
        const isFav = favorites.has(item.id) ? 'active' : '';
        const favIconFill = favorites.has(item.id) ? 1 : 0;
        
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${item.img}" alt="${item.name}" class="card-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop';">
                <div class="time-badge">${item.time}</div>
                <button class="favorite-btn ${isFav}" data-id="${item.id}" style="font-variation-settings: 'FILL' ${favIconFill}">
                    <span class="material-symbols-rounded">favorite</span>
                </button>
            </div>
            <div class="card-info">
                <h4 class="food-name">${item.name}</h4>
                <div class="food-meta">
                    <span class="rating"><span class="material-symbols-rounded star">star</span> ${item.rating} (${item.reviews}+)</span>
                    <span class="dot">•</span>
                    <span class="category-tag">${item.category}</span>
                    <span class="dot">•</span>
                    <span class="distance">${item.distance} km</span>
                </div>
                <div class="card-footer">
                    <div class="price">¥ ${item.price.toFixed(2)}</div>
                    <button class="add-btn" data-id="${item.id}">
                        <span class="material-symbols-rounded">add</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', handleFavoriteToggle);
    });
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
}

function setupEventListeners() {
    // Location Map Geocoding
    const locationBtn = document.querySelector('.location');
    const locationText = document.getElementById('current-location');
    
    if (locationBtn && locationText) {
        locationBtn.style.cursor = 'pointer';
        locationBtn.title = '点击获取当前真实位置';
        
        locationBtn.addEventListener('click', () => {
            locationText.textContent = '正在连接卫星定位...';
            
            if (!navigator.geolocation) {
                locationText.textContent = '设备不支持卫星定位';
                showToast('您的设备浏览器不支持地理位置功能');
                return;
            }

            // 增加强制500毫秒延迟：防止浏览器权限秒拒时文本替换过快，导致用户肉眼觉得“点下去毫无反应”
            setTimeout(() => {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    try {
                        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=zh`);
                        const data = await res.json();
                        
                        if (data && data.address) {
                            const city = data.address.city || data.address.town || data.address.county || '';
                            const suburb = data.address.suburb || data.address.district || '';
                            const road = data.address.road || data.address.neighbourhood || '';
                            
                            let shortAddress = `${city}${suburb}${road}`.trim();
                            if (!shortAddress) shortAddress = data.display_name.split(',')[0];
                            
                            locationText.textContent = shortAddress;
                            showToast('📍 精准地图定位成功！');
                        } else {
                            locationText.textContent = '定位成功(待解析)';
                            showToast('抓取坐标成功，但开放地图未能解析出具体街道名称');
                        }
                    } catch (err) {
                        locationText.textContent = '默认演示区 (暂无网络)';
                        showToast('国际地图接口数据获取超时');
                    }
                }, (error) => {
                    locationText.textContent = '未获定位权限 (请点击重试)';
                    const errorMsg = error.code === 1 
                        ? '🚫 定位权限已被拒绝或拦截！\n\n这可能因为您的手机系统或浏览器禁止了网页获取位置，或者是默认网页安全策略。\n\n【解决方法】：请进入您的手机系统设置或浏览器设置 -> 找到“应用权限/隐私/位置信息” -> 开启/允许定位权限后刷新重试。' 
                        : '⚠️ 获取卫星信号失败，请确保您的设备的 GPS 开关已打开，并且在室外或靠近窗户的地方信号更好。';
                    alert(errorMsg); // 改用系统 alert 直接截断阻塞屏幕，确保提示必定被看见
                }, {
                    enableHighAccuracy: true,
                    timeout: 8000
                });
            }, 600);
        });
    }

    // Categories
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            const catName = target.querySelector('span').textContent;
            
            if (currentCategory === catName) {
                currentCategory = 'all';
                target.classList.remove('active');
            } else {
                currentCategory = catName;
            }
            renderFoodGrid();
        });
    });

    // Filtering/Sorting
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentSort = e.currentTarget.textContent;
            renderFoodGrid();
        });
    });

    // Search
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderFoodGrid();
        });
    }

    // Cart Navigation
    const cartNav = document.querySelector('.cart-nav');
    const overlay = document.getElementById('cart-overlay');
    const sidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');

    function openCart(e) {
        if(e) e.preventDefault();
        overlay.classList.add('active');
        sidebar.classList.add('active');
        renderCartItems();
    }

    function closeCart() {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    }

    if(cartNav) cartNav.addEventListener('click', openCart);
    if(overlay) overlay.addEventListener('click', closeCart);
    if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

    // Bottom mobile nav logic
    const tabCart = document.getElementById('tab-cart');
    const tabProfile = document.getElementById('tab-profile');
    
    if (tabCart) tabCart.addEventListener('click', openCart);
    // Profile Edit Modal Logic
    const profileOverlay = document.getElementById('profile-overlay');
    const profileModal = document.getElementById('profile-modal');
    const closeProfileBtn = document.getElementById('close-profile');
    const profileForm = document.getElementById('profile-form');
    const userProfileEl = document.getElementById('user-profile');

    let uploadedAvatarBase64 = '';
    const avatarFileIn = document.getElementById('profile-avatar-file');
    const avatarPreview = document.getElementById('profile-avatar-preview');

    if (avatarFileIn) {
        avatarFileIn.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_SIZE = 150;
                    let width = img.width;
                    let height = img.height;
                    
                    if (width > height) {
                        if (width > MAX_SIZE) {
                            height *= MAX_SIZE / width;
                            width = MAX_SIZE;
                        }
                    } else {
                        if (height > MAX_SIZE) {
                            width *= MAX_SIZE / height;
                            height = MAX_SIZE;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // 压缩为 jpeg Base64，大幅减小提交体积并直接存储入 JSON
                    uploadedAvatarBase64 = canvas.toDataURL('image/jpeg', 0.8);
                    if (avatarPreview) avatarPreview.src = uploadedAvatarBase64;
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    function openProfile() {
        if (!localStorage.getItem('token')) {
            authOverlay.classList.add('active');
            authModal.classList.add('active');
            return;
        }
        document.getElementById('profile-nickname').value = localStorage.getItem('nickname') || localStorage.getItem('username') || '';
        document.getElementById('profile-birthday').value = localStorage.getItem('birthday') || '';
        
        uploadedAvatarBase64 = localStorage.getItem('avatar') || '';
        if (avatarPreview) {
            avatarPreview.src = uploadedAvatarBase64 || `https://ui-avatars.com/api/?name=${document.getElementById('profile-nickname').value || 'User'}&background=FF6838&color=fff`;
        }

        document.getElementById('profile-error').textContent = '';
        if (profileOverlay) profileOverlay.classList.add('active');
        if (profileModal) profileModal.classList.add('active');
    }

    if (closeProfileBtn) closeProfileBtn.addEventListener('click', () => {
        profileOverlay.classList.remove('active');
        profileModal.classList.remove('active');
    });

    if (userProfileEl) userProfileEl.addEventListener('click', openProfile);

    if (tabProfile) {
        tabProfile.addEventListener('click', () => {
            if (localStorage.getItem('token')) {
                openProfile();
            } else {
                authOverlay.classList.add('active');
                authModal.classList.add('active');
            }
        });
    }

    if (profileForm) {
        profileForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nickname = document.getElementById('profile-nickname').value;
            const birthday = document.getElementById('profile-birthday').value;
            const avatar = uploadedAvatarBase64;
            
            const btn = profileForm.querySelector('.auth-submit-btn');
            btn.textContent = '保存中...';

            try {
                const res = await fetch(`${API_HOST}/api/user/profile`, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({ nickname, birthday, avatar })
                });
                const data = await res.json();
                
                if (res.ok) {
                    localStorage.setItem('nickname', data.user.nickname || '');
                    localStorage.setItem('avatar', data.user.avatar || '');
                    localStorage.setItem('birthday', data.user.birthday || '');
                    checkAuthState();
                    if (closeProfileBtn) closeProfileBtn.click();
                    showToast('个人资料保存成功！');
                } else {
                    document.getElementById('profile-error').textContent = data.error || '保存失败';
                }
            } catch(err) {
                document.getElementById('profile-error').textContent = '网络错误';
            } finally {
                btn.textContent = '保存修改';
            }
        });
    }

    const profileLogoutBtn = document.getElementById('profile-logout-btn');
    if (profileLogoutBtn) {
        profileLogoutBtn.addEventListener('click', () => {
            if (confirm('账号：' + localStorage.getItem('username') + '\\n您确认要登出离开系统吗？')) {
                document.getElementById('logout-btn').click();
                if (closeProfileBtn) closeProfileBtn.click();
            }
        });
    }

    // Auth Logic
    const navLoginBtn = document.getElementById('nav-login-btn');
    const authOverlay = document.getElementById('auth-overlay');
    const authModal = document.getElementById('auth-modal');
    const closeAuthBtn = document.getElementById('close-auth');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForm = document.getElementById('auth-form');
    const authError = document.getElementById('auth-error');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    let authMode = 'login';

    function checkAuthState() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const userProfile = document.getElementById('user-profile');
        const bottomProfileText = document.getElementById('bottom-profile-text');
        
        if (token && username) {
            const nickname = localStorage.getItem('nickname') || username;
            const avatar = localStorage.getItem('avatar') || `https://ui-avatars.com/api/?name=${nickname}&background=FF6838&color=fff`;

            if(navLoginBtn) navLoginBtn.style.display = 'none';
            if(userProfile) userProfile.style.display = 'flex';
            if(document.getElementById('username-display')) document.getElementById('username-display').textContent = nickname;
            if(document.getElementById('profile-img')) document.getElementById('profile-img').src = avatar;
            if(bottomProfileText) bottomProfileText.textContent = nickname;
        } else {
            if(navLoginBtn) navLoginBtn.style.display = 'block';
            if(userProfile) userProfile.style.display = 'none';
            if(bottomProfileText) bottomProfileText.textContent = '登录 / 注册';
        }
    }

    checkAuthState();

    if (navLoginBtn) {
        navLoginBtn.addEventListener('click', () => {
            authOverlay.classList.add('active');
            authModal.classList.add('active');
        });
    }

    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', () => {
            authOverlay.classList.remove('active');
            authModal.classList.remove('active');
            authError.textContent = '';
        });
    }

    authTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            authTabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            authMode = e.currentTarget.getAttribute('data-tab');
            authSubmitBtn.textContent = authMode === 'login' ? '登录' : '注册';
            authError.textContent = '';
        });
    });

    if (authForm) {
        authForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('auth-username').value;
            const password = document.getElementById('auth-password').value;
            
            authError.textContent = '请求中...';
            try {
                const endpoint = authMode === 'login' ? `${API_HOST}/api/auth/login` : `${API_HOST}/api/auth/register`;
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();

                if (!response.ok) {
                    authError.textContent = data.error || '请求失败';
                    return;
                }

                if (authMode === 'login') {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', data.user.username);
                    localStorage.setItem('nickname', data.user.nickname || '');
                    localStorage.setItem('avatar', data.user.avatar || '');
                    localStorage.setItem('birthday', data.user.birthday || '');
                    closeAuthBtn.click();
                    checkAuthState();
                    showToast('登录成功，欢迎回来！');
                } else {
                    authError.textContent = '';
                    showToast('注册成功！请切换到登录页登录');
                    document.querySelector('.auth-tab[data-tab="login"]').click();
                }
            } catch (err) {
                console.error(err);
                authError.textContent = '网络错误，请确保后端服务正在运行 (需启动 server.js)';
            }
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('nickname');
            localStorage.removeItem('avatar');
            localStorage.removeItem('birthday');
            checkAuthState();
            showToast('已退出登录');
        });
    }

    // Checkout Button Logic
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    const closeWechatBtn = document.getElementById('close-wechat');
    if (closeWechatBtn) {
        closeWechatBtn.addEventListener('click', () => {
            document.getElementById('wechat-pay-overlay').classList.remove('active');
            document.getElementById('wechat-pay-modal').classList.remove('active');
            if (pollingInterval) clearInterval(pollingInterval);
            showToast('已取消支付');
        });
    }
}

async function handleCheckout() {
    const token = localStorage.getItem('token');
    if (!token) {
        showToast('请先登录您的账号！');
        document.getElementById('cart-overlay').click(); // close cart
        document.getElementById('nav-login-btn').click(); // open login
        return;
    }

    if (cart.length === 0) {
        showToast('购物车是空的！');
        return;
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.textContent = '正在创建订单...';
    checkoutBtn.disabled = true;

    try {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const orderRes = await fetch(`${API_HOST}/api/orders/create`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ items: cart, total })
        });
        const orderData = await orderRes.json();

        if (!orderRes.ok) throw new Error(orderData.error);

        // Call WeChat Mock Pay
        const payRes = await fetch(`${API_HOST}/api/pay/wechat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: orderData.orderId })
        });
        const payData = await payRes.json();
        if (!payRes.ok) throw new Error(payData.error);

        // Display WeChat Pay Modal
        document.getElementById('cart-overlay').click(); // close cart
        document.getElementById('wechat-pay-amount').textContent = `¥ ${total.toFixed(2)}`;
        document.getElementById('wechat-scan-overlay').style.display = 'none';
        document.getElementById('wechat-pay-overlay').classList.add('active');
        document.getElementById('wechat-pay-modal').classList.add('active');

        // Start Polling for Order Status
        startOrderPolling(orderData.orderId);

    } catch (err) {
        showToast(err.message || '结算失败，请稍后再试');
    } finally {
        checkoutBtn.textContent = '去结算';
        checkoutBtn.disabled = false;
    }
}

function startOrderPolling(orderId) {
    if (pollingInterval) clearInterval(pollingInterval);
    
    pollingInterval = setInterval(async () => {
        try {
            const res = await fetch(`${API_HOST}/api/orders/${orderId}/status`);
            const data = await res.json();
            
            if (data.status === 'PAID') {
                clearInterval(pollingInterval);
                document.getElementById('wechat-scan-overlay').style.display = 'flex';
                
                setTimeout(() => {
                    document.getElementById('wechat-pay-overlay').classList.remove('active');
                    document.getElementById('wechat-pay-modal').classList.remove('active');
                    cart = [];
                    updateCartBadge();
                    showToast('🎉 支付成功！商家已接单！');
                }, 1500);
            }
        } catch (err) {
            console.error('Polling error:', err);
        }
    }, 1000);
}

function handleFavoriteToggle(e) {
    e.preventDefault();
    const btn = e.currentTarget;
    const id = parseInt(btn.getAttribute('data-id'));
    
    if (favorites.has(id)) {
        favorites.delete(id);
        btn.classList.remove('active');
        btn.style.fontVariationSettings = "'FILL' 0";
        showToast('已取消收藏');
    } else {
        favorites.add(id);
        btn.classList.add('active');
        btn.style.fontVariationSettings = "'FILL' 1";
        showToast('收藏成功');
    }

    btn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(0.9)' },
        { transform: 'scale(1)' }
    ], { duration: 300, easing: 'ease-in-out' });
}

function handleAddToCart(e) {
    e.preventDefault();
    const id = parseInt(e.currentTarget.getAttribute('data-id'));
    const item = foodData.find(f => f.id === id);
    
    if (!item) return;

    const existingCartItem = cart.find(c => c.id === id);
    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartBadge();
    showToast(`已添加 ${item.name} 到购物车`);

    const cartBadge = document.querySelector('.cart-count');
    if (cartBadge) {
        cartBadge.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.4)' },
            { transform: 'scale(1)' }
        ], { duration: 300, easing: 'ease-in-out' });
    }
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(badge => {
        badge.textContent = totalItems.toString();
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    
    if (!container || !totalPriceEl) return;

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart-msg">购物车是空的，快去选购美食吧！</div>';
        totalPriceEl.textContent = '¥ 0.00';
        return;
    }

    container.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="price">¥ ${item.price.toFixed(2)}</div>
            </div>
            <div class="quantity-control">
                <button class="qty-btn minus" data-id="${item.id}"><span class="material-symbols-rounded">remove</span></button>
                <div class="cart-item-qty">${item.quantity}</div>
                <button class="qty-btn plus" data-id="${item.id}"><span class="material-symbols-rounded">add</span></button>
            </div>
        `;
        container.appendChild(el);
    });

    totalPriceEl.textContent = '¥ ' + total.toFixed(2);

    container.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const isPlus = e.currentTarget.classList.contains('plus');
            
            const cartItem = cart.find(c => c.id === id);
            if (cartItem) {
                if (isPlus) {
                    cartItem.quantity += 1;
                } else {
                    cartItem.quantity -= 1;
                    if (cartItem.quantity <= 0) {
                        cart = cart.filter(c => c.id !== id);
                    }
                }
                updateCartBadge();
                renderCartItems();
            }
        });
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="material-symbols-rounded">check_circle</span> ${message}`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3000);
}
