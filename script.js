// THE K-FOOD ARCHIVE - Ultimate Korean Food Database
const foodDB = [
    // 밥/죽 (Rice & Porridge)
    {
        id:'k1', cat:'밥/죽', name:'비빔밥', 
        info:'오행의 조화가 담긴 영양의 정점', 
        img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1000', 
        desc:'비빔밥은 밥과 여러 가지 나물, 고기, 고추장이 어우러진 한국의 대표적인 섞음 음식입니다. 건강과 영양의 균형을 중요시하는 한식의 정수가 담겨 있습니다.'
    },
    {
        id:'k2', cat:'밥/죽', name:'전복죽', 
        info:'바다의 보물 전복으로 고아낸 한 그릇', 
        img:'https://images.unsplash.com/photo-1547928576-a4a33237ce35?auto=format&fit=crop&q=80&w=1000', 
        desc:'신선한 전복과 내장을 참기름에 볶아 끓여낸 최고의 보양식 죽입니다. 고소한 맛과 풍부한 영양으로 기력 회복에 으뜸입니다.'
    },
    {
        id:'k3', cat:'밥/죽', name:'구절판', 
        info:'여덟 가지 재료와 밀전병의 예술', 
        img:'https://images.unsplash.com/photo-1623653139622-c3a968988647?auto=format&fit=crop&q=80&w=1000', 
        desc:'아홉 개의 칸으로 나뉜 그릇에 채소와 고기를 담아 밀전병에 싸 먹는 요리로, 궁중에서 즐기던 화려한 정찬 메뉴입니다.'
    },
    {
        id:'k4', cat:'밥/죽', name:'곤드레밥', 
        info:'강원도의 향긋한 산 향기', 
        img:'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=1000', 
        desc:'말린 곤드레 나물을 밥과 함께 지어 양념장에 비벼 먹는 건강식으로, 산나물 특유의 구수한 풍미가 일품입니다.'
    },

    // 찌개/찜 (Stew & Braised)
    {
        id:'s1', cat:'찌개/찜', name:'김치찌개', 
        info:'한국인의 영원한 소울 푸드', 
        img:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=1000', 
        desc:'잘 익은 김치와 돼지고기, 두부를 넣고 푹 끓여낸 감칠맛 넘치는 찌개입니다. 한국의 밥상을 상징하는 가장 친근한 음식입니다.'
    },
    {
        id:'s2', cat:'찌개/찜', name:'갈비찜', 
        info:'소갈비에 스며든 정통의 달큰함', 
        img:'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1000', 
        desc:'부드러운 소갈비와 무, 밤, 대추 등을 간장 양념에 조려낸 요리로, 명절이나 잔칫날에 빠지지 않는 고급 찜 요리입니다.'
    },
    {
        id:'s3', cat:'찌개/찜', name:'된장찌개', 
        info:'발효의 미학이 빚어낸 구수한 정', 
        img:'https://images.unsplash.com/photo-1623653139622-c3a968988647?auto=format&fit=crop&q=80&w=1000', 
        desc:'콩을 발효시켜 만든 된장을 베이스로 각종 채소와 해산물, 고기를 넣어 끓인 한국의 기본 찌개입니다.'
    },
    {
        id:'s4', cat:'찌개/찜', name:'아구찜', 
        info:'매콤한 양념과 아삭한 콩나물', 
        img:'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?auto=format&fit=crop&q=80&w=1000', 
        desc:'쫄깃한 아구 살과 콩나물을 매운 고춧가루 양념에 볶아낸 요리로, 한국인이 사랑하는 별미 술안주이자 요리입니다.'
    },

    // 고기요리 (Meat Dishes)
    {
        id:'m1', cat:'고기요리', name:'불고기', 
        info:'세계인이 가장 먼저 찾는 K-BBQ', 
        img:'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=1000', 
        desc:'얇게 썬 소고기를 간장 기반의 달콤 짭짤한 양념에 재워 구워 먹는 음식입니다. 부드러운 육질과 풍부한 육즙이 일품입니다.'
    },
    {
        id:'m2', cat:'고기요리', name:'제육볶음', 
        info:'고추장 양념의 중독적인 매콤함', 
        img:'https://images.unsplash.com/photo-1623653139622-c3a968988647?auto=format&fit=crop&q=80&w=1000', 
        desc:'돼지고기를 매콤달콤한 고추장 양념에 볶아낸 요리로, 한국의 직장인과 학생들에게 가장 인기 있는 점심 메뉴 중 하나입니다.'
    },
    {
        id:'m3', cat:'고기요리', name:'수육', 
        info:'담백하게 삶아낸 고기의 정수', 
        img:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000', 
        desc:'돼지고기나 소고기를 통째로 삶아 얇게 썬 요리로, 보쌈 김치나 새우젓과 함께 곁들여 재료 본연의 맛을 즐기는 건강식입니다.'
    },
    {
        id:'m4', cat:'고기요리', name:'닭볶음탕', 
        info:'얼큰한 국물과 부드러운 닭고기', 
        img:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1000', 
        desc:'닭고기를 토막 내어 감자, 당근과 함께 매운 고추장 양념에 끓여낸 요리로 식사 메뉴와 술안주로 모두 적합합니다.'
    },

    // 면/분식 (Noodles & Snacks)
    {
        id:'n1', cat:'면/분식', name:'잡채', 
        info:'화려한 채소와 당면의 어울림', 
        img:'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=1000', 
        desc:'삶은 당면에 볶은 소고기, 표고버섯, 채소 등을 섞어 간장으로 간을 한 요리입니다. 연회나 잔치 음식으로 빠지지 않습니다.'
    },
    {
        id:'n2', cat:'면/분식', name:'냉면', 
        info:'얼음처럼 차가운 면의 시원함', 
        img:'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1000', 
        desc:'메밀 면에 시원한 고기 육수나 동치미 국물을 부어 먹는 요리입니다. 평양냉면과 함흥냉면이 대표적입니다.'
    },
    {
        id:'n3', cat:'면/분식', name:'떡볶이', 
        info:'전 세계가 열광하는 매운맛 간식', 
        img:'https://images.unsplash.com/photo-1623653139622-c3a968988647?auto=format&fit=crop&q=80&w=1000', 
        desc:'떡과 어묵을 고추장 소스에 조려낸 한국의 대표적인 길거리 음식으로, 현재는 전 세계인에게 사랑받는 K-푸드입니다.'
    },
    {
        id:'n4', cat:'면/분식', name:'잔치국수', 
        info:'행복한 날을 축하하는 긴 면발', 
        img:'https://images.unsplash.com/photo-1557872245-541448993382?auto=format&fit=crop&q=80&w=1000', 
        desc:'맑은 멸치 육수에 소면을 말아 고명을 올려 먹는 국수로, 장수와 축하의 의미를 담아 잔칫날에 주로 먹습니다.'
    },

    // 전통디저트 (Sweets)
    {
        id:'d1', cat:'전통디저트', name:'약과', 
        info:'조선 시대 궁중의 달콤한 간식', 
        img:'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=1000', 
        desc:'밀가루에 참기름, 꿀, 생강즙을 섞어 튀긴 후 조청에 담가 만든 전통 과자입니다. 달콤하고 쫀득한 식감이 특징입니다.'
    },
    {
        id:'d2', cat:'전통디저트', name:'빙수', 
        info:'사계절 사랑받는 얼음 디저트', 
        img:'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=1000', 
        desc:'간 얼음 위에 팥, 떡, 연유 등을 올려 먹는 차가운 디저트로, 최근에는 다양한 과일을 활용한 프리미엄 빙수가 인기입니다.'
    },
    {
        id:'d3', cat:'전통디저트', name:'수정과', 
        info:'계피와 생강의 은은한 향취', 
        img:'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=1000', 
        desc:'생강과 계피를 끓여 설탕이나 꿀을 넣고 차갑게 식힌 음료로, 건조한 곶감을 띄워 즐기는 한국식 전통 차입니다.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');

    const render = (cat, targetId, filterText = null) => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        
        let items = foodDB.filter(f => f.cat === cat);
        if(filterText) {
            items = items.filter(f => f.name.includes(filterText) || f.desc.includes(filterText));
        }

        if(items.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 50px; text-align: center; color: #888;">해당하는 음식을 찾을 수 없습니다.</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000'"></div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700;">#${item.info.substring(0, 18)}</p>
                    <div class="p-btn-view">아카이브 도감 보기</div>
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
        document.getElementById('d-img-target').src = item.img;
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[K-FOOD 정보]</strong><br>${item.info}<br><br><strong>[상세 도감]</strong><br>${item.desc}`;
        
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

    // Simple Auto Slider
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
