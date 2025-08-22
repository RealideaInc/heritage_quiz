let currentQuiz = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let studiedItems = new Set();

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    loadJapanHeritages();
    loadWorldHeritages();
    loadBasics();
    updateProgress();
});

// 学習カード・一覧生成
function loadJapanHeritages() {
    const grid = document.getElementById('japanGrid');
    grid.innerHTML = '';

    japanHeritages.forEach(heritage => {
        const card = createHeritageCard(heritage, 'japan');
        grid.appendChild(card);
    });
}

function loadWorldHeritages() {
    const grid = document.getElementById('worldGrid');
    grid.innerHTML = '';

    worldHeritages.forEach(heritage => {
        const card = createHeritageCard(heritage, 'world');
        grid.appendChild(card);
    });
}

function loadBasics() {
    const grid = document.getElementById('basicsGrid');
    grid.innerHTML = '';

    basics.forEach(basic => {
        const card = document.createElement('div');
        card.className = 'heritage-card';
        card.innerHTML = `
            <h3>${basic.title}</h3>
            <div class="heritage-info">${basic.content}</div>
            <div class="heritage-details">${basic.details}</div>
        `;
        card.onclick = () => {
            card.classList.toggle('expanded');
            if (!studiedItems.has(basic.id)) {
                studiedItems.add(basic.id);
                updateProgress();
            }
        };
        grid.appendChild(card);
    });
}

function createHeritageCard(heritage, type) {
    const card = document.createElement('div');
    card.className = 'heritage-card';

    let tagClass = heritage.type === 'natural' ? 'natural' : 
                  heritage.type === 'mixed' ? 'mixed' : 'cultural';

    let content = `
        <h3>${heritage.name}</h3>
        <div class="heritage-info">
            <span class="tag ${tagClass}">${getTypeLabel(heritage.type)}</span>
            <span class="tag">${heritage.year}年</span>
    `;

    if (type === 'japan') {
        content += `<span class="tag">${heritage.location}</span>`;
    } else {
        content += `<span class="tag">${heritage.country}</span>`;
    }

    content += `
            <p style="margin-top: 10px;">${heritage.description}</p>
            <p style="margin-top: 5px;"><strong>登録基準:</strong> ${heritage.criteria}</p>
        </div>
        <div class="heritage-details">${heritage.details}</div>
    `;

    card.innerHTML = content;
    card.onclick = () => {
        showDetailModal(heritage);
        if (!studiedItems.has(heritage.id)) {
            studiedItems.add(heritage.id);
            updateProgress();
        }
    };

    return card;
}

function getTypeLabel(type) {
    switch(type) {
        case 'natural': return '自然遺産';
        case 'cultural': return '文化遺産';
        case 'mixed': return '複合遺産';
        default: return type;
    }
}

function switchTab(tabName) {
    // タブボタンの切り替え
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    // inline handler の event が使われる前提（HTML 側と一致）
    if (typeof event !== 'undefined' && event && event.target) {
        event.target.classList.add('active');
    }

    // コンテンツエリアの切り替え
    document.querySelectorAll('.content-area').forEach(area => {
        area.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

function searchHeritage(section, searchTerm) {
    const cards = document.querySelectorAll(`#${section}Grid .heritage-card`);
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterByType(section, type) {
    const cards = document.querySelectorAll(`#${section}Grid .heritage-card`);
    cards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else {
            const hasType = card.querySelector(`.tag.${type}`);
            card.style.display = hasType ? 'block' : 'none';
        }
    });
}

function filterByYear(section, period) {
    const cards = document.querySelectorAll(`#${section}Grid .heritage-card`);
    cards.forEach(card => {
        if (period === 'all') {
            card.style.display = 'block';
        } else {
            const yearText = card.textContent.match(/(\d{4})年/);
            if (yearText) {
                const year = parseInt(yearText[1]);
                let show = false;

                switch(period) {
                    case '1990s': show = year >= 1990 && year < 2000; break;
                    case '2000s': show = year >= 2000 && year < 2010; break;
                    case '2010s': show = year >= 2010 && year < 2020; break;
                    case '2020s': show = year >= 2020; break;
                }

                card.style.display = show ? 'block' : 'none';
            }
        }
    });
}

function filterByRegion(section, region) {
    const cards = document.querySelectorAll(`#${section}Grid .heritage-card`);
    cards.forEach((card, index) => {
        if (region === 'all') {
            card.style.display = 'block';
        } else {
            // 簡易的な地域判定（実際のデータに基づく）
            const heritage = worldHeritages[index];
            card.style.display = heritage && heritage.region === region ? 'block' : 'none';
        }
    });
}

// クイズ機能
function startQuiz() {
    const category = document.getElementById('quizCategory').value;
    currentQuiz = category === 'all' ? 
        [...quizQuestions] : 
        quizQuestions.filter(q => q.category === category);

    currentQuiz = shuffleArray(currentQuiz);
    currentQuestionIndex = 0;
    correctCount = 0;

    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('correctAnswers').textContent = '0';
    document.getElementById('totalQuestions').textContent = currentQuiz.length;

    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        endQuiz();
        return;
    }

    const question = currentQuiz[currentQuestionIndex];
    document.getElementById('quizQuestion').textContent = 
        `問題 ${currentQuestionIndex + 1}: ${question.question}`;

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('quizResult').classList.remove('show');
    document.getElementById('nextButton').style.display = 'none';
}

function selectAnswer(index) {
    const question = currentQuiz[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');

    options.forEach(opt => opt.onclick = null);

    if (index === question.correct) {
        options[index].classList.add('correct');
        correctCount++;
        document.getElementById('correctAnswers').textContent = correctCount;
        showResult('正解！', 'green');
    } else {
        options[index].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        showResult('不正解... 正解は: ' + question.options[question.correct], 'red');
    }

    document.getElementById('nextButton').style.display = 'block';
}

function showResult(message, color) {
    const result = document.getElementById('quizResult');
    result.textContent = message;
    result.style.background = color === 'green' ? '#d4edda' : '#f8d7da';
    result.style.color = color === 'green' ? '#155724' : '#721c24';
    result.classList.add('show');
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    const percentage = Math.round((correctCount / currentQuiz.length) * 100);
    document.getElementById('quizContainer').innerHTML = `
        <div style="text-align: center; padding: 30px;">
            <h2>クイズ終了！</h2>
            <p style="font-size: 24px; margin: 20px 0;">
                スコア: ${correctCount} / ${currentQuiz.length} (${percentage}%)
            </p>
            <button class="tab-button" onclick="startQuiz()">もう一度挑戦</button>
        </div>
    `;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 暗記カード機能
function loadFlashcards() {
    const category = document.getElementById('flashcardCategory').value;
    const container = document.getElementById('flashcardContainer');

    let cards = [];

    switch(category) {
        case 'criteria':
            cards = [
                { front: '文化遺産基準(i)', back: '人類の創造的才能を表す傑作' },
                { front: '文化遺産基準(ii)', back: '建築、技術、都市計画等での価値観の交流' },
                { front: '文化遺産基準(iii)', back: '文化的伝統や文明の稀有な証拠' },
                { front: '文化遺産基準(iv)', back: '建築・技術の発展段階や人類史の重要な段階を示す顕著な見本' },
                { front: '文化遺産基準(v)', back: '伝統的居住や土地・海上利用を代表する集落・土地利用の際立つ例' },
                { front: '文化遺産基準(vi)', back: '顕著な普遍的価値を持つ出来事・思想・信仰・芸術作品と直接または明白に関連（単独使用不可）' },
                { front: '自然遺産基準(vii)', back: '類まれな自然美・美的価値' },
                { front: '自然遺産基準(viii)', back: '地球の歴史の主要段階を示す地質学的・地形学的な顕著な見本' },
                { front: '自然遺産基準(ix)', back: '生態系の進化・発展の過程や陸上・淡水・沿岸・海洋生態系の顕著な見本' },
                { front: '自然遺産基準(x)', back: '生物多様性の保全上重要な生息地' }
            ];
            break;
        case 'years':
            cards = [
                // 制度・世界の節目
                { front: '世界遺産条約採択年', back: '1972年' },
                { front: '第1回登録年（世界遺産制度の出発点）', back: '1978年（12件が登録）' },
                { front: '危機遺産リスト開始年', back: '1979年' },
                // 日本の節目
                { front: '日本初の世界遺産登録年', back: '1993年（法隆寺、姫路城、屋久島、白神山地）' },
                { front: '富士山登録年', back: '2013年' },
                { front: '知床登録年', back: '2005年' },
                { front: '小笠原諸島登録年', back: '2011年' },
                { front: '平泉登録年', back: '2011年' },
                { front: '富岡製糸場登録年', back: '2014年' },
                { front: '明治日本の産業革命遺産登録年', back: '2015年' },
                { front: 'ル・コルビュジエ（日本の構成資産）登録年', back: '2016年' },
                { front: '宗像・沖ノ島登録年', back: '2017年' },
                { front: '潜伏キリシタン関連遺産登録年', back: '2018年' },
                { front: '百舌鳥・古市古墳群登録年', back: '2019年' },
                { front: '北海道・北東北の縄文遺跡群登録年', back: '2021年' },
                // 日本の初期登録4件の個別年（確認）
                { front: '屋久島登録年', back: '1993年' },
                { front: '白神山地登録年', back: '1993年' },
                { front: '法隆寺地域の仏教建造物登録年', back: '1993年' },
                { front: '姫路城登録年', back: '1993年' },
                // 主要世界遺産の年
                { front: 'ガラパゴス諸島登録年', back: '1978年' },
                { front: 'ヴェルサイユの宮殿と庭園登録年', back: '1979年' },
                { front: 'モン・サン・ミシェル登録年', back: '1979年' },
                { front: 'アテネのアクロポリス登録年', back: '1987年' },
                { front: '万里の長城登録年', back: '1987年' },
                { front: 'タージ・マハル登録年', back: '1983年' },
                { front: 'アンコール登録年', back: '1992年' },
                { front: 'チチェン・イッツァ登録年', back: '1988年' },
                { front: 'テオティワカン登録年', back: '1987年' },
                { front: 'ヴァティカン市国登録年', back: '1984年' },
                { front: 'トンガリロ国立公園登録年', back: '1990年' }
            ];
            break;
        case 'countries':
            cards = [
                // アジア
                { front: '万里の長城', back: '中国' },
                { front: 'タージ・マハル', back: 'インド' },
                { front: 'アンコール', back: 'カンボジア' },
                { front: '始皇帝陵及び兵馬俑坑', back: '中国' },
                { front: 'ボロブドゥール寺院遺跡群', back: 'インドネシア' },
                // 中東
                { front: 'エルサレムの旧市街', back: 'ヨルダン申請' },
                { front: 'ペトラ', back: 'ヨルダン' },
                { front: 'イスタンブール歴史地域', back: 'トルコ' },
                { front: 'パルミラの遺跡', back: 'シリア' },
                { front: '古代都市ダマスカス', back: 'シリア' },
                // ヨーロッパ
                { front: 'ヴェルサイユの宮殿と庭園', back: 'フランス' },
                { front: 'モン・サン・ミシェル', back: 'フランス' },
                { front: 'ローマ歴史地区', back: 'イタリア/バチカン' },
                { front: 'アテネのアクロポリス', back: 'ギリシャ' },
                { front: 'ヴェネツィアとその潟', back: 'イタリア' },
                { front: 'アウシュヴィッツ・ビルケナウ', back: 'ポーランド' },
                // アフリカ
                { front: 'メンフィスとその墓地遺跡', back: 'エジプト' },
                { front: '古代テーベとその墓地遺跡', back: 'エジプト' },
                { front: 'ヴィクトリアの滝', back: 'ザンビア/ジンバブエ' },
                // 南北アメリカ
                { front: 'イエローストーン国立公園', back: 'アメリカ' },
                { front: 'グランド・キャニオン国立公園', back: 'アメリカ' },
                { front: '自由の女神像', back: 'アメリカ' },
                { front: 'マチュ・ピチュ', back: 'ペルー' },
                { front: 'ナスカとパルパの地上絵', back: 'ペルー' },
                { front: 'イグアス国立公園', back: 'アルゼンチン/ブラジル' },
                { front: 'ガラパゴス諸島', back: 'エクアドル' },
                // オセアニア
                { front: 'グレート・バリア・リーフ', back: 'オーストラリア' },
                { front: 'ウルル-カタ・ジュタ国立公園', back: 'オーストラリア' },

                // ここから追加（世界各地）
                { front: 'アントニ・ガウディの作品群', back: 'スペイン' },
                { front: 'ストーンヘンジ', back: 'イギリス' },
                { front: 'ラリベラの岩窟教会群', back: 'エチオピア' },
                { front: 'セレンゲティ国立公園', back: 'タンザニア' },
                { front: '武陵源の景観と歴史地区', back: '中国' },
                { front: 'ハロン湾', back: 'ベトナム' },
                { front: 'グレート・スモーキー山脈国立公園', back: 'アメリカ' },
                { front: 'チチェン・イッツァ', back: 'メキシコ' },
                { front: 'メサ・ヴェルデ国立公園', back: 'アメリカ' },
                { front: 'バガン', back: 'ミャンマー' },
                { front: 'キナバル自然公園', back: 'マレーシア' },
                { front: 'テオティワカンの古代都市', back: 'メキシコ' },
                { front: 'アマルフィ海岸', back: 'イタリア' },
                { front: 'サンティアゴ・デ・コンポステーラの旧市街', back: 'スペイン' },
                { front: 'エフェソス', back: 'トルコ' },
                { front: 'ペルセポリス', back: 'イラン' },
                { front: 'オカバンゴ・デルタ', back: 'ボツワナ' },
                { front: 'ケープ植物区保護地域群', back: '南アフリカ' },
                { front: 'トンガリロ国立公園', back: 'ニュージーランド' },
                { front: 'ハワイ火山国立公園', back: 'アメリカ' },
                { front: 'シギリヤ', back: 'スリランカ' },
                { front: 'ギョレメ国立公園とカッパドキアの岩窟群', back: 'トルコ' },
                { front: 'ラパ・ヌイ国立公園（イースター島）', back: 'チリ' },
                { front: 'カナディアン・ロッキー山脈自然公園群', back: 'カナダ' },
                { front: 'ヨセミテ国立公園', back: 'アメリカ' },
                { front: 'プラハ歴史地区', back: 'チェコ' },
                { front: 'フィレンツェ歴史地区', back: 'イタリア' },
                { front: 'ドゥブロヴニク旧市街', back: 'クロアチア' },
                { front: 'ピサのドゥオモ広場', back: 'イタリア' },
                { front: 'シントラの文化的景観', back: 'ポルトガル' },

                // 日本の構成資産
                { front: '法隆寺の構成資産', back: '法隆寺、法起寺' },
                { front: '古都京都の構成資産数', back: '17件（清水寺、金閣寺、銀閣寺、二条城など）' },
                { front: '古都奈良の構成資産数', back: '8件（東大寺、興福寺、春日大社、春日山原始林など）' }
            ];
            break;
    }

    container.innerHTML = cards.map((card, index) => `
        <div class="heritage-card" style="cursor: pointer; margin-bottom: 20px;" 
             onclick="flipCard(this, ${index})">
            <div id="card-${index}-front" style="display: block;">
                <h3>問題</h3>
                <p style="font-size: 18px; margin-top: 20px;">${card.front}</p>
                <p style="color: #999; margin-top: 20px;">クリックして答えを見る</p>
            </div>
            <div id="card-${index}-back" style="display: none;">
                <h3>答え</h3>
                <p style="font-size: 18px; margin-top: 20px; color: #27ae60; font-weight: bold;">
                    ${card.back}
                </p>
                <p style="color: #999; margin-top: 20px;">クリックして問題に戻る</p>
            </div>
        </div>
    `).join('');
}

function flipCard(element, index) {
    const front = document.getElementById(`card-${index}-front`);
    const back = document.getElementById(`card-${index}-back`);

    if (front.style.display === 'block') {
        front.style.display = 'none';
        back.style.display = 'block';
    } else {
        front.style.display = 'block';
        back.style.display = 'none';
    }
}

// モーダル機能
function showDetailModal(heritage) {
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
        <h2>${heritage.name}</h2>
        <div style="margin-top: 20px;">
            <p><strong>登録年:</strong> ${heritage.year}年</p>
            <p><strong>種別:</strong> ${getTypeLabel(heritage.type)}</p>
            <p><strong>登録基準:</strong> ${heritage.criteria}</p>
            <p><strong>所在地:</strong> ${heritage.location || heritage.country}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                <h3>概要</h3>
                <p>${heritage.description}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 10px;">
                <h3>詳細情報</h3>
                <p>${heritage.details}</p>
            </div>
        </div>
    `;

    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('show');
}

// 進捗管理
function updateProgress() {
    const total = japanHeritages.length + worldHeritages.length + basics.length;
    const studied = studiedItems.size;
    const percentage = Math.round((studied / total) * 100);

    document.getElementById('studyScore').textContent = studied;
    document.getElementById('totalItems').textContent = total;

    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage + '%';
}

// モーダル外クリックで閉じる
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
}

// 名称暗記クイズ（日本・世界の遺産名を当てる）
let currentNameQuiz = [];
let nameQuestionIndex = 0;
let nameCorrectCount = 0;

function startNameQuiz() {
    const category = document.getElementById('nameQuizCategory').value;
    currentNameQuiz = buildNameQuizPool(category);
    currentNameQuiz = shuffleArray(currentNameQuiz);

    nameQuestionIndex = 0;
    nameCorrectCount = 0;

    document.getElementById('nameQuizContainer').style.display = 'block';
    document.getElementById('nameCorrectAnswers').textContent = '0';
    document.getElementById('nameTotalQuestions').textContent = currentNameQuiz.length;

    showNameQuestion();
}

function buildNameQuizPool(category) {
    const pool = category === 'japan' ? japanHeritages : worldHeritages;

    // すべての候補名
    const namesPool = pool.map(h => h.name);

    // 各遺産から1問ずつ生成
    const questions = pool.map(h => {
        // 問題文（ヒントを複合）
        const typeLabel = getTypeLabel(h.type);
        const area = h.location || h.country || '';
        const year = h.year ? `${h.year}年` : '';
        const desc = h.description ? h.description : '';
        const hintParts = [
            area ? `所在地/国: ${area}` : '',
            year ? `登録年: ${year}` : '',
            typeLabel ? `種別: ${typeLabel}` : '',
            desc ? `概要: ${desc}` : ''
        ].filter(Boolean);

        const prompt = `以下のヒントに当てはまる世界遺産名はどれ？\n- ${hintParts.join('\n- ')}`;

        // 選択肢生成
        const { options, correctIndex } = generateNameOptions(h.name, namesPool);

        return {
            prompt,
            options,
            correct: correctIndex
        };
    });

    return questions;
}

function generateNameOptions(correctName, namesPool) {
    const optionsSet = new Set();
    optionsSet.add(correctName);

    // 誤答の候補をランダムに追加
    while (optionsSet.size < 4) {
        const candidate = namesPool[Math.floor(Math.random() * namesPool.length)];
        if (candidate && candidate !== correctName) {
            optionsSet.add(candidate);
        }
    }
    const options = Array.from(optionsSet);
    const shuffled = shuffleArray(options);
    const correctIndex = shuffled.indexOf(correctName);

    return { options: shuffled, correctIndex };
}

function showNameQuestion() {
    if (nameQuestionIndex >= currentNameQuiz.length) {
        endNameQuiz();
        return;
    }

    const q = currentNameQuiz[nameQuestionIndex];
    document.getElementById('nameQuizQuestion').textContent = `問題 ${nameQuestionIndex + 1}: ${q.prompt}`;

    const optionsContainer = document.getElementById('nameQuizOptions');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = opt;
        optionDiv.onclick = () => selectNameAnswer(idx);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('nameQuizResult').classList.remove('show');
    document.getElementById('nameNextButton').style.display = 'none';
}

function selectNameAnswer(index) {
    const q = currentNameQuiz[nameQuestionIndex];
    const options = document.querySelectorAll('#nameQuizOptions .quiz-option');

    options.forEach(opt => opt.onclick = null);

    if (index === q.correct) {
        options[index].classList.add('correct');
        nameCorrectCount++;
        document.getElementById('nameCorrectAnswers').textContent = nameCorrectCount;
        showNameResult('正解！', 'green');
    } else {
        options[index].classList.add('incorrect');
        options[q.correct].classList.add('correct');
        showNameResult('不正解... 正解は: ' + q.options[q.correct], 'red');
    }

    document.getElementById('nameNextButton').style.display = 'block';
}

function showNameResult(message, color) {
    const result = document.getElementById('nameQuizResult');
    result.textContent = message;
    result.style.background = color === 'green' ? '#d4edda' : '#f8d7da';
    result.style.color = color === 'green' ? '#155724' : '#721c24';
    result.classList.add('show');
}

function nextNameQuestion() {
    nameQuestionIndex++;
    showNameQuestion();
}

function endNameQuiz() {
    const percentage = Math.round((nameCorrectCount / currentNameQuiz.length) * 100);
    document.getElementById('nameQuizContainer').innerHTML = `
        <div style="text-align: center; padding: 30px;">
            <h2>クイズ終了！</h2>
            <p style="font-size: 24px; margin: 20px 0;">
                スコア: ${nameCorrectCount} / ${currentNameQuiz.length} (${percentage}%)
            </p>
            <button class="tab-button" onclick="startNameQuiz()">もう一度挑戦</button>
        </div>
    `;
}

// 初回の暗記カード読み込み
loadFlashcards();
