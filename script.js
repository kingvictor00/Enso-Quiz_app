let questionsPool = [
    {
        question: "Enso recently integrated with which app that has $11.9B+ TVL?",
        options: ["Uniswap", "Aave", "ether.fi"],
        correct: 2
    },
    {
        question: "Enso is built to be what type of platform?",
        options: ["Chain-specific", "Chain-agnostic", "EVM-only"],
        correct: 1
    },
    {
        question: "Which wallet has Enso integrated with for DeFi actions?",
        options: ["MetaMask", "Bitget Wallet", "Coinbase Wallet"],
        correct: 1
    },
    {
        question: "Enso has processed over how much in onchain transaction volume?",
        options: ["$10B", "$15B", "$20B"],
        correct: 1
    },
    {
        question: "What does Enso provide for developers?",
        options: ["NFT Marketplace", "Unified API and SDK for DeFi", "Crypto Wallet"],
        correct: 1
    },
    {
        question: "Enso's SDK is written in which language?",
        options: ["JavaScript", "TypeScript", "Python"],
        correct: 1
    },
    {
        question: "How many chains does Oku support, powered by Enso?",
        options: ["10", "37", "50"],
        correct: 1
    },
    {
        question: "Which protocol is Enso integrated with for lending and borrowing?",
        options: ["Uniswap", "Aave", "PancakeSwap"],
        correct: 1
    },
    {
        question: "Enso powered the launch of which chain's Boyco campaign?",
        options: ["Base", "Berachain", "zkSync"],
        correct: 1
    },
    {
        question: "Where was the first-ever Enso community meetup held?",
        options: ["Seoul", "Nigeria", "New York"],
        correct: 1
    },
    {
        question: "Enso's intent engine abstracts what?",
        options: ["Smart contract interactions", "Wallet connections", "Token transfers"],
        correct: 0
    },
    {
        question: "How many cross-chain transactions has Enso's Speedrun campaign driven?",
        options: ["500K", "900K", "2M"],
        correct: 1
    },
    {
        question: "What is the name of Enso's React component for embedding DeFi features?",
        options: ["shortcuts-widget", "defi-widget", "enso-react"],
        correct: 0
    },
    {
        question: "Enso has integrations with how many chains for Uniswap v4?",
        options: ["3", "5", "7"],
        correct: 1
    },
    {
        question: "What is Enso's main tagline?",
        options: ["Blockchain Bridges", "Blockchain Shortcuts", "Blockchain Wallets"],
        correct: 1
    },
    {
        question: "What is Enso's core technology?",
        options: ["Proof of Stake", "Intent Engine", "Layer 2 Scaling"],
        correct: 1
    },
    {
        question: "What is the average daily cross-chain transactions in Enso's Speedrun campaign?",
        options: ["50K", "75K", "100K"],
        correct: 1
    },
    {
        question: "Enso supports cross-chain functionality using which protocol?",
        options: ["LayerZero", "Chainlink", "Wormhole"],
        correct: 0
    },
    {
        question: "Which investors backed Enso?",
        options: ["a16z and Binance Labs", "Polychain and Multicoin Capital", "Sequoia and Paradigm"],
        correct: 1
    },
    {
        question: "Who is the founder of Enso Build?",
        options: ["Connor Howe", "Elon Musk", "Vitalik Buterin"],
        correct: 0
    },
    {
        question: "Which Team member manages the Community?",
        options: ["Niko", "John Smith", "Alex Johnson"],
        correct: 0
    },
    {
        question: "What is the highest community role on the Enso Discord server?",
        options: ["Tip king", "Clipper", "Pilot"],
        correct: 2
    },
    {
        question: "Enso integrates with which DEX on BNB Chain?",
        options: ["Uniswap", "PancakeSwap", "SushiSwap"],
        correct: 1
    },
    {
        question: "Enso's unified API simplifies interactions with how many protocols?",
        options: ["10", "Multiple", "50"],
        correct: 1
    },
    {
        question: "What is Enso's focus in Web3?",
        options: ["NFTs", "DeFi", "Social Media"],
        correct: 1
    },
    {
        question: "Enso supports which type of chains?",
        options: ["EVM-compatible", "Solana", "Bitcoin"],
        correct: 0
    },
    {
        question: "What is the name of Enso's campaign for cross-chain transactions?",
        options: ["Speedrun", "Shortcut", "Intent"],
        correct: 0
    },
    {
        question: "Which blockchain did Enso first deploy on?",
        options: ["Ethereum", "BNB Chain", "Polygon"],
        correct: 0
    },
    {
        question: "What year was Enso founded?",
        options: ["2020", "2021", "2022"],
        correct: 1
    },
    {
        question: "Which chain did Enso support for its first cross-chain tx?",
        options: ["Arbitrum", "Optimism", "Avalanche"],
        correct: 0
    },
    {
        question: "What is Enso's primary goal?",
        options: ["Simplify DeFi", "Create NFTs", "Build wallets"],
        correct: 0
    },
    {
        question: "Enso's API supports which type of transactions?",
        options: ["Single-chain", "Cross-chain", "Off-chain"],
        correct: 1
    },
    {
        question: "Which DeFi protocol does Enso not support?",
        options: ["Aave", "Compound", "Bitcoin"],
        correct: 2
    },
    {
        question: "What is Enso's Discord community mascot?",
        options: ["Shortcat", "Enso Tiger", "DeFi Dog"],
        correct: 0
    },
    {
        question: "Which Enso campaign promotes developer adoption?",
        options: ["Speedrun", "BuildFast", "DeFi Dash"],
        correct: 1
    },
    {
        question: "What is Enso's primary programming language for SDK?",
        options: ["TypeScript", "Rust", "Go"],
        correct: 0
    },
    {
        question: "What is Enso's primary user base?",
        options: ["Developers", "Retail investors", "Institutions"],
        correct: 0
    },
    {
        question: "Enso's Discord has how many members (approx)?",
        options: ["100K", "160K", "255K"],
        correct: 2
    },
    {
        question: "Enso's API supports which blockchain type?",
        options: ["Layer 1", "Layer 2", "Both"],
        correct: 2
    },
    {
        question: "Which Enso campaign rewards cross-chain activity?",
        options: ["Speedrun", "BuildFast", "Shortcat Rewards"],
        correct: 0
    },
    {
        question: "Enso's API supports which token standard?",
        options: ["ERC-20", "ERC-721", "Both"],
        correct: 2
    },
    {
        question: "Which Enso feature enhances UX?",
        options: ["Intent Engine", "API", "Widget"],
        correct: 2
    },
    {
        question: "What is Enso's primary blockchain focus?",
        options: ["Ethereum", "Multi-chain", "Solana"],
        correct: 1
    },
    {
        question: "What is Enso's primary DeFi focus?",
        options: ["Swapping", "Lending", "Cross-chain"],
        correct: 2
    },
    {
        question: "Enso's Discord role for moderators is?",
        options: ["Enso mods", "Modifier", "Shortcat Mod"],
        correct: 0
    },
    {
        question: "Which Enso feature is open-source?",
        options: ["API", "SDK", "Both"],
        correct: 2
    }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let userName = '';
let selectedAnswer = null;
let isProcessing = false;
let userAnswers = [];

function startQuiz() {
    userName = document.getElementById('nameInput').value.trim();
    if (!userName) {
        alert('Please enter your name!');
        return;
    }
    const shuffledPool = shuffleArray([...questionsPool]);
    questions = shuffledPool.slice(0, 10);
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('question').innerText = currentQuestion.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;
        radio.onclick = () => selectAnswer(index, label);

        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${option}`));
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement('br'));
    });

    document.getElementById('next-button').style.display = 'none';
    selectedAnswer = null;
    isProcessing = false;
    startTimer();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    let timeLeft = 10;
    document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            if (selectedAnswer !== null && !isProcessing) {
                nextQuestion();
            } else {
                currentQuestionIndex++;
                showQuestion();
            }
        }
    }, 1000);
}

function selectAnswer(index, label) {
    if (isProcessing) return;
    selectedAnswer = index;
    const labels = document.querySelectorAll('#options label');
    for (let l of labels) {
        l.classList.remove('selected');
    }
    label.classList.add('selected');
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    if (isProcessing) return;
    isProcessing = true;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;

    if (selectedAnswer !== null) {
        const correctIndex = questions[currentQuestionIndex].correct;
        if (selectedAnswer === correctIndex) {
            score++;
        }
        userAnswers.push(selectedAnswer);
    } else {
        userAnswers.push(null);
    }
    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('question-counter').innerText = '';
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    let message, imageSrc;

    if (percentage <= 40) {
        message = 'Oops, looks like you need to brush up on Enso!';
        imageSrc = 'fail.jpg';
    } else if (percentage < 80) {
        message = 'Nice try, you’re on your way to Shortcat status!';
        imageSrc = 'middle.jpg';
    } else {
        message = 'Awesome job, true Shortcat!';
        imageSrc = 'winner.jpg';
        document.getElementById('high-score-emoji').style.display = 'block';
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00FF85', '#8B5CF6', '#FFFFFF']
        });
        setTimeout(() => {
            confetti({
                particleCount: 50,
                spread: 90,
                origin: { y: 0.4 },
                colors: ['#00FF85', '#8B5CF6', '#FFFFFF']
            });
        }, 300);
    }

    const scoreText = `Hey ${userName}, your score is ${score} out of ${totalQuestions}! ${message}`.replace(/\n/g, ' ').trim();
    document.getElementById('score').innerText = scoreText;
    document.getElementById('result-image').src = imageSrc;
    if (percentage < 80) {
        document.getElementById('high-score-emoji').style.display = 'none';
    }
    document.getElementById('results-detail').style.display = 'none';
}

function viewResults() {
    const resultsDetail = document.getElementById('results-detail');
    resultsDetail.innerHTML = '<button id="close-results" onclick="closeResults()">Close</button>';
    questions.forEach((q, index) => {
        const userChoice = userAnswers[index];
        const div = document.createElement('div');
        div.classList.add('question');
        div.innerHTML = `<strong>Question ${index + 1}: ${q.question}</strong><br>`;
        q.options.forEach((opt, optIndex) => {
            let className = '';
            if (optIndex === q.correct) {
                className = 'correct';
            }
            if (userChoice === optIndex && userChoice !== q.correct) {
                className = 'incorrect';
            }
            div.innerHTML += `<span class="${className}">${opt}</span><br>`;
        });
        resultsDetail.appendChild(div);
    });
    resultsDetail.style.display = 'block';
}

function closeResults() {
    document.getElementById('results-detail').style.display = 'none';
}

function shareOnX() {
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    let quote;
    if (percentage <= 40) {
        quote = 'Took the Enso Quiz and got some learning to do! 📚 #EnsoBuild';
    } else if (percentage < 80) {
        quote = 'Solid effort on the Enso Quiz! On my way to Shortcat status! 💪 #EnsoBuild';
    } else {
        quote = 'True Shortcat mastery unlocked! 🚀 #EnsoBuild';
    }
    const tweetText = `Hey Shortcats! I scored ${score}/${totalQuestions} on the Enso Community Quiz! ${quote}`;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank');
}

function downloadScoreImage() {
    const scoreCard = document.getElementById('score-card');
    html2canvas(scoreCard, {
        backgroundColor: '#1E2235',
        useCORS: true,
        scale: 2,
        width: 320,
        height: 320,
        logging: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'enso-quiz-score.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function quitQuiz() {
    if (!confirm("Are you sure you want to quit the quiz?")) return;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    currentQuestionIndex = 0;
    score = 0;
    userName = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    document.getElementById('question-counter').innerText = '';
}

function restartQuiz() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    currentQuestionIndex = 0;
    score = 0;
    userName = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    document.getElementById('question-counter').innerText = '';
}
