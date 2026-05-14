// WORLD FOOD ATLAS - Validated Image & Navigation Enhanced Version
const foodDB = [
    // 한식 (K-Food)
    {
        id:'k1', cat:'한식', subCat:'밥/죽', name:'전통 비빔밥', 
        info:'자연의 오행설이 담긴 한국의 얼굴', 
        img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800', 
        desc:'비빔밥은 밥 위에 여러 가지 채소, 고기, 달걀 등을 올려 고추장에 비벼 먹는 한국의 상징적인 요리입니다. 영양학적으로 완벽한 균형을 이룹니다.'
    },
    {
        id:'k2', cat:'한식', subCat:'정통 고기요리', name:'궁중 잡채', 
        info:'임금님의 입맛을 사로잡은 연회 요리', 
        img:'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=800', 
        desc:'당면과 갖은 채소, 고기를 한데 볶아 만드는 정성 가득한 요리입니다. 한국 명절의 대명사입니다.'
    },
    {
        id:'k3', cat:'한식', subCat:'찌개/찜', name:'전통 김치찌개', 
        info:'한국인의 영원한 소울 푸드', 
        img:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800', 
        desc:'잘 익은 김치와 고소한 돼지고기가 어우러진 깊은 맛의 한국 대표 찌개입니다.'
    },
    {
        id:'k4', cat:'한식', subCat:'정통 고기요리', name:'한우 불고기', 
        info:'천 년의 역사를 가진 고기 구이', 
        img:'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800', 
        desc:'얇게 썬 소고기를 양념에 재워 구워 먹는 세계적으로 사랑받는 고급 고기 요리입니다.'
    },
    {
        id:'k5', cat:'한식', subCat:'찌개/찜', name:'명품 갈비찜', 
        info:'최고의 환대와 정성이 담긴 찜 요리', 
        img:'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800', 
        desc:'두툼한 소갈비와 각종 견과류를 조려낸 품격 있는 한국 정통 연회 요리입니다.'
    },
    {
        id:'k6', cat:'한식', subCat:'면류/분식', name:'해물 파전', 
        info:'바삭한 식감 속 해산물의 향연', 
        img:'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?auto=format&fit=crop&q=80&w=800', 
        desc:'신선한 파와 각종 해산물을 듬뿍 넣어 지져낸 고소한 한국식 팬케이크입니다.'
    },

    // 양식 (Western)
    {
        id:'w1', cat:'양식', subCat:'스테이크', name:'안심 스테이크', 
        info:'부드러움의 정점에 선 육류 요리', 
        img:'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800', 
        desc:'소량만 추출되는 고품격 안심 부위를 정성껏 시어링하여 제공하는 양식의 꽃입니다.'
    },
    {
        id:'w2', cat:'양식', subCat:'피자/파스타', name:'나폴리 마르게리따', 
        info:'이탈리아의 자부심을 담은 한 입', 
        img:'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=800', 
        desc:'바질, 모짜렐라, 토마토로 이탈리아 국기를 상징한 정통 나폴리 스타일의 피자입니다.'
    },
    {
        id:'w3', cat:'양식', subCat:'피자/파스타', name:'해산물 파에야', 
        info:'스페인 태양의 맛을 담은 쌀 요리', 
        img:'https://images.unsplash.com/photo-1534080564607-6e797599cb8a?auto=format&fit=crop&q=80&w=800', 
        desc:'스페인 연안의 풍부한 해산물과 사프란이 만난 전통적인 쌀 요리의 정수입니다.'
    },
    {
        id:'w6', cat:'양식', subCat:'피자/파스타', name:'수제 라자냐', 
        info:'층층이 쌓인 오븐의 예술', 
        img:'https://images.unsplash.com/photo-1574894709920-11b28e734740?auto=format&fit=crop&q=80&w=800', 
        desc:'파스타 면과 라구 소스, 치즈를 겹겹이 쌓아 깊은 풍미를 자랑하는 요리입니다.'
    },

    // 일식 (Japanese)
    {
        id:'j1', cat:'일식', subCat:'초밥/사시미', name:'에도마에 오마카세', 
        info:'장인 정신으로 빚어낸 한 점', 
        img:'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=800', 
        desc:'신선한 제철 생선과 장인의 손길이 만나 최고의 미식 경험을 제공하는 일식의 정수입니다.'
    },
    {
        id:'j2', cat:'일식', subCat:'초밥/사시미', name:'모듬 사시미', 
        info:'바다의 신선함을 투명하게 담다', 
        img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800', 
        desc:'각종 해산물을 조리하지 않고 썰어내어 재료 본연의 맛을 극대화한 요리입니다.'
    },
    {
        id:'j4', cat:'일식', subCat:'덮밥/라멘', name:'돈코츠 라멘', 
        info:'진하고 고소한 후쿠오카의 맛', 
        img:'https://images.unsplash.com/photo-1557872245-541448993382?auto=format&fit=crop&q=80&w=800', 
        desc:'돼지 뼈 육수를 오랜 시간 우려내어 깊은 바디감과 구수함을 자랑하는 면 요리입니다.'
    },

    // 중식 (Chinese)
    {
        id:'c1', cat:'중식', subCat:'요리류', name:'베이징 덕', 
        info:'황제의 요리로 불리는 정통 오리 구이', 
        img:'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800', 
        desc:'바삭하게 구워진 껍질이 일품인 중국 베이징 최고의 보양 및 미식 요리입니다.'
    },
    {
        id:'c2', cat:'중식', subCat:'요리류', name:'샤오룽바오 (딤섬)', 
        info:'만두피 속 가득 찬 육즙의 축제', 
        img:'https://images.unsplash.com/photo-1541696490-8744a5dbadbb?auto=format&fit=crop&q=80&w=800', 
        desc:'한 번의 젓가락질로 터지는 따뜻하고 진한 육즙이 매력적인 중국 정통 만두입니다.'
    },

    // 디저트 (Dessert)
    {
        id:'d1', cat:'디저트', subCat:'케이크/쿠키', name:'이탈리안 티라미수', 
        info:'나를 행복하게 끌어올리는 맛', 
        img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800', 
        desc:'에스프레소와 부드러운 마스카포네 치즈가 만나 쌉쌀하면서도 달콤한 하모니를 이룹니다.'
    },
    {
        id:'d6', cat:'디저트', subCat:'케이크/쿠키', name:'프랑스 마카롱', 
        info:'입안에 퍼지는 작은 사치', 
        img:'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800', 
        desc:'아몬드 가루와 머랭으로 만든 바삭하고 쫄깃한 프랑스의 대표 디저트입니다.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');

    const render = (cat, targetId, subFilter = '전체보기', itemsOverride = null) => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        let items = itemsOverride || foodDB.filter(f => f.cat === cat);
        if(subFilter !== '전체보기' && !itemsOverride) items = items.filter(f => f.subCat === subFilter);

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'"></div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700;">#${item.info.substring(0, 18)}</p>
                    <div class="p-btn-view">아카이브 도감 열기</div>
                </div>
            </div>
        `).join('');
    };

    const updateAllCategories = (filter = null) => {
        ['한식', '양식', '일식', '중식', '디저트'].forEach(c => {
            const targets = {'한식':'korean-target', '양식':'western-target', '일식':'japanese-target', '중식':'chinese-target', '디저트':'dessert-target'};
            render(c, targets[c], '전체보기', filter);
        });
    };

    updateAllCategories();

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = val ? foodDB.filter(f => f.name.toLowerCase().includes(val) || f.desc.toLowerCase().includes(val)) : null;
        updateAllCategories(filtered);
    });

    const showDetail = (id, saveState = true) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;
        document.getElementById('d-img-target').src = item.img;
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[푸드 아카이브]</strong><br>${item.info}<br><br>${item.desc}`;
        
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

    // Slider Simple
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
