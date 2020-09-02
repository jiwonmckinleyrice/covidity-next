import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { HeroEmoji } from '../components/HeroEmoji';
import { Main } from '../components/Main';
import { MainMessage } from '../components/MainMessage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covidity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main currentState="extreme">
        <div className={styles.headerWrap}>
          <div className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.textLogo}>Covidity</div>
          </div>
          <div className={styles.refresh}></div>
        </div>

        <div>현재 위치:</div>
        <div className={styles.location}>강남구 역삼1동</div>
        {/* <div className={styles.hero}></div> */}
        <div className={styles.emoji}>
          <HeroEmoji currentState="extreme" />
        </div>
        <MainMessage currentState="extreme" />
        <div className={styles.description}>
          현재 ㅁ니;ㅇ럼니;어림ㅇㄴㄹㅁㄴㅇㄹㄴㅁㅇㄹㄴㅁ;ㅓㄹ이며,
          니어ㅏㄹ민;ㅓㅇ람ㄴ이럼ㅇ; 입니다.
        </div>
        <div className={styles.secondary}>
          <input
            className={styles.input}
            placeholder="어디로 가실 예정인가요?"
          ></input>
          <button className={styles.search}>
            <div className={styles.searchIcon}></div>
          </button>
        </div>

        <div className={styles.summary}></div>
      </Main>
    </div>
  );
}
