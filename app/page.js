'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      text: "राजस्थान की तपती धरती पर रहने वाली एक दादी को हमेशा से ठंड पसंद थी।",
      scene: "intro"
    },
    {
      text: "एक दिन दादी ने सोचा— 'क्यों न मैं यहाँ गरमी में एक बर्फ़ का घर बना लूँ!'",
      scene: "thinking"
    },
    {
      text: "दादी मैदान में पहुँची और ठंडी–ठंडी जादुई बर्फ़ इकट्ठा करने लगी।",
      scene: "collecting"
    },
    {
      text: "लेकिन बर्फ़ उठाते-उठाते उनका हाथ थक गया। तभी पेड़ पर बैठा एक शरारती बंदर उछलकर नीचे आया।",
      scene: "monkey"
    },
    {
      text: "बंदर बोला— 'दादी, मैं मदद करूँ?' दादी हँसकर बोलीं— 'क्यों नहीं बेटा, आज हम दोनों मिलकर राजस्थान में बर्फ़ का महल बनाएँगे!'",
      scene: "teamup"
    },
    {
      text: "दोनों ने मिलकर गोल–गोल बर्फ़ के ब्लॉक बनाए, उन्हें जोड़कर एक सुंदर सफेद घर तैयार किया।",
      scene: "building"
    },
    {
      text: "दादी ने दरवाज़े पर एक छोटी रंगोली भी बना दी—बर्फ़ की बनी हुई!",
      scene: "rangoli"
    },
    {
      text: "बंदर ने अपनी पूँछ से घर की छत साफ की और बोला— 'दादी, ये घर तो पूरा राजसी लग रहा है!'",
      scene: "cleaning"
    },
    {
      text: "दादी बोलीं— 'तूने मदद की है न, इसलिए ये बर्फ़ का घर और भी खास बन गया।'",
      scene: "happy"
    },
    {
      text: "शाम होने तक दोनों उस ठंडे घर में बैठकर छाछ पीते हुए राजस्थान की गर्मी से बचते रहे।",
      scene: "ending"
    }
  ];

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const resetStory = () => {
    setCurrentScene(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.storyBook}>
        <h1 className={styles.title}>दादी और बंदर का बर्फ़ का घर</h1>

        <div className={styles.sceneContainer}>
          <div className={`${styles.scene} ${styles[scenes[currentScene].scene]}`}>
            {renderScene(scenes[currentScene].scene)}
          </div>
        </div>

        <div className={styles.textBox}>
          <p className={styles.storyText}>{scenes[currentScene].text}</p>
        </div>

        <div className={styles.controls}>
          <button
            onClick={prevScene}
            disabled={currentScene === 0}
            className={styles.button}
          >
            ← पीछे
          </button>
          <span className={styles.pageNumber}>
            {currentScene + 1} / {scenes.length}
          </span>
          {currentScene === scenes.length - 1 ? (
            <button onClick={resetStory} className={styles.button}>
              फिर से शुरू करें
            </button>
          ) : (
            <button onClick={nextScene} className={styles.button}>
              आगे →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function renderScene(sceneName) {
  switch(sceneName) {
    case 'intro':
      return (
        <>
          <div className="sun">☀️</div>
          <div className="granny">👵</div>
          <div className="desert">🏜️</div>
        </>
      );
    case 'thinking':
      return (
        <>
          <div className="sun">☀️</div>
          <div className="granny thinking">👵</div>
          <div className="thought">💭❄️</div>
        </>
      );
    case 'collecting':
      return (
        <>
          <div className="granny collecting">👵</div>
          <div className="ice1">🧊</div>
          <div className="ice2">🧊</div>
          <div className="ice3">❄️</div>
        </>
      );
    case 'monkey':
      return (
        <>
          <div className="granny tired">👵</div>
          <div className="tree">🌳</div>
          <div className="monkey jumping">🐵</div>
        </>
      );
    case 'teamup':
      return (
        <>
          <div className="granny happy">👵</div>
          <div className="monkey happy">🐵</div>
          <div className="sparkles">✨</div>
        </>
      );
    case 'building':
      return (
        <>
          <div className="granny working">👵</div>
          <div className="monkey working">🐵</div>
          <div className="iceBlock1">🧊</div>
          <div className="iceBlock2">🧊</div>
          <div className="iceBlock3">🧊</div>
          <div className="houseBase">🏠</div>
        </>
      );
    case 'rangoli':
      return (
        <>
          <div className="iceHouse">🏠</div>
          <div className="granny decorating">👵</div>
          <div className="rangoli">🌸❄️🌸</div>
        </>
      );
    case 'cleaning':
      return (
        <>
          <div className="iceHouse big">🏠</div>
          <div className="monkey cleaning">🐵</div>
          <div className="stars">⭐✨⭐</div>
        </>
      );
    case 'happy':
      return (
        <>
          <div className="iceHouse complete">🏰</div>
          <div className="granny proud">👵</div>
          <div className="monkey proud">🐵</div>
          <div className="hearts">💙❄️💙</div>
        </>
      );
    case 'ending':
      return (
        <>
          <div className="iceHouse complete">🏰</div>
          <div className="sunset">🌅</div>
          <div className="granny sitting">👵</div>
          <div className="monkey sitting">🐵</div>
          <div className="chachh">🥛</div>
        </>
      );
    default:
      return null;
  }
}
