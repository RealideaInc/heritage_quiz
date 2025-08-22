// データベース
const japanHeritages = [
    {
        id: 'j1',
        name: '法隆寺地域の仏教建造物',
        year: 1993,
        type: 'cultural',
        criteria: '(i)(ii)(iv)(vi)',
        location: '奈良県斑鳩町',
        description: '世界最古の木造建築群',
        details: '構成資産：法隆寺、法起寺。7世紀建立、聖徳太子ゆかりの寺院。西院伽藍の五重塔、金堂は飛鳥時代の建築。東院伽藍の夢殿は奈良時代の八角円堂。'
    },
    {
        id: 'j2',
        name: '姫路城',
        year: 1993,
        type: 'cultural',
        criteria: '(i)(iv)',
        location: '兵庫県姫路市',
        description: '白鷺城の別名を持つ日本の城郭建築の最高傑作',
        details: '大天守と3つの小天守が渡櫓で連結された連立式天守。1609年池田輝政により現在の姿に。戦災を免れ、創建時の姿をほぼ完全に保持。防御システムの巧妙さ（螺旋状の縄張り、狭間、石落とし）。'
    },
    {
        id: 'j3',
        name: '屋久島',
        year: 1993,
        type: 'natural',
        criteria: '(vii)(ix)',
        location: '鹿児島県',
        description: '樹齢1000年以上の屋久杉原生林',
        details: '縄文杉（推定樹齢2000〜7200年）、亜熱帯から亜寒帯までの植生の垂直分布。固有種・希少種の宝庫（ヤクシマザル、ヤクシカ等）。年間降水量4000〜10000mmの多雨地域。'
    },
    {
        id: 'j4',
        name: '白神山地',
        year: 1993,
        type: 'natural',
        criteria: '(ix)',
        location: '青森県・秋田県',
        description: '世界最大級のブナ原生林',
        details: '約17,000ha、最後の氷期以降8000年以上の歴史。人為的影響をほとんど受けていない。クマゲラ、イヌワシなど希少種の生息地。豊かな生態系と生物多様性。'
    },
    {
        id: 'j5',
        name: '古都京都の文化財',
        year: 1994,
        type: 'cultural',
        criteria: '(ii)(iv)',
        location: '京都府京都市・宇治市、滋賀県大津市',
        description: '17の寺社・城で構成される古都の文化財群',
        details: '構成資産：賀茂別雷神社（上賀茂神社）、賀茂御祖神社（下鴨神社）、教王護国寺（東寺）、清水寺、延暦寺、醍醐寺、仁和寺、平等院、宇治上神社、高山寺、西芳寺（苔寺）、天龍寺、鹿苑寺（金閣寺）、慈照寺（銀閣寺）、龍安寺、西本願寺、二条城。794年〜1868年の日本の首都。'
    },
    {
        id: 'j6',
        name: '白川郷・五箇山の合掌造り集落',
        year: 1995,
        type: 'cultural',
        criteria: '(iv)(v)',
        location: '岐阜県白川村、富山県南砺市',
        description: '豪雪地帯に適応した急勾配の茅葺き屋根',
        details: '構成資産：白川郷荻町集落、五箇山相倉集落、五箇山菅沼集落。養蚕のための広い屋根裏空間。結（ゆい）による相互扶助の伝統。現在も生活が営まれている生きた文化遺産。'
    },
    {
        id: 'j7',
        name: '原爆ドーム',
        year: 1996,
        type: 'cultural',
        criteria: '(vi)',
        location: '広島県広島市',
        description: '負の世界遺産、核兵器廃絶と恒久平和のシンボル',
        details: '1945年8月6日の原爆投下の惨禍を伝える。旧広島県産業奨励館（チェコ人建築家ヤン・レツル設計）。爆心地から約160mに位置。'
    },
    {
        id: 'j8',
        name: '厳島神社',
        year: 1996,
        type: 'cultural',
        criteria: '(i)(ii)(iv)(vi)',
        location: '広島県廿日市市',
        description: '海上に建つ朱塗りの社殿群',
        details: '平清盛により現在の姿に造営（12世紀）。潮の満ち引きを計算した建築設計。平舞台、高舞台での舞楽奉納。寝殿造りの様式を神社建築に応用。'
    },
    {
        id: 'j9',
        name: '古都奈良の文化財',
        year: 1998,
        type: 'cultural',
        criteria: '(ii)(iii)(iv)(vi)',
        location: '奈良県奈良市',
        description: '平城京の寺社群と原始林',
        details: '構成資産：東大寺、興福寺、春日大社、春日山原始林、元興寺、薬師寺、唐招提寺、平城宮跡。710年〜784年の日本の首都。東大寺大仏殿は世界最大級の木造建築。春日山原始林は神域として1000年以上保護。'
    },
    {
        id: 'j10',
        name: '日光の社寺',
        year: 1999,
        type: 'cultural',
        criteria: '(i)(iv)(vi)',
        location: '栃木県日光市',
        description: '徳川家康を祀る東照宮を中心とした社寺群',
        details: '構成資産：日光東照宮、日光二荒山神社、日光山輪王寺。1617年創建の東照宮。陽明門など極彩色の装飾建築。神仏習合の聖地。男体山信仰などの自然崇拝の伝統。'
    },
    {
        id: 'j11',
        name: '琉球王国のグスク及び関連遺産群',
        year: 2000,
        type: 'cultural',
        criteria: '(ii)(iii)(vi)',
        location: '沖縄県',
        description: '12〜17世紀の琉球王国の城跡と聖地',
        details: '構成資産：今帰仁城跡、座喜味城跡、勝連城跡、中城城跡、首里城跡、園比屋武御嶽石門、玉陵、識名園、斎場御嶽。独自の石造建築技術（布積み、相方積み）。中国、日本、東南アジアの文化が融合。御嶽信仰などの精神文化。'
    },
    {
        id: 'j12',
        name: '紀伊山地の霊場と参詣道',
        year: 2004,
        type: 'cultural',
        criteria: '(ii)(iii)(iv)(vi)',
        location: '和歌山県、奈良県、三重県',
        description: '神道、仏教、修験道の聖地と巡礼路',
        details: '霊場：吉野・大峯、熊野三山、高野山。参詣道：熊野古道、大峯奥駈道、高野参詣道。1000年以上の巡礼の伝統。文化的景観としても評価。自然崇拝と山岳信仰。'
    },
    {
        id: 'j13',
        name: '石見銀山遺跡とその文化的景観',
        year: 2007,
        type: 'cultural',
        criteria: '(ii)(iii)(v)',
        location: '島根県大田市',
        description: '16〜20世紀の銀鉱山遺跡',
        details: '最盛期は世界の銀産出量の約3分の1。鉱山、製錬所、街道、港湾の一体的保存。環境に配慮した伝統的採掘技術（灰吹法）。龍源寺間歩など600以上の間歩（坑道）。'
    },
    {
        id: 'j14',
        name: '平泉－仏国土（浄土）を表す建築・庭園及び考古学的遺跡群',
        year: 2011,
        type: 'cultural',
        criteria: '(ii)(vi)',
        location: '岩手県平泉町',
        description: '12世紀、奥州藤原氏による浄土思想の具現化',
        details: '構成資産：中尊寺、毛越寺、観自在王院跡、無量光院跡、金鶏山。中尊寺金色堂は国宝建築。毛越寺庭園は平安時代の浄土庭園。都市計画全体で浄土を表現。'
    },
    {
        id: 'j15',
        name: '富士山－信仰の対象と芸術の源泉',
        year: 2013,
        type: 'cultural',
        criteria: '(iii)(vi)',
        location: '静岡県、山梨県',
        description: '古代からの山岳信仰の対象、芸術の源泉',
        details: '構成資産25件：富士山域（山頂信仰遺跡群、登山道、神社等）、富士五湖、忍野八海、白糸ノ滝、浅間神社群、御師住宅など。富士講による民衆信仰。葛飾北斎など芸術作品のモチーフ。文化的景観としての価値。'
    },
    {
        id: 'j16',
        name: '富岡製糸場と絹産業遺産群',
        year: 2014,
        type: 'cultural',
        criteria: '(ii)(iv)',
        location: '群馬県',
        description: '明治政府の殖産興業政策の象徴',
        details: '構成資産：富岡製糸場、田島弥平旧宅、高山社跡、荒船風穴。1872年設立の官営模範製糸工場。フランス人技師ポール・ブリュナの指導。養蚕技術の革新と普及の拠点。日本の近代化と世界の絹産業発展に貢献。'
    },
    {
        id: 'j17',
        name: '明治日本の産業革命遺産 製鉄・製鋼、造船、石炭産業',
        year: 2015,
        type: 'cultural',
        criteria: '(ii)(iv)',
        location: '福岡、佐賀、長崎、熊本、鹿児島、山口、岩手、静岡の8県',
        description: '1850年代〜1910年の急速な産業化',
        details: '構成資産23件：萩（反射炉、恵美須ヶ鼻造船所跡等）、鹿児島（旧集成館、寺山炭窯跡等）、韮山反射炉、橋野鉄鉱山、三池（炭鉱、港）、長崎造船所、八幡製鐵所、軍艦島（端島炭坑）等。西洋技術の導入と日本化。非西洋国初の産業革命成功例。'
    },
    {
        id: 'j18',
        name: 'ル・コルビュジエの建築作品－近代建築運動への顕著な貢献',
        year: 2016,
        type: 'cultural',
        criteria: '(i)(ii)(vi)',
        location: '東京都台東区',
        description: '7か国17資産のトランスバウンダリー・サイト',
        details: '日本からは国立西洋美術館本館が構成資産。1959年竣工、ル・コルビュジエ設計。ピロティ、自由な平面、屋上庭園などの近代建築の5原則。無限成長美術館の構想。'
    },
    {
        id: 'j19',
        name: '「神宿る島」宗像・沖ノ島と関連遺産群',
        year: 2017,
        type: 'cultural',
        criteria: '(ii)(iii)',
        location: '福岡県',
        description: '4〜9世紀の古代祭祀遺跡',
        details: '構成資産：沖ノ島、小屋島、御門柱、天狗岩、宗像大社沖津宮遙拝所、宗像大社中津宮、宗像大社辺津宮、新原・奴山古墳群。「海の正倉院」と呼ばれる8万点の国宝。島全体が御神体（女人禁制、一木一草一石持ち出し禁止）。航海安全の祈願。'
    },
    {
        id: 'j20',
        name: '長崎と天草地方の潜伏キリシタン関連遺産',
        year: 2018,
        type: 'cultural',
        criteria: '(iii)',
        location: '長崎県、熊本県',
        description: '17〜19世紀の禁教期の潜伏キリシタンの信仰',
        details: '構成資産12件：原城跡、平戸島の聖地と集落、天草の﨑津集落、外海の出津集落・大野集落、黒島の集落、野崎島の集落跡、頭ヶ島の集落、久賀島の集落、奈留島の江上集落、大浦天主堂。独自の信仰形態の発展。1865年の「信徒発見」。'
    },
    {
        id: 'j21',
        name: '百舌鳥・古市古墳群－古代日本の墳墓群',
        year: 2019,
        type: 'cultural',
        criteria: '(iii)(iv)',
        location: '大阪府',
        description: '4世紀後半〜6世紀前半の古墳時代の墳墓群',
        details: '構成資産49件：仁徳天皇陵古墳、応神天皇陵古墳等。仁徳天皇陵古墳は墳丘長486mで世界最大級。前方後円墳という日本独自の形状。古代日本の政治・社会構造を示す。'
    },
    {
        id: 'j22',
        name: '北海道・北東北の縄文遺跡群',
        year: 2021,
        type: 'cultural',
        criteria: '(iii)(v)',
        location: '北海道、青森県、岩手県、秋田県',
        description: '紀元前13,000年〜紀元前400年の縄文文化',
        details: '構成資産17件：三内丸山遺跡（青森）、大湯環状列石（秋田）、是川石器時代遺跡（青森）等。定住生活の開始と発展。環状列石、竪穴建物跡。狩猟採集民の複雑な精神文化。'
    },
    {
        id: 'j23',
        name: '知床',
        year: 2005,
        type: 'natural',
        criteria: '(ix)(x)',
        location: '北海道',
        description: '海洋生態系と陸上生態系の相互作用',
        details: '流氷がもたらす豊かな海洋生態系。サケ・マスの遡上による物質循環。ヒグマ、シマフクロウ等の希少種。オホーツク海の特異な生態系。'
    },
    {
        id: 'j24',
        name: '小笠原諸島',
        year: 2011,
        type: 'natural',
        criteria: '(ix)',
        location: '東京都',
        description: '東洋のガラパゴス',
        details: '大陸と一度も陸続きになったことがない海洋島。固有種率が高い（陸産貝類94％、植物36％）。適応放散による独自の進化。オガサワラオオコウモリ等の固有種。'
    },
    {
        id: 'j25',
        name: '奄美大島、徳之島、沖縄島北部及び西表島',
        year: 2021,
        type: 'natural',
        criteria: '(x)',
        location: '鹿児島県、沖縄県',
        description: '中琉球・南琉球の固有種・希少種の生息地',
        details: 'ヤンバルクイナ、イリオモテヤマネコ、アマミノクロウサギ等。大陸との分離・結合の地史を反映した生物相。亜熱帯照葉樹林。IUCN絶滅危惧種95種の生息地。'
    }
];

const worldHeritages = [
    {
        id: 'w1',
        name: '万里の長城',
        country: '中国',
        year: 1987,
        type: 'cultural',
        region: 'asia',
        criteria: '(i)(ii)(iii)(iv)(vi)',
        description: '総延長約2万km、2000年以上の建設史',
        details: '秦の始皇帝による統一（紀元前3世紀）。明代（14-17世紀）の長城が現存の主要部分。防衛施設としてだけでなく、交易路の管理機能も。'
    },
    {
        id: 'w2',
        name: 'タージ・マハル',
        country: 'インド',
        year: 1983,
        type: 'cultural',
        region: 'asia',
        criteria: '(i)',
        description: 'ムガル帝国皇帝が愛妃のために建設した白大理石の霊廟',
        details: 'シャー・ジャハーンがムムターズ・マハルのために建設。1631-1653年建設、イスラム建築の最高傑作。左右対称の設計、四隅のミナレット。大気汚染による変色が保存上の課題。'
    },
    {
        id: 'w3',
        name: 'アンコール',
        country: 'カンボジア',
        year: 1992,
        type: 'cultural',
        region: 'asia',
        criteria: '(i)(ii)(iii)(iv)',
        description: '9-15世紀のクメール王朝の都城と寺院群',
        details: 'アンコール・ワット：12世紀前半、スールヤヴァルマン2世建設。アンコール・トム：12世紀末、ジャヤヴァルマン7世建設、バイヨン寺院の四面仏。1992-2004年危機遺産リスト記載。'
    },
    {
        id: 'w4',
        name: '始皇帝陵及び兵馬俑坑',
        country: '中国',
        year: 1987,
        type: 'cultural',
        region: 'asia',
        criteria: '(i)(iii)(iv)(vi)',
        description: '中国初の統一皇帝の陵墓と兵馬俑',
        details: '紀元前3世紀建造。1974年農民により偶然発見。約8000体の等身大の兵馬俑。一体一体異なる表情と装備。始皇帝陵本体は未発掘。'
    },
    {
        id: 'w5',
        name: 'ボロブドゥール寺院遺跡群',
        country: 'インドネシア',
        year: 1991,
        type: 'cultural',
        region: 'asia',
        criteria: '(i)(ii)(vi)',
        description: '8-9世紀建設の世界最大級の仏教遺跡',
        details: '階段ピラミッド状の構造（9層）。仏教の三界（欲界・色界・無色界）を表現。2672面のレリーフ、504体の仏像。1815年ラッフルズにより再発見。'
    },
    {
        id: 'w6',
        name: 'エルサレムの旧市街とその城壁群',
        country: 'ヨルダン申請',
        year: 1981,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(ii)(iii)(vi)',
        description: 'ユダヤ教・キリスト教・イスラム教の聖地',
        details: '嘆きの壁、聖墳墓教会、岩のドーム。紀元前1000年頃ダビデ王が首都に。1981年から危機遺産リスト記載継続。政治的緊張と保存の課題。'
    },
    {
        id: 'w7',
        name: 'ペトラ',
        country: 'ヨルダン',
        year: 1985,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(i)(iii)(iv)',
        description: 'ナバテア王国の首都、岩壁を削って造られた都市',
        details: '紀元前4世紀-紀元後106年に繁栄。エル・ハズネ（宝物殿）が象徴的建造物。隊商交易の中継地。「バラ色の都市」の異名。'
    },
    {
        id: 'w8',
        name: 'イスタンブール歴史地域',
        country: 'トルコ',
        year: 1985,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(i)(ii)(iii)(iv)',
        description: 'ビザンツ帝国とオスマン帝国の首都',
        details: 'アヤソフィア：537年建設、大聖堂→モスク→博物館→モスク。トプカプ宮殿：オスマン帝国スルタンの居城。スルタンアフメト・モスク（ブルーモスク）。東西文明の交差点。'
    },
    {
        id: 'w9',
        name: 'ヴェルサイユの宮殿と庭園',
        country: 'フランス',
        year: 1979,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(vi)',
        description: 'ルイ14世による絶対王政の象徴',
        details: 'バロック建築の最高傑作。鏡の間：1919年ヴェルサイユ条約調印。ル・ノートル設計の幾何学式庭園。フランス革命の舞台。'
    },
    {
        id: 'w10',
        name: 'モン・サン・ミシェルとその湾',
        country: 'フランス',
        year: 1979,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(iii)(vi)',
        description: '潮の干満差15mの湾に浮かぶ修道院',
        details: '708年大天使ミカエルのお告げにより聖堂建設開始。ロマネスク様式とゴシック様式の融合。「西洋の驚異」と呼ばれる。巡礼地かつ要塞としての機能。'
    },
    {
        id: 'w11',
        name: 'ローマ歴史地区',
        country: 'イタリア/バチカン',
        year: 1980,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(iii)(iv)(vi)',
        description: '古代ローマ帝国の中心',
        details: 'コロッセオ（80年完成）：5万人収容の円形闘技場。フォロ・ロマーノ：古代ローマの政治・経済の中心。パンテオン、サン・ピエトロ大聖堂、システィーナ礼拝堂。'
    },
    {
        id: 'w12',
        name: 'アテネのアクロポリス',
        country: 'ギリシャ',
        year: 1987,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(iii)(iv)(vi)',
        description: '古代ギリシャ文明の象徴',
        details: '紀元前5世紀、ペリクレス時代の建設。パルテノン神殿：アテナ女神に捧げられたドーリス式神殿。黄金比を用いた設計。エレクテイオン：カリアティード（女性像柱）。'
    },
    {
        id: 'w13',
        name: 'ヴェネツィアとその潟',
        country: 'イタリア',
        year: 1987,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(iii)(iv)(v)(vi)',
        description: '海上都市、アドリア海の女王',
        details: '118の島々、400の橋、150の運河。5世紀頃の建設開始、海洋共和国として繁栄。サン・マルコ大聖堂：ビザンツ様式。地盤沈下と高潮（アクア・アルタ）による水没危機。'
    },
    {
        id: 'w14',
        name: 'アウシュヴィッツ・ビルケナウ',
        country: 'ポーランド',
        year: 1979,
        type: 'cultural',
        region: 'europe',
        criteria: '(vi)',
        description: '負の世界遺産、ナチス・ドイツ最大の強制収容所',
        details: '110万人以上が犠牲（うち90％がユダヤ人）。「ARBEIT MACHT FREI（働けば自由になる）」の門。ホロコーストの象徴、人類の過ちを伝える。'
    },
    {
        id: 'w15',
        name: 'メンフィスとその墓地遺跡',
        country: 'エジプト',
        year: 1979,
        type: 'cultural',
        region: 'africa',
        criteria: '(i)(iii)(vi)',
        description: 'ギザの三大ピラミッドと大スフィンクス',
        details: 'クフ王、カフラー王、メンカウラー王のピラミッド。紀元前2600-2500年頃建設。クフ王のピラミッド：高さ146m（現138m）。古代世界の七不思議で唯一現存。'
    },
    {
        id: 'w16',
        name: '古代テーベとその墓地遺跡',
        country: 'エジプト',
        year: 1979,
        type: 'cultural',
        region: 'africa',
        criteria: '(i)(iii)(vi)',
        description: '中王国・新王国時代の首都',
        details: 'カルナック神殿：世界最大の神殿建築。ルクソール神殿：アメンホテプ3世建設。王家の谷：ツタンカーメン王墓等64の王墓。王妃の谷、貴族の墓。'
    },
    {
        id: 'w17',
        name: 'ヴィクトリアの滝',
        country: 'ザンビア/ジンバブエ',
        year: 1989,
        type: 'natural',
        region: 'africa',
        criteria: '(vii)(viii)',
        description: '世界三大瀑布の一つ',
        details: '幅1708m、落差108m。現地名「モシ・オ・トゥニャ（雷鳴とどろく水煙）」。1855年リヴィングストンが「発見」。水煙が500m以上立ち上る。ザンベジ川の中流。'
    },
    {
        id: 'w18',
        name: 'イエローストーン国立公園',
        country: 'アメリカ',
        year: 1978,
        type: 'natural',
        region: 'americas',
        criteria: '(vii)(viii)(ix)(x)',
        description: '世界初の国立公園',
        details: '1872年指定。世界最大級の火山地帯。1万以上の熱水現象（間欠泉、温泉）。オールド・フェイスフル間欠泉。グリズリー、オオカミ、バイソンの生息地。'
    },
    {
        id: 'w19',
        name: 'グランド・キャニオン国立公園',
        country: 'アメリカ',
        year: 1979,
        type: 'natural',
        region: 'americas',
        criteria: '(vii)(viii)(ix)(x)',
        description: 'コロラド川による600万年の浸食が作った大峡谷',
        details: '全長446km、深さ1600m。20億年の地層が露出。地球の歴史を物語る「地質学の教科書」。先住民の聖地。'
    },
    {
        id: 'w20',
        name: '自由の女神像',
        country: 'アメリカ',
        year: 1984,
        type: 'cultural',
        region: 'americas',
        criteria: '(i)(vi)',
        description: '自由と民主主義の象徴',
        details: '1886年フランスから独立100周年記念に贈呈。高さ93m（台座含む）、銅製。彫刻家バルトルディ、構造設計エッフェル。移民の希望の象徴。'
    },
    {
        id: 'w21',
        name: 'マチュ・ピチュの歴史保護区',
        country: 'ペルー',
        year: 1983,
        type: 'mixed',
        region: 'americas',
        criteria: '(i)(iii)(vii)(ix)',
        description: '15世紀インカ帝国の空中都市',
        details: '標高2430mのアンデス山中。1911年ハイラム・ビンガムにより「発見」。精巧な石組み技術（カミソリの刃も通らない）。太陽神殿、インティワタナ（日時計）。'
    },
    {
        id: 'w22',
        name: 'ナスカとパルパの地上絵',
        country: 'ペルー',
        year: 1994,
        type: 'cultural',
        region: 'americas',
        criteria: '(i)(iii)(iv)',
        description: 'ナスカ文化の巨大な地上絵',
        details: '紀元前200年-紀元後800年のナスカ文化。動物、幾何学模様など700以上の地上絵。ハチドリ（96m）、サル（55m）、コンドル（135m）。マリア・ライヒェによる研究と保護。'
    },
    {
        id: 'w23',
        name: 'イグアス国立公園',
        country: 'アルゼンチン/ブラジル',
        year: 1984,
        type: 'natural',
        region: 'americas',
        criteria: '(vii)(x)',
        description: '世界三大瀑布の一つ',
        details: '275の滝、最大落差82m。「悪魔の喉笛」が最大の滝。亜熱帯雨林の生態系。両国それぞれが世界遺産登録。'
    },
    {
        id: 'w24',
        name: 'ガラパゴス諸島',
        country: 'エクアドル',
        year: 1978,
        type: 'natural',
        region: 'americas',
        criteria: '(vii)(viii)(ix)(x)',
        description: 'ダーウィンの進化論の着想地',
        details: '固有種率が高い（爬虫類100％、鳥類80％）。ガラパゴスゾウガメ、海イグアナ、ダーウィンフィンチ。1978年世界遺産第1号の12件の一つ。2007-2010年危機遺産。'
    },
    {
        id: 'w25',
        name: 'グレート・バリア・リーフ',
        country: 'オーストラリア',
        year: 1981,
        type: 'natural',
        region: 'oceania',
        criteria: '(vii)(viii)(ix)(x)',
        description: '世界最大のサンゴ礁',
        details: '全長2300km。400種のサンゴ、1500種の魚類。2万年前から形成開始。白化現象による危機。生物多様性のホットスポット。'
    },
    {
        id: 'w26',
        name: 'ウルル-カタ・ジュタ国立公園',
        country: 'オーストラリア',
        year: 1987,
        type: 'mixed',
        region: 'oceania',
        criteria: '(v)(vi)(vii)(viii)',
        description: 'アボリジニの聖地、エアーズロック',
        details: 'ウルル：高さ348m、周囲9.4km。アナング族の聖地。6億年前の地層。カタ・ジュタ（オルガ山）：36の岩峰群。2019年10月よりウルル登山禁止。'
    },
    {
        id: 'w27',
        name: 'ヴァティカン市国',
        country: 'バチカン',
        year: 1984,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(iv)(vi)',
        description: '世界最小の独立国家、カトリックの総本山',
        details: '国土全体が世界遺産（0.44㎢）。サン・ピエトロ大聖堂：ミケランジェロ設計のクーポラ。システィーナ礼拝堂：ミケランジェロ「最後の審判」。'
    },
    {
        id: 'w28',
        name: '古代都市ダマスカス',
        country: 'シリア',
        year: 1979,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(i)(ii)(iii)(iv)(vi)',
        description: '世界最古の都市の一つ',
        details: '紀元前3000年から継続的に居住。ウマイヤ・モスク：キリスト教聖堂からモスクへ。城壁に囲まれた旧市街。2013年から危機遺産（シリア内戦）。'
    },
    {
        id: 'w29',
        name: 'パルミラの遺跡',
        country: 'シリア',
        year: 1980,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(i)(ii)(iv)',
        description: 'シルクロードの隊商都市',
        details: '1-3世紀に繁栄、ローマ様式とオリエント様式の融合。ベル神殿、記念門、列柱道路。2013年から危機遺産。2015年ISによる破壊。'
    },
    {
        id: 'w30',
        name: 'リオデジャネイロ：山と海との間のカリオカの景観群',
        country: 'ブラジル',
        year: 2012,
        type: 'cultural',
        region: 'americas',
        criteria: '(v)(vi)',
        description: '都市景観として登録された文化的景観',
        details: 'コルコバードの丘のキリスト像（1931年）。ポン・ヂ・アスーカル（砂糖パン山）。コパカバーナ海岸。自然と都市が融合した景観美。'
    },
    {
        id: 'w31',
        name: 'アントニ・ガウディの作品群',
        country: 'スペイン',
        year: 1984,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(iv)',
        description: 'ガウディによる革新的な建築群',
        details: 'サグラダ・ファミリア、グエル公園、カサ・ミラ、カサ・バトリョ、グエル邸、カサ・ビセンスなどが構成資産。曲線と自然形態を取り入れた独創性。'
    },
    {
        id: 'w32',
        name: 'ストーンヘンジ、エーヴベリーと関連する遺跡群',
        country: 'イギリス',
        year: 1986,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(iii)',
        description: '新石器時代・青銅器時代の巨石記念物群',
        details: 'ストーンヘンジとエーヴベリーを中心とする先史時代の記念物群。天体観測・宗教儀礼との関連が指摘される。'
    },
    {
        id: 'w33',
        name: 'ラリベラの岩窟教会群',
        country: 'エチオピア',
        year: 1978,
        type: 'cultural',
        region: 'africa',
        criteria: '(i)(ii)(iii)',
        description: '岩盤をくり抜いて造られた中世エチオピア正教の聖地',
        details: '12〜13世紀に建造。ベタ・ギヨルギスなど11の教会。岩盤一体の建築技術と宗教的伝統を示す。'
    },
    {
        id: 'w34',
        name: 'セレンゲティ国立公園',
        country: 'タンザニア',
        year: 1981,
        type: 'natural',
        region: 'africa',
        criteria: '(vii)(x)',
        description: 'ヌーなどの大規模な回遊で知られるサバンナ生態系',
        details: '百万人規模の草食動物の移動が織りなす壮大な自然景観。ライオンなど大型捕食者の重要な生息地。'
    },
    {
        id: 'w35',
        name: '武陵源の景観と歴史地区',
        country: '中国',
        year: 1992,
        type: 'natural',
        region: 'asia',
        criteria: '(vii)(viii)',
        description: '石英砂岩の柱状奇峰が林立する景勝地',
        details: '張家界国家森林公園などで構成。独特の地形形成過程と景観美を示す。'
    },
    {
        id: 'w36',
        name: 'ハロン湾',
        country: 'ベトナム',
        year: 1994,
        type: 'natural',
        region: 'asia',
        criteria: '(vii)(viii)',
        description: '石灰岩のカルスト地形が浮かぶ海上景観',
        details: '大小数千の奇岩と洞窟群。長期にわたる地質活動の証拠と卓越した自然美。'
    },
    {
        id: 'w37',
        name: 'グレート・スモーキー山脈国立公園',
        country: 'アメリカ',
        year: 1983,
        type: 'natural',
        region: 'americas',
        criteria: '(vii)(viii)(ix)(x)',
        description: '北米有数の生物多様性ホットスポット',
        details: '古い山地の地質史と多様な生態系。霧（スモーク）に包まれる独特の景観で知られる。'
    },
    {
        id: 'w38',
        name: 'チチェン・イッツァ',
        country: 'メキシコ',
        year: 1988,
        type: 'cultural',
        region: 'americas',
        criteria: '(i)(ii)(iii)',
        description: 'マヤ文明後古典期の都市遺跡',
        details: 'ククルカン神殿（エル・カスティーヨ）、天文台、球戯場。天文学に基づく都市計画。'
    },
    {
        id: 'w39',
        name: 'メサ・ヴェルデ国立公園',
        country: 'アメリカ',
        year: 1978,
        type: 'cultural',
        region: 'americas',
        criteria: '(iii)',
        description: 'アナサジ（プエブロ）文化の崖住居群',
        details: 'クリフ・パレスなどの大規模崖住居。先住民文化の生活様式と技術を伝える。'
    },
    {
        id: 'w40',
        name: 'バガン',
        country: 'ミャンマー',
        year: 2019,
        type: 'cultural',
        region: 'asia',
        criteria: '(iii)(iv)',
        description: '11〜13世紀に繁栄した寺院都市',
        details: '平原一帯に数千の仏塔・寺院が点在。レンガ造建築と壁画、信仰文化の発展を示す。'
    },
    {
        id: 'w41',
        name: 'キナバル自然公園',
        country: 'マレーシア',
        year: 2000,
        type: 'natural',
        region: 'asia',
        criteria: '(ix)(x)',
        description: '東南アジア随一の高峰キナバル山を含む多様な生態系',
        details: '高度帯に応じた固有種と多様な植生。進化と種分化の過程を示す。'
    },
    {
        id: 'w42',
        name: 'テオティワカンの古代都市',
        country: 'メキシコ',
        year: 1987,
        type: 'cultural',
        region: 'americas',
        criteria: '(i)(ii)(iii)',
        description: '太陽のピラミッド・月のピラミッドで知られる古代都市',
        details: '広大な都市計画と宗教儀礼の中心。中米文明に広範な影響を与えた。'
    },
    {
        id: 'w43',
        name: 'アマルフィ海岸',
        country: 'イタリア',
        year: 1997,
        type: 'cultural',
        region: 'europe',
        criteria: '(ii)(iv)(v)',
        description: '地中海沿岸の断崖に展開する文化的景観',
        details: 'テラス畑や集落、海上交易の歴史。自然と人間活動が織りなす景観の顕著例。'
    },
    {
        id: 'w44',
        name: 'サンティアゴ・デ・コンポステーラの旧市街',
        country: 'スペイン',
        year: 1985,
        type: 'cultural',
        region: 'europe',
        criteria: '(i)(ii)(vi)',
        description: '中世以来の巡礼の終着点としての都市',
        details: '聖ヤコブの墓所を中心とした都市構造。ロマネスク〜バロック建築群。'
    },
    {
        id: 'w45',
        name: 'エフェソス',
        country: 'トルコ',
        year: 2015,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(iii)(iv)',
        description: '古代小アジアの港湾都市遺跡',
        details: 'セルシウス図書館、アルテミス神殿跡、劇場など。ヘレニズムとローマの都市文化を示す。'
    },
    {
        id: 'w46',
        name: 'ペルセポリス',
        country: 'イラン',
        year: 1979,
        type: 'cultural',
        region: 'middle_east',
        criteria: '(i)(iii)(vi)',
        description: 'アケメネス朝ペルシアの儀礼都市',
        details: 'アパダナ宮殿の浮彫、壮大なテラス建築。帝国の権威と儀礼の中心。'
    },
    {
        id: 'w47',
        name: 'オカバンゴ・デルタ',
        country: 'ボツワナ',
        year: 2014,
        type: 'natural',
        region: 'africa',
        criteria: '(vii)(ix)(x)',
        description: '砂漠に広がる内陸デルタの独特な生態系',
        details: '季節的氾濫が生み出す多様な生息地。大型哺乳類・鳥類の重要な保全地域。'
    },
    {
        id: 'w48',
        name: 'ケープ植物区保護地域群',
        country: '南アフリカ',
        year: 2004,
        type: 'natural',
        region: 'africa',
        criteria: '(ix)(x)',
        description: 'フインボスを中心とした卓越した植物多様性',
        details: '高い固有率と種多様性。地中海性気候下の植物相の進化を示す。'
    },
    {
        id: 'w49',
        name: 'トンガリロ国立公園',
        country: 'ニュージーランド',
        year: 1990,
        type: 'mixed',
        region: 'oceania',
        criteria: '(vi)(vii)(viii)',
        description: 'マオリの聖地と火山景観を兼ね備える複合遺産',
        details: '信仰の対象と自然の顕著な価値。火山活動が作る地形美。'
    },
    {
        id: 'w50',
        name: 'ハワイ火山国立公園',
        country: 'アメリカ',
        year: 1987,
        type: 'natural',
        region: 'americas',
        criteria: '(viii)',
        description: 'キラウエアとマウナ・ロアを含む火山地形の顕著例',
        details: 'ホットスポット火山活動の過程を示す地質学的価値。'
    },
    {
        id: 'w51',
        name: 'シギリヤ',
        country: 'スリランカ',
        year: 1982,
        type: 'cultural',
        region: 'asia',
        criteria: '(ii)(iii)(iv)',
        description: '巨岩上に築かれた王都遺跡',
        details: 'シギリヤ・ロックの要塞都市。壁画（シギリヤ・レディ）と高度な水利施設。'
    }
];

const basics = [
    {
        id: 'b1',
        title: '世界遺産条約',
        content: '1972年UNESCO総会で採択',
        details: 'エジプトのヌビア遺跡救済キャンペーン（アスワン・ハイ・ダム建設）が契機。正式名称「世界の文化遺産及び自然遺産の保護に関する条約」。文化遺産と自然遺産を一つの条約で保護する画期的な仕組み。'
    },
    {
        id: 'b2',
        title: '登録基準（文化遺産）',
        content: '文化遺産6基準',
        details: '(i)人類の創造的才能を表す傑作 (ii)価値観の交流 (iii)文化的伝統の証拠 (iv)建築・技術の集積 (v)伝統的集落 (vi)出来事・思想との関連（単独使用不可）'
    },
    {
        id: 'b3',
        title: '登録基準（自然遺産）',
        content: '自然遺産4基準',
        details: '(vii)自然美・美的価値 (viii)地球の歴史 (ix)生態系の進化 (x)生物多様性の保全'
    },
    {
        id: 'b4',
        title: '世界遺産委員会',
        content: '21か国で構成、年1回開催',
        details: '委員国の任期は6年（原則4年）。新規登録や危機遺産リストを審議。4つの決議：登録、情報照会、登録延期、不登録。'
    },
    {
        id: 'b5',
        title: '諮問機関',
        content: 'ICOMOS、IUCN、ICCROM',
        details: 'ICOMOS（国際記念物遺跡会議）：文化遺産の専門的評価、IUCN（国際自然保護連合）：自然遺産の専門的評価、ICCROM（文化財保存修復研究国際センター）：保存修復の専門的助言。'
    },
    {
        id: 'b6',
        title: '危機遺産リスト',
        content: '保護が必要な遺産のリスト',
        details: '戦争、自然災害、開発等で危機にある遺産。国際的支援の対象。エルサレム（1981年〜継続）、アンコール（1992-2004年）、ガラパゴス諸島（2007-2010年）など。'
    },
    {
        id: 'b7',
        title: '登録プロセス',
        content: '暫定リストから世界遺産登録まで',
        details: '1.各国が暫定リスト作成 2.推薦書提出（毎年2月1日締切）3.諮問機関による現地調査と評価 4.世界遺産委員会での審議'
    },
    {
        id: 'b8',
        title: '真正性と完全性',
        content: 'Authenticity と Integrity',
        details: '真正性：文化遺産に求められる本物であることの証明。完全性：自然遺産・文化遺産両方に求められる欠けていない状態。'
    },
    {
        id: 'b9',
        title: '世界遺産の分類',
        content: '文化遺産、自然遺産、複合遺産',
        details: '文化遺産：人類の創造的活動、自然遺産：地球の歴史や生態系、複合遺産：文化と自然両方の価値。その他：文化的景観、シリアル・ノミネーション、トランスバウンダリー・サイト。'
    },
    {
        id: 'b10',
        title: '世界遺産基金',
        content: '国際協力のための基金',
        details: '締約国の分担金と任意拠出金で運営。緊急援助、保全管理援助、準備援助などを提供。日本の文化遺産保護信託基金も重要な役割。'
    },
    {
        id: 'b11',
        title: '負の世界遺産',
        content: '人類の過ちを伝える遺産',
        details: '原爆ドーム（日本）、アウシュヴィッツ・ビルケナウ（ポーランド）など。戦争や人種差別の記憶を後世に伝える。'
    },
    {
        id: 'b12',
        title: '文化的景観',
        content: '人間と自然の共同作品',
        details: '紀伊山地の霊場と参詣道、石見銀山遺跡、富士山など。自然環境と人間の営みが一体となった景観。'
    },
    {
        id: 'b13',
        title: '無形文化遺産との違い',
        content: '有形と無形の違い',
        details: '世界遺産：不動産（建造物、遺跡、自然地域）が対象。無形文化遺産：伝統芸能、祭礼、工芸技術など無形の文化が対象。別の条約で保護。'
    },
    {
        id: 'b14',
        title: '世界の記憶との違い',
        content: 'Memory of the World',
        details: '世界遺産：不動産が対象。世界の記憶：文書、記録、書籍などの記録遺産が対象。ユネスコの別プログラム。'
    },
    {
        id: 'b15',
        title: 'OUV（顕著な普遍的価値）',
        content: 'Outstanding Universal Value',
        details: '国境を越えて人類全体にとって現在および将来世代に共通した重要性を持つ文化的・自然的価値。すべての世界遺産が持つべき価値。'
    },
    {
        id: 'b16',
        title: '暫定リスト',
        content: '各国が将来推薦を予定する遺産一覧',
        details: '暫定リストに少なくとも1年掲載した後でないと推薦できない。国家戦略と優先順位付けの基礎。'
    },
    {
        id: 'b17',
        title: 'シリアル・ノミネーション',
        content: '複数の離れた構成資産で一つの遺産',
        details: '共通のテーマ・時代・機能で結ばれ、全体としてOUVを示す。各構成資産の完全性と管理が求められる。'
    },
    {
        id: 'b18',
        title: 'トランスバウンダリー・サイト',
        content: '国境を越える遺産',
        details: '関係国が共同で推薦・保全管理を実施。国際協力と一体的管理が鍵。'
    },
    {
        id: 'b19',
        title: 'バッファーゾーン',
        content: '遺産を取り巻く緩衝地帯',
        details: '視覚的・生態的・社会的影響から遺産を保護。適切な法規制と管理方策が必要。'
    },
    {
        id: 'b20',
        title: '管理計画（Management Plan）',
        content: '保全・活用の長期的枠組み',
        details: '法的保護、組織体制、資金、人材、リスク管理、モニタリングなどを含む。'
    },
    {
        id: 'b21',
        title: '比較研究（Comparative Analysis）',
        content: '類似遺産との比較による独自性の証明',
        details: '推薦書の中核要素。地域・年代・類型を横断し、OUVの妥当性を示す。'
    },
    {
        id: 'b22',
        title: 'OUVの3要素',
        content: '基準・真正性/完全性・保護管理',
        details: '登録基準の充足、真正性/完全性の証明、十分な保護管理体制の3本柱が必須。'
    },
    {
        id: 'b23',
        title: '初回登録（1978年）',
        content: '世界遺産の第一回登録',
        details: '1978年に12件が登録（ガラパゴス諸島、メサ・ヴェルデ、シミエン国立公園等）。制度運用の出発点。'
    },
    {
        id: 'b24',
        title: '危機遺産の典型要因',
        content: '武力紛争・自然災害・開発・観光圧',
        details: '保存状態の悪化を招く主要因。予防・軽減策と国際支援動員が重要。'
    },
    {
        id: 'b25',
        title: '登録抹消の事例',
        content: 'ドレスデン・エルベ渓谷（2009）ほか',
        details: '大規模橋梁建設による景観の喪失、リバプール海商都市（2021）の開発圧など、OUV喪失で抹消されることがある。'
    },
    {
        id: 'b26',
        title: '勧告の種類（諮問機関）',
        content: '登録・情報照会・登録延期・不登録',
        details: 'ICOMOS/IUCNが世界遺産委員会に提出。委員会は勧告を踏まえて最終決定。'
    },
    {
        id: 'b27',
        title: '地域的バランス',
        content: '地域間の不均衡是正',
        details: '地理的代表性と多様性の確保を目指す運用方針。アフリカ・小島嶼国支援が重視される。'
    },
    {
        id: 'b28',
        title: '文化的景観の3類型',
        content: '明示的設計・有機的進化・関連する景観',
        details: '設計景観、進化景観（存続・遺存）、宗教的・芸術的関連景観の三分類。'
    },
    {
        id: 'b29',
        title: '運用ガイドライン（Operational Guidelines）',
        content: '登録・保全の実務ルール',
        details: '定期的に改訂される手引き。推薦書様式からモニタリングまでの手順を規定。'
    },
    {
        id: 'b30',
        title: '属性（Attributes）',
        content: 'OUVを具現化する具体的特性',
        details: '形態、素材、技術、伝統、景観要素など。保全対象の特定に不可欠。'
    },
    {
        id: 'b31',
        title: '定期報告（Periodic Reporting）',
        content: '各地域ごとの周期的報告',
        details: '保全状況を地域単位で評価し、能力構築や優先課題を共有。'
    },
    {
        id: 'b32',
        title: 'リアクティブ・モニタリング',
        content: '重大な変化に対する緊急監視',
        details: '危機遺産リスト記載や保全措置の勧告に直結。ミッション派遣や技術助言を伴う。'
    },
    {
        id: 'b33',
        title: '世界遺産センター',
        content: 'UNESCO事務局の専門部局',
        details: '委員会の運営、推薦書受付、文書管理、緊急対応の調整などを担う。'
    },
    {
        id: 'b34',
        title: '推薦書の言語',
        content: '英語またはフランス語',
        details: '公式作業言語で提出。要約・図版・GISデータ等の付属資料も重要。'
    },
    {
        id: 'b35',
        title: '登録基準の統合',
        content: '文化と自然の基準を一本化',
        details: '2005年に文化・自然の基準が(i)〜(x)の共通番号体系に統合。複合遺産の評価が明確化。'
    }
];

const quizQuestions = [
    // 日本の世界遺産
    {
        question: '日本で最初に登録された世界遺産の数は？',
        options: ['2件', '3件', '4件', '5件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '富士山が世界遺産に登録された年は？',
        options: ['2011年', '2012年', '2013年', '2014年'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '日本の世界遺産で唯一の負の遺産は？',
        options: ['原爆ドーム', '軍艦島', '富岡製糸場', '石見銀山'],
        correct: 0,
        category: 'japan'
    },
    {
        question: '古都京都の文化財の構成資産数は？',
        options: ['15件', '16件', '17件', '18件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '日本の自然遺産の数は？',
        options: ['3件', '4件', '5件', '6件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '琉球王国のグスク及び関連遺産群の構成資産数は？',
        options: ['7件', '8件', '9件', '10件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '明治日本の産業革命遺産は何県にまたがる？',
        options: ['6県', '7県', '8県', '9県'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '北海道・北東北の縄文遺跡群の時代範囲は？',
        options: ['紀元前15,000年〜紀元前400年', '紀元前13,000年〜紀元前400年', '紀元前10,000年〜紀元前300年', '紀元前8,000年〜紀元前500年'],
        correct: 1,
        category: 'japan'
    },
    {
        question: '白川郷・五箇山の合掌造り集落の登録基準は？',
        options: ['(iii)(v)', '(iv)(v)', '(iii)(iv)', '(ii)(v)'],
        correct: 1,
        category: 'japan'
    },
    {
        question: '日光の社寺で徳川家康を祀るのは？',
        options: ['日光二荒山神社', '日光山輪王寺', '日光東照宮', '日光山中禅寺'],
        correct: 2,
        category: 'japan'
    },

    // 世界の世界遺産
    {
        question: 'タージ・マハルの登録基準は？',
        options: ['(i)', '(i)(ii)', '(i)(iv)', '(ii)(iv)'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'アンコールが危機遺産リストに記載されていた期間は？',
        options: ['1990-2000年', '1992-2004年', '1995-2005年', '1993-2003年'],
        correct: 1,
        category: 'world'
    },
    {
        question: '万里の長城の総延長は約何km？',
        options: ['1万km', '1.5万km', '2万km', '2.5万km'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'イエローストーン国立公園が指定された年は？',
        options: ['1872年', '1875年', '1878年', '1880年'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'マチュ・ピチュの標高は？',
        options: ['2230m', '2330m', '2430m', '2530m'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'ガラパゴス諸島の固有種率（爬虫類）は？',
        options: ['70%', '80%', '90%', '100%'],
        correct: 3,
        category: 'world'
    },
    {
        question: 'ヴェルサイユ条約が調印された部屋は？',
        options: ['王の間', '鏡の間', '戦争の間', '平和の間'],
        correct: 1,
        category: 'world'
    },
    {
        question: 'グレート・バリア・リーフの全長は？',
        options: ['1800km', '2000km', '2300km', '2500km'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'アウシュヴィッツで犠牲になった人数は？',
        options: ['80万人以上', '90万人以上', '100万人以上', '110万人以上'],
        correct: 3,
        category: 'world'
    },
    {
        question: 'ペトラが「バラ色の都市」と呼ばれる理由は？',
        options: ['バラが多いから', '岩の色から', '夕日の色から', '建物の装飾から'],
        correct: 1,
        category: 'world'
    },

    // 基礎知識
    {
        question: '世界遺産条約が採択された年は？',
        options: ['1970年', '1972年', '1975年', '1980年'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '文化遺産の登録基準の数は？',
        options: ['4つ', '5つ', '6つ', '7つ'],
        correct: 2,
        category: 'basics'
    },
    {
        question: '世界遺産委員会の構成国数は？',
        options: ['18か国', '19か国', '20か国', '21か国'],
        correct: 3,
        category: 'basics'
    },
    {
        question: '文化遺産の評価を行う諮問機関は？',
        options: ['IUCN', 'ICOMOS', 'ICCROM', 'UNESCO'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '自然遺産の評価を行う諮問機関は？',
        options: ['IUCN', 'ICOMOS', 'ICCROM', 'UNESCO'],
        correct: 0,
        category: 'basics'
    },
    {
        question: '世界遺産条約の正式名称に含まれる言葉は？',
        options: ['文化遺産と自然遺産', '有形遺産と無形遺産', '動産と不動産', '記念物と景観'],
        correct: 0,
        category: 'basics'
    },
    {
        question: '登録基準(vi)の特徴は？',
        options: ['最も使用頻度が高い', '単独使用できない', '自然遺産にも適用', '2000年以降使用不可'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '世界遺産委員会の開催頻度は？',
        options: ['年2回', '年1回', '2年に1回', '3年に1回'],
        correct: 1,
        category: 'basics'
    },
    {
        question: 'OUVの正式名称は？',
        options: ['Outstanding Universal Value', 'Original Unique Value', 'Outstanding United Value', 'Official Universal Value'],
        correct: 0,
        category: 'basics'
    },
    {
        question: '真正性（Authenticity）が求められるのは？',
        options: ['文化遺産のみ', '自然遺産のみ', '複合遺産のみ', 'すべての遺産'],
        correct: 0,
        category: 'basics'
    },
    {
        question: '日本の世界遺産の総数は？',
        options: ['23件', '24件', '25件', '26件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '屋久島の登録基準は？',
        options: ['(vii)(viii)', '(vii)(ix)', '(ix)(x)', '(viii)(x)'],
        correct: 1,
        category: 'japan'
    },
    {
        question: '原爆ドームの登録基準は？',
        options: ['(iv)', '(v)', '(vi)', '(i)'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '琉球王国のグスク及び関連遺産群の登録年は？',
        options: ['1998年', '1999年', '2000年', '2001年'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '富士山の構成資産数は？',
        options: ['15件', '20件', '25件', '30件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '白川郷・五箇山の合掌造り集落の種別は？',
        options: ['文化遺産', '自然遺産', '複合遺産', '記憶遺産'],
        correct: 0,
        category: 'japan'
    },
    {
        question: '知床の登録基準は？',
        options: ['(vii)(viii)', '(ix)(x)', '(i)(iii)', '(v)(vi)'],
        correct: 1,
        category: 'japan'
    },
    {
        question: '北海道・北東北の縄文遺跡群の構成資産数は？',
        options: ['15件', '16件', '17件', '18件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '古都奈良の文化財の構成資産数は？',
        options: ['6件', '7件', '8件', '9件'],
        correct: 2,
        category: 'japan'
    },
    {
        question: '百舌鳥・古市古墳群が所在する都道府県は？',
        options: ['大阪府', '奈良県', '和歌山県', '京都府'],
        correct: 0,
        category: 'japan'
    },
    {
        question: 'ヴェネツィアとその潟が直面する主な課題は？',
        options: ['地盤沈下と高潮', '砂漠化', '火山活動', '干ばつ'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'ヴァティカン市国の遺産種別は？',
        options: ['文化遺産', '自然遺産', '複合遺産', '記憶遺産'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'ガラパゴス諸島の世界遺産登録年は？',
        options: ['1978年', '1984年', '1991年', '2000年'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'イグアス国立公園の最大落差は？',
        options: ['52m', '72m', '82m', '102m'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'モン・サン・ミシェルの湾の干満差は？',
        options: ['5m', '10m', '15m', '20m'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'アウシュヴィッツ・ビルケナウの登録基準は？',
        options: ['(vi)', '(iv)', '(ii)', '(i)'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'アンコールが所在する国は？',
        options: ['タイ', 'ベトナム', 'カンボジア', 'ラオス'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'グレート・バリア・リーフの主な脅威として正しいものは？',
        options: ['白化現象', '砂嵐', '永久凍土の融解', '酸性雨'],
        correct: 0,
        category: 'world'
    },
    {
        question: 'エルサレムの旧市街とその城壁群の推薦国（申請国）は？',
        options: ['イスラエル', 'パレスチナ', 'ヨルダン', 'レバノン'],
        correct: 2,
        category: 'world'
    },
    {
        question: '自由の女神像の高さ（台座含む）は？',
        options: ['73m', '83m', '93m', '103m'],
        correct: 2,
        category: 'world'
    },
    {
        question: 'ICCROM の主な役割は？',
        options: ['自然遺産の評価', '文化遺産の評価', '保存修復に関する専門的助言', '条約の採択'],
        correct: 2,
        category: 'basics'
    },
    {
        question: '世界遺産委員会の4つの決議に含まれないものは？',
        options: ['登録', '登録抹消', '登録延期', '情報照会'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '完全性（Integrity）が求められるのは？',
        options: ['文化遺産のみ', '自然遺産のみ', '文化・自然の両方', '複合遺産のみ'],
        correct: 2,
        category: 'basics'
    },
    {
        question: '推薦書の提出期限は毎年いつ？',
        options: ['1月1日', '2月1日', '3月1日', '4月1日'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '文化的景観の例として正しいのは？',
        options: ['紀伊山地の霊場と参詣道', 'アウシュヴィッツ・ビルケナウ', 'メンフィスとその墓地遺跡', '自由の女神像'],
        correct: 0,
        category: 'basics'
    },
    {
        question: '世界遺産条約採択の契機となった出来事は？',
        options: ['ナスカ地上絵の発見', 'ヌビア遺跡救済キャンペーン', 'イエローストーン設立', 'ヴェルサイユ条約締結'],
        correct: 1,
        category: 'basics'
    },
    {
        question: 'OUV の日本語訳は？',
        options: ['固有の価値', '顕著な普遍的価値', '世界的独自価値', '普遍的文化価値'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '危機遺産リストの主目的は？',
        options: ['観光客数の拡大', '国際的支援の促進', '登録基準の削減', '登録の自動更新'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '文化遺産の評価を行う諮問機関は？',
        options: ['UNESCO', 'ICOMOS', 'IUCN', 'ICCROM'],
        correct: 1,
        category: 'basics'
    },
    {
        question: '世界遺産委員会の委員国の任期（最大）は？',
        options: ['2年', '4年', '5年', '6年'],
        correct: 3,
        category: 'basics'
    }
];
