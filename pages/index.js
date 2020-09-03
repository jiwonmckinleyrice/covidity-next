import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HeroEmoji } from "../components/HeroEmoji";
import { Main } from "../components/Main";
import { MainMessage } from "../components/MainMessage";
import { PostCode } from "../components/PostCode";

export default function Home() {
  const [address, setAddress] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // 주소 선택 시 주소, 시/도, 시/군/구 값 전달
  const handleAddressSelection = (address, sido, sigungu) => {
    if (sido != "서울") {
      return alert("서울 외의 지역은 지원하지 않습니다.")
    }
    // TODO - 구 확진자 심각도 API 호출
    console.log(sigungu)
    setAddress(address);
    toggleIsSearching();
  };

  const toggleIsSearching = () => setIsSearching(!isSearching);

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
        <div className={styles.location}>{address}</div>
        <div className={styles.emoji}>
          <HeroEmoji currentState="extreme" />
        </div>
        <MainMessage currentState="extreme" />
        <div className={styles.description}>
          현재 ㅁ니;ㅇ럼니;어림ㅇㄴㄹㅁㄴㅇㄹㄴㅁㅇㄹㄴㅁ;ㅓㄹ이며,
          니어ㅏㄹ민;ㅓㅇ람ㄴ이럼ㅇ; 입니다.
        </div>
        {isSearching ? (
          <PostCode onAddressSelect={handleAddressSelection} />
        ) : (
          <div className={styles.secondary} onClick={toggleIsSearching}>
            <input
              className={styles.input}
              value={address}
              placeholder="어디로 가실 예정인가요?"
            />
            <button className={styles.search}>
              <div className={styles.searchIcon}></div>
            </button>
          </div>
        )}

        <div className={styles.summary}></div>
      </Main>
    </div>
  );
}
