// WORLD FOOD ATLAS - Ultimate Encyclopedia Database
const foodDB = [
    // 한식 (K-Food)
    {
        id:'k1', cat:'한식', subCat:'밥/죽', name:'전통 비빔밥', 
        info:'자연의 오행설이 담긴 한국의 얼굴', 
        img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800', 
        desc:'비빔밥은 밥 위에 여러 가지 채소, 고기, 달걀 등을 올려 고추장에 비벼 먹는 한국의 상징적인 요리입니다. ' + 
             '음양오행설에 기반한 오방색(청, 적, 황, 백, 흑)을 식재료로 구현하여 시각적으로 아름다울 뿐만 아니라, ' +
             '영양학적으로도 완벽한 균형을 이룹니다. 전주 비빔밥이 가장 유명하며, 세계 기내식으로도 큰 사랑을 받고 있습니다.'
    },
    {
        id:'k2', cat:'한식', subCat:'정통 고기요리', name:'궁중 잡채', 
        info:'임금님의 입맛을 사로잡은 연회 요리', 
        img:'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=800', 
        desc:'잡채는 원래 17세기 광해군 시대, 이충이라는 인물이 궁중 연회에서 처음 선보인 음식입니다. ' +
             '당시에는 당면 없이 채소만으로 만들었으나, 현재는 고구마 전분으로 만든 쫄깃한 당면이 주재료입니다. ' +
             '갖은 채소와 고기를 따로 볶아 한데 버무리는 정성이 들어가며, 한국의 명절과 생신 잔치에 빠지지 않는 대표적 정성 요리입니다.'
    },
    {
        id:'k3', cat:'한식', subCat:'찌개/찜', name:'전통 김치찌개', 
        info:'한국인의 영원한 소울 푸드', 
        img:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800', 
        desc:'잘 익은 김치와 돼지고기, 두부를 넣고 푹 끓여낸 김치찌개는 한국인들이 가장 선호하는 일상식입니다. ' +
             '김치의 젖산균이 가열되면서 나오는 깊은 신맛과 고기의 감칠맛이 어우러져 밥도둑이라 불립니다. ' +
             '한국의 집밥 문화를 상징하며, 각 집마다 고유의 레시피가 전수되는 가정식의 정수입니다.'
    },
    {
        id:'k4', cat:'한식', subCat:'정통 고기요리', name:'한우 불고기', 
        info:'천 년의 역사를 가진 고기 구이', 
        img:'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800', 
        desc:'불고기는 고구려의 맥적(貊炙)에서 유래한 유서 깊은 요리입니다. 육질이 좋은 소고기를 얇게 썰어 간장, 설탕, 배즙 등이 들어간 ' +
             '양념에 재워 석쇠에 구워 먹는 방식입니다. 달콤하고 짭짤한 맛이 특징이며, 외국인들이 가장 처음 접하는 한식으로 유명합니다. ' +
             '고려시대에는 설야믹(雪夜覓)이라 불리며 눈 오는 밤에 즐기던 풍류 있는 요리였습니다.'
    },
    {
        id:'k5', cat:'한식', subCat:'찌개/찜', name:'명품 갈비찜', 
        info:'최고의 환대와 정성이 담긴 찜 요리', 
        img:'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80&w=800', 
        desc:'갈비찜은 소갈비를 토막 내어 밤, 대추, 은행 등과 함께 간장 양념에 조려낸 요리입니다. 조선시대에는 궁중 연회에서만 볼 수 있었던 ' +
             '고급 요리였으며, 현재도 추석이나 설날 같은 큰 명절이나 결혼식 같은 중요한 날에 대접하는 고품격 요리입니다. ' +
             '부드럽게 씹히는 고기와 달큰한 양념의 조화가 일품입니다.'
    },
    {
        id:'k6', cat:'한식', subCat:'면류/분식', name:'해물 파전', 
        info:'비 오는 날의 한국적 풍류', 
        img:'https://images.unsplash.com/photo-1623653139622-c3a968988647?auto=format&fit=crop&q=80&w=800', 
        desc:'밀가루 반죽에 실파와 오징어, 조개, 새우 등 각종 해산물을 듬뿍 넣어 부쳐낸 한국식 전입니다. ' +
             '겉은 바삭하고 속은 부드러운 식감이 특징이며, 막걸리와 함께 즐기는 문화가 발달했습니다. ' +
             '특히 부산 동래 지방의 파전이 두툼하고 푸짐하기로 이름이 높습니다.'
    },

    // 양식 (Western)
    {
        id:'w1', cat:'양식', subCat:'스테이크', name:'안심 스테이크 (Filet Mignon)', 
        info:'부드러움의 정점에 선 육류 요리', 
        img:'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800', 
        desc:'안심 스테이크는 소의 부위 중 운동량이 가장 적어 극강의 부드러움을 자랑하는 필레 미뇽 부위를 사용합니다. ' +
             '기름기가 적고 담백하여 서양 정찬 스타일의 정점에 위치합니다. 미디엄 레어로 익혔을 때 육즙이 가장 풍부하며, ' +
             '레드 와인 소스나 트러플 소스를 곁들여 풍미를 극대화합니다.'
    },
    {
        id:'w2', cat:'양식', subCat:'피자/파스타', name:'나폴리 마르게리따', 
        info:'여왕의 이름을 딴 이탈리아의 자부심', 
        img:'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=800', 
        desc:'1889년 이탈리아 국왕 움베르토 1세의 왕비 마르게리따를 위해 만들어진 피자입니다. ' +
             '토마토(적색), 바질(녹색), 모짜렐라 치즈(백색)를 사용하여 이탈리아 국기를 상징했습니다. ' +
             '심플한 재료만으로 재료 본연의 맛을 끌어내는 나폴리 정통 방식의 대명사입니다.'
    },
    {
        id:'w3', cat:'양식', subCat:'피자/파스타', name:'해산물 파에야', 
        info:'스페인 태양의 맛을 담은 쌀 요리', 
        img:'https://images.unsplash.com/photo-1534080564607-6e797599cb8a?auto=format&fit=crop&q=80&w=800', 
        desc:'파에야는 스페인 발렌시아 지방에서 유래한 요리로, 넓고 얕은 팬에 쌀과 신선한 해산물, ' +
             '사프란을 넣어 노란빛을 띠게 끓여낸 요리입니다. 팬 바닥에서 살짝 눌러 붙은 쌀(소카랏)이 가장 핵심적인 맛이며, ' +
             '지중해 연안의 풍부한 해산물 문화를 반영하는 스페인의 대표 전통 음식입니다.'
    },
    {
        id:'w4', cat:'양식', subCat:'샐러드/리조또', name:'클램 차우더 (Clam Chowder)', 
        info:'북미 해안 마을의 따뜻한 위로', 
        img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800', 
        desc:'조개와 감자, 양파, 베이컨을 넣어 끓인 걸쭉한 수프입니다. 특히 우유와 크림을 베이스로 하는 ' +
             '뉴잉글랜드 스타일이 가장 유명합니다. 18세기 프랑스 정착민들로부터 전파되어 현재는 ' +
             '미국 북동부 보스턴과 샌프란시스코의 대표적인 소울 푸드로 자리 잡았습니다.'
    },

    // 일식 (Japanese)
    {
        id:'j1', cat:'일식', subCat:'초밥/사시미', name:'에도마에 오마카세 초밥', 
        info:'셰프의 철학이 담긴 한 점의 마법', 
        img:'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&q=80&w=800', 
        desc:'초밥은 19세기 에도(현재의 도쿄) 거리에서 패스트푸드로 시작되었습니다. ' +
             '장인의 손에서 빚어지는 오마카세(맡김 차림)는 그날 가장 신선한 식재료를 엄선하여 밥의 온도, 식초의 양, ' +
             '생선의 숙도에 따라 미묘한 맛의 차이를 만들어냅니다. 화려한 기교보다 재료 본연의 맛을 극대화하는 ' +
             '일본 식문화의 절제미를 보여줍니다.'
    },
    {
        id:'j2', cat:'일식', subCat:'덮밥/라멘', name:'돈코츠 라멘 전문점', 
        info:'하카타 지방에서 온 진한 육수의 예술', 
        img:'https://images.unsplash.com/photo-1557872245-541448993382?auto=format&fit=crop&q=80&w=800', 
        desc:'돈코츠 라멘은 돼지 뼈를 오랜 시간 강한 불에 고아낸 불투명하고 뽀얀 국물이 특징입니다. ' +
             '큐슈 후쿠오카의 하카타 지방이 발상지이며, 특유의 전분기 있는 얇은 면과 차슈가 어우러져 ' +
             '깊고 진한 풍미를 선사합니다. 현재는 전 세계적으로 가장 인지도 높은 일본 면 요리입니다.'
    },

    // 중식 (Chinese)
    {
        id:'c1', cat:'중식', subCat:'요리류', name:'베이징 덕 (Peking Duck)', 
        info:'바삭한 껍질과 촉촉한 속살의 황금 비율', 
        img:'https://images.unsplash.com/photo-1563245394-878f13e1d328?auto=format&fit=crop&q=80&w=800', 
        desc:'베이징 덕은 원나라 시대부터 이어져 온 중국 왕실 요리입니다. 특수 제작된 화덕에서 오리를 훈제하며, ' +
             '과당을 발라 구워낸 바삭한 껍질이 가장 백미입니다. 얇은 전병인 야오빙에 오리 껍질과 고기, ' +
             '파 채, 오이, 춘장을 싸서 먹는 독특한 방식이 특징이며, 중국 국빈 만찬에도 빠지지 않는 정통 요리입니다.'
    },
    {
        id:'c2', cat:'중식', subCat:'요리류', name:'샤오룽바오 (Dim Sum)', 
        info:'피를 뚫고 나오는 진한 육즙의 감동', 
        img:'https://images.unsplash.com/photo-1541696490-8744a5dbadbb?auto=format&fit=crop&q=80&w=800', 
        desc:'상하이 지방에서 유래한 육즙 만두로, 딤섬의 황태자로 불립니다. 얇은 만두피 안에 돼지고기 소와 함께 ' +
             '굳혀넣은 육수가 열기에 녹아 가득 차게 됩니다. 수저에 올려 만두피를 살짝 찢어 먼저 육수를 마시고 ' +
             '생강 채를 올린 간장에 찍어 먹는 것이 정석입니다.'
    },

    // 디저트 (Dessert)
    {
        id:'d1', cat:'디저트', subCat:'케이크/쿠키', name:'이탈리안 티라미수', 
        info:'"나를 끌어올리다"라는 의미의 기운찬 달콤함', 
        img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800', 
        desc:'티라미수는 이탈리아어로 "기운 나게 하다"라는 뜻을 가지고 있습니다. 에스프레소에 적신 사보이아르디(쿠키)와 ' +
             '마스카포네 치즈, 카카오 가루를 층층이 쌓아 만듭니다. 1960년대 이탈리아 베네토 지역에서 탄생하여 ' +
             '현재는 전 세계에서 가장 사랑받는 커피 디저트 중 하나가 되었습니다.'
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
        if(subFilter !== '전체보기' && !itemsOverride) {
            items = items.filter(f => f.subCat === subFilter);
        }

        if(items.length === 0) {
            grid.innerHTML = `<div style="width:100%; text-align:center; padding: 50px; color:#aaa; grid-column: 1/-1;">해당 카테고리에 음식이 없습니다.</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700; margin-bottom:10px;">#${item.info.substring(0, 15)}...</p>
                    <div class="p-btn-view">아카이브 도감 열기</div>
                </div>
            </div>
        `).join('');
    };

    // Initial Renders
    render('한식', 'korean-target');
    render('양식', 'western-target');
    render('일식', 'japanese-target');
    render('중식', 'chinese-target');
    render('디저트', 'dessert-target');

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        document.querySelectorAll('.p-section').forEach((s) => {
            const gridId = s.querySelector('.p-grid').id;
            const category = s.querySelector('.s-title').innerText.split(' ')[0];
            const filtered = foodDB.filter(f => f.cat === category && (f.name.toLowerCase().includes(val) || f.desc.toLowerCase().includes(val)));
            render(category, gridId, '전체보기', val.length > 0 ? filtered : null);
        });
    });

    // Detail View & Email Sharing
    const showDetail = (id) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;
        document.getElementById('d-img-target').src = item.img;
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[푸드 아카이브 요약]</strong><br>${item.info}<br><br><strong>[상세 정보]</strong><br>${item.desc}`;
        document.getElementById('d-price-target').innerText = "World Food Archive No." + item.id.toUpperCase();

        const shareBtn = document.querySelector('.d-btn-buy');
        shareBtn.innerText = "이메일로 지식 코드 공유하기";
        shareBtn.onclick = () => {
            const userEmail = prompt("이 도감 정보를 전송할 이메일을 입력하세요:");
            if (userEmail) {
                const subject = encodeURIComponent(`[WORLD FOOD ATLAS] ${item.name} 지식 코드`);
                const body = encodeURIComponent(`📜 ${item.name} 푸드 도감 정보\n\n한줄평: ${item.info}\n\n상세설명: ${item.desc}\n\n---\n자세한 내용은 사이트(WORLD FOOD ATLAS)를 방문하세요.`);
                window.location.href = `mailto:${userEmail}?subject=${subject}&body=${body}`;
            }
        };

        mainView.style.display = 'none';
        detailView.style.display = 'block';
        window.scrollTo(0, 0);
    };

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.p-card');
        if(card) showDetail(card.dataset.id);
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
        if (!slides.length || !paginationContainer || !playPauseBtn) return;
        let currentSlide = 0;
        let isPlaying = true;
        let slideInterval;
        paginationContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.classList.add('pg-dot');
            if (idx === 0) dot.classList.add('active');
            dot.onclick = () => { currentSlide = idx; update(); };
            paginationContainer.appendChild(dot);
        });
        const dots = document.querySelectorAll('.pg-dot');
        const update = () => {
            slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
            dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        };
        const next = () => { currentSlide = (currentSlide + 1) % slides.length; update(); };
        const start = () => { if(isPlaying) slideInterval = setInterval(next, 5000); };
        playPauseBtn.onclick = () => { 
            isPlaying = !isPlaying; 
            playPauseBtn.querySelector('i').className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
            if(isPlaying) start(); else clearInterval(slideInterval);
        };
        start();
    };
    initSlider();
});
