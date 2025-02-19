// **レビュー項目データ　円グラフ**
const reviewData = {
    items: [
        { label: "任意の要素１", score: 4.5 },
        { label: "任意の要素２", score: 4.0 },
        { label: "任意の要素３", score: 4.2 },
        { label: "任意の要素４", score: 3.8 },
        { label: "任意の要素５", score: 4.6 }
    ],
    recommendation: 4.2, // おすすめ度（総合）
    points: [
        "任意の特長１",
        "任意の特長２",
        "任意の特長３"
    ]
};

// **円グラフを生成**
const container = document.getElementById("circleContainer");
reviewData.items.forEach(item => {
    const percentage = (item.score / 5) * 100;
    const circleHTML = `
        <div class="circle">
            <div class="progress-bar" style="background: conic-gradient(orange ${percentage}%, lightgray ${percentage}%);">${item.score}</div>
            <span class="circle-label">${item.label}</span>
        </div>
    `;
    container.innerHTML += circleHTML;
});

// **おすすめ度の更新**
document.getElementById("recommendScore").innerText = reviewData.recommendation;

// **ポイントをリスト化**
const pointsContainer = document.getElementById("pointsContainer");
reviewData.points.forEach(point => {
    pointsContainer.innerHTML += `<p>✅ ${point}</p>`;
});
