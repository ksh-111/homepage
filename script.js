// THE K-FOOD ARCHIVE - 100+ Data-Oriented Edition (Images Pending)
const foodDB = [
    // [1] 밥/죽 (Rice & Porridge) - 총 20개
    { id:'r1', cat:'밥/죽', name:'비빔밥', info:'오행의 조화가 담긴 영양의 정점', desc:'여러 가지 나물과 고기, 고추장을 넣어 비비는 한국의 대표 음식입니다.' },
    { id:'r2', cat:'밥/죽', name:'전복죽', info:'바다의 보물 전복으로 고아낸 보양식', desc:'전복과 내장을 참기름에 볶아 끓여낸 최고의 기력 회복 죽입니다.' },
    { id:'r3', cat:'밥/죽', name:'김밥', info:'국민 도시락의 대명사', desc:'김 위에 밥과 여러 속재료를 넣고 말아 낸 한국의 간편식입니다.' },
    { id:'r4', cat:'밥/죽', name:'곤드레밥', info:'강원도 산지의 향긋한 나물밥', desc:'말린 곤드레 나물을 밥과 함께 지어 양념장에 비벼 먹는 건강식입니다.' },
    { id:'r5', cat:'밥/죽', name:'보리밥', info:'구수한 추억의 웰빙식', desc:'보리와 쌀을 섞어 지은 밥으로, 강된장과 야채를 곁들이면 일품입니다.' },
    { id:'r6', cat:'밥/죽', name:'쌈밥', info:'신선한 잎채소에 싸 먹는 영양식', desc:'상추, 깻잎 등에 밥과 고기, 쌈장을 넣어 싸 먹는 방식의 요리입니다.' },
    { id:'r7', cat:'밥/죽', name:'오곡밥', info:'새해의 건강을 기원하는 오색 곡물', desc:'찹쌀, 콩, 팥, 수수, 조 등 다섯 가지 곡식으로 지은 정월 대보름 음식입니다.' },
    { id:'r8', cat:'밥/죽', name:'콩나물밥', info:'아삭한 식감의 소박한 별미', desc:'콩나물을 넣어 지은 밥에 간장 양념을 비벼 먹는 서민적인 음식입니다.' },
    { id:'r9', cat:'밥/죽', name:'김치볶음밥', info:'한국인의 영원한 소울 푸드', desc:'잘 익은 김치와 밥을 팬에 볶아낸 매콤한 음식입니다.' },
    { id:'r10', cat:'밥/죽', name:'팥죽', info:'동짓날 액운을 쫓는 붉은 죽', desc:'팥을 삶아 으깬 뒤 쌀과 새알심을 넣어 끓인 겨울철 대표 죽입니다.' },
    { id:'r11', cat:'밥/죽', name:'호박죽', info:'부드럽고 달콤한 자연의 맛', desc:'늙은 호박을 푹 삶아 찹쌀가루와 끓인 고소하고 달콤한 죽입니다.' },
    { id:'r12', cat:'밥/죽', name:'굴밥', info:'향긋한 바다 향을 담은 별미', desc:'겨울철 제철인 굴을 듬뿍 넣어 지은 영양 가득한 밥 요리입니다.' },
    { id:'r13', cat:'밥/죽', name:'쌈장밥', info:'강된장과 밥의 구수한 조화', desc:'강된장 스타일의 쌈장을 밥에 비벼 먹는 한국의 전통 별미입니다.' },
    { id:'r14', cat:'밥/죽', name:'영양돌솥밥', info:'대추, 은행, 밤이 어우러진 정성', desc:'돌솥에 각종 견과류와 대추를 넣어 갓 지어낸 정성과 영양의 결정체입니다.' },
    { id:'r15', cat:'밥/죽', name:'시래기밥', info:'말린 무청의 구수한 풍미', desc:'잘 말린 시래기를 넣어 지은 밥으로 양념장에 비벼 먹으면 좋습니다.' },
    { id:'r16', cat:'밥/죽', name:'콩죽', info:'고소하고 담백한 전통 건강 죽', desc:'불린 콩을 갈아 쌀과 함께 끓인 담백하고 고소한 죽입니다.' },
    { id:'r17', cat:'밥/죽', name:'어죽', info:'민물고기로 끓여낸 보양 별미', desc:'민물고기를 푹 고아 쌀과 고추장을 넣어 끓인 매콤한 보양 음식입니다.' },
    { id:'r18', cat:'밥/죽', name:'잣죽', info:'궁중에서 즐기던 고소한 보양식', desc:'가평 등지의 고품질 잣을 갈아 쌀과 함께 정성껏 끓인 고급 죽입니다.' },
    { id:'r19', cat:'밥/죽', name:'보리죽', info:'거칠지만 건강한 한국의 옛 맛', desc:'보리알의 식감이 살아있는 소박하고 정겨운 죽입니다.' },
    { id:'r20', cat:'밥/죽', name:'누룽지', info:'식후 입안을 정리하는 구수함', desc:'솥바닥에 눌어붙은 밥을 끓여 만든 한국 고유의 후식용 죽입니다.' },

    // [2] 찌개/찜 (Stew & Braised) - 총 25개
    { id:'s1', cat:'찌개/찜', name:'김치찌개', info:'한국인이 가장 선호하는 찌개 1위', desc:'돼지고기와 익은 김치를 푹 끓여낸 한국의 대표 찌개 요리입니다.' },
    { id:'s2', cat:'찌개/찜', name:'된장찌개', info:'발효의 미학이 담긴 구수한 정', desc:'된장에 두부, 야채, 해산물을 넣어 끓인 한국의 기본 찌개입니다.' },
    { id:'s3', cat:'찌개/찜', name:'순두부찌개', info:'몽글몽글 부드럽고 매콤한 맛', desc:'부드러운 순두부를 양념장과 해산물을 넣어 끓인 인기 요리입니다.' },
    { id:'s4', cat:'찌개/찜', name:'청국장찌개', info:'깊고 진한 발효 콩의 풍미', desc:'강하게 발효시킨 콩으로 끓인 전통적인 슬로우 푸드입니다.' },
    { id:'s5', cat:'찌개/찜', name:'부대찌개', info:'햄과 소시지가 김치와 만난 조화', desc:'한국 전쟁 직후 생겨난 평화의 퓨전 요리로 다양한 재료가 일품입니다.' },
    { id:'s6', cat:'찌개/찜', name:'육개장', info:'원기를 북돋우는 얼큰한 국물', desc:'소고기와 각종 나물을 넣어 푹 끓인 매콤하고 든든한 탕 요리입니다.' },
    { id:'s7', cat:'찌개/찜', name:'삼계탕', info:'여름철 최고의 보양 보양식', desc:'영계 속에 인삼과 찹쌀을 넣고 고아낸 한국의 전통 건강식입니다.' },
    { id:'s8', cat:'찌개/찜', name:'갈비찜', info:'명절과 잔치에 빠지지 않는 고급 찜', desc:'소갈비를 간장 양념에 각종 고명과 함께 졸여낸 요리입니다.' },
    { id:'s9', cat:'찌개/찜', name:'아구찜', info:'매콤한 풍미와 아삭한 콩나물', desc:'쫄깃한 아구 살에 아삭한 콩나물을 매운 양념으로 볶아낸 요리입니다.' },
    { id:'s10', cat:'찌개/찜', name:'감자탕', info:'등뼈와 들깨가 만든 깊은 맛', desc:'돼지 등뼈에 감자와 채소를 넣어 끓여낸 얼큰하고 푸짐한 요리입니다.' },
    { id:'s11', cat:'찌개/찜', name:'동태찌개', info:'시원하고 칼칼한 바다의 맛', desc:'얼린 명태와 무를 넣어 시원하게 끓여낸 겨울철 인기 찌개입니다.' },
    { id:'s12', cat:'찌개/찜', name:'돼지갈비찜', info:'달콤 짭짤한 고기 요리의 정석', desc:'돼지갈비를 각종 야채와 함께 양념에 졸여낸 반찬 요리입니다.' },
    { id:'s13', cat:'찌개/찜', name:'추어탕', info:'미꾸라지의 영양을 한 그릇에', desc:'미꾸라지를 갈아 배추우거지와 끓인 전라도/경상도 식 보양식입니다.' },
    { id:'s14', cat:'찌개/찜', name:'청국장', info:'깊은 한국의 고전적인 향취', desc:'발효시킨 콩의 깊은 감칠맛을 즐기는 전통의 찌개입니다.' },
    { id:'s15', cat:'찌개/찜', name:'해물탕', info:'바다의 신성함을 가득 담다', desc:'각종 해산물과 꽃게를 넣어 시원하게 끓여낸 보양 전골입니다.' },
    { id:'s16', cat:'찌개/찜', name:'콩비지찌개', info:'고소하고 부드러운 콩의 풍미', desc:'두부를 만들고 남은 비지에 김치와 돼지고기를 넣어 끓인 요리입니다.' },
    { id:'s17', cat:'찌개/찜', name:'대구탕', info:'숙취를 날리는 맑고 시원한 국물', desc:'흰살 생선 대구를 무와 파와 함께 맑게 끓인 시원한 탕입니다.' },
    { id:'s18', cat:'찌개/찜', name:'코다리찜', info:'쫄깃한 명태의 매콤한 변신', desc:'반건조 명태 코다리를 매콤한 양념에 졸인 밥도둑 메뉴입니다.' },
    { id:'s19', cat:'찌개/찜', name:'닭도리탕', info:'매운 양념과 포슬포슬한 감자', desc:'토막 낸 닭고기와 감자를 넣고 얼큰하게 졸여낸 한국식 닭볶음입니다.' },
    { id:'s20', cat:'찌개/찜', name:'고등어조림', info:'비린내 없는 무의 감칠맛', desc:'고등어와 무를 매콤한 양념장에 자작하게 졸여낸 요리입니다.' },

    // [3] 고기요리 (Meat Dishes) - 총 20개
    { id:'m1', cat:'고기요리', name:'불고기', info:'세계인이 사랑하는 K-푸드', desc:'얇게 썬 소고기를 양념에 재워 구워 먹는 세계적인 한식입니다.' },
    { id:'m2', cat:'고기요리', name:'삼겹살', info:'한국인의 회식 메뉴 대명사', desc:'돼지 뱃살 부위를 불판에 구워 쌈장에 찍어 먹는 요리입니다.' },
    { id:'m3', cat:'고기요리', name:'제육볶음', info:'매콤달콤한 밥도둑 고기 요리', desc:'돼지고기를 고추장 양념에 볶아낸 한국의 대중적인 반찬입니다.' },
    { id:'m4', cat:'고기요리', name:'보쌈', info:'삶은 고기와 보쌈 김치의 앙상블', desc:'돼지고기를 정성껏 삶아 신선한 쌈과 김치에 싸 먹는 요리입니다.' },
    { id:'m5', cat:'고기요리', name:'족발', info:'야식의 황제, 쫄깃한 식감', desc:'돼지 발을 간장 양념에 삶아 차갑게 식혀 먹는 요리입니다.' },
    { id:'m6', cat:'고기요리', name:'떡갈비', info:'장인의 손에서 다져진 구이 요리', desc:'고기를 곱게 다져 양념한 후 석쇠에 구운 전통적인 고기 요리입니다.' },
    { id:'m7', cat:'고기요리', name:'닭갈비', info:'철판에서 볶아내는 춘천의 맛', desc:'닭고기와 야채를 철판에 매운 양념으로 볶아 먹는 요리입니다.' },
    { id:'m8', cat:'고기요리', name:'언양불고기', info:'석쇠에 구운 바싹한 불고기', desc:'다진 고기를 석쇠에 바싹하게 구워낸 울산 언양의 명물입니다.' },
    { id:'m9', cat:'고기요리', name:'오리고기 로스', info:'불포화 지방산이 풍부한 보양식', desc:'신선한 오리 고기를 구워 먹는 단백하고 건강한 고기 요리입니다.' },
    { id:'m10', cat:'고기요리', name:'훈제오리', info:'훈연 향이 입혀진 부드러운 오리', desc:'참나무 등으로 훈연한 오리 고기를 가볍게 구워 먹는 요리입니다.' },
    { id:'m11', cat:'고기요리', name:'LA갈비', info:'측면 절단 갈비 구이의 고소함', desc:'간장 양념에 재운 소갈비를 노릇하게 구워 즐기는 별미입니다.' },
    { id:'m12', cat:'고기요리', name:'편육', info:'잔칫날 즐기는 쫄깃한 머리고기', desc:'돼지 머리고기나 소고기를 응결시켜 얇게 썬 전통 요리입니다.' },
    { id:'m13', cat:'고기요리', name:'육회', info:'신선한 소고기의 우아한 본연의 맛', desc:'얼리지 않은 신선한 소고기를 채 썰어 배와 양념에 비벼 먹는 요리입니다.' },
    { id:'m14', cat:'고기요리', name:'안동찜닭', info:'캐러멜 소스와 당면의 완벽한 조화', desc:'간장 소스에 채소와 당면을 넣고 졸인 안동의 대표 닭 요리입니다.' },
    { id:'m15', cat:'고기요리', name:'치킨', info:'한국식으로 진화한 코리안 치킨', desc:'바삭한 튀김옷과 매콤달콤한 소스가 조화를 이루는 한국의 대중 요리입니다.' },
    
    // [4] 면/분식 (Noodles & Snacks) - 총 20개
    { id:'n1', cat:'면/분식', name:'잡채', info:'화려함 뒤에 숨겨진 정성', desc:'당면과 갖은 채소, 고기를 볶아 무쳐낸 한국의 대표 잔치 음식입니다.' },
    { id:'n2', cat:'면/분식', name:'물냉면', info:'가슴 속까지 시원한 육수의 맛', desc:'메밀 면을 차가운 육수에 말아 먹는 한국의 대표 여름 음식입니다.' },
    { id:'n3', cat:'면/분식', name:'비빔냉면', info:'매콤한 양념장의 중독적인 미학', desc:'메밀 면에 매운 양념장을 넣어 비벼 먹는 한국인의 별미입니다.' },
    { id:'n4', cat:'면/분식', name:'칼국수', info:'투박하지만 정겨운 손맛의 국수', desc:'밀가루 반죽을 썰어 육수에 끓여낸 한국의 전통 면 요리입니다.' },
    { id:'n5', cat:'면/분식', name:'잔치국수', info:'축하하는 날 먹는 따뜻한 소면', desc:'멸치 육수에 소면을 말아 고명을 얹어낸 정겨운 음식입니다.' },
    { id:'n6', cat:'면/분식', name:'떡볶이', info:'아이부터 어른까지 사랑하는 간식', desc:'떡과 어묵을 고추장 양념에 졸여낸 한국의 자부심 있는 분식입니다.' },
    { id:'n7', cat:'면/분식', name:'순대', info:'쫀득하고 고소한 코리안 소시지', desc:'창자에 당면과 선지를 채워 쪄낸 한국의 대중적인 길거리 음식입니다.' },
    { id:'n8', cat:'면/분식', name:'튀김', info:'바삭함 속에 담긴 다양한 맛', desc:'오징어, 고구마, 김말이 등을 튀겨낸 분식의 필수 짝꿍입니다.' },
    { id:'n9', cat:'면/분식', name:'쫄면', info:'탱탱한 면발과 화끈한 매운맛', desc:'쫄깃한 면발에 고추장 양념과 야채를 비벼 먹는 분식 메뉴입니다.' },
    { id:'n10', cat:'면/분식', name:'수제비', info:'비 오는 날 생각나는 투박한 맛', desc:'반죽을 손으로 떼어 육수에 넣어 끓인 고소하고 든든한 면 요리입니다.' },
    
    // [5] 전통디저트 (Traditional Sweets) - 총 15개
    { id:'d1', cat:'전통디저트', name:'약과', info:'조선 왕실의 정갈한 디저트', desc:'밀가루와 조청으로 반죽해 튀긴 후 꿀에 절인 전통 과자입니다.' },
    { id:'d2', cat:'전통디저트', name:'식혜', info:'소화를 돕는 달콤한 전통 음료', desc:'엿기름에 밥알을 삭혀 만든 한국의 전통 발효 음료입니다.' },
    { id:'d3', cat:'전통디저트', name:'수정과', info:'계피와 생강의 알싸한 향취', desc:'계피와 생강을 끓여 곶감을 띄워 마시는 시원한 음료입니다.' },
    { id:'d4', cat:'전통디저트', name:'인절미', info:'고소한 콩고물의 고전적인 맛', desc:'찹쌀떡을 콩고물에 묻혀 만든 남녀노소 즐기는 한국의 떡입니다.' },
    { id:'d5', cat:'전통디저트', name:'빙수', info:'얼음과 팥의 시원한 앙상블', desc:'얼음을 갈아 팥과 떡을 올려 먹는 한국의 대표 여름 디저트입니다.' },
    { id:'d6', cat:'전통디저트', name:'송편', info:'추석의 달빛을 닮은 떡', desc:'멥쌀 반죽에 깨나 콩 소를 넣어 빚어 쪄낸 명절 떡입니다.' },
    { id:'d7', cat:'전통디저트', name:'경단', info:'알록달록 아름다운 한 입 디저트', desc:'찹쌀 가루를 익혀 둥글게 빚고 고물을 묻힌 화려한 떡 요리입니다.' },
    { id:'d8', cat:'전통디저트', name:'약식', info:'영양과 복을 담은 찹쌀 떡', desc:'찹쌀에 밤, 대추, 간장을 넣어 쪄낸 건강한 전통 간식입니다.' }
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
            items = items.filter(f => f.name.includes(filterText) || f.desc.includes(filterText) || f.info.includes(filterText));
        }

        if(items.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 30px; text-align: center; color: #888;">음식 데이터를 준비 중입니다.</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img" style="background:#f0f0f0; display:flex; align-items:center; justify-content:center; height:200px; border-radius:15px; margin-bottom:20px;">
                    <i class="fas fa-utensils" style="font-size:3rem; color:#ccc;"></i>
                </div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.85rem; font-weight:700;">#${item.info}</p>
                    <div class="p-btn-view">도감 상세 보기</div>
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

        document.getElementById('d-img-target').style.display = 'none'; // 이미지 숨김
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[푸드 아카이브]</strong><br>${item.info}<br><br><strong>[상세 정보]</strong><br>${item.desc}`;
        
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
    let sIdx = 0;
    if(slides.length) {
        setInterval(() => {
            slides[sIdx].classList.remove('active');
            sIdx = (sIdx + 1) % slides.length;
            slides[sIdx].classList.add('active');
        }, 5000);
    }
});
