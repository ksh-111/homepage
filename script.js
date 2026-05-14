// THE K-FOOD ARCHIVE - Hansik Promotion Institution (imgId) Integrated Library
const foodDB = [
    // [팁] 나중에 구글 시트 등에서 (id, cat, name, imgId, info, desc) 형식으로 복사해오기 편한 구조입니다.
    { id:'k1', cat:'밥/죽', name:'비빔밥', imgId:'12345', info:'오행의 조화가 담긴 영양의 정점', desc:'비빔밥은 밥과 여러 가지 나물, 고기, 고추장이 어우러진 한국의 대표 전문 음식입니다.' },
    { id:'k2', cat:'밥/죽', name:'전복죽', imgId:'23456', info:'바다의 보물 전복으로 고아낸 보양식', desc:'신선한 전복과 내장을 참기름에 볶아 끓여낸 최고의 기력 회복 죽입니다.' },
    { id:'k3', cat:'밥/죽', name:'구절판', imgId:'34567', info:'여덟 가지 재료와 밀전병의 예술', desc:'아홉 개의 칸에 채소와 고기를 담아 밀전병에 싸 먹는 화려한 궁중 요리입니다.' },
    { id:'k4', cat:'밥/죽', name:'곤드레밥', imgId:null, info:'향긋한 산 나물의 풍미', desc:'말린 곤드레 나물을 밥과 함께 지어 양념장에 비벼 먹는 담백한 건강식입니다.' },
    
    // 찌개/찜
    { id:'s1', cat:'찌개/찜', name:'김치찌개', imgId:'11111', info:'한국인의 영원한 소울 푸드', desc:'익은 김치와 돼지고기, 두부를 넣고 푹 끓여낸 감칠맛 넘치는 국민 찌개입니다.' },
    { id:'s2', cat:'찌개/찜', name:'된장찌개', imgId:'22222', info:'발효의 미학이 빚어낸 구수한 정', desc:'된장을 베이스로 채소와 해산물을 넣어 끓인 한국의 기본 찌개입니다.' },
    
    // 고기요리
    { id:'m1', cat:'고기요리', name:'불고기', imgId:'99999', info:'세계인이 사랑하는 K-BBQ', desc:'얇게 썬 소고기를 달콤 짭짤한 양념에 재워 구워 먹는 음식입니다.' },
    { id:'m2', cat:'고기요리', name:'삼겹살', imgId:null, info:'한국인이 가장 사랑하는 외식 메뉴', desc:'돼지 뱃살 부위를 불판에 구워 쌈장과 함께 즐기는 대중적인 요리입니다.' }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');

    // [한식진흥원 이미지 생성 로직]
    const getHansikImg = (imgId) => {
        const defaultImg = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000";
        if (imgId) {
            // 한식진흥원 실제 이미지 다운로드 혹은 소스 경로 (가이드에 따른 형식)
            // 실제 이미지 파일 매칭을 위해 hansik 사이트의 파일 저장 경로 패턴을 사용합니다.
            return `https://www.hansik.or.kr/gallery/view/${imgId}?menuSn=18`; 
            // ※ 참고: 실제 <img>태그에서 작동하려면 실제 이미지 소스 물리 주소(ex: /common/file/download.do?fileSn=...)가 필요할 수 있습니다.
            // 여기서는 요청하신 형식대로 호출 주소를 생성합니다.
        }
        return defaultImg;
    };

    const render = (cat, targetId, filterText = null) => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        
        let items = foodDB.filter(f => f.cat === cat);
        if(filterText) {
            items = items.filter(f => f.name.includes(filterText) || f.desc.includes(filterText));
        }

        grid.innerHTML = items.map(item => {
            const imgSrc = getHansikImg(item.imgId);
            return `
                <div class="p-card" data-id="${item.id}">
                    <div class="p-img">
                        <img src="${imgSrc}" 
                             alt="${item.name}" 
                             loading="lazy" 
                             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000';">
                    </div>
                    <div class="p-info">
                        <h3 class="p-name">${item.name}</h3>
                        <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700;">#${item.info}</p>
                        <div class="p-btn-view">도감 전문 보기</div>
                    </div>
                </div>
            `;
        }).join('');
    };

    const updateUI = (searchText = null) => {
        render('밥/죽', 'rice-target', searchText);
        render('찌개/찜', 'stew-target', searchText);
        render('고기요리', 'meat-target', searchText);
        render('면/분식', 'noodle-target', searchText);
        render('전통디저트', 'dessert-target', searchText);
    };

    updateUI();

    searchInput.addEventListener('input', (e) => {
        updateUI(e.target.value.trim());
    });

    const showDetail = (id, saveState = true) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;

        const imgTarget = document.getElementById('d-img-target');
        imgTarget.src = getHansikImg(item.imgId);
        imgTarget.onerror = function() { 
            this.src = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000"; 
        };

        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[푸드 아카이브 전문]</strong><br>${item.info}<br><br>${item.desc}`;
        
        if(saveState) history.pushState({view: 'detail', id: id}, '', '');
        mainView.style.display = 'none';
        detailView.style.display = 'block';
        window.scrollTo(0, 0);
    };

    const hideDetail = () => {
        detailView.style.display = 'none';
        mainView.style.display = 'block';
    };

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.p-card');
        if(card) showDetail(card.dataset.id);
    });

    closeBtn.onclick = () => history.back();
    window.onpopstate = (e) => {
        if(e.state && e.state.view === 'detail') showDetail(e.state.id, false);
        else hideDetail();
    };

    // Slider
    const slides = document.querySelectorAll('.slide-item');
    let idx = 0;
    if(slides.length) {
        setInterval(() => {
            slides[idx].classList.remove('active');
            idx = (idx + 1) % slides.length;
            slides[idx].classList.add('active');
        }, 5000);
    }
});
