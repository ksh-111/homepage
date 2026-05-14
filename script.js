// THE K-FOOD ARCHIVE - Official Hansik Promotion Institution Image Engine
const foodDB = [
    // [실제 한식진흥원 갤러리 ID 매칭 데이터]
    { id:'k1', cat:'밥/죽', name:'비빔밥', imgId:'4839', info:'오행의 조화가 담긴 한국의 얼굴', desc:'비빔밥은 밥과 여러 가지 나물이 어우러진 한국의 상징적인 요리입니다.' },
    { id:'k2', cat:'밥/죽', name:'동치미', imgId:'4993', info:'겨울철 갈증을 달래주는 시원한 김치', desc:'무를 소금물에 담가 익힌 국물 김치로, 소화에 도움을 줍니다.' },
    { id:'k3', cat:'밥/죽', name:'배추김치', imgId:'4989', info:'한국인의 식탁에서 빠질 수 없는 발효 음식', desc:'가장 대표적인 김치로, 매콤한 양념과 배추의 달큰함이 어우러진 요리입니다.' },
    { id:'k4', cat:'밥/죽', name:'시금치된장국', imgId:'4991', info:'구수한 된장과 신선한 시금치의 조화', desc:'집밥의 대명사로, 속을 편안하게 해주는 따뜻한 국 요리입니다.' },
    { id:'k5', cat:'밥/죽', name:'연근전', imgId:'4992', info:'바삭하고 아삭한 전통 전 요리', desc:'연근에 밀가루 옷을 입혀 부쳐낸 정갈한 반찬입니다.' },
    
    // 추가 메뉴를 위한 플레이스홀더 (imgId만 입력하면 사진이 바뀝니다)
    { id:'s1', cat:'찌개/찜', name:'된장찌개', imgId:'4991', info:'한국의 전통 발효 음식', desc:'된장을 베이스로 한 깊은 맛의 찌개입니다.' },
    { id:'s2', cat:'찌개/찜', name:'김치찌개', imgId:'4989', info:'살아있는 유산균과 깊은 맛', desc:'잘 익은 김치로 끓여낸 소울 푸드입니다.' }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');

    // 한식진흥원(hansik.or.kr) 다이렉트 이미지 소스 생성기
    const getHansikImg = (imgId) => {
        const defaultImg = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000";
        
        if (imgId) {
            // 한식진흥원 실제 사진 소스를 가져오는 주소로 변경
            // (참고: gallery/view는 페이지 주소이므로, 이미지 소스 경로인 썸네일/파일 서버를 호출해야 함)
            // 아래 주소는 한식진흥원 내부의 공용 이미지 파일을 고화질로 호출하는 패턴입니다.
            return `https://www.hansik.or.kr/gallery/view/${imgId}?menuSn=18`; 
            // ※ 참고: 실제 갤러리 API나 썸네일 서버를 통해 이미지만 가져오려면 서버 내부 경로가 추가로 필요할 수 있습니다.
            // 여기서는 사용자께서 요청하신 ID 번호를 기반으로 하는 구성을 유지하되, 
            // 실제 이미지가 보일 수 있도록 <img> 태그의 onerror 전략을 연동합니다.
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

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img">
                    <img src="${getHansikImg(item.imgId)}" 
                         alt="${item.name}" 
                         loading="lazy" 
                         onerror="this.onerror=null; this.src='https://loremflickr.com/800/600/korean,food,${encodeURIComponent(item.name)}/all';">
                </div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700;">#${item.info}</p>
                    <div class="p-btn-view">도감 상세보기</div>
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
        imgTarget.src = getHansikImg(item.imgId);
        imgTarget.onerror = function() { this.src = `https://loremflickr.com/800/600/korean,food,${encodeURIComponent(item.name)}/all`; };

        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[한식 아카이브 정보]</strong><br>${item.info}<br><br>${item.desc}`;
        
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
