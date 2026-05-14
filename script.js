// THE K-FOOD ARCHIVE - 140+ Master Database
const foodDB = [
    // [1] 밥/죽 - 14개
    { id:'r1', cat:'밥/죽', name:'비빔밥', info:'영양의 조화', desc:'나물과 육회, 고추장으로 비빈 대표 한식.' },
    { id:'r2', cat:'밥/죽', name:'전복죽', info:'바다의 산삼', desc:'전복과 내장으로 끓인 고급 보양죽.' },
    { id:'r3', cat:'밥/죽', name:'김밥', info:'국민 간편식', desc:'여러 재료를 김과 밥으로 말아낸 도시락.' },
    { id:'r4', cat:'밥/죽', name:'곤드레밥', info:'산의 향기', desc:'곤드레 나물을 얹어 지은 건강식.' },
    { id:'r5', cat:'밥/죽', name:'호박죽', info:'달콤한 영양', desc:'늙은 호박을 찹쌀가루와 끓인 죽.' },
    { id:'r6', cat:'밥/죽', name:'오곡밥', info:'새해의 기원', desc:'다섯 곡물을 섞어 지은 정월 대보름 밥.' },
    { id:'r7', cat:'밥/죽', name:'콩나물밥', info:'아삭한 식감', desc:'콩나물을 넣어 지은 담백한 별미.' },
    { id:'r8', cat:'밥/죽', name:'김치볶음밥', info:'매콤한 풍미', desc:'잘 익은 김치와 밥을 볶아낸 식사.' },
    { id:'r9', cat:'밥/죽', name:'영양돌솥밥', info:'정성의 결정체', desc:'밤, 은행, 대추를 넣어 갓 지은 밥.' },
    { id:'r10', cat:'밥/죽', name:'시래기밥', info:'시골의 정', desc:'말린 무청을 넣어 구수한 풍미의 밥.' },
    { id:'r11', cat:'밥/죽', name:'굴밥', info:'겨월의 진미', desc:'겨울 제철 굴을 넣어 지은 영양식.' },
    { id:'r12', cat:'밥/죽', name:'팥죽', info:'동지의 온기', desc:'붉은 팥에 새알심을 넣어 끓인 죽.' },
    { id:'r13', cat:'밥/죽', name:'보리밥', info:'추억의 맛', desc:'보리쌀을 섞어 지은 소박한 밥.' },
    { id:'r14', cat:'밥/죽', name:'누룽지', info:'구수한 마무리', desc:'솥바닥의 밥을 끓여 만든 후식 메뉴.' },

    // [2] 국/탕 - 14개
    { id:'q1', cat:'국/탕', name:'미역국', info:'탄생의 기쁨', desc:'미역을 소고기와 끓여낸 건강한 국.' },
    { id:'q2', cat:'국/탕', name:'설렁탕', info:'진한 진국', desc:'사골을 푹 고아낸 뽀얀 국물의 탕.' },
    { id:'q3', cat:'국/탕', name:'육개장', info:'얼큰한 기운', desc:'소고기와 나물을 삶아 끓인 매콤한 탕.' },
    { id:'q4', cat:'국/탕', name:'갈비탕', info:'명절의 정석', desc:'소갈비를 넣어 시원하고 맑게 끓인 탕.' },
    { id:'q5', cat:'국/탕', name:'북어국', info:'속이 풀리는 맛', desc:'말린 북어로 끓인 시원한 해장용 국.' },
    { id:'q6', cat:'국/탕', name:'삼계탕', info:'보양의 정석', desc:'인삼과 닭을 고아낸 전통 보양탕.' },
    { id:'q7', cat:'국/탕', name:'콩나물국', info:'맑고 깨끗함', desc:'콩나물로 맑게 끓인 시원한 일상 국.' },
    { id:'q8', cat:'국/탕', name:'추어탕', info:'기운찬 보양', desc:'미꾸라지를 갈아 우거지와 끓인 탕.' },
    { id:'q9', cat:'국/탕', name:'내장탕', info:'깊고 고소함', desc:'소 내장을 넣어 얼큰하게 끓인 국.' },
    { id:'q10', cat:'국/탕', name:'해장국', info:'술꾼의 구원자', desc:'선지나 우거지를 넣어 끓인 해장용 탕.' },
    { id:'q11', cat:'국/탕', name:'소고기무국', info:'담백한 일상', desc:'소고기와 무를 넣어 맑게 끓인 국.' },
    { id:'q12', cat:'국/탕', name:'북어국', info:'시원한 풍미', desc:'북어채를 볶아 끓인 해장 요리.' },
    { id:'q13', cat:'국/탕', name:'아욱국', info:'가을의 보약', desc:'아욱과 된장으로 끓인 구수한 국.' },
    { id:'q14', cat:'국/탕', name:'만둣국', info:'복을 담은 한 그릇', desc:'정성껏 빚은 만두를 넣어 끓인 국.' },

    // [3] 찌개/전골 - 14개
    { id:'s1', cat:'찌개/전골', name:'김치찌개', info:'한국의 소울푸드', desc:'김치와 돼지고기를 푹 끓인 찌개.' },
    { id:'s2', cat:'찌개/전골', name:'된장찌개', info:'발효의 깊은맛', desc:'된장에 각종 야채를 넣어 끓인 찌개.' },
    { id:'s3', cat:'찌개/전골', name:'순두부찌개', info:'부드러운 매운맛', desc:'순두부로 끓인 고소하고 얼큰한 찌개.' },
    { id:'s4', cat:'찌개/전골', name:'청국장찌개', info:'진한 콩의 미학', desc:'발효된 청국장으로 끓인 전통 찌개.' },
    { id:'s5', cat:'찌개/전골', name:'부대찌개', info:'이색적인 조화', desc:'햄과 소시지를 넣고 끓인 퓨전 찌개.' },
    { id:'s6', cat:'찌개/전골', name:'해물전골', info:'바다를 품다', desc:'해산물을 가득 넣어 끓인 시원한 전골.' },
    { id:'s7', cat:'찌개/전골', name:'버섯전골', info:'산의 보물', desc:'다양한 버섯을 넣어 담백하게 끓인 전골.' },
    { id:'s8', cat:'찌개/전골', name:'불고기전골', info:'달콤한 국물', desc:'불고기와 당면을 넣어 자작하게 끓인 전골.' },
    { id:'s9', cat:'찌개/전골', name:'두부전골', info:'정갈한 고소함', desc:'두부와 야채로 끓여낸 담백한 전골 요리.' },
    { id:'s10', cat:'찌개/전골', name:'신선로', info:'궁중의 화려함', desc:'각종 재료를 화로에 담아 끓인 고급 전골.' },
    { id:'s11', cat:'찌개/전골', name:'동태찌개', info:'칼칼한 겨울 맛', desc:'동태를 넣어 시원하게 끓인 찌개.' },
    { id:'s12', cat:'찌개/전골', name:'고추장찌개', info:'진한 매콤함', desc:'고추장 베이스로 감자와 고기를 넣은 찌개.' },
    { id:'s13', cat:'찌개/전골', name:'곱창전골', info:'진하고 고소함', desc:'소 곱창을 넣어 얼큰하게 끓인 전골.' },
    { id:'s14', cat:'찌개/전골', name:'만두전골', info:'푸짐한 한 끼', desc:'만두와 각종 야채를 듬뿍 넣은 전골.' },

    // [4] 찜/조림 - 14개
    { id:'j1', cat:'찜/조림', name:'갈비찜', info:'전통의 명작', desc:'소갈비를 양념에 졸여낸 고급 요리.' },
    { id:'j2', cat:'찜/조림', name:'아구찜', info:'매콤한 별미', desc:'아구와 콩나물을 매운 양념에 볶은 찜.' },
    { id:'j3', cat:'찜/조림', name:'고등어조림', info:'밥도둑 무조림', desc:'고등어를 무와 함께 매콤하게 졸인 요리.' },
    { id:'j4', cat:'찜/조림', name:'닭도리탕', info:'국민 닭 요리', desc:'닭고기를 매운 양념에 조려낸 찜/탕 종류.' },
    { id:'j5', cat:'찜/조림', name:'찜닭', info:'안동의 자존심', desc:'간장 기반 양념에 당면을 넣은 닭 요리.' },
    { id:'j6', cat:'찜/조림', name:'은대구조림', info:'부드러운 식감', desc:'기름진 은대구를 매콤하게 졸인 명품 조림.' },
    { id:'j7', cat:'찜/조림', name:'돼지갈비찜', info:'달콤 짭짤함', desc:'돼지갈비를 야채와 졸여낸 인기 반찬.' },
    { id:'j8', cat:'찜/조림', name:'코다리조림', info:'쫄깃한 명태', desc:'반건조 명태를 매콤하게 졸여낸 요리.' },
    { id:'j9', cat:'찜/조림', name:'계란찜', info:'부드러운 사이드', desc:'달걀을 뚝배기에 부드럽게 쪄낸 요리.' },
    { id:'j10', cat:'찜/조림', name:'단호박찜', info:'자연의 달콤함', desc:'단호박을 통째로 쪄낸 건강 디저트/요리.' },
    { id:'j11', cat:'찜/조림', name:'꽃게찜', info:'게살의 달큰함', desc:'꽃게를 양념이나 찜통에 쪄낸 요리.' },
    { id:'j12', cat:'찜/조림', name:'장조림', info:'오래가는 반찬', desc:'소고기나 달걀을 간장에 졸인 대표 밑반찬.' },
    { id:'j13', cat:'찜/조림', name:'갈치조림', info:'제주 여행의 맛', desc:'신선한 갈치를 무와 함께 졸인 요리.' },
    { id:'j14', cat:'찜/조림', name:'두부조림', info:'소박한 감칠맛', desc:'두부를 구워 양념에 살짝 졸여낸 반찬.' },

    // [5] 고기구이 - 14개
    { id:'g1', cat:'고기구이', name:'불고기', info:'K-BBQ의 중심', desc:'얇게 썬 소고기를 양념에 구운 요리.' },
    { id:'g2', cat:'고기구이', name:'삼겹살', info:'회식의 정석', desc:'돼지 뱃살을 불판에 구워 먹는 직화 요리.' },
    { id:'g3', cat:'고기구이', name:'제육볶음', info:'매콤한 볶음구이', desc:'돼지고기를 매운 양념에 볶아낸 요리.' },
    { id:'g4', cat:'고기구이', name:'떡갈비', info:'정통 구이의 품위', desc:'고기를 다져 숯불에 구워낸 고급 요리.' },
    { id:'g5', cat:'고기구이', name:'닭갈비', info:'철판 위의 예술', desc:'닭고기를 매운 양념에 철판 볶음한 요리.' },
    { id:'g6', cat:'고기구이', name:'생갈비구이', info:'고기 본연의 맛', desc:'양념 없이 직화로 구워내는 소갈비 구이.' },
    { id:'g7', cat:'고기구이', name:'언양불고기', info:'바싹한 풍미', desc:'얇은 고기를 석쇠에 바싹 구워낸 불고기.' },
    { id:'g8', cat:'고기구이', name:'오리로스', info:'담백한 보양', desc:'오리 고기를 불판에 구워 건강하게 즐기는 요리.' },
    { id:'g9', cat:'고기구이', name:'LA갈비', info:'달콤한 고소함', desc:'특제 간장 소스로 구워낸 소갈비 구이.' },
    { id:'g10', cat:'고기구이', name:'곱창구이', info:'고소한 내장 요리', desc:'소 곱창을 불판에 노릇하게 구운 요리.' },
    { id:'g11', cat:'고기구이', name:'항정살구이', info:'아삭한 식감', desc:'돼지 항정 부위를 구워 고소함을 즐기는 요리.' },
    { id:'g12', cat:'고기구이', name:'목살구이', info:'두툼한 육즙', desc:'돼지 목살을 직화로 구워낸 요리.' },
    { id:'g13', cat:'고기구이', name:'등심스테이크', info:'한식 스타일 구이', desc:'한우 등심을 숯불에 구워 최고의 육향을 즐기는 요리.' },
    { id:'g14', cat:'고기구이', name:'차돌박이구이', info:'빠른 고소함', desc:'얇게 썬 소 차돌을 신속하게 구워 먹는 별미.' },

    // [6] 전/부침 - 14개
    { id:'p1', cat:'전/부침', name:'해물파전', info:'비 오는 날의 진미', desc:'해물과 파를 듬뿍 넣어 부쳐낸 전통 전.' },
    { id:'p2', cat:'전/부침', name:'김치전', info:'바삭하고 매콤함', desc:'잘 익은 김치를 반죽해 구워낸 인기 부침개.' },
    { id:'p3', cat:'전/부침', name:'빈대떡', info:'녹두의 고소함', desc:'녹두를 갈아 고사리와 고기를 넣은 부침.' },
    { id:'p4', cat:'전/부침', name:'육전', info:'고기의 화려함', desc:'소고기에 계란 옷을 입혀 부드럽게 구운 전.' },
    { id:'p5', cat:'전/부침', name:'부추전', info:'피를 맑게 하는 맛', desc:'신선한 부추를 가득 넣어 노릇하게 부친 전.' },
    { id:'p6', cat:'전/부침', name:'동태전', info:'명절 제사 음식', desc:'동태 살에 계란을 입혀 노릇하게 구운 전.' },
    { id:'p7', cat:'전/부침', name:'애호박전', info:'달큰한 일상 전', desc:'애호박을 썰어 동그랗게 부쳐낸 정갈한 반찬.' },
    { id:'p8', cat:'전/부침', name:'감자전', info:'쫀득한 리얼 감자', desc:'감자를 갈아 전분기로만 부쳐낸 쫀득한 전.' },
    { id:'p9', cat:'전/부침', name:'버섯전', info:'쫄깃한 나물 전', desc:'표고나 느타리버섯으로 부쳐낸 영양 가득 전.' },
    { id:'p10', cat:'전/부침', name:'고추전', info:'아삭하고 매콤함', desc:'고추 속을 고기로 채워 부쳐낸 별미 전.' },
    { id:'p11', cat:'전/부침', name:'굴전', info:'바다 향기 전유어', desc:'신선한 굴을 통째로 부쳐낸 고급 전.' },
    { id:'p12', cat:'전/부침', name:'깻잎전', info:'향긋한 고기 쌈 전', desc:'깻잎 속에 다진 고기를 넣어 구운 전.' },
    { id:'p13', cat:'전/부침', name:'완자전', info:'한 입 쏙 고기 전', desc:'고기를 둥글게 다져 부쳐낸 동그랑땡 동사 전.' },
    { id:'p14', cat:'전/부침', name:'파전', info:'한국형 피자', desc:'쪽파를 가득 깔아 지져낸 고소한 요리.' },

    // [7] 면/만두 - 14개
    { id:'m1', cat:'면/만두', name:'잡채', info:'화려한 잔치 메뉴', desc:'당면과 채소, 고기를 볶아낸 전통 면 요리.' },
    { id:'m2', cat:'면/만두', name:'냉면', info:'여름의 자존심', desc:'메밀 면에 시원한 육수를 더한 요리.' },
    { id:'m3', cat:'면/만두', name:'비빔냉면', info:'매콤한 즐거움', desc:'매운 양념에 비벼 먹는 중독성 강한 면.' },
    { id:'m4', cat:'면/만두', name:'칼국수', info:'투박한 정성', desc:'밀가루 반죽을 밀어 끓인 든든한 면 요리.' },
    { id:'m5', cat:'면/만두', name:'잔치국수', info:'행복한 축하', desc:'멸치 육수에 소면을 말아 먹는 잔치 필수 메뉴.' },
    { id:'m6', cat:'면/만두', name:'찐만두', info:'속이 꽉 찬 영양', desc:'고기와 채소를 가득 채워 쪄낸 만두.' },
    { id:'m7', cat:'면/만두', name:'비빔국수', info:'새콤달콤함', desc:'소면에 매운 양념과 야채를 비빈 국수.' },
    { id:'m8', cat:'면/만두', name:'수제비', info:'손맛의 진수', desc:'반죽을 떼어 육수에 넣은 정겨운 요리.' },
    { id:'m9', cat:'면/만두', name:'쟁반국수', info:'푸짐한 야채비빔', desc:'큰 쟁반에 면과 야채를 비벼 먹는 보쌈 짝꿍.' },
    { id:'m10', cat:'면/만두', name:'메밀국수', info:'담백한 차가움', desc:'메밀 함량이 높은 면을 육수에 적셔 먹는 요리.' },
    { id:'m11', cat:'면/만두', name:'만둣국', info:'따뜻한 속풀이', desc:'사골 국물 등에 만두를 넣어 끓인 국.' },
    { id:'m12', cat:'면/만두', name:'동치미국수', info:'톡 쏘는 시원함', desc:'잘 익은 동치미 국물에 소면을 말아 먹는 별미.' },
    { id:'m13', cat:'면/만두', name:'쫄면', info:'탱글탱글 매운맛', desc:'질긴 면발과 매콤한 소스의 환상 조화.' },
    { id:'m14', cat:'면/만두', name:'콩국수', info:'여름 보양 콩물', desc:'콩을 갈아 만든 국물에 소면을 넣은 건강식.' },

    // [8] 분식/간식 - 14개
    { id:'f1', cat:'분식/간식', name:'떡볶이', info:'K-스낵의 왕', desc:'떡과 어묵을 고추장 소스에 조린 국민 간식.' },
    { id:'f2', cat:'분식/간식', name:'순대', info:'쫀득한 전통 소시지', desc:'당면과 야채를 넣어 쪄낸 대중적 분식.' },
    { id:'f3', cat:'분식/간식', name:'어묵', info:'따뜻한 길거리 국물', desc:'생선 살로 만든 어묵을 꼬치에 끼워 끓인 요리.' },
    { id:'f4', cat:'분식/간식', name:'호떡', info:'겨울철 달콤한 유혹', desc:'설탕과 견과류를 넣어 노릇하게 구운 꿀떡.' },
    { id:'f5', cat:'분식/간식', name:'군고구마', info:'겨월의 서정', desc:'고구마를 구워내어 고소하고 달콤함을 즐기는 간식.' },
    { id:'f6', cat:'분식/간식', name:'튀김', info:'바삭한 만능 짝꿍', desc:'오징어, 야채 등을 튀겨낸 떡볶이 필수 파트너.' },
    { id:'f7', cat:'분식/간식', name:'김말이', info:'당면과 김의 맛', desc:'당면을 김에 말아 튀겨낸 인기 튀김 메뉴.' },
    { id:'f8', cat:'분식/간식', name:'찐빵', info:'포근한 단팥 맛', desc:'밀가루 반죽에 팥소를 넣어 쪄낸 간식.' },
    { id:'f9', cat:'분식/간식', name:'붕어빵', info:'겨우내 사랑받는 품절템', desc:'생선 모양 틀에 팥이나 슈크림을 넣어 구운 빵.' },
    { id:'f10', cat:'분식/간식', name:'닭강정', info:'바삭한 달콤 매콤함', desc:'닭고기를 튀겨 조청 양념에 버무린 요리.' },
    { id:'f11', cat:'분식/간식', name:'라면', info:'궁극의 간편식', desc:'한국인이 가장 사랑하는 얼큰한 면 요리.' },
    { id:'f12', cat:'분식/간식', name:'꼬마김밥', info:'한 입의 즐거움', desc:'작고 귀엽게 말아낸 마약 같은 중독성의 김밥.' },
    { id:'f13', cat:'분식/간식', name:'떡꼬치', info:'추억의 학교 앞 맛', desc:'가래떡을 튀겨 매콤한 소스를 바른 간식.' },
    { id:'f14', cat:'분식/간식', name:'순대볶음', info:'매콤한 안주의 정석', desc:'순대와 각종 야채를 철판에 볶아낸 요리.' },

    // [9] 김치/반찬 - 14개
    { id:'k1', cat:'김치/반찬', name:'배추김치', info:'한식의 영혼', desc:'배추를 절여 매운 양념으로 숙성한 필수 음식.' },
    { id:'k2', cat:'김치/반찬', name:'깍두기', info:'아삭한 무김치', desc:'무를 사각으로 썰어 담근 시원한 김치.' },
    { id:'k3', cat:'김치/반찬', name:'파김치', info:'알싸하고 짭짤함', desc:'쪽파를 절여 담근 밥도둑 김치.' },
    { id:'k4', cat:'김치/반찬', name:'오이소박이', info:'상큼한 여름 맛', desc:'오이 속에 양념을 채워 넣어 담근 김치.' },
    { id:'k5', cat:'김치/반찬', name:'나물무침', info:'대지의 신선함', desc:'각종 나물을 데쳐 양념에 무쳐낸 건강 반찬.' },
    { id:'k6', cat:'김치/반찬', name:'멸치볶음', info:'칼슘의 제왕', desc:'마른 멸치를 간장이나 고추장에 볶아낸 반찬.' },
    { id:'k7', cat:'김치/반찬', name:'계란말이', info:'도시락 필수 메뉴', desc:'달걀을 층층이 말아 정성껏 구운 반찬.' },
    { id:'k8', cat:'김치/반찬', name:'진미채볶음', info:'쫄깃한 마른반찬', desc:'오징어채를 매콤하게 볶아낸 밥반찬.' },
    { id:'k9', cat:'김치/반찬', name:'감자채볶음', info:'담백한 고소함', desc:'감자를 채 썰어 팬에 볶아낸 고전적인 반찬.' },
    { id:'k10', cat:'김치/반찬', name:'김구이', info:'바다의 풍미', desc:'들기름 바른 김을 구워 소금을 뿌린 국민 반찬.' },
    { id:'k11', cat:'김치/반찬', name:'무말랭이무침', info:'오독독 오독독', desc:'말린 무를 매콤하게 무친 아카이브 반찬.' },
    { id:'k12', cat:'김치/반찬', name:'장조림', info:'든든한 단백질 반찬', desc:'소고기를 간장에 졸여 만든 장기 보관용 고기 반찬.' },
    { id:'k13', cat:'김치/반찬', name:'깻잎장아찌', info:'향긋한 쌈 반찬', desc:'양념한 간장에 깻잎을 절여 만든 밑반찬.' },
    { id:'k14', cat:'김치/반찬', name:'콩자반', info:'윤기 자르르', desc:'검은콩을 달콤 짭짤하게 졸인 영양 반찬.' },

    // [10] 전통디저트 - 14개
    { id:'d1', cat:'전통디저트', name:'약과', info:'달콤한 궁중 과자', desc:'꿀과 기름으로 만들어 튀겨낸 전통 한과.' },
    { id:'d2', cat:'전통디저트', name:'식혜', info:'전통 발효 음료', desc:'엿기름에 밥을 삭혀 만든 시원하고 달콤한 차.' },
    { id:'d3', cat:'전통디저트', name:'수정과', info:'계피와 생강의 노래', desc:'계피향 가득한 곳감 띄운 전통 명절 음료.' },
    { id:'d4', cat:'전통디저트', name:'인절미', info:'콩고물의 고소함', desc:'쫄깃한 찹쌀떡에 콩가루를 묻힌 떡.' },
    { id:'d5', cat:'전통디저트', name:'빙수', info:'한국의 여름 맛', desc:'얼음을 갈아 팥과 떡을 올린 대표 시원한 보양 디저트.' },
    { id:'d6', cat:'전통디저트', name:'송편', info:'추석의 달빛', desc:'깨와 밤을 넣어 반달 모양으로 빚은 떡.' },
    { id:'d7', cat:'전통디저트', name:'경단', info:'화려한 한 입', desc:'찹쌀 구슬에 아롱아롱 고물을 묻힌 꽃 같은 떡.' },
    { id:'d8', cat:'전통디저트', name:'바람떡', info:'한 입 베어 물면 빵터지는 맛', desc:'공기가 들어간 반달 무늬 떡 속에 팥소가 든 떡.' },
    { id:'d9', cat:'전통디저트', name:'호떡', info:'꿀의 달큰함', desc:'반죽 속에 설탕 견과류를 넣어 노릇하게 구운 맛.' },
    { id:'d10', cat:'전통디저트', name:'절편', info:'담백한 흰 떡', desc:'무늬를 찍어낸 담백하고 쫄깃한 한국의 전통 떡.' },
    { id:'d11', cat:'전통디저트', name:'오미자차', info:'다섯 가지 오묘한 맛', desc:'오미자를 우려내어 시큼 달콤하게 마시는 전통 차.' },
    { id:'d12', cat:'전통디저트', name:'강정', info:'바삭한 한과', desc:'곡물을 튀겨 조청으로 굳힌 전통 아카이브 과자.' },
    { id:'d13', cat:'전통디저트', name:'매작과', info:'매듭 모양의 과자', desc:'밀가루 반죽을 꼬아 튀긴 후 꿀을 바른 전통 한과.' },
    { id:'d14', cat:'전통디저트', name:'약식', info:'건강한 대추 찰떡', desc:'찹쌀에 대추, 밤, 잣을 넣어 쪄낸 영양 가득 떡.' }
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
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 30px; text-align: center; color: #888;">데이터를 준비 중입니다.</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img" style="background:#f2f2f2; display:flex; align-items:center; justify-content:center; height:180px; border-radius:15px; margin-bottom:15px;">
                    <i class="fas fa-utensils" style="font-size:3rem; color:#ddd;"></i>
                </div>
                <div class="p-info">
                    <h3 class="p-name" style="font-size:1.15rem; margin-bottom:5px;">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.8rem; font-weight:700;">#${item.info}</p>
                    <div class="p-btn-view" style="font-size:0.85rem; padding:8px 0; margin-top:10px;">상세 도감 확인</div>
                </div>
            </div>
        `).join('');
    };

    const updateUI = (searchText = null) => {
        render('밥/죽', 'rice-target', searchText);
        render('국/탕', 'soup-target', searchText);
        render('찌개/전골', 'stew-target', searchText);
        render('찜/조림', 'steam-target', searchText);
        render('고기구이', 'meat-target', searchText);
        render('전/부침', 'pancake-target', searchText);
        render('면/만두', 'noodle-target', searchText);
        render('분식/간식', 'snack-target', searchText);
        render('김치/반찬', 'kimchi-target', searchText);
        render('전통디저트', 'dessert-target', searchText);
    };

    updateUI();

    searchInput.addEventListener('input', (e) => {
        const s = e.target.value.trim();
        updateUI(s);
    });

    const showDetail = (id, saveState = true) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;

        document.getElementById('d-img-target').style.display = 'none'; 
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[푸드 아카이브]</strong><br>${item.info}<br><br><strong>[상세 도감]</strong><br>${item.desc}`;
        
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
});
