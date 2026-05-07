// Premium Food Database with Local Images
const foodDB = [
    // 한식 (K-Food)
    {id:'k1',cat:'한식',subCat:'밥/죽',name:'전통 비빔밥',price:'18,000원',img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',desc:'한국 전통의 멋과 맛을 고스란히 담은 프리미엄 비빔밥입니다.'},
    {id:'k2',cat:'한식',subCat:'정통 고기요리',name:'궁중 잡채',price:'15,000원',img:'잡채.jpg',desc:'쫄깃한 당면과 아삭한 채소들의 하모니가 일품인 궁중 잡채.'},
    {id:'k3',cat:'한식',subCat:'찌개/찜',name:'명품 갈비찜',price:'55,000원',img:'갈비찜.jpg',desc:'부드러운 소갈비를 오랜 시간 졸여 완성한 명품 갈비찜입니다.'},
    {id:'k4',cat:'한식',subCat:'찌개/찜',name:'인삼 삼계탕',price:'16,000원',img:'삼계탕.jpg',desc:'국내산 영계와 인삼을 넣어 끓여낸 최고의 보양식.'},
    {id:'k5',cat:'한식',subCat:'정통 고기요리',name:'한우 불고기',price:'45,000원',img:'불고기.webp',desc:'최상급 한우를 사용해 육즙이 살아있는 프리미엄 불고기.'},
    {id:'k6',cat:'한식',subCat:'면류/분식',name:'매콤 떡볶이',price:'8,000원',img:'떡볶이.jpg',desc:'쫄깃한 쌀떡과 매콤달콤한 비법 소스가 어우러진 명품 떡볶이.'},

    // 양식 (Western)
    {id:'w1',cat:'양식',subCat:'스테이크',name:'안심 스테이크',price:'68,000원',img:'안심 스테이크.png',desc:'육즙 가득한 프리미엄 안심 스테이크.'},
    {id:'w2',cat:'양식',subCat:'피자/파스타',name:'마르게리따 피자',price:'22,000원',img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',desc:'정통 이탈리안 피자.'},
    {id:'w3',cat:'양식',subCat:'피자/파스타',name:'트러플 파스타',price:'26,000원',img:'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800',desc:'고급스러운 트러플 향의 파스타.'},
    {id:'w4',cat:'양식',subCat:'샐러드/리조또',name:'시저 샐러드',price:'16,000원',img:'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800',desc:'신선한 채소와 치즈의 조화.'},
    {id:'w5',cat:'양식',subCat:'샐러드/리조또',name:'버섯 리조또',price:'24,000원',img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',desc:'풍부한 버섯의 풍미.'},

    // 일식 (Japanese)
    {id:'j1',cat:'일식',subCat:'초밥/사시미',name:'특선 초밥',price:'38,000원',img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',desc:'오늘의 추천 신선한 스시.'},
    {id:'j2',cat:'일식',subCat:'초밥/사시미',name:'명품 회',price:'85,000원',img:'회.webp',desc:'바다의 신선함을 담은 모듬 사시미.'},
    {id:'j3',cat:'일식',subCat:'덮밥/라멘',name:'장어덮밥',price:'45,000원',img:'장어덮밥.jpg',desc:'힘이 솟는 고소한 장어 덮밥.'},
    {id:'j4',cat:'일식',subCat:'덮밥/라멘',name:'돈코츠 라멘',price:'12,500원',img:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800',desc:'깊은 국물 맛의 일본식 라멘.'},
    {id:'j5',cat:'일식',subCat:'튀김/요리',name:'수제 돈카츠',price:'16,000원',img:'돈카츠.jpeg',desc:'겉바속촉의 정석 돈카츠.'},

    // 중식 (Chinese)
    {id:'c1',cat:'중식',subCat:'면류',name:'유니 자장면',price:'10,000원',img:'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',desc:'다진 고기로 맛을 낸 자장면.'},
    {id:'c2',cat:'중식',subCat:'면류',name:'해물 짬뽕',price:'12,000원',img:'짬뽕.webp',desc:'얼큰하고 시원한 해물 짬뽕.'},
    {id:'c3',cat:'중식',subCat:'튀김류',name:'찹쌀 탕수육',price:'28,000원',img:'탕수육.webp',desc:'쫄깃한 식감의 탕수육.'},
    {id:'c4',cat:'중식',subCat:'튀김류',name:'매콤 깐풍기',price:'32,000원',img:'깐풍기.webp',desc:'매콤달콤 바삭한 닭요리.'},
    {id:'c5',cat:'중식',subCat:'요리류',name:'고추잡채',price:'35,000원',img:'고추잡채.jpg',desc:'꽃빵과 함께 즐기는 고추잡채.'},

    // 디저트 (Dessert)
    {id:'d1',cat:'디저트',subCat:'아이스크림/초콜렛',name:'밀크 아이스크림',price:'5,500원',img:'아이스크림.avif',desc:'신선한 우유의 시원함.'},
    {id:'d2',cat:'디저트',subCat:'케이크/쿠키',name:'딸기 케이크',price:'9,500원',img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800',desc:'달콤한 생딸기 케이크.'},
    {id:'d3',cat:'디저트',subCat:'마카롱',name:'수제 마카롱',price:'3,500원',img:'마카롱.webp',desc:'달콤하고 쫄깃한 마카롱.'},
    {id:'d4',cat:'디저트',subCat:'아이스크림/초콜렛',name:'벨기에 초콜렛',price:'12,000원',img:'초콜렛.jpg',desc:'진한 다크 초콜릿.'},
    {id:'d5',cat:'디저트',subCat:'케이크/쿠키',name:'수제 쿠키',price:'4,500원',img:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800',desc:'고소한 버터 쿠키.'}
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');

    const render = (cat, targetId, subFilter = '전체보기') => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        
        let items = foodDB.filter(f => f.cat === cat);
        if(subFilter !== '전체보기') {
            items = items.filter(f => f.subCat === subFilter);
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-price">${item.price}</p>
                    <div class="p-btn-view">자세히 보기</div>
                </div>
            </div>
        `).join('');
    };

    render('한식', 'korean-target');
    render('양식', 'western-target');
    render('일식', 'japanese-target');
    render('중식', 'chinese-target');
    render('디저트', 'dessert-target');

    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            const parent = this.closest('.p-section');
            const targetId = parent.querySelector('.p-grid').id;
            const category = parent.querySelector('.s-title').innerText.split(' ')[0];
            const subTitle = this.querySelector('p').innerText;
            parent.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            render(category, targetId, subTitle);
        });
    });

    // GNB Reset Logic: When clicking a main category in the header, reset its filters to '전체보기'
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                const section = document.querySelector(targetId);
                if(section) {
                    const allTab = section.querySelector('.tab-item:first-child');
                    if(allTab) allTab.click(); // Trigger reset to '전체보기'
                }
            }
        });
    });

    const showDetail = (id) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;
        document.getElementById('d-img-target').src = item.img;
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerText = item.desc;
        document.getElementById('d-price-target').innerText = item.price;
        mainView.style.display = 'none';
        detailView.style.display = 'block';
        window.scrollTo(0, 0);
    };

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.p-card');
        const link = e.target.closest('.food-link');
        if(card) showDetail(card.dataset.id);
        if(link) {
            e.preventDefault();
            showDetail(link.dataset.id);
        }
    });

    closeBtn.addEventListener('click', () => {
        detailView.style.display = 'none';
        mainView.style.display = 'block';
    });
});
