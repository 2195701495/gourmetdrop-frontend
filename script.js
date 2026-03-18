const foodData = [
    { id: 1, name: "意式经典香肠披萨", category: "披萨", price: 58.00, rating: 4.8, reviews: 213, distance: 1.2, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop", sales: 1200 },
    { id: 2, name: "和风刺身寿司大拼盘", category: "寿司", price: 128.00, rating: 4.9, reviews: 150, distance: 2.5, time: "15-25 分钟", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1740&auto=format&fit=crop", sales: 800 },
    { id: 3, name: "经典多汁牛肉汉堡", category: "汉堡", price: 38.00, rating: 4.7, reviews: 320, distance: 0.8, time: "10-20 分钟", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop", sales: 2400 },
    { id: 4, name: "牛油果鸡胸肉轻食沙拉", category: "健康轻食", price: 45.00, rating: 4.9, reviews: 410, distance: 1.5, time: "15-20 分钟", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740&auto=format&fit=crop", sales: 1500 },
    { id: 5, name: "拿铁咖啡配可颂", category: "咖啡", price: 32.00, rating: 4.6, reviews: 180, distance: 0.5, time: "5-15 分钟", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1634&auto=format&fit=crop", sales: 3100 },
    { id: 6, name: "招牌牛肉面", category: "粉面粥", price: 28.00, rating: 4.5, reviews: 800, distance: 1.1, time: "15-25 分钟", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1064&auto=format&fit=crop", sales: 4200 },
    { id: 7, name: "日式鳗鱼饭工作便当", category: "工作便当", price: 52.00, rating: 4.8, reviews: 290, distance: 2.0, time: "25-35 分钟", img: "https://images.unsplash.com/photo-1576402120072-af56999a4e23?q=80&w=1528&auto=format&fit=crop", sales: 900 },
    { id: 8, name: "黑松露芝士双拼披萨", category: "披萨", price: 88.00, rating: 4.9, reviews: 156, distance: 1.3, time: "20-30 分钟", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop", sales: 600 }
];

let cart = [];
let favorites = new Set();
let currentCategory = 'all';
let currentSort = '综合排序';
let searchQuery = '';

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
                <img src="${item.img}" alt="${item.name}" class="card-img">
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

    // Reattach listeners to new buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', handleFavoriteToggle);
    });
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
}

function setupEventListeners() {
    // Categories
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            const catName = target.querySelector('span').textContent;
            
            // Toggle off logic
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

    // Auth Logic
    const navLoginBtn = document.getElementById('nav-login-btn');
    const authOverlay = document.getElementById('auth-overlay');
    const authModal = document.getElementById('auth-modal');
    const closeAuthBtn = document.getElementById('close-auth');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForm = document.getElementById('auth-form');
    const authError = document.getElementById('auth-error');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    let authMode = 'login'; // 'login' or 'register'

    function checkAuthState() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const userProfile = document.getElementById('user-profile');
        
        if (token && username) {
            navLoginBtn.style.display = 'none';
            userProfile.style.display = 'flex';
            document.getElementById('username-display').textContent = username;
            document.getElementById('profile-img').src = `https://ui-avatars.com/api/?name=${username}&background=FF6838&color=fff`;
        } else {
            navLoginBtn.style.display = 'block';
            userProfile.style.display = 'none';
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
                const host = 'https://gourmetdrop-backend.onrender.com';
                const endpoint = authMode === 'login' ? `${host}/api/auth/login` : `${host}/api/auth/register`;
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
            checkAuthState();
            showToast('已退出登录');
        });
    }
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

    // Animate cart badge
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
    const cartBadge = document.querySelector('.cart-count');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems.toString();
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
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

    // Attach qty listeners
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
