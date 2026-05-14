// Premium Food Encyclopedia Database
const foodDB = [
    // 한식 (K-Food)
    {id:'k1',cat:'한식',subCat:'밥/죽',name:'전통 비빔밥',info:'균형 잡힌 영양의 정점',img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',desc:'한국 전통의 멋과 맛을 고스란히 담은 비빔밥은 오방색 철학이 담긴 한국의 대표적인 건강식입니다.'},
    {id:'k2',cat:'한식',subCat:'정통 고기요리',name:'궁중 잡채',info:'잔칫상의 필수 요리',img:'잡채.jpg',desc:'원래 채소만 볶아 만들던 궁중 음식에서 유래하여, 현재는 쫄깃한 당면과 다양한 부재료가 어우러진 잔치 음식입니다.'},
    {id:'k3',cat:'한식',subCat:'찌개/찜',name:'명품 갈비찜',info:'한국의 정통 연회식',img:'갈비찜.jpg',desc:'부드러운 소갈비를 배즙과 간장 양념에 재워 오랜 시간 졸여낸 정성이 가득한 보양식입니다.'},
    {id:'k4',cat:'한식',subCat:'찌개/찜',name:'인삼 삼계탕',info:'여름철 최고의 보양식',img:'삼계탕.jpg',desc:'단백질이 풍부한 영계와 인삼, 대추, 찹쌀을 넣어 끓여낸 한국의 대표적인 이열치열 보양식입니다.'},
    {id:'k5',cat:'한식',subCat:'정통 고기요리',name:'한우 불고기',info:'세계가 인정한 K-Meat',img:'불고기.webp',desc:'얇게 썬 소고기를 양념에 재워 석쇠나 팬에 구워 먹는 음식으로, 남녀노소 누구나 좋아하는 한국의 대표 고기 요리입니다.'},
    {id:'k6',cat:'한식',subCat:'면류/분식',name:'매콤 떡볶이',info:'한국의 국민 간식',img:'떡볶이.jpg',desc:'원래 간장으로 맛을 낸 궁중 떡볶이에서 시작하여, 현재는 고추장 소스로 즐기는 한국의 가장 대중적인 길거리 음식입니다.'},

    // 양식 (Western)
    {id:'w1',cat:'양식',subCat:'스테이크',name:'안심 스테이크',info:'최고급 육질의 풍미',img:'안심 스테이크.png',desc:'지방이 적고 부드러운 소고기 안심 부위를 그릴에 구워낸 요리로, 서양 정찬 요리의 메인으로 사랑받습니다.'},
    {id:'w2',cat:'양식',subCat:'피자/파스타',name:'마르게리따 피자',info:'이탈리아 국기를 담은 맛',img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',desc:'토마토, 모짜렐라 치즈, 바질을 사용하여 이탈리아 국기의 상징색을 담아낸 가장 클래식한 나폴리 피자입니다.'},
    {id:'w3',cat:'양식',subCat:'피자/파스타',name:'트러플 파스타',info:'숲속의 다이아몬드, 트러플',img:'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800',desc:'고급스러운 송이버섯(트러플)의 향이 크림 소스와 어우러져 미식가들 사이에서 극찬받는 이탈리안 면 요리입니다.'},
    {id:'w4',cat:'양식',subCat:'샐러드/리조또',name:'시저 샐러드',info:'로메인 상추의 신선함',img:'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800',desc:'로메인 상추와 크루통, 파마산 치즈에 시저 드레싱을 곁들인 세계적으로 가장 유명한 샐러드 중 하나입니다.'},
    {id:'w5',cat:'양식',subCat:'샐러드/리조또',name:'버섯 리조또',info:'풍부한 대지의 향취',img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',desc:'다양한 버섯을 쌀과 함께 볶다가 육수를 부어 익힌 요리로, 이탈리아 북부 지방의 대표적인 쌀 요리입니다.'},

    // 일식 (Japanese)
    {id:'j1',cat:'일식',subCat:'초밥/사시미',name:'특선 초밥',info:'바다를 빚은 한 입',img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',desc:'신선한 해산물과 식초로 간을 한 쌀밥의 완벽한 조화. 일본 에도 시대부터 내려오는 장인 정신의 정수입니다.'},
    {id:'j2',cat:'일식',subCat:'초밥/사시미',name:'명품 회',info:'신선한 원재료의 극치',img:'회.webp',desc:'생선을 익히지 않고 얇게 썰어 본연의 맛을 즐기는 요리로, 일본 식문화의 핵심인 신선함을 상징합니다.'},
    {id:'j3',cat:'일식',subCat:'덮밥/라멘',name:'장어덮밥(우나기동)',info:'정력에 좋은 고급 보양식',img:'장어덮밥.jpg',desc:'양념한 장어를 구워 밥 위에 올린 요리로, 일본에서 복날(도요노우시노히)에 즐겨 먹는 고급 스테미나 음식입니다.'},
    {id:'j4',cat:'일식',subCat:'덮밥/라멘',name:'돈코츠 라멘',info:'진한 돼지뼈 육수의 매력',img:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800',desc:'돼지 뼈를 오랜 시간 푹 고아낸 뽀얀 육수가 특징인 큐슈 후쿠오카 지방의 명물 라멘입니다.'},
    {id:'j5',cat:'일식',subCat:'튀김/요리',name:'수제 돈카츠',info:'바삭함 속에 숨은 육즙',img:'돈카츠.jpeg',desc:'서양의 커틀릿이 일본에 정착하며 변형된 요리로, 두툼한 고기를 바삭한 빵가루에 튀겨낸 대중적인 일식입니다.'},

    // 중식 (Chinese)
    {id:'c1',cat:'중식',subCat:'면류',name:'유니 자장면',price:'10,000원',img:'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',desc:'재료를 곱게 다져 볶아낸 소스가 특징이며, 한국식 중화 요리의 가장 상징적인 메뉴입니다.'},
    {id:'c2',cat:'중식',subCat:'면류',name:'해물 짬뽕',info:'불맛과 해물의 조화',img:'짬뽕.webp',desc:'다양한 해산물과 채소를 센 불로 볶아 매콤한 국물을 낸 요리로, 속풀이용으로도 사랑받는 한국식 중식입니다.'},
    {id:'c3',cat:'중식',subCat:'튀김류',name:'찹쌀 탕수육(꿔바로우)',info:'쫄깃한 튀김옷의 미학',img:'탕수육.webp',desc:'돼지고기를 찹쌀가루 반죽에 튀겨 새콤달콤한 소스를 부어 먹는 요리로, 쫄깃한 식감이 일품입니다.'},
    {id:'c4',cat:'중식',subCat:'튀김류',name:'매콤 깐풍기',info:'마늘향 가득한 닭요리',img:'깐풍기.webp',desc:'튀긴 닭고기에 매콤한 간장 소스를 곁들여 볶아낸 요리로, 술안주나 별미로 인기가 높습니다.'},
    {id:'c5',cat:'중식',subCat:'요리류',name:'고추잡채',info:'꽃빵과 즐기는 풍미',img:'고추잡채.jpg',desc:'피망과 돼지고기를 가늘게 채 썰어 볶아낸 후 꽃빵과 함께 싸 먹는 중국 산둥 지방의 대표적인 가정 요리입니다.'},

    // 디저트 (Dessert)
    {id:'d1',cat:'디저트',subCat:'아이스크림/초콜렛',name:'밀크 아이스크림',info:'신선한 우유의 순수함',img:'아이스크림.avif',desc:'첨가물을 최소화하고 신선한 목장 우유의 고소함을 그대로 살린 차가운 디저트의 여왕입니다.'},
    {id:'d2',cat:'디저트',subCat:'케이크/쿠키',name:'딸기 케이크',info:'과일과 생크림의 설렘',img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800',desc:'제철 딸기의 상큼함과 부드러운 시트, 달콤한 생크림이 만나 특별한 날을 완성해주는 디저트입니다.'},
    {id:'d3',cat:'디저트',subCat:'마카롱',name:'수제 마카롱',info:'파리의 귀족적인 달콤함',img:'마카롱.webp',desc:'머랭을 기반으로 한 꼬끄 사이에 다양한 필링을 채운 프랑스 디저트로, 아몬드의 고소함이 특징입니다.'},
    {id:'d4',cat:'디저트',subCat:'아이스크림/초콜렛',name:'벨기에 초콜렛',info:'풍부한 카카오의 유혹',img:'초콜렛.jpg',desc:'세계 최고의 카카오 가공 기술을 보유한 벨기에 스타일의 진하고 깊은 맛을 가진 수제 초콜릿입니다.'},
    {id:'d5',cat:'디저트',subCat:'케이크/쿠키',name:'수제 쿠키',info:'오븐에서 갓 구운 고소함',img:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800',desc:'좋은 버터와 신선한 달걀로 구워낸 쿠키는 차나 커피와 함께할 때 최고의 맛을 선사합니다.'}
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
                    <p class="p-price" style="color:var(--ksh-gray); font-size: 0.9rem; font-weight:500;">${item.info || '프리미엄 레시피'}</p>
                    <div class="p-btn-view">유래 및 레시피 보기</div>
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
        document.getElementById('d-price-target').innerText = item.info || 'KSH FOOD 프리미엄 선정';
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

    // Slider Logic
    const initSlider = () => {
        const slides = document.querySelectorAll('.slide-item');
        const paginationContainer = document.getElementById('slider-pagination');
        const playPauseBtn = document.getElementById('slider-play-pause');
        const playPauseIcon = playPauseBtn ? playPauseBtn.querySelector('i') : null;
        
        if (!slides.length || !paginationContainer || !playPauseBtn) return;

        let currentSlide = 0;
        let isPlaying = true;
        let slideInterval;
        const intervalTime = 5000;

        // Create pagination dots
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('pg-dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetInterval();
            });
            paginationContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.pg-dot');

        const updateSlider = () => {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === currentSlide);
                dots[idx].classList.toggle('active', idx === currentSlide);
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        };

        const goToSlide = (idx) => {
            currentSlide = idx;
            updateSlider();
        };

        const startInterval = () => {
            if(isPlaying) {
                slideInterval = setInterval(nextSlide, intervalTime);
                if(playPauseIcon) playPauseIcon.className = 'fas fa-pause';
            }
        };

        const stopInterval = () => {
            clearInterval(slideInterval);
            if(playPauseIcon) playPauseIcon.className = 'fas fa-play';
        };

        const resetInterval = () => {
            stopInterval();
            startInterval();
        };

        playPauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                startInterval();
            } else {
                stopInterval();
            }
        });

        // Start Initial
        startInterval();
    };

    initSlider();
});
