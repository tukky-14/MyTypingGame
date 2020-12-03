'use strict';

{
  function setWord() {
    data = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    word = data[0];
    explanation = data[1];
    target.textContent = word;
    loc = 0;
  }

  function setExplanation() {
    let text = document.getElementById('explanation')
    text.innerText = explanation;
  }

  const words = [
    ['kimetsunoyaiba', '鬼滅の刃'],
    ['jujutukaisenn', '呪術廻戦'],
    ['dragonball', 'ドラゴンボール'],
    ['slamdunk', 'スラムダンク'],
    ['hunterhunter', 'HUNTER×HUNTER'],
    ['gintama', '銀魂'],
    ['onepiece', 'ワンピース'],
    ['naruto', 'ナルト'],
    ['bokunoheroacademia', '僕のヒーローアカデミア'],
    ['kotirakatsusikakukamearikouenmaehasyutujo', 'こちら葛飾区亀有公園前派出所'],
  ];
  let word;
  let data;
  let explanation;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
    setExplanation();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      // 早期リターン
      return;
    }
    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        document.getElementById('explanation').innerText = '';
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }
      
      setWord();
      setExplanation();
    }
  });
}