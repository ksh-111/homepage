// THE K-FOOD ARCHIVE - Automated Image Search Edition (Powered by LoremFlickr)
const foodDB = [
    // 밥/죽 (Rice & Porridge)
    { id:'k1', cat:'밥/죽', name:'비빔밥', info:'오행의 조화가 담긴 영양의 정점', desc:'비빔밥은 밥과 여러 가지 나물, 고기, 고추장이 어우러진 한국의 대표적인 섞음 음식입니다.' },
    { id:'k2', cat:'밥/죽', name:'전복죽', info:'바다의 보물 전복으로 고아낸 한 그릇', desc:'신선한 전복과 내장을 참기름에 볶아 끓여낸 최고의 보양식 죽입니다. 기력 회복에 으뜸입니다.' },
    { id:'k3', cat:'밥/죽', name:'구절판', info:'여덜 가지 재료와 밀전병의 예술', desc:'아홉 개의 칸에 채소와 고기를 담아 밀전병에 싸 먹는 화려한 궁중 요리입니다.' },
    { id:'k4', cat:'밥/죽', name:'곤드레밥', info:'강원도의 향긋한 산 향기', desc:'말린 곤드레 나물을 밥과 함께 지어 양념장에 비벼 먹는 담백한 건강식입니다.' },
    { id:'k5', cat:'밥/죽', name:'김밥', info:'어디서든 즐기는 국민 도시락', desc:'밥과 여러 재료를 김으로 말아 썰어낸 한국의 대표적인 간편식입니다.' },

    // 찌개/찜 (Stew & Braised)
    { id:'s1', cat:'찌개/찜', name:'김치찌개', info:'한국인의 영원한 소울 푸드', desc:'익은 김치와 돼지고기, 두부를 넣고 푹 끓여낸 감칠맛 넘치는 국민 찌개입니다.' },
    { id:'s2', cat:'찌개/찜', name:'갈비찜', info:'소갈비에 스며든 정통의 달큰함', desc:'소갈비를 간장 양념에 각종 고명과 함께 조려낸 고급 찜 요리입니다.' },
    { id:'s3', cat:'찌개/찜', name:'된장찌개', info:'발효의 미학이 빚어낸 구수한 정', desc:'된장을 베이스로 채소와 해산물을 넣어 끓인 한국의 기본 찌개입니다.' },
    { id:'s4', cat:'찌개/찜', name:'아구찜', info:'매콤한 양념과 아삭한 콩나물', desc:'쫄깃한 아구 살과 콩나물을 매운 양념에 볶아낸 별미 요리입니다.' },
    { id:'s5', cat:'찌개/찜', name:'삼계탕', info:'여름을 이겨내는 보양의 정석', desc:'영계 속에 인삼과 찹쌀을 넣어 푹 고아낸 한국 대표 보양식입니다.' },

    // 고기요리 (Meat Dishes)
    { id:'m1', cat:'고기요리', name:'불고기', info:'세계인이 사랑하는 K-BBQ', desc:'얇게 썬 소고기를 달콤 짭짤한 양념에 재워 구워 먹는 음식입니다.' },
    { id:'m2', cat:'고기요리', name:'제육볶음', info:'매콤한 풍미의 중독성', desc:'돼지고기를 고추장 양념에 볶아낸 한국인이 가장 좋아하는 밥반찬입니다.' },
    { id:'m3', cat:'고기요리', name:'수육', info:'담백하게 삶아낸 고기의 정수', desc:'고기를 삶아 얇게 썬 요리로 김치나 쌈과 곁들여 재료 본연의 맛을 즐깁니다.' },
    { id:'m4', cat:'고기요리', name:'닭볶음탕', info:'얼큰한 국물과 부드러운 닭고기', desc:'닭고기와 감자를 매운 양념에 끓여낸 요리입니다.' },
    { id:'m5', cat:'고기요리', name:'떡갈비', info:'정성을 다해 빚어낸 전통 구이', desc:'고기를 다져 양념한 후 숯불에 구운 궁중 고기 요리입니다.' },

    // 면/분식 (Noodles & Snacks)
    { id:'n1', cat:'면/분식', name:'잡채', info:'화려한 채소와 당면의 어울림', desc:'당면과 볶은 고기, 채소를 섞어 간장으로 간을 한 연회 음식입니다.' },
    { id:'n2', cat:'면/분식', name:'냉면', info:'가슴 속까지 전해지는 시원함', desc:'메밀 면에 시원한 육수나 비빔 양념을 곁들여 먹는 요리입니다.' },
    { id:'n3', cat:'면/분식', name:'떡볶이', info:'전 세계가 열광하는 K-스낵', desc:'떡과 어묵을 고추장 소스에 조려낸 한국 대표 길거리 음식입니다.' },
    { id:'n4', cat:'면/분식', name:'잔치국수', info:'행복한 날을 축하하는 면 요리', desc:'맑은 멸치 육수에 소면을 말아 고명을 올려 먹는 장수 기원 음식입니다.' },

    // 전통디저트 (Sweets)
    { id:'d1', cat:'전통디저트', name:'약과', info:'달콤한 조청의 풍미', desc:'밀가루와 꿀, 생강즙을 섞어 튀긴 후 조청에 담가 만든 전통 과자입니다.' },
    { id:'d2', cat:'전통디저트', name:'빙수', info:'시원하고 달콤한 여름의 선물', desc:'얼음을 갈아 팥과 떡을 올려 먹는 한국의 대표 여름 디저트입니다.' },
    { id:'d3', cat:'전통디저트', name:'수정과', info:'계피와 생강의 은은한 향', desc:'생강과 계피를 끓여 곶감을 띄워 마시는 시원한 음료입니다.' },
    { id:'d4', cat:'전통디저트', name:'식혜', info:'전통 발효의 달콤함', desc:'엿기름에 밥을 삭혀 만든 한국 고유의 달콤한 후식 음료입니다.' }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');

    // 이미지 생성 Helper 함수
    const getAutoImgUrl = (name) => {
        // LoremFlickr 형식을 사용하여 이름 검색 기반 이미지 반환
        return `https://loremflickr.com/800/600/korean,food,${encodeURIComponent(name)}/all`;
    };

    const defaultImg = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000";

    const render = (cat, targetId, filterText = null) => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        
        let items = foodDB.filter(f => f.cat === cat);
        if(filterText) {
            items = items.filter(f => f.name.includes(filterText) || f.desc.includes(filterText) || f.info.includes(filterText));
        }

        if(items.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 50px; text-align: center; color: #888;">음식을 찾을 수 없습니다.</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img">
                    <img src="${getAutoImgUrl(item.name)}" 
                         alt="${item.name}" 
                         loading="lazy" 
                         onerror="this.onerror=null; this.src='${defaultImg}';">
                </div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700;">#${item.info}</p>
                    <div class="p-btn-view">도감 상세 정보</div>
                </div>
            </div>
        `).join('');
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
        imgTarget.src = getAutoImgUrl(item.name);
        imgTarget.onerror = function() { this.src = defaultImg; };

        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[K-FOOD 요약]</strong><br>${item.info}<br><br><strong>[상세 정보]</strong><br>${item.desc}`;
        
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

    // Auto Slider
    const slides = document.querySelectorAll('.slide-item');
    let sIdx = 0;
    if(slides.length) {
        setInterval(() => {
            slides[sIdx].classList.remove('active');
            sIdx = (sIdx + 1) % slides.length;
            slides[sIdx].classList.add('active');
        }, 5000);
    }
});
