// THE K-FOOD ARCHIVE - Encyclopedic Edition & Knowledge Transfer System
const foodDB = [
    // [1] 밥/죽
    { id:'r1', cat:'밥/죽', name:'비빔밥', info:'오행의 조화와 영양의 균형', desc:'비빔밥은 밥 위에 여러 가지 나물과 고기, 고추장을 얹어 비벼 먹는 한국의 대표적인 섞음 음식입니다.', img:'rice/비빔밥.gif' },
    { id:'r2', cat:'밥/죽', name:'전복죽', info:'바다의 산삼이라 불리는 전복의 정수', desc:'전복죽은 보양식의 으뜸으로 꼽히는 죽으로, 신선한 전복의 살과 내장을 참기름에 고소하게 볶은 뒤 쌀과 함께 푹 끓여낸 음식입니다.', img:'rice/전복죽.gif' },
    { id:'r3', cat:'밥/죽', name:'김밥', info:'어디서든 즐기는 국민 소풍 메뉴', desc:'김밥은 소금과 참기름으로 간을 한 밥 위에 시금치, 단무지, 당근, 달걀 등 다채로운 속재료를 얹어 김으로 말아 낸 음식입니다.', img:'rice/김밥.gif' },
    { id:'r4', cat:'밥/죽', name:'곤드레밥', info:'강원도 청정 산야의 향긋한 매력', desc:'말린 곤드레 나물을 불려 밥 위에 얹어 지어내는 건강식입니다.', img:'rice/곤드레밥.gif' },
    { id:'r5', cat:'밥/죽', name:'호박죽', info:'달콤하게 감싸는 자연의 단맛', desc:'잘 익은 늙은 호박이나 단호박을 삶아 으깬 후 찹쌀가루와 끓여내는 죽입니다.', img:'rice/호박죽.gif' },
    { id:'r6', cat:'밥/죽', name:'김치볶음밥', info:'간편하고 맛있는 매콤한 한 끼', desc:'잘 익은 김치를 잘게 썰어 밥과 함께 볶아낸 한국인의 대중적인 식사입니다.', img:'rice/김치볶음밥.gif' },
    { id:'r7', cat:'밥/죽', name:'보리밥', info:'건강한 식이섬유가 풍부한 건강식', desc:'보리쌀을 섞어 지은 밥으로, 구수한 맛과 톡톡 터지는 식감이 특징입니다.', img:'rice/보리밥.gif' },
    { id:'r8', cat:'밥/죽', name:'오곡밥', info:'정월 대보름에 즐기는 건강 영양밥', desc:'찹쌀, 팥, 수수, 차조, 콩 등 다섯 가지 곡물을 넣어 지은 영양 가득한 밥입니다.', img:'rice/오곡밥.gif' },
    { id:'r9', cat:'밥/죽', name:'쌈밥', info:'신선한 채소와 함께 즐기는 건강 한 쌈', desc:'여러 가지 잎채소에 밥과 쌈장을 얹어 싸 먹는 건강 식단입니다.', img:'rice/쌈밥.gif' },
    { id:'r10', cat:'밥/죽', name:'흰쌀밥', info:'한국인의 기본 식사가 되는 정갈한 밥', desc:'도정된 흰쌀로 지어 윤기가 흐르고 고소한 맛이 일품인 기본 밥입니다.', img:'rice/흰쌀밥.gif' },

    // [2] 국/탕
    { id:'q1', cat:'국/탕', name:'미역국', info:'탄생과 기쁨을 기념하는 국', desc:'미역국은 요오드와 칼슘이 풍부하여 피를 맑게 해주고 뼈를 튼튼하게 합니다.', img:'soup/미역국.gif' },
    { id:'q2', cat:'국/탕', name:'설렁탕', info:'오랜 시간 우려낸 사골의 진한 맛', desc:'소의 머리, 사골, 도가니 등을 10시간 이상 푹 고아 만든 뽀얀 국물의 탕입니다.', img:'soup/설렁탕.gif' },
    { id:'q3', cat:'국/탕', name:'육개장', info:'원기를 북돋우는 얼큰한 기운', desc:'소고기와 나물을 듬뿍 넣어 맵고 진하게 끓인 얼큰한 보양 국물 요리입니다.', img:'soup/육개장.gif' },
    { id:'q4', cat:'국/탕', name:'갈비탕', info:'맑고 진한 소갈비의 깊은 맛', desc:'소갈비를 푹 고아 만든 맑고 시원한 맛의 보양식입니다.', img:'soup/갈비탕.gif' },
    { id:'q5', cat:'국/탕', name:'감자탕', info:'돼지 뼈와 감자의 푸짐한 조화', desc:'돼지 등뼈에 감자와 들깨가루를 넣어 진하게 끓인 구수하고 얼큰한 탕입니다.', img:'soup/감자탕.gif' },
    { id:'q6', cat:'국/탕', name:'삼계탕', info:'여름철 최고의 보양식', desc:'어린 닭에 인삼, 대추, 찹쌀을 넣어 푹 고아낸 원기 회복의 정수입니다.', img:'soup/삼계탕.gif' },
    { id:'q7', cat:'국/탕', name:'북어국', info:'시원하고 개운한 해장국', desc:'말린 명태를 넣어 시원하게 끓여낸 맑은 국으로 숙취 해소에 좋습니다.', img:'soup/북어국.gif' },
    { id:'q8', cat:'국/탕', name:'콩나물국', info:'가장 기본적이면서 시원한 맛', desc:'콩나물의 아삭함과 시원한 국물 맛이 일품인 대표적인 서민 국물 요리입니다.', img:'soup/콩나물국.gif' },

    // [3] 찌개/전골
    { id:'s1', cat:'찌개/전골', name:'김치찌개', info:'한국인이 가장 사랑하는 가정식 찌개', desc:'잘 익은 배추김치와 돼지고기를 베이스로 끓여낸 매콤한 찌개입니다.', img:'stew/김치찌개.gif' },
    { id:'s2', cat:'찌개/전골', name:'된장찌개', info:'발효의 미학이 담긴 구수한 한국의 향', desc:'된장에 각종 채소와 육수를 넣어 끓인 한국의 대표적인 찌개입니다.', img:'stew/된장찌개.gif' },
    { id:'s3', cat:'찌개/전골', name:'곱창전골', info:'고소한 곱창과 얼큰한 국물', desc:'소 곱창과 각종 채소를 넣어 끓인 고소하고 얼큰한 전골 요리입니다.', img:'stew/곱창전골.gif' },
    { id:'s4', cat:'찌개/전골', name:'두부전골', info:'담백하고 건강한 두부의 매력', desc:'부드러운 두부와 버섯, 고기, 채소를 넣어 맑게 끓인 전골입니다.', img:'stew/두부전골.gif' },
    { id:'s5', cat:'찌개/전골', name:'만두전골', info:'푸짐한 만두와 시원한 육수', desc:'속이 꽉 찬 만두를 넣고 끓여낸 든든하고 시원한 전골 요리입니다.', img:'stew/만두전골.gif' },
    { id:'s6', cat:'찌개/전골', name:'버섯전골', info:'다양한 버섯 전문 요리', desc:'표고, 느타리, 팽이 등 여러 종류의 버섯을 넣어 건강하게 즐기는 전골입니다.', img:'stew/버섯전골.gif' },
    { id:'s7', cat:'찌개/전골', name:'부대찌개', info:'풍성한 햄과 소시지의 조화', desc:'햄, 소시지, 김치 등을 넣고 끓인 얼큰하고 풍부한 맛의 찌개입니다.', img:'stew/부대찌개.gif' },
    { id:'s8', cat:'찌개/전골', name:'순두부찌개', info:'부드럽게 넘어가는 매콤한 맛', desc:'몽글몽글한 순두부를 넣어 얼큰하게 끓인 부드러운 찌개입니다.', img:'stew/순두부찌개.gif' },
    { id:'s9', cat:'찌개/전골', name:'청국장찌개', info:'깊고 진한 발효 식품의 맛', desc:'특유의 향이 매력적인 청국장으로 끓인 영양 만점 찌개입니다.', img:'stew/청국장찌개.gif' },

    // [4] 찜/조림
    { id:'j1', cat:'찜/조림', name:'갈비찜', info:'전통의 명작, 명절의 주인공', desc:'갈비를 양념장에 재워 오랜 시간 뭉근하게 졸여낸 품격 있는 요리입니다.', img:'steam/갈비찜.gif' },
    { id:'j2', cat:'찜/조림', name:'아구찜', info:'매콤한 풍미와 아삭한 콩나물', desc:'쫄깃한 아구 살에 아삭한 콩나물을 매운 양념으로 볶아낸 별미입니다.', img:'steam/아구찜.gif' },
    { id:'j3', cat:'찜/조림', name:'갈치조림', info:'매콤하고 짭조름한 양념의 정수', desc:'제주 갈치와 무를 넣어 매콤한 양념에 조려낸 밥도둑입니다.', img:'steam/갈치조림.gif' },
    { id:'j4', cat:'찜/조림', name:'감자조림', info:'기성 반찬의 대명사', desc:'감자를 간장 양념에 달콤 짭짤하게 조려낸 국민 밑반찬입니다.', img:'steam/감자조림.gif' },
    { id:'j5', cat:'찜/조림', name:'고등어조림', info:'기름진 고등어의 고소한 맛', desc:'신선한 고등어와 묵은지 또는 무를 넣어 조린 감칠맛 넘치는 요리입니다.', img:'steam/고등어조림.gif' },
    { id:'j6', cat:'찜/조림', name:'닭볶음탕', info:'매콤한 양념 닭 요리', desc:'닭고기와 감자, 채소를 매운 양념으로 끓여낸 든든한 요리입니다.', img:'steam/닭볶음탕.gif' },
    { id:'j7', cat:'찜/조림', name:'두부조림', info:'부드럽고 짭짤한 정성', desc:'두부를 구워 양념장에 조려낸 부드러운 식감의 반찬입니다.', img:'steam/두부조림.gif' },
    { id:'j8', cat:'찜/조림', name:'장조림', info:'두고 먹는 보관 반찬', desc:'소고기와 달걀 등을 간장에 조려 만든 든든한 상비 밑반찬입니다.', img:'steam/장조림.gif' },

    // [5] 고기구이
    { id:'g1', cat:'고기구이', name:'불고기', info:'K-BBQ의 대표 메뉴', desc:'얇게 저민 고기를 달콤한 양념에 재워 구운 세계인들의 인기 메뉴입니다.', img:'meat/불고기.gif' },
    { id:'g2', cat:'고기구이', name:'삼겹살', info:'회식 문화의 주인공', desc:'돼지 삼겹살을 노릇하게 구워 쌈을 싸 먹는 한국인의 선호 메뉴입니다.', img:'meat/삼겹살.gif' },
    { id:'g3', cat:'고기구이', name:'곱창구이', info:'고소하고 쫄깃한 식감', desc:'소나 돼지의 곱창을 불판에 구워 즐기는 고소한 맛이 일품인 구이입니다.', img:'meat/곱창구이.gif' },
    { id:'g4', cat:'고기구이', name:'닭갈비', info:'철판 위에 펼쳐지는 매콤함', desc:'닭고기를 매운 양념과 각종 채소와 함께 철판에 볶아 먹는 요리입니다.', img:'meat/닭갈비.gif' },
    { id:'g5', cat:'고기구이', name:'돼지갈비', info:'달콤한 소스의 숯불구이', desc:'돼지갈비를 달콤한 간장 양념에 재워 숯불에 구워낸 요리입니다.', img:'meat/돼지갈비.gif' },
    { id:'g6', cat:'고기구이', name:'떡갈비', info:'궁중에서 즐기던 정성 가득 고기', desc:'고기를 곱게 다져 양념한 뒤 떡 모양으로 구워낸 부드러운 요리입니다.', img:'meat/떡갈비.gif' },
    { id:'g7', cat:'고기구이', name:'수육', info:'기름기를 뺀 건강한 고기', desc:'고기를 통재로 삶아 얇게 썰어낸 담백하고 부드러운 요리입니다.', img:'meat/수육.gif' },
    { id:'g8', cat:'고기구이', name:'제육볶음', info:'매콤한 밥도둑', desc:'돼지고기를 고추장 양념에 볶아낸 한국인의 스테디셀러 메뉴입니다.', img:'meat/제육볶음.gif' },

    // [6] 전/부침
    { id:'p1', cat:'전/부침', name:'해물파전', info:'비 오는 날의 낭만', desc:'해물과 쪽파를 듬뿍 넣어 부친 고소하고 바삭한 전입니다.', img:'pancake/해물파전.gif' },
    { id:'p2', cat:'전/부침', name:'감자전', info:'쫄깃한 감자의 풍미', desc:'감자를 갈아 부쳐내어 겉은 바삭하고 속은 쫄깃한 별미 전입니다.', img:'pancake/감자전.gif' },
    { id:'p3', cat:'전/부침', name:'김치전', info:'매콤하고 짭짤한 중독성', desc:'잘 익은 김치를 썰어 넣어 부친 매콤하고 고소한 한국의 간식입니다.', img:'pancake/김치전.gif' },
    { id:'p4', cat:'전/부침', name:'녹두전', info:'고소함의 끝판왕', desc:'녹두를 직접 갈아 고사리와 고기를 넣어 두툼하게 부친 명절 요리입니다.', img:'pancake/녹두전.gif' },
    { id:'p5', cat:'전/부침', name:'동태전', info:'제사상에 빠지지 않는 귀함', desc:'동태 살에 계란 옷을 입혀 부드럽게 부쳐낸 대표적인 전 요리입니다.', img:'pancake/동태전.gif' },
    { id:'p6', cat:'전/부침', name:'육전', info:'고기의 풍성함을 담은 전', desc:'얇은 고기에 계란 옷을 입혀 부쳐낸 고급스러운 전 요리입니다.', img:'pancake/육전.gif' },
    { id:'p7', cat:'전/부침', name:'호박전', info:'달큰하고 부드러운 맛', desc:'애호박을 얇게 썰어 계란 옷을 입혀 부친 건강 전입니다.', img:'pancake/호박전.gif' },

    // [7] 면/만두
    { id:'m1', cat:'면/만두', name:'물냉면', info:'속까지 시원한 얼음 육수', desc:'시원한 동치미나 고기 육수에 메밀면을 넣어 먹는 한여름 별미입니다.', img:'noodle/물냉면.gif' },
    { id:'m2', cat:'면/만두', name:'비빔국수', info:'새콤달콤한 입맛 돋우기', desc:'소면에 새콤달콤한 고추장 양념과 채소를 넣어 비벼 먹는 국수입니다.', img:'noodle/비빔국수.gif' },
    { id:'m3', cat:'면/만두', name:'비빔냉면', info:'매콤한 비빔 양념의 유혹', desc:'쫄깃한 면에 매운 양념장을 넣어 비벼 먹는 중독성 강한 냉면입니다.', img:'noodle/비빔냉면.gif' },
    { id:'m4', cat:'면/만두', name:'잔치국수', info:'따뜻한 정을 나누는 한 그릇', desc:'멸치 육수에 소면과 고명을 얹어 즐기던 경사스러운 날의 음식입니다.', img:'noodle/잔치국수.gif' },
    { id:'m5', cat:'면/만두', name:'칼국수', info:'쫄깃한 면발과 시원한 국물', desc:'밀가루 반죽을 직접 썰어 만든 면을 진한 육수에 끓여낸 요리입니다.', img:'noodle/칼국수.gif' },
    { id:'m6', cat:'면/만두', name:'콩국수', info:'여름철 건강한 콩 단백질', desc:'고소하게 갈아 만든 콩물에 국수를 말아 먹는 차가운 보양국수입니다.', img:'noodle/콩국수.gif' },
    { id:'m7', cat:'면/만두', name:'만두', info:'속이 꽉 찬 영양 덩어리', desc:'얇은 피 속에 고기와 채소 소를 가득 넣어 찌거나 구운 요리입니다.', img:'noodle/만두.gif' },

    // [8] 분식/간식
    { id:'f1', cat:'분식/간식', name:'떡볶이', info:'국민 간식 부동의 1위', desc:'쫄깃한 떡과 매콤한 고추장 소스의 환상적인 조화로 남녀노소 즐기는 간식입니다.', img:'snack/떡볶이.gif' },
    { id:'f2', cat:'분식/간식', name:'순대', info:'길거리 음식의 영원한 짝꿍', desc:'당면과 선지로 속을 채운 쫄깃한 식감의 한국식 소시지입니다.', img:'snack/순대.gif' },
    { id:'f3', cat:'분식/간식', name:'튀김', info:'바삭함의 정수', desc:'각종 채소와 오징어 등을 바삭하게 튀겨내어 떡볶이 국물과 찰떡궁합인 간식입니다.', img:'snack/튀김.jpg' },

    // [9] 김치/반찬
    { id:'k1', cat:'김치/반찬', name:'배추김치', info:'한국의 자부심, 발효의 정수', desc:'소금에 절인 배추에 고추장, 마늘 등 온갖 양념을 넣어 발효시킨 한국 문화의 상징입니다.', img:'side/배추김치.gif' },
    { id:'k2', cat:'김치/반찬', name:'깍두기', info:'아삭아삭한 무의 매력', desc:'무를 네모나게 썰어 김치 양념에 버무린 아삭한 식감의 김치입니다.', img:'side/깍두기.gif' },
    { id:'k3', cat:'김치/반찬', name:'동치미', info:'시원하고 톡 쏘는 발효 국물', desc:'무를 소금물에 익혀 시원하게 즐기는 맑은 김치 국물입니다.', img:'side/동치미.gif' },
    { id:'k4', cat:'김치/반찬', name:'멸치볶음', info:'칼슘의 보고 밑반찬', desc:'잔멸치를 설탕과 간장에 고소하게 볶아낸 대중적인 밑반찬입니다.', img:'side/멸치볶음.gif' },
    { id:'k5', cat:'김치/반찬', name:'시금치나물', info:'푸릇푸릇한 건강의 맛', desc:'살짝 데친 시금치를 참기름과 소금으로 조물조물 무쳐낸 나물입니다.', img:'side/시금치나물.gif' },
    { id:'k6', cat:'김치/반찬', name:'열무김치', info:'여름철 보리밥의 단짝', desc:'연한 어린 무로 담가 국수나 비빔밥에 넣어 먹기 좋은 시원한 김치입니다.', img:'side/열무김치.gif' },
    { id:'k7', cat:'김치/반찬', name:'젓갈', info:'깊은 감칠맛의 발효 반찬', desc:'해산물을 소금에 절여 발효시킨 풍미 강한 밑반찬입니다.', img:'side/젓갈.gif' },
    { id:'k8', cat:'김치/반찬', name:'총각김치', info:'총각무의 꼬들한 매력', desc:'총각무로 담가 아작아작 씹히는 맛이 일품인 김치입니다.', img:'side/총각김치.gif' },
    { id:'k9', cat:'김치/반찬', name:'콩나물무침', info:'가성비 최고의 국민 나물', desc:'데친 콩나물을 고소하게 무쳐낸 매일 먹어도 질리지 않는 반찬입니다.', img:'side/콩나물무침.gif' },
    { id:'k10', cat:'김치/반찬', name:'잡채', info:'잔칫상의 화려한 주인공', desc:'당면과 각종 채소, 고기를 볶아 버무린 한국의 대표적인 연회 음식입니다.', img:'side/잡채.gif' },
    { id:'k11', cat:'김치/반찬', name:'계란말이', info:'정성스럽게 말아낸 달걀의 고소함', desc:'달걀물을 얇게 펴서 돌돌 말아 익힌 정성이 담긴 반찬입니다.', img:'side/계란말이.gif' },
    { id:'k12', cat:'김치/반찬', name:'계란찜', info:'몽글몽글 부드러운 뚝배기 요리', desc:'달걀을 풀고 육수를 부어 부드럽게 쪄낸 뜨끈하고 고소한 요리입니다.', img:'side/계란찜.gif' },

    // [10] 전통디저트
    { id:'d1', cat:'전통디저트', name:'약과', info:'조선 왕실의 품격', desc:'밀가루에 꿀과 기름을 넣어 빚어 튀긴 뒤 꿀에 재운 고급 전통 과자입니다.', img:'dessert/약과.gif' },
    { id:'d2', cat:'전통디저트', name:'식혜', info:'전통 발효 음료의 조화', desc:'엿기름을 우린 물에 밥을 넣어 삭힌 달콤하고 시원한 발효 전통 음료입니다.', img:'dessert/식혜.gif' },
    { id:'d3', cat:'전통디저트', name:'수정과', info:'계피와 생강의 알싸한 조화', desc:'계피와 생강을 끓인 물에 곶감을 넣어 즐기는 알싸하고 달콤한 전통차입니다.', img:'dessert/수정과.gif' },
    { id:'d4', cat:'전통디저트', name:'송편', info:'추석의 풍성함을 담은 떡', desc:'맵쌀 가루로 반죽하여 소를 넣고 반달 모양으로 빚어 솔잎과 쪄낸 떡입니다.', img:'dessert/송편.gif' },
    { id:'d5', cat:'전통디저트', name:'백설기', info:'눈처럼 하얀 순결의 떡', desc:'멥쌀가루를 시루에 넣고 하얗게 쪄낸 담백하고 포슬포슬한 식감의 떡입니다.', img:'dessert/백설기.gif' },
    { id:'d6', cat:'전통디저트', name:'경단', info:'동글동글한 매력의 찹쌀 떡', desc:'찹쌀가루로 빚어 삶은 뒤 고물을 묻힌 한 입 크기의 귀여운 떡입니다.', img:'dessert/경단.gif' },
    { id:'d7', cat:'전통디저트', name:'매실차', info:'새콤달콤한 소화 메이트', desc:'매실 청을 시원하거나 따뜻하게 타서 마시는 건강 전통 음료입니다.', img:'dessert/매실차.gif' },
    { id:'d8', cat:'전통디저트', name:'오미자차', info:'다섯 가지 맛의 조화', desc:'다섯 가지 맛을 가진 오미자를 우려낸 선명한 붉은 빛의 한방 차입니다.', img:'dessert/오미자차.gif' }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');
    const shareBtn = document.getElementById('knowledge-share-btn');

    let currentItem = null;

    const render = (cat, targetId, filterText = null) => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        
        let items = foodDB.filter(f => f.cat === cat);
        if(filterText) {
            items = items.filter(f => f.name.includes(filterText) || f.desc.includes(filterText) || f.info.includes(filterText));
        }

        if(items.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 30px; text-align: center; color: #ccc;">도감 데이터를 보완 중입니다.</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}">
                <div class="p-img" style="background:#f5f5f5; height:180px; border-radius:18px; margin-bottom:15px; overflow:hidden;">
                    <img src="food/${item.img}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="p-info">
                    <h3 class="p-name">${item.name}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.8rem; font-weight:700;">#${item.info}</p>
                    <div class="p-btn-view">상세 도감 확인</div>
                </div>
            </div>
        `).join('');
    };

    const updateUI = (searchText = null) => {
        const cats = ['밥/죽', '국/탕', '찌개/전골', '찜/조림', '고기구이', '전/부침', '면/만두', '분식/간식', '김치/반찬', '전통디저트'];
        const targets = ['rice-target', 'soup-target', 'stew-target', 'steam-target', 'meat-target', 'pancake-target', 'noodle-target', 'snack-target', 'kimchi-target', 'dessert-target'];
        cats.forEach((c, i) => render(c, targets[i], searchText));
    };

    updateUI();

    searchInput.addEventListener('input', (e) => updateUI(e.target.value.trim()));

    const showDetail = (id, saveState = true) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;
        currentItem = item;

        // Update detail view content
        const imgContainer = document.querySelector('.d-img-container');
        imgContainer.innerHTML = `<img src="food/${item.img}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover; border-radius:24px;">`;
        
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item.name;
        document.getElementById('d-desc-target').innerHTML = `<strong>[한식 전문 지식 아카이브]</strong><br><br>${item.desc}`;
        
        if(saveState) history.pushState({view: 'detail', id: id}, '', '');
        mainView.style.display = 'none';
        detailView.style.display = 'block';
        window.scrollTo(0, 0);
    };

    // [지식 가져가기 시스템]
    shareBtn.onclick = () => {
        if(!currentItem) return;
        
        const fullKnowledge = `[THE K-FOOD ARCHIVE - ${currentItem.name}]\n\n분류: ${currentItem.cat}\n요약: ${currentItem.info}\n상세: ${currentItem.desc}\n\n출처: THE K-FOOD ARCHIVE (대한민국 전통 음식 도감)`;
        
        // 1. 클립보드 복사
        navigator.clipboard.writeText(fullKnowledge).then(() => {
            alert('음식 지식이 클립보드에 복사되었습니다. 이메일 창으로 연결합니다.');
            
            // 2. 이메일 브라우저 열기 (mailto)
            const subject = encodeURIComponent(`[한식 지식 공유] ${currentItem.name}에 대해 알아보세요`);
            const body = encodeURIComponent(fullKnowledge);
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        });
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
