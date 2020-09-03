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
  const [severity, setSeverity] = useState(null);
  const [increase, setIncrease] = useState(null);

  const fetchSeverity = async (district) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/?district=" + district
    );
    const data = await response.json();

    // 어제 대비 오늘 증가 확진자 수 계산
    const yesterday = data.yesterday.count;
    const today = data.today.count;
    const increase = today - yesterday;
    setIncrease(increase);

    // 증가량에 따른 위험도 변환
    let newSeverity = severity;
    if (increase > 10) {
      newSeverity = "extreme";
    } else if (increase > 5) {
      newSeverity = "bad";
    } else if (increase > 0) {
      newSeverity = "okay";
    } else {
      newSeverity = "good";
    }
    console.log(severity, newSeverity);
    setSeverity(newSeverity);
  };

  // 주소 선택 시 주소, 시/도, 시/군/구 값 전달
  const handleAddressSelection = (address, sido, sigungu) => {
    if (sido != "서울") {
      return alert("서울 외의 지역은 지원하지 않습니다.");
    }
    // TODO - 구 확진자 심각도 API 호출
    console.log(sigungu);
    setAddress(address);
    toggleIsSearching();
    fetchSeverity(sigungu);
  };

  const handleDataRefresh = async () => {
    try {
      await fetch("http://localhost:8000/api/v1/", {
        method: "POST",
      });
      // fetchSeverity(district);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleIsSearching = () => setIsSearching(!isSearching);

  return (
    <div className={styles.container}>
      <Head>
        <title>Covidity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main currentState={severity}>
        <div className={styles.headerWrap}>
          <div className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.textLogo}>Covidity</div>
          </div>
          {/* <div className={styles.refresh}></div> */}
        </div>

        <div>현재 위치:</div>
        <div className={styles.location}>{address}</div>
        <div className={styles.emoji}>
          <HeroEmoji currentState={severity} />
        </div>
        <MainMessage currentState={severity} />
        <div className={styles.description}>
          {increase == null
            ? "위치를 검색해서 코로나 위험도를 파악하세요."
            : `어제 대비 내 주변 오늘의 확진자 변화량은 ${increase}명 입니다.`}
        </div>
        {isSearching ? (
          <PostCode onAddressSelect={handleAddressSelection} />
        ) : (
          <div className={styles.secondary} onClick={toggleIsSearching}>
            <input
              className={styles.input}
              value={address}
              readOnly
              placeholder="어디로 가실 예정인가요?"
            />
            <button className={styles.search}
            >
              <div className={styles.searchIcon}></div>
            </button>
          </div>
        )}

        {/* <div onClick={handleDataRefresh} className={styles.summary}>
          <div className={styles.refresh}></div>
        </div> */}
      </Main>
    </div>
  );
}
