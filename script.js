// THE K-FOOD ARCHIVE - Multi-language Edition
const i18n = {
    ko: {
        heroTitle: '대한민국 맛의 기록,<br>한식 아카이브',
        heroDesc: '여러 가지 정통 한국 음식과 그 속에 담긴 깊은 이야기를 기록합니다.<br>우리의 맛, 그 이상의 가치를 경험해 보세요.',
        searchPlaceholder: '대한민국 여러 가지 한식을 검색해 보세요 (예: 미역국, 삼겹살, 호떡...)',
        detailHeader: '[한식 전문 지식 아카이브]',
        shareAlert: '음식 지식이 클립보드에 복사되었습니다. 이메일 창으로 연결합니다.',
        shareSubject: '[한식 지식 공유] ',
        shareBody: '에 대해 알아보세요',
        noData: '도감 데이터를 보완 중입니다.',
        btnView: '상세 도감 확인',
        backBtn: '뒤로가기',
        premiumTag: 'K-FOOD 프리미엄 선정',
        shareBtnLabel: '지식 가져가기',
        supportTitle: '게시판',
        supportDesc: '아카이브에 추가하고 싶은 음식이 있거나 서비스에 대해 궁금한 점이 있으시면 자유롭게 글을 남겨주세요.',
        writeBtn: '글쓰기',
        backToList: '목록으로',
        postTitleLabel: '제목',
        postAuthorLabel: '작성자',
        postContentLabel: '내용',
        postSubmit: '작성 완료',
        postIsPrivate: '비밀글로 설정하기',
        postPwLabel: '비밀번호 (4자리 영문/숫자)',
        nav: { rice:'밥/죽', soup:'국/탕', stew:'찌개/전골', steam:'찜/조림', meat:'고기구이', pancake:'전/부침', noodle:'면/만두', snack:'분식/간식', kimchi:'김치/반찬', dessert:'전통디저트', support:'게시판' },
        sections: { rice:'밥 & 죽', soup:'국 & 탕', stew:'찌개 & 전골', steam:'찜 & 조림', meat:'고기구이', pancake:'전 & 부침', noodle:'면 & 만두', snack:'분식 & 간식', kimchi:'김치 & 반찬', dessert:'전통디저트' }
    },
    en: {
        heroTitle: 'Chronicles of Korean Taste,<br>K-FOOD ARCHIVE',
        heroDesc: 'Recording various types of authentic Korean food and their deep stories.<br>Experience the value beyond the taste.',
        searchPlaceholder: 'Search various types of Korean food (e.g., Miyeok-guk, Samgyeopsal...)',
        detailHeader: '[K-FOOD Knowledge Archive]',
        shareAlert: 'Food knowledge has been copied to clipboard. Opening email window.',
        shareSubject: '[K-FOOD Knowledge Share] ',
        shareBody: 'Learn more about ',
        noData: 'Data is being updated.',
        btnView: 'View Details',
        backBtn: 'Back',
        premiumTag: 'K-FOOD Premium Selection',
        shareBtnLabel: 'Get Knowledge',
        supportTitle: 'Customer Support',
        supportDesc: 'If you have any food you want to add to the archive or questions, please leave a message.',
        writeBtn: 'Write',
        backToList: 'Back to List',
        postTitleLabel: 'Title',
        postAuthorLabel: 'Author',
        postContentLabel: 'Content',
        postSubmit: 'Submit',
        postIsPrivate: 'Set as private',
        postPwLabel: 'Password (4 digits)',
        nav: { rice:'Rice', soup:'Soup', stew:'Stew', steam:'Steam', meat:'BBQ', pancake:'Pancake', noodle:'Noodle', snack:'Snack', kimchi:'Kimchi', dessert:'Dessert', support:'Support' },
        sections: { rice:'Rice & Porridge', soup:'Soup & Tang', stew:'Stew & Hot Pot', steam:'Braised & Simmered', meat:'Grilled Meat', pancake:'Korean pancake', noodle:'Noodle & Dumpling', snack:'Snack & Street Food', kimchi:'Kimchi & Side Dish', dessert:'Traditional Dessert' }
    },
    ja: {
        heroTitle: '大韓民国の味の記録、<br>韓国料理アーカイブ',
        heroDesc: '様々な伝統的な韓国料理と、そこに込められた深い物語を記録します。<br>味、その以上の価値を体験してください。',
        searchPlaceholder: '様々な韓国料理を検索（例：わかめスープ、サムギョプサル...）',
        detailHeader: '[韓国料理専門知識アーカイブ]',
        shareAlert: '料理の知識がクリップボードにコピーされました。メールウィンドウを開きます。',
        shareSubject: '[韓国料理の知識共有] ',
        shareBody: 'について詳しく知る',
        noData: 'データを更新中です。',
        btnView: '詳細を見る',
        backBtn: '戻る',
        premiumTag: 'K-FOOD プレミアム選定',
        shareBtnLabel: '知識を取得',
        supportTitle: 'カスタマーサポート',
        supportDesc: 'アーカイブに追加したい料理やサービスに関するお問い合わせは、こちらに自由にご記入ください。',
        writeBtn: '新規作成',
        backToList: '一覧に戻る',
        postTitleLabel: 'タイトル',
        postAuthorLabel: '作成者',
        postContentLabel: '内容',
        postSubmit: '投稿する',
        postIsPrivate: '非公開に設定',
        postPwLabel: 'パスワード（4桁）',
        nav: { rice:'飯/粥', soup:'汁/湯', stew:'チゲ/鍋', steam:'蒸し/煮', meat:'肉焼き', pancake:'チヂミ', noodle:'麺/餃子', snack:'粉食', kimchi:'キム치/副菜', dessert:'デザート', support:'サポート' },
        sections: { rice:'飯 & 粥', soup:'汁 & 湯', stew:'チゲ & 鍋', steam:'蒸し & 煮', meat:'肉焼き', pancake:'チヂミ & 焼き物', noodle:'麺 & 餃子', snack:'粉食 & おやつ', kimchi:'キムチ & 副菜', dessert:'伝統デザート' }
    }
};

let currentLang = localStorage.getItem('kfood_lang') || 'ko';

const foodDB = [
    // [1] 밥/죽 (Rice/Porridge)
    { id:'r1', cat:'밥/죽', img:'rice/비빔밥.gif', name_ko:'비빔밥', name_en:'Bibimbap', name_ja:'ビビンバ', info_ko:'오행의 조화와 영양의 균형', info_en:'Harmony of five elements', info_ja:'五行の調和', desc_ko:'여러 가지 나물과 고기, 고추장을 넣어 비벼 먹는 한국의 대표 음식입니다.', desc_en:'A representative Korean dish mixed with various vegetables, meat, and red pepper paste.', desc_ja:'さまざまなナムル、肉、コチュジャンを混ぜて食べる韓国の代表的な料理です。' },
    { id:'r2', cat:'밥/죽', img:'rice/전복죽.gif', name_ko:'전복죽', name_en:'Abalone Porridge', name_ja:'アワビ粥', info_ko:'바다의 산삼, 전복의 정수', info_en:'Essence of abalone', info_ja:'アワビのエッセンス', desc_ko:'전복과 쌀을 함께 끓여낸 영양 가득한 보양식 죽입니다.', desc_en:'A nutritious porridge made by boiling abalone and rice together.', desc_ja:'アワビとお米を一緒に煮込んだ栄養たっぷりの滋養強壮粥です。' },
    { id:'r3', cat:'밥/죽', img:'rice/김밥.gif', name_ko:'김밥', name_en:'Gimbap', name_ja:'キンパ', info_ko:'소풍의 대명사, 국민 간식', info_en:'Classic picnic snack', info_ja:'ピクニックの定番', desc_ko:'김 위에 밥과 여러 속재료를 넣고 말아 한입 크기로 썬 음식입니다.', desc_en:'Rice and various ingredients rolled in seaweed and sliced into bite-sized pieces.', desc_ja:'海苔の上にご飯と具材をのせて巻き、一口大に切った料理です。' },
    { id:'r4', cat:'밥/죽', img:'rice/곤드레밥.gif', name_ko:'곤드레밥', name_en:'Gondre-bap', name_ja:'コンドゥレ飯', info_ko:'산나물의 향긋한 매력', info_en:'Fragrant wild greens', info_ja:'山菜の香り高い魅力', desc_ko:'곤드레 나물을 넣어 지은 건강한 풍미의 나물밥입니다.', desc_en:'A healthy rice dish cooked with seasoned thistle (Gondre).', desc_ja:'コンドゥレ（高麗アザミ）を入れて炊いた、健康的な香りの山菜ご飯です。' },
    { id:'r5', cat:'밥/죽', img:'rice/호박죽.gif', name_ko:'호박죽', name_en:'Pumpkin Porridge', name_ja:'かぼちゃ粥', info_ko:'달콤하고 부드러운 자연의 맛', info_en:'Sweet and smooth nature', info_ja:'甘くて滑らかな自然の味', desc_ko:'늙은 호박을 삶아 으깨어 찹쌀가루와 끓여낸 달콤한 죽입니다.', desc_en:'A sweet porridge made by boiling mashed aged pumpkin with glutinous rice flour.', desc_ja:'熟したかぼちゃを煮て潰し、もち米粉と一緒に炊き上げた甘いお粥です。' },
    { id:'r6', cat:'밥/죽', img:'rice/김치볶음밥.gif', name_ko:'김치볶음밥', name_en:'Kimchi Fried Rice', name_ja:'キムチ炒飯', info_ko:'매콤새콤한 한 끼 식사', info_en:'Spicy and tangy meal', info_ja:'ピリ辛で酸味のある食事', desc_ko:'잘 익은 김치를 잘게 썰어 밥과 함께 볶아낸 대중적인 음식입니다.', desc_en:'A popular dish made by frying finely chopped ripe kimchi with rice.', desc_ja:'熟成したキムチを細かく刻み、ご飯と一緒に炒めた大衆的な料理です。' },
    { id:'r7', cat:'밥/죽', img:'rice/보리밥.gif', name_ko:'보리밥', name_en:'Barley Rice', name_ja:'麦飯', info_ko:'구수한 맛의 건강식', info_en:'Savory healthy rice', info_ja:'香ばしい味の健康食', desc_ko:'보리를 섞어 지은 밥으로 식이섬유가 풍부한 건강식입니다.', desc_en:'Rice cooked with barley, a healthy dish rich in dietary fiber.', desc_ja:'麦を混ぜて炊いたご飯で、食物繊維が豊富な健康食です。' },
    { id:'r8', cat:'밥/죽', img:'rice/오곡밥.gif', name_ko:'오곡밥', name_en:'Five-grain Rice', name_ja:'五穀米', info_ko:'다섯 곡물의 영양 조화', info_en:'Nutritional harmony of 5 grains', info_ja:'五穀の栄養の調和', desc_ko:'찹쌀, 팥, 수수 등 다섯 가지 곡물을 넣어 지은 풍성한 영양밥입니다.', desc_en:'A nutritious rice dish cooked with five grains such as glutinous rice and beans.', desc_ja:'もち米、あずき、きびなど5種類の穀物を入れて炊いた栄養満点のご飯です。' },
    { id:'r9', cat:'밥/죽', img:'rice/쌈밥.gif', name_ko:'쌈밥', name_en:'Ssambap', name_ja:'包みご飯', info_ko:'신선한 채소와 즐기는 한입', info_en:'Fresh vegetable wraps', info_ja:'新鮮な野菜の包みご飯', desc_ko:'여러 가지 잎채소에 밥과 장을 얹어 싸 먹는 건강한 한 끼입니다.', desc_en:'A healthy meal wrapped in various leaf vegetables with rice and sauce.', desc_ja:'さまざまな葉野菜にご飯と味噌をのせて包んで食べる健康的な食事です。' },
    { id:'r10', cat:'밥/죽', img:'rice/흰쌀밥.gif', name_ko:'흰쌀밥', name_en:'White Rice', name_ja:'白米', info_ko:'한국 식탁의 기본', info_en:'The core of Korean table', info_ja:'韓国の食卓の基本', desc_ko:'도정된 흰쌀로 정갈하게 지어낸 한국인의 주식입니다.', desc_en:'The staple of Korean meals, cleanly cooked with polished white rice.', desc_ja:'精米された白米で丁寧に炊き上げた韓国人の主食です。' },

    // [2] 국/탕 (Soup)
    { id:'q1', cat:'국/탕', img:'soup/미역국.gif', name_ko:'미역국', name_en:'Seaweed Soup', name_ja:'わかめスープ', info_ko:'생일을 축하하는 소중한 국', info_en:'Traditional birthday soup', info_ja:'誕生日を祝う大切なスープ', desc_ko:'미역을 넣고 맑게 끓인 국으로 출산 후나 생일에 주로 먹습니다.', desc_en:'A clear soup made with seaweed, traditionally eaten on birthdays.', desc_ja:'わかめを入れてあっさりと煮込んだスープで、誕生日よく食べられます。' },
    { id:'q2', cat:'국/탕', img:'soup/설렁탕.gif', name_ko:'설렁탕', name_en:'Seolleongtang', name_ja:'ソルロンタン', info_ko:'진하게 우려낸 사골 육수', info_en:'Deep ox bone broth', info_ja:'じっくり煮込んだ牛骨スープ', desc_ko:'소의 뼈와 고기를 오랜 시간 푹 고아 만든 뽀얀 국물의 탕입니다.', desc_en:'A milky soup made by simmering ox bones and meat for a long time.', desc_ja:'牛の骨と肉を長時間じっくり煮込んで作った白いスープの料理です。' },
    { id:'q3', cat:'국/탕', img:'soup/육개장.gif', name_ko:'육개장', name_en:'Yukgaejang', name_ja:'ユッケジャン', info_ko:'얼큰하고 든든한 소고기탕', info_en:'Spicy beef soup', info_ja:'ピリ辛でボリュームのある牛肉スープ', desc_ko:'소고기와 각종 나물을 넣어 맵고 진하게 끓인 보양식입니다.', desc_en:'A spicy beef soup simmered with various vegetables and herbs.', desc_ja:'牛肉とさまざまなナムルを入れ、辛くて濃厚に煮込んだ滋養強壮食です。' },
    { id:'q4', cat:'국/탕', img:'soup/갈비탕.gif', name_ko:'갈비탕', name_en:'Galbi-tang', name_ja:'カルビタン', info_ko:'맑고 시원한 갈비의 맛', info_en:'Clear short rib soup', info_ja:'澄んでいてさっぱりしたカルビの味', desc_ko:'소갈비를 넣고 깔끔하게 끓여낸 맑고 담백한 탕 요리입니다.', desc_en:'A clear and savory soup made by simmering beef short ribs.', desc_ja:'牛カルビを入れてあっさりと煮込んだ、澄んだ味わいのスープ料理です。' },
    { id:'q5', cat:'국/탕', img:'soup/감자탕.gif', name_ko:'감자탕', name_en:'Gamja-tang', name_ja:'カムジャタン', info_ko:'돼지뼈와 감자의 조화', info_en:'Pork bone and potato soup', info_ja:'豚骨とじゃがいもの調和', desc_ko:'돼지 등뼈에 감자와 들깨가루를 넣어 진하게 끓인 얼큰한 요리입니다.', desc_en:'A spicy soup made by simmering pork backbones with potatoes and perilla seed powder.', desc_ja:'豚の背骨にじゃがいもとエゴマ粉を入れて濃厚に煮込んだピリ辛料理です。' },
    { id:'q6', cat:'국/탕', img:'soup/삼계탕.gif', name_ko:'삼계탕', name_en:'Samgye-tang', name_ja:'サムゲタン', info_ko:'여름을 이기는 최고의 보양식', info_en:'Ultimate energy-boosting chicken soup', info_ja:'夏を乗り切る最高の滋養強壮食', desc_ko:'어린 닭에 인삼, 대추, 찹쌀을 넣어 푹 고아낸 건강식입니다.', desc_en:'A nutritious soup made by simmering a whole young chicken with ginseng and jujubes.', desc_ja:'若鶏に高麗人参、なつめ、もち米を入れてじっくり煮込んだ健康食です。' },
    { id:'q7', cat:'국/탕', img:'soup/북어국.gif', name_ko:'북어국', name_en:'Dried Pollack Soup', name_ja:'プゴク', info_ko:'해장의 정석, 시원한 국물', info_en:'Classic hangover soup', info_ja:'酔い覚ましの定番、さっぱりしたスープ', desc_ko:'말린 명태(북어)를 넣어 시원하게 끓여낸 해장용 맑은 국입니다.', desc_en:'A clear and refreshing soup made with dried pollack, popular for hangovers.', desc_ja:'干したスケトウダラ（プゴ）を入れてあっさりと煮込んだ、酔い覚まし用の澄んだスープです。' },
    { id:'q8', cat:'국/탕', img:'soup/콩나물국.gif', name_ko:'콩나물국', name_en:'Bean Sprout Soup', name_ja:'豆もやしスープ', info_ko:'가벼우면서도 깊은 시원함', info_en:'Light and refreshing', info_ja:'軽やかで奥深いさっぱり感', desc_ko:'콩나물을 넣어 맑게 끓여낸 시원하고 깔끔한 맛의 국입니다.', desc_en:'A clear and refreshing soup made with crunchy bean sprouts.', desc_ja:'豆もやしを入れてあっさりと煮込んだ、さっぱりとして清潔な味わいのスープです。' },

    // [3] 찌개/전골 (Stew/Hot Pot)
    { id:'s1', cat:'찌개/전골', img:'stew/김치찌개.gif', name_ko:'김치찌개', name_en:'Kimchi Stew', name_ja:'キムチチゲ', info_ko:'한국인의 소울 푸드', info_en:'Korean soul food', info_ja:'韓国人のソウルフード', desc_ko:'잘 익은 김치와 돼지고기를 넣고 끓인 매콤한 찌개입니다.', desc_en:'A spicy stew made with ripe kimchi and pork.', desc_ja:'熟成したキムチと豚肉を入れて煮込んだピ리辛のチゲです。' },
    { id:'s2', cat:'찌개/전골', img:'stew/된장찌개.gif', name_ko:'된장찌개', name_en:'Soybean Paste Stew', name_ja:'味噌チゲ', info_ko:'구수한 발효의 풍미', info_en:'Hearty fermented flavor', info_ja:'香ばしい発酵の風味', desc_ko:'된장에 각종 채소와 두부를 넣어 구수하게 끓여낸 찌개입니다.', desc_en:'A savory stew made with soybean paste, vegetables, and tofu.', desc_ja:'味噌（テンジャン）にさまざまな野菜と豆腐を入れて香ばしく煮込んだチゲです。' },
    { id:'s3', cat:'찌개/전골', img:'stew/곱창전골.gif', name_ko:'곱창전골', name_en:'Beef Tripe Hot Pot', name_ja:'コプチャンチョンゴル', info_ko:'고소하고 얼큰한 전골', info_en:'Savory and spicy hot pot', info_ja:'香ばしくてピリ辛の鍋料理', desc_ko:'소 곱창과 채소를 넣고 얼큰하게 끓여낸 전골 요리입니다.', desc_en:'A hearty hot pot made with beef tripe and various vegetables.', desc_ja:'牛のホルモンと野菜を入れて、ピリ辛に煮込んだ鍋（チョンゴル）料理です。' },
    { id:'s4', cat:'찌개/전골', img:'stew/두부전골.gif', name_ko:'두부전골', name_en:'Tofu Hot Pot', name_ja:'豆腐鍋', info_ko:'담백하고 건강한 맛', info_en:'Mild and healthy taste', info_ja:'あっさりとして健康的な味', desc_ko:'두부와 여러 채소, 고기를 넣어 맑게 끓인 담백한 전골입니다.', desc_en:'A mild hot pot made with tofu, vegetables, and meat.', desc_ja:'豆腐とさまざまな野菜、肉を入れてあっさりと煮込んだ鍋料理です。' },
    { id:'s5', cat:'찌개/전골', img:'stew/만두전골.gif', name_ko:'만두전골', name_en:'Mandu Hot Pot', name_ja:'餃子鍋', info_ko:'푸짐한 만두와 시원한 육수', info_en:'Hearty dumplings and broth', info_ja:'ボリュームたっぷりの餃子とさっぱりしたスープ', desc_ko:'손만두와 채소를 듬뿍 넣어 끓여낸 든든한 전골 요리입니다.', desc_en:'A filling hot pot made with handmade dumplings and fresh vegetables.', desc_ja:'手作り餃子と野菜をたっぷり入れて煮込んだ、ボリュームのある鍋料理です。' },
    { id:'s6', cat:'찌개/전골', img:'stew/버섯전골.gif', name_ko:'버섯전골', name_en:'Mushroom Hot Pot', name_ja:'きのこ鍋', info_ko:'자연의 향 가득한 버섯', info_en:'Fragrant mushrooms', info_ja:'自然の香り豊かなきのこ', desc_ko:'여러 종류의 버섯을 넣어 건강하게 즐기는 맑은 전골입니다.', desc_en:'A healthy hot pot made with various types of flavorful mushrooms.', desc_ja:'さまざまな種類のきのこを入れて、健康的に楽しむあっさりした鍋料理です。' },
    { id:'s7', cat:'찌개/전골', img:'stew/부대찌개.gif', name_ko:'부대찌개', name_en:'Army Base Stew', name_ja:'プデチゲ', info_ko:'햄과 소시지의 풍성함', info_en:'Rich ham and sausage', info_ja:'ハムとソーセージの豊かさ', desc_ko:'햄, 소시지, 김치 등을 넣고 끓인 풍부한 맛의 얼큰한 찌개입니다.', desc_en:'A hearty stew made with ham, sausage, kimchi, and noodles.', desc_ja:'ハム、ソーセージ、キムチなどを入れて煮込んだ、豊かな味わいのピリ辛チゲです。' },
    { id:'s8', cat:'찌개/전골', img:'stew/순두부찌개.gif', name_ko:'순두부찌개', name_en:'Soft Tofu Stew', name_ja:'スンドゥブチゲ', info_ko:'몽글몽글하고 매콤한 부드러움', info_en:'Soft and spicy tofu', info_ja:'ふわふわでピリ辛の柔らかさ', desc_ko:'부드러운 순두부를 넣고 얼큰하게 끓여낸 인기 찌개 요리입니다.', desc_en:'A popular spicy stew made with soft, silken tofu.', desc_ja:'柔らかいおぼろ豆腐（スンドゥブ）を入れて、ピリ辛に煮込んだ人気のチゲ料理です。' },
    { id:'s9', cat:'찌개/전골', img:'stew/청국장찌개.gif', name_ko:'청국장찌개', name_en:'Cheonggukjang Stew', name_ja:'チョングッチャンチゲ', info_ko:'진한 발효 미학의 정수', info_en:'Strong fermented flavor', info_ja:'濃厚な発酵美学のエッセンス', desc_ko:'발효된 콩인 청국장을 넣어 구수하고 진하게 끓인 건강 찌개입니다.', desc_en:'A healthy stew made with fermented soybean paste (Cheonggukjang).', desc_ja:'発酵させた大豆であるチョングッチャンを入れて、香ばしく濃厚に煮込んだ健康チゲです。' },

    // [4] 찜/조림 (Steam/Braise)
    { id:'m1', cat:'찜/조림', img:'steam/갈비찜.gif', name_ko:'갈비찜', name_en:'Braised Short Ribs', name_ja:'カル비チム', info_ko:'잔칫상의 보석, 단짠의 조화', info_en:'Party favorite, sweet and salty', info_ja:'宴会の定番、甘じょっぱい味', desc_ko:'소갈비를 간장 양념에 각종 채소와 함께 푹 쪄낸 고급 요리입니다.', desc_en:'A premium dish made by braising beef short ribs in a soy-based sauce.', desc_ja:'牛カルビを醤油ベースのタレで野菜と一緒にじっくり蒸し煮にした高級料理です。' },
    { id:'m2', cat:'찜/조림', img:'steam/고등어조림.gif', name_ko:'고등어조림', name_en:'Braised Mackerel', name_ja:'サバの煮付け', info_ko:'매콤한 양념과 무의 시원함', info_en:'Spicy mackerel with radish', info_ja:'ピリ辛ダレと大根のさっぱり感', desc_ko:'고등어와 무를 매콤한 양념장에 조려낸 밥도둑 반찬입니다.', desc_en:'A savory dish of mackerel and radish braised in a spicy seasoning sauce.', desc_ja:'サバと大根をピリ辛のタレで煮込んだ、ご飯が進むおかず입니다。' },
    { id:'m3', cat:'찜/조림', img:'steam/갈치조림.gif', name_ko:'갈치조림', name_en:'Braised Hairtail', name_ja:'タチウオの煮付け', info_ko:'매콤한 양념이 밴 부드러운 갈치', info_en:'Spicy braised hairtail', info_ja:'太刀魚のピリ辛煮', desc_ko:'도톰한 갈치와 무를 매콤한 양념에 졸여 바다의 풍미를 살린 요리입니다.', desc_en:'Braised hairtail and radish in a spicy seasoned sauce, full of oceanic flavor.', desc_ja:'太刀魚と大根をピリ辛のタレで煮込み、海の風味を生かした料理입니다。' },
    { id:'m4', cat:'찜/조림', img:'steam/닭볶음탕.gif', name_ko:'닭볶음탕', name_en:'Spicy Chicken Stew', name_ja:'タッポックムタン', info_ko:'얼큰하고 진한 닭요리의 진수', info_en:'Spicy braised chicken', info_ja:'ピリ辛鶏肉の煮込み', desc_ko:'닭고기와 감자, 채소를 고추장 양념에 칼칼하게 끓여낸 보양 요리입니다.', desc_en:'Potatoes, carrots, and chicken braised in a spicy gochujang sauce.', desc_ja:'鶏肉とジャガイモ、野菜をコチュジャンベースのタレで煮込んだスタ미나料理です。' },
    { id:'m5', cat:'찜/조림', img:'steam/감자조림.gif', name_ko:'감자조림', name_en:'Braised Potatoes', name_ja:'ジャガイモの煮物', info_ko:'달콤 짭조름한 밥반찬의 정석', info_en:'Sweet and salty braised potatoes', info_ja:'甘じょっぱいジャガイモの煮物', desc_ko:'한입 크기의 감자를 간장 양념에 졸여 포슬포슬하게 즐기는 반찬입니다.', desc_en:'Bite-sized potatoes braised in a sweet soy-based sauce.', desc_ja:'一口サイズのジャガイモを醤油ベースのタレで煮込んだ、ホクホクのおかずです。' },
    { id:'m6', cat:'찜/조림', img:'steam/두부조림.gif', name_ko:'두부조림', name_en:'Braised Tofu', name_ja:'豆腐の煮付け', info_ko:'매콤달콤한 두부의 변신', info_en:'Spicy-sweet tofu dish', info_ja:'甘辛い豆腐の変身', desc_ko:'두부를 살짝 구워 매콤한 양념장에 조려낸 밑반찬입니다.', desc_en:'Tofu pan-fried and then braised in a spicy seasoning sauce.', desc_ja:'豆腐を軽く焼き、ピ리辛のタレで煮込んだ定番のおかず입니다。' },
    { id:'m7', cat:'찜/조림', img:'steam/장조림.gif', name_ko:'장조림', name_en:'Beef Braised in Soy Sauce', name_ja:'チャンジョ림', info_ko:'간장의 깊은 풍미가 배어든 밑반찬', info_en:'Beef simmered in soy sauce', info_ja:'牛肉の醤油煮', desc_ko:'소고기를 결대로 찢어 간장에 졸여 만든 짭조름한 밥반찬입니다.', desc_en:'Tender beef hand-torn and simmered in a savory soy base.', desc_ja:'牛肉を繊維に沿って裂き、醤油で煮込んだ塩気のあるおかず입니다。' },
    { id:'m8', cat:'찜/조림', img:'steam/아구찜.gif', name_ko:'아구찜', name_en:'Braised Monkfish', name_ja:'アグチム', info_ko:'아삭한 콩나물과 아구의 만남', info_en:'Monkfish with crunchy sprouts', info_ja:'シャキシャキ豆もやしとアンコウの出会い', desc_ko:'쫄깃한 아구와 콩나물을 매콤한 양념에 버무려 쪄낸 별미입니다.', desc_en:'A spicy braised specialty featuring chewy monkfish and bean sprouts.', desc_ja:'弾力のあるアンコウと豆もやしをピ리辛のタレで和えて蒸し煮にした珍味입니다。' },

    // [5] 고기구이 (Meat/BBQ)
    { id:'g1', cat:'고기구이', img:'meat/불고기.gif', name_ko:'불고기', name_en:'Bulgogi', name_ja:'プルコギ', info_ko:'세계가 사랑하는 한국의 맛', info_en:'World-famous Korean BBQ', info_ja:'世界が愛する韓国の味', desc_ko:'얇게 썬 소고기를 달콤한 간장 양념에 재워 구운 요리입니다.', desc_en:'Thinly sliced beef marinated in a sweet soy sauce and grilled.', desc_ja:'薄切りにした牛肉を甘い醤油ダレに漬け込んで焼いた料理입니다。' },
    { id:'g2', cat:'고기구이', img:'meat/삼겹살.gif', name_ko:'삼겹살', name_en:'Pork Belly (Samgyeopsal)', name_ja:'サムギョプサル', info_ko:'국민 회식 메뉴 1순위', info_en:'The favorite pork BBQ', info_ja:'国民的な宴会メニューの定番', desc_ko:'돼지고기 삼겹 부위를 구워 쌈장과 채소에 싸 먹는 음식입니다.', desc_en:'Grilled pork belly strips served with ssamjang and fresh vegetables.', desc_ja:'豚バラ肉を焼いて、サムジャンや野菜と一緒に包んで食べる料理입니다。' },
    { id:'g3', cat:'고기구이', img:'meat/돼지갈비.gif', name_ko:'돼지갈비', name_en:'Grilled Pork Ribs', name_ja:'豚カルビ焼き', info_ko:'단짠의 정석, 남녀노소 사랑받는 맛', info_en:'Sweet and salty grilled pork ribs', info_ja:'甘じょっぱい味、誰もが愛する味', desc_ko:'달콤한 간장 양념에 재운 돼지갈비를 숯불 등에 구워낸 요리입니다.', desc_en:'Pork ribs marinated in sweet soy sauce and grilled over charcoal.', desc_ja:'甘い醤油ベースのタレに漬け込んだ豚カルビを炭火などで焼いた料理입니다。' },
    { id:'g4', cat:'고기구이', img:'meat/닭갈비.gif', name_ko:'닭갈비', name_en:'Dak-galbi', name_ja:'タッカル비', info_ko:'매콤한 닭요리의 정석', info_en:'Spicy stir-fried chicken', info_ja:'ピリ辛鶏料理の定番', desc_ko:'토막 낸 닭고기를 매운 양념에 각종 채소와 볶아 먹는 요리입니다.', desc_en:'Spicy stir-fried chicken chunks with various vegetables on a griddle.', desc_ja:'ぶつ切りにした鶏肉を辛いタレでさまざまな野菜と一緒に炒めて食べる料理입니다。' },
    { id:'g5', cat:'고기구이', img:'meat/수육.gif', name_ko:'수육', name_en:'Boiled Pork Slices', name_ja:'スユク', info_ko:'야들야들하게 삶아낸 돼지고기', info_en:'Tender boiled pork', info_ja:'柔らかく茹でた豚肉', desc_ko:'돼지고기를 갖가지 양념과 함께 푹 삶아 얇게 썰어낸 담백한 고기 요리입니다.', desc_en:'Pork boiled with aromatics until tender and sliced thin.', desc_ja:'豚肉をさまざまなスパイスと一緒にじっくり茹で上げ、薄切りにしたあっさりした肉料理입니다。' },
    { id:'g6', cat:'고기구이', img:'meat/떡갈비.gif', name_ko:'떡갈비', name_en:'Tteok-galbi', name_ja:'トッカルビ', info_ko:'다진 고기의 부드러운 하모니', info_en:'Grilled short rib patties', info_ja:'叩き肉の柔らかいハーモニー', desc_ko:'소고기 또는 돼지고기를 다져 양념한 뒤 떡 모양으로 구워낸 요리입니다.', desc_en:'Minced meat patties marinated and grilled like rice cakes.', desc_ja:'牛肉や豚肉を細かく叩いてタレで和え、お餅のような形に焼いた料理입니다。' },
    { id:'g7', cat:'고기구이', img:'meat/제육볶음.gif', name_ko:'제육볶음', name_en:'Spicy Pork Bulgogi', name_ja:'ジェユクポックム', info_ko:'매콤한 고추장 양념의 힘', info_en:'Spicy marinated pork', info_ja:'ピリ辛コチュジャンタレの力', desc_ko:'돼지고기를 고추장 양념에 버무려 매콤하게 볶아낸 요리입니다.', desc_en:'Stir-fried pork marinated in a spicy red chili pepper paste.', desc_ja:'豚肉をコチュジャンベースのタレで和え、ピ리辛に炒めた料理입니다。' },
    { id:'g8', cat:'고기구이', img:'meat/곱창구이.gif', name_ko:'곱창구이', name_en:'Grilled Beef Tripe', name_ja:'コプチャン焼き', info_ko:'고소한 풍미와 쫄깃한 식감', info_en:'Grilled cattle intestines', info_ja:'香ばしい風味と弾力ある食感', desc_ko:'소의 곱창을 노릇하게 구워 고소하고 쫄깃한 맛을 즐기는 구이 요리입니다.', desc_en:'Gorgeously grilled beef small intestines known for their rich, savory taste.', desc_ja:'牛の小腸をこんがりと焼き、香ばしく弾力のある味わいを楽しむ焼き料理입니다。' },

    // [6] 전/부침 (Pancake/Jeon)
    { id:'p1', cat:'전/부침', img:'pancake/해물파전.gif', name_ko:'해물파전', name_en:'Seafood Scallion Pancake', name_ja:'海鮮チヂミ', info_ko:'비 오는 날 생각나는 그 맛', info_en:'Savory seafood pancake', info_ja:'雨の日に食べたくなるあの味', desc_ko:'쪽파와 해산물이 듬뿍 들어간 고소한 한국식 전 요리입니다.', desc_en:'A savory Korean pancake loaded with green onions and seafood.', desc_ja:'ワケギと海鮮がたっぷり入った、香ばしい韓国風お好み焼き料理です。' },
    { id:'p2', cat:'전/부침', img:'pancake/김치전.gif', name_ko:'김치전', name_en:'Kimchi Pancake', name_ja:'キムチチヂミ', info_ko:'바삭하고 매콤새콤한 매력', info_en:'Crispy and tangy kimchi pancake', info_ja:'サクサクでピ리辛酸っぱい魅力', desc_ko:'김치를 잘게 썰어 밀가루 반죽과 함께 부쳐낸 대중적인 전입니다.', desc_en:'A popular pancake made with chopped kimchi and flour batter.', desc_ja:'キムチを細かく刻み、小麦粉の生地と一緒に焼き上げた大衆的なチヂミです。' },
    { id:'p3', cat:'전/부침', img:'pancake/감자전.gif', name_ko:'감자전', name_en:'Potato Pancake', name_ja:'ジャガイモチヂミ', info_ko:'강원도의 순수한 감자 맛', info_en:'Pure potato flavor', info_ja:'江原道の純粋なジャガイモの味', desc_ko:'감자를 갈아 반죽하여 쫄깃하고 담백하게 부쳐낸 전입니다.', desc_en:'Chewy and savory pancake made from finely grated potatoes.', desc_ja:'ジャガイモをすりおろして生地にし、弾力のあるあっさりとした味わいに焼き上げたチヂミです。' },
    { id:'p4', cat:'전/부침', img:'pancake/동태전.gif', name_ko:'동태전', name_en:'Pollack Pancake', name_ja:'スケトウダラのチヂミ', info_ko:'명절상의 고소하고 부드러운 맛', info_en:'Pan-fried battered pollack fillet', info_ja:'スケトウダラの香ばしく柔らかい味', desc_ko:'손질한 동태 포에 밀가루와 달걀물을 입혀 노릇하게 부쳐낸 전입니다.', desc_en:'Classic Korean holiday dish made by pan-frying battered pollack fillets.', desc_ja:'下処理したスケトウダラの切り身に小麦粉と卵液をつけてこんがり焼いたチヂミです。' },
    { id:'p5', cat:'전/부침', img:'pancake/육전.gif', name_ko:'육전', name_en:'Beef Pancake', name_ja:'肉チヂミ', info_ko:'소고기의 부드러운 호사', info_en:'Luxury beef pancake', info_ja:'牛肉の柔らかい贅沢', desc_ko:'소고기를 얇게 저며 밀가루와 계란물을 입혀 부쳐낸 별미 전입니다.', desc_en:'Tender slices of beef coated in flour and egg, then pan-fried.', desc_ja:'牛肉を薄く切り、小麦粉と卵液をつけて焼き上げた絶品のチヂミです。' },
    { id:'p6', cat:'전/부침', img:'pancake/녹두전.gif', name_ko:'녹두전', name_en:'Mung Bean Pancake', name_ja:'緑豆チヂミ', info_ko:'잔칫상의 고소한 주인공', info_en:'Savory mung bean pancake', info_ja:'宴会の香ばしい主役', desc_ko:'녹두를 갈아 고기와 채소를 넣어 두툼하게 부쳐낸 고소한 전입니다.', desc_en:'Thick and savory pancake made from ground mung beans and pork.', desc_ja:'緑豆をすりおろし、肉や野菜を入れて厚めに焼き上げた香ばしいチヂミです。' },
    { id:'p7', cat:'전/부침', img:'pancake/호박전.gif', name_ko:'호박전', name_en:'Zucchini Pancake', name_ja:'ズッキーニのチヂミ', info_ko:'애호박의 은은한 달콤함', info_en:'Sweet zucchini rounds', info_ja:'ズッキーニのほのかな甘み', desc_ko:'애호박을 썰어 밀가루와 달걀물을 입혀 부친 정갈한 반찬입니다.', desc_en:'Clean-tasting side dish of pan-fried zucchini slices.', desc_ja:'ズッキーニを切り、小麦粉と卵液をつけて焼いたこぎれいなおかずです。' },

    // [7] 면/만두 (Noodle/Mandu)
    { id:'n1', cat:'면/만두', img:'noodle/물냉면.gif', name_ko:'물냉면', name_en:'Cold Buckwheat Noodles', name_ja:'水冷麺', info_ko:'가슴속까지 시원한 육수의 맛', info_en:'Chilled noodles in beef broth', info_ja:'胸の奥まで涼しくなるスープの味', desc_ko:'시원한 동치미 육수나 고기 육수에 메밀면을 말아 먹는 여름 별미입니다.', desc_en:'Refreshing buckwheat noodles in a chilled, clear broth.', desc_ja:'冷たい水キムチのスープや肉のスープにそば粉の麺を入れて食べる夏の珍味です。' },
    { id:'n2', cat:'면/만두', img:'noodle/비빔국수.gif', name_ko:'비빔국수', name_en:'Spicy Noodles', name_ja:'ビビンククス', info_ko:'입맛 돋우는 매콤달콤함', info_en:'Sweet and spicy noodles', info_ja:'食欲をそそる甘辛い味', desc_ko:'삶은 국수에 고추장 양념과 채소를 넣어 비벼 먹는 소박한 맛의 국수입니다.', desc_en:'Simple noodles mixed with spicy gochujang sauce and fresh vegetables.', desc_ja:'茹でた麺にコチュジャンベースのタレと野菜を入れて混ぜて食べる素朴な味わいの麺料理です。' },
    { id:'n3', cat:'면/만두', img:'noodle/칼국수.gif', name_ko:'칼국수', name_en:'Kalguksu', name_ja:'カルグクス', info_ko:'밀가루 반죽을 칼로 썰어 만든 정성', info_en:'Knife-cut noodles', info_ja:'小麦粉の生地を包丁で切って作った真心', desc_ko:'밀가루 반죽을 칼로 썰어 진한 육수에 끓여낸 담백한 국수 요리입니다.', desc_en:'Hand-cut wheat noodles served in a rich, savory broth.', desc_ja:'小麦粉の生地を包丁で切り、濃厚なスープで煮込んだあっさりした麺料理입니다。' },
    { id:'n4', cat:'면/만두', img:'noodle/잔치국수.gif', name_ko:'잔치국수', name_en:'Banquet Noodles', name_ja:'チャンチグクス', info_ko:'기쁜 날 함께 나누는 정', info_en:'Noodles for celebrations', info_ja:'おめでたい日に分かち合う情', desc_ko:'멸치 육수에 소면을 말아 고명을 얹어 먹는 전통적인 잔치 음식입니다.', desc_en:'Thin wheat noodles in a light anchovy broth, often served at celebrations.', desc_ja:'煮干し出汁に素麺を入れ、具材をのせて食べる伝統的な宴会料理입니다。' },
    { id:'n5', cat:'면/만두', img:'noodle/비빔냉면.gif', name_ko:'비빔냉면', name_en:'Spicy Cold Noodles', name_ja:'ビビン冷麺', info_ko:'매콤새콤 입맛 당기는 양념의 맛', info_en:'Buckwheat noodles in spicy sauce', info_ja:'ピリ辛酸っぱく食欲をそそるタレの味', desc_ko:'메밀면에 매콤달콤한 고추장 양념을 얹어 비벼 먹는 별미 국수입니다.', desc_en:'Cold buckwheat noodles mixed with a zesty and spicy gochujang sauce.', desc_ja:'そば粉の麺に甘辛いコチュジャンソースをのせて混ぜて食べる絶品の麺料理です。' },
    { id:'n6', cat:'면/만두', img:'noodle/콩국수.gif', name_ko:'콩국수', name_en:'Noodles in Cold Soybean Soup', name_ja:'コングクス', info_ko:'고소하고 담백한 콩의 진수', info_en:'Noodles in cold soy milk broth', info_ja:'香ばしくあっさりした豆のエッセンス', desc_ko:'불린 콩을 갈아 만든 걸쭉한 국물에 국수를 말아 먹는 건강식입니다.', desc_en:'Wholesome noodles served in a thick and savory cold soy milk broth.', desc_ja:'水に浸した豆をすりおろして作った濃厚なスープに麺を入れて食べる健康食です。' },
    { id:'n7', cat:'면/만두', img:'noodle/만두.gif', name_ko:'만두', name_en:'Mandu', name_ja:'マンドゥ', info_ko:'얇은 피 속 가득한 진한 육즙', info_en:'Juicy Korean dumplings', info_ja:'薄い皮の中に詰まった濃厚な肉汁', desc_ko:'밀가루 피 속에 고기와 채소 소를 가득 채워 찌거나 튀긴 요리입니다.', desc_en:'Dumplings filled with a mix of meat and vegetables, steamed or fried.', desc_ja:'小麦粉の皮の中に肉と野菜の具をたっぷり詰め、蒸したり揚げたりした料理입니다。' },

    // [8] 분식/간식 (Snack/Street Food)
    { id:'b1', cat:'분식/간식', img:'snack/떡볶이.gif', name_ko:'떡볶이', name_en:'Tteokbokki', name_ja:'トッポギ', info_ko:'고추장 소스의 매콤한 유혹', info_en:'Spicy rice cakes', info_ja:'コチュジャンソースのピリ辛な誘惑', desc_ko:'가래떡을 고추장 양념에 조려낸 한국의 대표적인 길거리 음식입니다.', desc_en:'A beloved street food made of rice cakes in a spicy chili sauce.', desc_ja:'餅をコチュジャンベースのタレで煮込んだ、韓国を代表する屋台料理입니다。' },
    { id:'b2', cat:'분식/간식', img:'snack/순대.gif', name_ko:'순대', name_en:'Korean Blood Sausage', name_ja:'スンデ', info_ko:'분식계의 쫄깃한 소울푸드', info_en:'Steamed Korean sausage', info_ja:'粉食界の弾力あるソウルフード', desc_ko:'당면과 선지로 속을 채운 뒤 쪄낸 구수한 맛의 대표 길거리 간식입니다.', desc_en:'Traditional steamed sausage filled with glass noodles and spices.', desc_ja:'春雨とソンジ(豚の血)を詰めて蒸し上げた、香ばしい味わいの代表的な屋台おやつです。' },
    { id:'b3', cat:'분식/간식', img:'snack/튀김.jpg', name_ko:'튀김', name_en:'Fried Snacks', name_ja:'天ぷら', info_ko:'바삭바삭한 소리의 즐거움', info_en:'Crispy fried snacks', info_ja:'サクサクした音の楽しみ', desc_ko:'오징어, 야채, 고구마 등을 반죽을 입혀 바삭하게 튀겨낸 별미입니다.', desc_en:'Various ingredients like squid and vegetables, battered and deep-fried.', desc_ja:'イカ、野菜、サツマイモなどに衣をつけてサクサクに揚げた珍味입니다。' },

    // [9] 김치/반찬 (Kimchi/Side Dish)
    { id:'k1', cat:'김치/반찬', img:'side/배추김치.gif', name_ko:'배추김치', name_en:'Baechu Kimchi', name_ja:'白菜キムチ', info_ko:'한국의 자부심, 발효의 정점', info_en:'Iconic fermented cabbage', info_ja:'韓国の誇り、発酵の頂点', desc_ko:'배추를 절여 매콤한 양념에 버무려 발효시킨 한국의 대표 반찬입니다.', desc_en:'Traditional fermented cabbage seasoned with red chili and garlic.', desc_ja:'白菜を塩漬けにし、ピリ辛のタレで和えて発酵させた韓国の代表的なおかず입니다。' },
    { id:'k2', cat:'김치/반찬', img:'side/깍두기.gif', name_ko:'깍두기', name_en:'Kkakdugi', name_ja:'カクテキ', info_ko:'아작아작 씹히는 무의 식감', info_en:'Crunchy radish kimchi', info_ja:'シャキシャキした大根の食感', desc_ko:'무를 무썰기 하여 양념에 버무린 시원하고 아삭한 김치입니다.', desc_en:'Cubes of radish fermented with spicy seasonings, known for its crunch.', desc_ja:'大根を角切りにしてタレで和えた、さっぱりとしてシャキシャキしたキムチ입니다。' },
    { id:'k3', cat:'김치/반찬', img:'side/동치미.gif', name_ko:'동치미', name_en:'Dongchimi', name_ja:'トンチミ', info_ko:'맑고 시원한 무의 청량감', info_en:'Radish water kimchi', info_ja:'澄んでさっぱりした大根の清涼感', desc_ko:'무를 소금물에 담가 시원한 국물과 함께 즐기는 비가열 발효 김치입니다.', desc_en:'Non-spicy water kimchi with crunchy radish in a refreshing salty brine.', desc_ja:'大根を塩水に浸し、さっぱりしたスープと一緒に楽しむ非加熱発酵キムチ입니다。' },
    { id:'k4', cat:'김치/반찬', img:'side/멸치볶음.gif', name_ko:'멸치볶음', name_en:'Stir-fried Anchovies', name_ja:'煮干しの炒め物', info_ko:'바삭하고 고소한 밑반찬의 정석', info_en:'Crispy stir-fried anchovies', info_ja:'サクサクして香ばしい定番おかず', desc_ko:'잔멸치를 간장이나 고추장 양념에 볶아낸 국민 밑반찬입니다.', desc_en:'Crunchy small anchovies stir-fried in a sweet and salty soy glaze.', desc_ja:'小魚の煮干しを醤油やコチュジャンで炒めた、韓国の定番おかず입니다.' },
    { id:'k5', cat:'김치/반찬', img:'side/시금치나물.gif', name_ko:'시금치나물', name_en:'Spinach Namul', name_ja:'ほうれん草のナムル', info_ko:'뽀빠이의 활력이 담긴 나물', info_en:'Seasoned spinach side dish', info_ja:'ポパイの活力が詰まったナムル', desc_ko:'시금치를 살짝 데쳐 소금과 참기름에 고소하게 무쳐낸 나물입니다.', desc_en:'Blanched spinach lightly seasoned with garlic and sesame oil.', desc_ja:'ほうれん草を軽く茹で、塩とごま油で香ばしく和えたナムル입니다.' },
    { id:'k6', cat:'김치/반찬', img:'side/콩나물무침.gif', name_ko:'콩나물무침', name_en:'Bean Sprout Namul', name_ja:'豆もやしのナムル', info_ko:'가장 친숙하고 소박한 맛', info_en:'Classic bean sprout salad', info_ja:'最も親しみやすく素朴な味', desc_ko:'아삭한 콩나물을 담백하게 무쳐낸 매일 먹어도 맛있는 반찬입니다.', desc_en:'Crunchy bean sprouts seasoned with garlic, salt, and sesame oil.', desc_ja:'シャキシャキの豆もやしをあっさりと和えた、毎日食べても飽きないおかず입니다.' },
    { id:'k7', cat:'김치/반찬', img:'side/잡채.gif', name_ko:'잡채', name_en:'Japchae', name_ja:'チャプチェ', info_ko:'잔칫상의 화려한 단짝', info_en:'Glass noodles with vegetables', info_ja:'宴会の華やかなパートナー', desc_ko:'당면과 여러 채소, 고기를 볶아 버무린 한국의 대표 잔치 요리입니다.', desc_en:'Chewy glass noodles stir-fried with vegetables and thin meat strips.', desc_ja:'春雨とさまざまな野菜、肉を炒めて和えた韓国の代表的な宴会料理입니다.' },
    { id:'k8', cat:'김치/반찬', img:'side/계란말이.gif', name_ko:'계란말이', name_en:'Rolled Omelet', name_ja:'卵焼き', info_ko:'정성스레 말아낸 고소함', info_en:'Korean-style rolled omelet', info_ja:'丁寧に巻かれた香ばしさ', desc_ko:'풀어놓은 달걀을 얇게 펴서 여러 겹으로 돌돌 말아 익힌 반찬입니다.', desc_en:'Savory omelet layers rolled into a dense, bite-sized log.', desc_ja:'溶き卵を薄く広げ、幾層にも重なるようにくるくると巻いて焼いたおかず입니다.' },
    { id:'k9', cat:'김치/반찬', img:'side/열무김치.gif', name_ko:'열무김치', name_en:'Young Radish Kimchi', name_ja:'ヨルムキムチ', info_ko:'여름철 보리밥의 단짝', info_en:'Summer radish leaf kimchi', info_ja:'夏の麦ご飯のパートナー', desc_ko:'연한 열무를 담가 시원하고 깔끔하게 즐기는 여름 제철 김치입니다.', desc_en:'Refreshing kimchi made with young summer radish greens.', desc_ja:'柔らかいヨルム(若大根の葉)を漬けた、爽やかでさっぱりとした夏のキムチ입니다.' },
    { id:'k10', cat:'김치/반찬', img:'side/젓갈.gif', name_ko:'젓갈', name_en:'Jeotgal', name_ja:'塩辛', info_ko:'바다의 풍미를 담은 발효 반찬', info_en:'Salted fermented seafood', info_ja:'海の風味を込めた発酵おかず', desc_ko:'해산물을 소금에 절여 발효시킨 풍미 강한 전통 밑반찬입니다.', desc_en:'A deep-flavored side dish made by fermenting seafood in salt.', desc_ja:'海鮮を塩漬けにして発酵させた、風味豊かな伝統的なおかず입니다.' },
    { id:'k11', cat:'김치/반찬', img:'side/총각김치.gif', name_ko:'총각김치', name_en:'Ponytail Radish Kimchi', name_ja:'チョンガクキムチ', info_ko:'아작아작 꼬들한 무의 매력', info_en:'Crunchy ponytail radish', info_ja:'シャキシャキした小さな大根の魅力', desc_ko:'작고 단단한 총각무로 담가 씹는 맛이 일품인 별미 김치입니다.', desc_en:'Whole small radishes with leaf stalks fermented in a spicy paste.', desc_ja:'小さくて硬いチョンガクム(小さな大根)を漬けた、歯ごたえが抜群のキムチ입니다.' },
    { id:'k12', cat:'김치/반찬', img:'side/계란찜.gif', name_ko:'계란찜', name_en:'Steamed Eggs', name_ja:'ケランチム', info_ko:'몽글몽글 부드러운 유혹', info_en:'Fluffy and soft comfort', info_ja:'ふわふわで柔らかい誘惑', desc_ko:'달걀을 풀고 육수를 부어 부드럽게 쪄낸 고소한 요리입니다.', desc_en:'Fluffy steamed eggs made by cooking beaten eggs with broth.', desc_ja:'卵を溶いて出汁を加え、柔らかく蒸し上げた香ばしい料理입니다.' },

    // [10] 전통디저트 (Dessert)
    { id:'d1', cat:'전통디저트', img:'dessert/약과.gif', name_ko:'약과', name_en:'Yakgwa', name_ja:'薬果', info_ko:'조선 왕실의 품격 있는 단맛', info_en:'Honeyed flower cookies', info_ja:'朝鮮王朝の品格ある甘み', desc_ko:'밀가루에 꿀과 참기름을 넣어 튀긴 뒤 조청에 재운 전통 과자입니다.', desc_en:'Traditional deep-fried honey cookies with a sweet and chewy texture.', desc_ja:'小麦粉に蜂蜜とごま油を加えて揚げ、水飴に漬け込んだ伝統的なお菓子です。' },
    { id:'d2', cat:'전통디저트', img:'dessert/식혜.gif', name_ko:'식혜', name_en:'Sikhye', name_ja:'シッケ', info_ko:'효소를 활용한 선조의 지혜', info_en:'Sweet rice punch', info_ja:'酵素を活用した先祖の知恵', desc_ko:'엿기름을 우린 물에 밥을 삭혀 시원하고 달콤하게 즐기는 전통 음료입니다.', desc_en:'A sweet Korean beverage made by fermenting rice in malt water.', desc_ja:'麦芽水にご飯を入れて発酵させた、冷たくて甘い伝統的な飲み物です。' },
    { id:'d3', cat:'전통디저트', img:'dessert/수정과.gif', name_ko:'수정과', name_en:'Sujeongwa', name_ja:'スジョングァ', info_ko:'계피와 생강의 은은한 향기', info_en:'Cinnamon and ginger punch', info_ja:'シナモンと生姜のほのかな香り', desc_ko:'계피와 생강을 끓인 물에 곶감을 넣어 즐기는 알싸하고 달콤한 차입니다.', desc_en:'A traditional spicy and sweet punch flavored with cinnamon and ginger.', desc_ja:'シナモンと生姜を煮出した汁に干し柿を入れて楽しむ、ピリッと甘い伝統茶です。' },
    { id:'d4', cat:'전통디저트', img:'dessert/송편.gif', name_ko:'송편', name_en:'Songpyeon', name_ja:'ソンピョン', info_ko:'가을 하늘 아래 빚은 반달 떡', info_en:'Half-moon rice cakes', info_ja:'秋空の下で作る半月のお餅', desc_ko:'맵쌀 가루로 반달 모양으로 빚어 솔잎과 함께 쪄낸 추석 전통 떡입니다.', desc_en:'Half-moon-shaped rice cakes steamed with pine needles for Chuseok.', desc_ja:'うるち米の粉を半月の形に作り、松の葉と一緒に蒸し上げた秋夕（チュソク）の伝統餅です。' },
    { id:'d5', cat:'전통디저트', img:'dessert/백설기.gif', name_ko:'백설기', name_en:'Baekseolgi', name_ja:'ペクソルギ', info_ko:'눈처럼 하얀 순결의 상징', info_en:'Snow-white rice cake', info_ja:'雪のように白い純潔の象徴', desc_ko:'멥쌀가루를 시루에 넣고 하얗게 쪄낸 담백하고 포슬포슬한 떡입니다.', desc_en:'A pure white, fluffy steamed rice cake often served at celebrations.', desc_ja:'うるち米の粉を蒸し器に入れ、白く蒸し上げたあっさりとしてふわふわしたお餅です。' },
    { id:'d6', cat:'전통디저트', img:'dessert/경단.gif', name_ko:'경단', name_en:'Gyeongdan', name_ja:'キョンダン', info_ko:'동글동글 한입의 달콤함', info_en:'Sweet rice ball cakes', info_ja:'コロコロ一口の甘さ', desc_ko:'찹쌀가루로 빚어 삶은 후 고물을 묻힌 한 입 크기의 귀여운 떡입니다.', desc_en:'Bite-sized rice balls made of glutinous rice and coated with powder.', desc_ja:'もち米粉を練って茹で、粉（コ물）をまぶした一口サイズの可愛いお餅です。' },
    { id:'d7', cat:'전통디저트', img:'dessert/매실차.gif', name_ko:'매실차', name_en:'Plum Tea', name_ja:'梅茶', info_ko:'새콤달콤한 천연 소화제', info_en:'Sweet and sour plum tea', info_ja:'甘酸っぱい天然の消化剤', desc_ko:'매실 농축액을 물에 타서 시원하고 상큼하게 즐기는 건강 음료입니다.', desc_en:'A healthy drink made from fermented plum syrup, good for digestion.', desc_ja:'梅の濃縮液を水で割り、冷たく爽やかに楽しむ健康的な飲み物입니다.' },
    { id:'d8', cat:'전통디저트', img:'dessert/오미자차.gif', name_ko:'오미자차', name_en:'Omija-cha', name_ja:'五味子茶', info_ko:'다섯 가지 맛의 예술', info_en:'Five-flavor berry tea', info_ja:'5つの味の芸術', desc_ko:'다섯 가지 맛을 내는 오미자를 우려낸 선명한 붉은색의 차입니다.', desc_en:'A bright red tea made from berries known for having five distinct tastes.', desc_ja:'「5つの味」を持つ五味子（オミジャ）を煮出した、鮮やかな赤色の伝統茶입니다!' }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('food-detail-view');
    const closeBtn = document.getElementById('close-detail');
    const searchInput = document.getElementById('food-search-input');
    const shareBtn = document.getElementById('knowledge-share-btn');
    const langBtns = document.querySelectorAll('.lang-btn');

    let currentItem = null;

    const updateStaticUI = () => {
        const t = i18n[currentLang];
        document.getElementById('hero-title').innerHTML = t.heroTitle;
        document.getElementById('hero-desc').innerHTML = t.heroDesc;
        searchInput.placeholder = t.searchPlaceholder;
        
        // Detail View Static Texts
        if(document.getElementById('back-btn-label')) document.getElementById('back-btn-label').innerText = t.backBtn;
        if(document.getElementById('d-premium-target')) document.getElementById('d-premium-target').innerText = t.premiumTag;
        if(document.getElementById('share-btn-label')) document.getElementById('share-btn-label').innerText = t.shareBtnLabel;
    };

    const render = (cat, targetId, filterText = null) => {
        const grid = document.getElementById(targetId);
        if(!grid) return;
        
        let items = foodDB.filter(f => f.cat === cat);
        if(filterText) {
            const lowerFilter = filterText.toLowerCase();
            items = items.filter(f => 
                f.name_ko.includes(filterText) || 
                f.name_en.toLowerCase().includes(lowerFilter) || 
                f.name_ja.includes(filterText)
            );
        }

        if(items.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 30px; text-align: center; color: #ccc;">${i18n[currentLang].noData}</div>`;
            return;
        }

        grid.innerHTML = items.map(item => `
            <div class="p-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${item[`name_${currentLang}`]} 상세 보기">
                <div class="p-img" style="background:#f5f5f5; height:180px; border-radius:18px; margin-bottom:15px; overflow:hidden;">
                    <img src="${item.img}" alt="${item[`name_${currentLang}`]}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="p-info">
                    <h3 class="p-name">${item[`name_${currentLang}`]}</h3>
                    <p class="p-tag" style="color:var(--ksh-blue); font-size: 0.8rem; font-weight:700;">#${item[`info_${currentLang}`]}</p>
                    <div class="p-btn-view">${i18n[currentLang].btnView}</div>
                </div>
            </div>
        `).join('');
        return items.length;
    };

    const updateUI = (searchText = null) => {
        updateStaticUI();
        const t = i18n[currentLang];
        
        // Update Nav Menu
        const navLinks = document.querySelectorAll('.nav-menu a');
        const navKeys = ['rice', 'soup', 'stew', 'steam', 'meat', 'pancake', 'noodle', 'snack', 'kimchi', 'dessert', 'support'];
        navLinks.forEach((link, idx) => {
            if(navKeys[idx]) link.innerText = t.nav[navKeys[idx]];
        });

        // Update Section Titles
        const sectionTitles = document.querySelectorAll('.s-title');
        const sectionKeys = ['rice', 'soup', 'stew', 'steam', 'meat', 'pancake', 'noodle', 'snack', 'kimchi', 'dessert'];
        sectionTitles.forEach((title, idx) => {
            if(sectionKeys[idx]) title.innerText = t.sections[sectionKeys[idx]];
        });

        const cats = ['밥/죽', '국/탕', '찌개/전골', '찜/조림', '고기구이', '전/부침', '면/만두', '분식/간식', '김치/반찬', '전통디저트'];
        const targets = ['rice-target', 'soup-target', 'stew-target', 'steam-target', 'meat-target', 'pancake-target', 'noodle-target', 'snack-target', 'kimchi-target', 'dessert-target'];
        
        cats.forEach((c, i) => {
            const count = render(c, targets[i], searchText);
            const section = document.getElementById(targets[i]).closest('.p-section');
            if (searchText) {
                section.style.display = count > 0 ? 'block' : 'none';
            } else {
                section.style.display = 'block';
            }
        });
    };

    // Language Switcher Logic
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.onchange = (e) => {
            currentLang = e.target.value;
            localStorage.setItem('kfood_lang', currentLang);
            updateUI(searchInput.value.trim());
            if(currentItem) showDetail(currentItem.id, false);
        };
    }

    updateUI();

    searchInput.addEventListener('input', (e) => updateUI(e.target.value.trim()));

    const showDetail = (id, saveState = true) => {
        const item = foodDB.find(f => f.id === id);
        if(!item) return;
        currentItem = item;

        const t = i18n[currentLang];
        const imgContainer = document.querySelector('.d-img-container');
        imgContainer.innerHTML = `<img src="${item.img}" alt="${item[`name_${currentLang}`]}" style="width:100%; height:100%; object-fit:cover; border-radius:24px;">`;
        
        document.getElementById('d-cat-target').innerText = item.cat;
        document.getElementById('d-name-target').innerText = item[`name_${currentLang}`];
        document.getElementById('d-desc-target').innerHTML = `<strong>${t.detailHeader}</strong><br><br>${item[`desc_${currentLang}`]}`;
        
        if(saveState) history.pushState({view: 'detail', id: id}, '', '');
        detailView.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    shareBtn.onclick = () => {
        if(!currentItem) return;
        const t = i18n[currentLang];
        const fullKnowledge = `[THE K-FOOD ARCHIVE - ${currentItem[`name_${currentLang}`]}]\n\nInfo: ${currentItem[`info_${currentLang}`]}\nDesc: ${currentItem[`desc_${currentLang}`]}`;
        
        navigator.clipboard.writeText(fullKnowledge).then(() => {
            alert(t.shareAlert);
            const subject = encodeURIComponent(`${t.shareSubject}${currentItem[`name_${currentLang}`]}`);
            const body = encodeURIComponent(fullKnowledge);
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        });
    };

    const hideDetail = () => {
        detailView.classList.remove('active');
        document.body.style.overflow = 'auto';
        if(history.state && history.state.view === 'detail') history.back();
        currentItem = null;
    };

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.onclick = () => {
            const navMenu = document.querySelector('.nav-menu');
            if(navMenu) navMenu.classList.toggle('active');
        };
    }

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.p-card');
        if(card) showDetail(card.dataset.id);
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.p-card');
            if(card) {
                e.preventDefault();
                showDetail(card.dataset.id);
            }
        }
    });

    detailView.onclick = (e) => {
        if(e.target === detailView) hideDetail();
    };

    closeBtn.onclick = () => hideDetail();
    window.onpopstate = (e) => {
        if(e.state && e.state.view === 'detail') showDetail(e.state.id, false);
        else hideDetail();
    };
});


