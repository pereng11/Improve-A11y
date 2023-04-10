type WebtoonDay =
  | "월요웹툰"
  | "화요웹툰"
  | "수요웹툰"
  | "목요웹툰"
  | "금요웹툰"
  | "토요웹툰"
  | "일요웹툰";

interface Webtoon {
  title: string;
  thumbnail: string;
}

type WebtoonListByDay = {
  [key in WebtoonDay]: Webtoon[];
};

export const WEBTOONLIST_BY_DAY: WebtoonListByDay = {
  월요웹툰: [
    {
      title: "뷰티풀 군바리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/648419/thumbnail/thumbnail_IMAG21_d9398229-cbfd-47dc-9208-0a6fb936f3a7.jpg",
    },
    {
      title: "신의 탑",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
    },
    {
      title: "퀘스트지상주의",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783052/thumbnail/thumbnail_IMAG21_e14cbea7-8416-40e7-9aae-ccff970ac88f.jpg",
    },
    {
      title: "2023 요즘연애 특)",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807831/thumbnail/thumbnail_IMAG21_0ed8d77a-8096-4ac3-ba20-6e3fb27b41ec.jpg",
    },
    {
      title: "장씨세가 호위무사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/728750/thumbnail/thumbnail_IMAG21_47c21251-b213-4882-bacc-15adce1acfc8.jpg",
    },
    {
      title: "신화급 귀속 아이템을 손에 넣었다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795297/thumbnail/thumbnail_IMAG21_4134925888999731505.jpg",
    },
    {
      title: "윈드브레이커",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
    },
    {
      title: "소녀의 세계",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/654774/thumbnail/thumbnail_IMAG21_4048794550434817075.jpg",
    },
    {
      title: "똑 닮은 딸",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_cf7085c1-bfe2-49af-a82f-402e1597a02c.jpg",
    },
    {
      title: "버림받은 왕녀의 은밀한 침실",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796867/thumbnail/thumbnail_IMAG21_77aa5064-b42b-4838-912e-2c6266c53a74.jpg",
    },
    {
      title: "앵무살수",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/739115/thumbnail/thumbnail_IMAG21_7077747896626722102.jpg",
    },
    {
      title: "별난식당",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806189/thumbnail/thumbnail_IMAG21_292de414-bd9a-418d-a4e9-d97060398223.jpg",
    },
    {
      title: "백수세끼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/733074/thumbnail/thumbnail_IMAG21_80df3e76-47af-4007-b57c-e8f2830835e5.jpg",
    },
    {
      title: "만렙돌파",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/759940/thumbnail/thumbnail_IMAG21_3976787538998813497.jpg",
    },
    {
      title: "퍼니게임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801035/thumbnail/thumbnail_IMAG21_01fd148f-edb2-4ada-9571-910981ec3376.jpg",
    },
    {
      title: "호랑신랑뎐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795643/thumbnail/thumbnail_IMAG21_bf51fa0f-e374-49f8-973d-c17c5385bbef.jpg",
    },
    {
      title: "잔불의 기사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/768536/thumbnail/thumbnail_IMAG21_91c5c081-77e6-4516-a503-2f45aad57401.jpg",
    },
    {
      title: "꼬리잡기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758666/thumbnail/thumbnail_IMAG21_7364564497641911606.jpg",
    },
    {
      title: "천재 타자가 강속구를 숨김",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807775/thumbnail/thumbnail_IMAG21_91cb8ff9-5be3-40ba-8df9-661972577cd2.jpg",
    },
    {
      title: "나 없는 단톡방",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805907/thumbnail/thumbnail_IMAG21_ab626e51-db74-46ff-8fdb-4a62edbc4fd1.jpg",
    },
    {
      title: "물어보는 사이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/772725/thumbnail/thumbnail_IMAG21_7769fa4b-5f29-4622-af74-613bda6a47ef.jpg",
    },
    {
      title: "순정말고 순종",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/761461/thumbnail/thumbnail_IMAG21_e3c857a7-900b-4085-969a-75d9127b5a38.jpg",
    },
    {
      title: "북부 공작님을 유혹하겠습니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794421/thumbnail/thumbnail_IMAG21_7149805464895174963.jpg",
    },
    {
      title: "히어로메이커",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/21815/thumbnail/thumbnail_IMAG21_7292511306663934265.jpg",
    },
    {
      title: "포스트 팬데믹",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807159/thumbnail/thumbnail_IMAG21_e7c75b1e-7bc4-484b-874d-1245f114479e.jpg",
    },
    {
      title: "수영만화일기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/768534/thumbnail/thumbnail_IMAG21_25248bb7-e4d2-41ea-b011-9553c343330b.jpg",
    },
    {
      title: "리턴 투 플레이어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/752414/thumbnail/thumbnail_IMAG21_b66a0f20-01c1-4b3f-ab8e-1d5ca6f089fe.jpg",
    },
    {
      title: "신군",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783050/thumbnail/thumbnail_IMAG21_ca9a662b-7a79-4e80-94c9-d62ebe597aad.jpg",
    },
    {
      title: "루루라라 우리네 인생",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802039/thumbnail/thumbnail_IMAG21_a7a82a34-586c-4acf-b6f2-ab052be786f1.jpg",
    },
    {
      title: "이별 후 사내 결혼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785253/thumbnail/thumbnail_IMAG21_a9f2b315-32d8-48bf-afbe-4ccdef9cd8d7.jpg",
    },
    {
      title: "더블클릭",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/769663/thumbnail/thumbnail_IMAG21_935bf47d-9219-4f45-8a58-d5a7af13ce51.jpg",
    },
    {
      title: "결혼생활 그림일기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/741891/thumbnail/thumbnail_IMAG21_47b971e4-00b6-451b-862e-1060bae5a80d.jpg",
    },
    {
      title: "또다시, 계약 부부",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774040/thumbnail/thumbnail_IMAG21_7365182423173379889.jpg",
    },
    {
      title: "아, 쫌 참으세요 영주님!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774703/thumbnail/thumbnail_IMAG21_b33df570-a89d-42c7-bcfb-6a946c4b8846.jpg",
    },
    {
      title: "고백어택",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807397/thumbnail/thumbnail_IMAG21_d0a7cee2-4ded-4506-aedf-71c25675247c.jpg",
    },
    {
      title: "악취해결사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807600/thumbnail/thumbnail_IMAG21_f1a481c2-78fb-433d-8db4-01e31b150755.jpg",
    },
    {
      title: "랭커",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801827/thumbnail/thumbnail_IMAG21_46875d4a-190f-4663-bac5-0d3003263646.jpg",
    },
    {
      title: "미니어처 생활백서",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791616/thumbnail/thumbnail_IMAG21_4136100197482837305.jpg",
    },
    {
      title: "파운더",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791205/thumbnail/thumbnail_IMAG21_7149240538535388720.jpg",
    },
    {
      title: "오빠집이 비어서",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780414/thumbnail/thumbnail_IMAG21_fc2621b0-84c3-404d-a18d-5925dba6ab77.jpg",
    },
    {
      title: "꿈의 기업",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/687915/thumbnail/thumbnail_IMAG21_d46ad6b8-e9a8-4bc8-b501-e62adfee0eb6.jpg",
    },
    {
      title: "서브 남주가 파업하면 생기는 일",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803518/thumbnail/thumbnail_IMAG21_32d146f5-7e22-4fe4-bc73-92b2e446d7f7.jpg",
    },
    {
      title: "다시쓰는 연애사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793274/thumbnail/thumbnail_IMAG21_25a04dea-a6d3-4232-8c86-35bec996fde1.jpg",
    },
    {
      title: "인섹터",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801710/thumbnail/thumbnail_IMAG21_b65d115a-9224-4d45-9773-18addbc432d3.jpg",
    },
    {
      title: "사이다걸",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800333/thumbnail/thumbnail_IMAG21_bc491ae3-1eb3-40e3-b332-096f164c6bcb.jpg",
    },
    {
      title: "역주행!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/776256/thumbnail/thumbnail_IMAG21_d520a876-7403-4349-a56a-f1203882bed2.jpg",
    },
    {
      title: "강남의 기사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802865/thumbnail/thumbnail_IMAG21_9c102547-7b81-4dbb-9b8f-e7e852b31a88.jpg",
    },
    {
      title: "트러블리걸",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/808074/thumbnail/thumbnail_IMAG21_d4899238-5123-443d-826c-f70b1f3618a5.jpg",
    },
    {
      title: "피폐물의 해피엔딩을 위하여",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805437/thumbnail/thumbnail_IMAG21_e830e751-20be-4c57-a6ff-f299588d05b6.jpg",
    },
    {
      title: "하루의 하루",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774302/thumbnail/thumbnail_IMAG21_4121973654889457249.jpg",
    },
    {
      title: "불청객",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796903/thumbnail/thumbnail_IMAG21_3775813335458735414.jpg",
    },
    {
      title: "헬크래프트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800034/thumbnail/thumbnail_IMAG21_a340a6df-b77c-436a-a729-70927915634d.jpg",
    },
    {
      title: "우산 없는 애",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796059/thumbnail/thumbnail_IMAG21_dacecec6-8bea-47b2-b91a-3a1bb19fae21.jpg",
    },
    {
      title: "아슈타르테",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798277/thumbnail/thumbnail_IMAG21_7295ad46-853c-4bd9-8ddf-0c2367734813.jpg",
    },
    {
      title: "원하나",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804469/thumbnail/thumbnail_IMAG21_58ca8ef5-6656-45c4-9ad8-45750c2bf575.jpg",
    },
    {
      title: "사랑의 헌옷수거함",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758667/thumbnail/thumbnail_IMAG21_3689910875657090614.jpg",
    },
    {
      title: "집사, 주세요!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802033/thumbnail/thumbnail_IMAG21_ccce5530-0976-4a0d-b76c-d54c5620cdd5.jpg",
    },
    {
      title: "라서드",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/756140/thumbnail/thumbnail_IMAG21_7c527b6e-773f-40c8-aa1a-5cbd9e7dc482.jpg",
    },
    {
      title: "입술이 예쁜 남자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791629/thumbnail/thumbnail_IMAG21_4122541015824753209.jpg",
    },
    {
      title: "주작연애",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802854/thumbnail/thumbnail_IMAG21_8acfafa7-d1db-42fa-9e01-3b7500650e11.jpg",
    },
    {
      title: "도깨비 부른다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800618/thumbnail/thumbnail_IMAG21_0e4be823-3c99-480c-923a-eaa554b46646.jpg",
    },
    {
      title: "악당과 악당이 만나면",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804782/thumbnail/thumbnail_IMAG21_f09967ec-e4e8-4fb8-a8d5-a65db4c6e14e.jpg",
    },
    {
      title: "백호랑",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/745654/thumbnail/thumbnail_IMAG21_3978989878055821874.jpg",
    },
    {
      title: "경비실에서 안내방송 드립니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792780/thumbnail/thumbnail_IMAG21_3617014355049527398.jpg",
    },
    {
      title: "파견체",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791256/thumbnail/thumbnail_IMAG21_3833187132113172581.jpg",
    },
    {
      title: "토마토가 돼라!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805702/thumbnail/thumbnail_IMAG21_e7e812d2-5d0a-46c6-8a39-b67a5010a7bc.jpg",
    },
    {
      title: "오늘의 비너스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793944/thumbnail/thumbnail_IMAG21_0c4cd9dc-26bc-4977-88ab-ec2939612bba.jpg",
    },
    {
      title: "매지컬 급식:암살법사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791062/thumbnail/thumbnail_IMAG21_3688502388424061793.jpg",
    },
    {
      title: "메리의 불타는 행복회로",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797253/thumbnail/thumbnail_IMAG21_3adf296f-505b-4824-98b0-61c28432fb2d.jpg",
    },
    {
      title: "영앤리치가 아니야!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/734574/thumbnail/thumbnail_IMAG21_8688bbf6-1067-465b-9070-4fef7c1ab1cd.jpg",
    },
    {
      title: "최후의 금빛아이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/772734/thumbnail/thumbnail_IMAG21_7161620837452636770.jpg",
    },
    {
      title: "지옥연애환담",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794156/thumbnail/thumbnail_IMAG21_759dc2a2-7315-4c34-a980-36e176614795.jpeg",
    },
    {
      title: "너를 돌려차는 방법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802551/thumbnail/thumbnail_IMAG21_04fdcd36-c440-4feb-8b3d-573b3584a32f.jpg",
    },
    {
      title: "굿바이 유교보이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798293/thumbnail/thumbnail_IMAG21_fcea0ff3-a906-43f7-b801-aaf8a2d48b23.jpg",
    },
    {
      title: "루크 비셸 따라잡기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794939/thumbnail/thumbnail_IMAG21_78e1e689-f14c-4fe4-a9fa-27953c051124.jpg",
    },
    {
      title: "세번째 로망스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796368/thumbnail/thumbnail_IMAG21_9f304f70-bc24-4cdc-b582-8d1b63d013e0.jpg",
    },
    {
      title: "모스크바의 여명",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/772243/thumbnail/thumbnail_IMAG21_3918807214864216674.jpg",
    },
    {
      title: "나만의 고막남친",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/788170/thumbnail/thumbnail_IMAG21_7221576313225962034.jpg",
    },
    {
      title: "퇴근 후에 만나요",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801517/thumbnail/thumbnail_IMAG21_0a77b0a7-0677-4228-b88b-84619093999f.jpg",
    },
    {
      title: "모노마니아",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794942/thumbnail/thumbnail_IMAG21_706ebfb9-6fa3-4834-bdd3-afd8e5dc8601.jpg",
    },
    {
      title: "버그이터",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793067/thumbnail/thumbnail_IMAG21_3544444194497192757.jpg",
    },
    {
      title: "슈퍼스타 천대리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785749/thumbnail/thumbnail_IMAG21_e9bd8985-7e0d-4ee0-93f3-1d9402a2608c.jpg",
    },
    {
      title: "사막에 핀 달",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/769801/thumbnail/thumbnail_IMAG21_7305454743905843000.jpg",
    },
    {
      title: "연애 연기대상",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803123/thumbnail/thumbnail_IMAG21_4a7c5fbd-fe54-484c-a2e6-0ec548fbbb5c.jpg",
    },
    {
      title: "결혼공략",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792317/thumbnail/thumbnail_IMAG21_524ed207-a4c2-4864-b8e1-3aef96a7ba41.jpg",
    },
    {
      title: "중독연구소",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/740132/thumbnail/thumbnail_IMAG21_d6f6e062-23d4-432a-a4be-6e1e66f63ede.jpg",
    },
    {
      title: "디나운스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789591/thumbnail/thumbnail_IMAG21_7005123160025948516.jpg",
    },
    {
      title: "별을 쫓는 소년들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/786979/thumbnail/thumbnail_IMAG21_495b3195-2185-458e-a07b-4af0f4ff6532.jpg",
    },
    {
      title: "행운을 부탁해!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799868/thumbnail/thumbnail_IMAG21_edfa4344-9f13-4a6c-8b9f-00d08cf37a1d.jpg",
    },
    {
      title: "오로지 오로라",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/764623/thumbnail/thumbnail_IMAG21_7305232428546929716.jpg",
    },
  ],
  화요웹툰: [
    {
      title: "김부장",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg",
    },
    {
      title: "대학원 탈출일지",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg",
    },
    {
      title: "내가 키운 S급들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784248/thumbnail/thumbnail_IMAG21_20a8aca7-23d3-4bc0-9916-a31ebc884ca8.jpg",
    },
    {
      title: "마루는 강쥐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg",
    },
    {
      title: "여신강림",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/703846/thumbnail/thumbnail_IMAG21_3617626786448291892.jpg",
    },
    {
      title: "한림체육관",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/743139/thumbnail/thumbnail_IMAG21_6012f944-ea1f-4328-ba22-bca09be494ee.jpg",
    },
    {
      title: "사신소년",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/730656/thumbnail/thumbnail_IMAG21_fc6d8dbf-eed2-43d0-af45-2edb3cc4244e.jpg",
    },
    {
      title: "멸망 이후의 세계",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789979/thumbnail/thumbnail_IMAG21_3918466168707821881.jpg",
    },
    {
      title: "천마는 평범하게 살 수 없다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774358/thumbnail/thumbnail_IMAG21_82c2edef-2f7f-4376-97e1-ff302b35e627.jpg",
    },
    {
      title: "하루만 네가 되고 싶어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/738487/thumbnail/thumbnail_IMAG21_66eac5ec-876b-469e-ab05-81261fddde8d.jpg",
    },
    {
      title: "사변괴담",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804783/thumbnail/thumbnail_IMAG21_a80f7760-3c93-4002-84d4-eece85593f84.jpg",
    },
    {
      title: "놓지마 정신줄 시즌3",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801589/thumbnail/thumbnail_IMAG21_1b439234-e17d-4fb8-9eef-5d2d4173234c.jpg",
    },
    {
      title: "삼국지톡",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/711422/thumbnail/thumbnail_IMAG21_fd8cb5db-01ab-4c7b-a2a9-920d4479d5f7.jpg",
    },
    {
      title: "집이 없어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/721433/thumbnail/thumbnail_IMAG21_c907f727-e522-4517-952e-398ea95d2efb.jpg",
    },
    {
      title: "헬58",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/719508/thumbnail/thumbnail_IMAG21_4049636999763944505.jpg",
    },
    {
      title: "저 그런 인재 아닙니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802840/thumbnail/thumbnail_IMAG21_1ae41652-be65-4c1d-be08-8df716aaa41c.jpg",
    },
    {
      title: "궤짝",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802389/thumbnail/thumbnail_IMAG21_2c396e53-5710-47b4-b9ae-0b9582454479.jpg",
    },
    {
      title: "하북팽가 막내아들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783877/thumbnail/thumbnail_IMAG21_3904965231037146418.jpg",
    },
    {
      title: "악몽의 형상",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793283/thumbnail/thumbnail_IMAG21_4136055320174945841.jpg",
    },
    {
      title: "랜덤채팅의 그녀!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/702608/thumbnail/thumbnail_IMAG21_7005692479348499809.jpg",
    },
    {
      title: "시한부인 줄 알았어요!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801711/thumbnail/thumbnail_IMAG21_bf581fbe-7d3d-4ff6-bfd3-a973f3c65aa1.jpg",
    },
    {
      title: "초인의 게임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795658/thumbnail/thumbnail_IMAG21_9771c54c-af6a-477c-9243-2b3bb784aae6.jpg",
    },
    {
      title: "원주민 공포만화",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/698918/thumbnail/thumbnail_IMAG21_3689346629442483042.jpg",
    },
    {
      title: "호랑이 들어와요",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/757904/thumbnail/thumbnail_IMAG21_f3e09476-b052-4599-b619-4b2aba154143.jpg",
    },
    {
      title: "위아더좀비",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/766648/thumbnail/thumbnail_IMAG21_3977861984512325425.jpg",
    },
    {
      title: "유사연애",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804653/thumbnail/thumbnail_IMAG21_80417c5a-df93-46b9-9edb-f2e50306d880.jpg",
    },
    {
      title: "시체기사 군터",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798326/thumbnail/thumbnail_IMAG21_f29b4498-410e-483e-b392-5111ed62b3a8.jpg",
    },
    {
      title: "윌유메리미",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/616239/thumbnail/thumbnail_IMAG21_7c320dd0-7f6e-4645-b82b-e46752ed7375.jpg",
    },
    {
      title: "나타나주세요!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/770068/thumbnail/thumbnail_IMAG21_b5e21984-464b-4529-91fa-3ecc4428e690.jpg",
    },
    {
      title: "덴큐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778963/thumbnail/thumbnail_IMAG21_3918805901429191730.jpg",
    },
    {
      title: "애옹식당",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785703/thumbnail/thumbnail_IMAG21_020a4de1-984b-4343-8735-55970b9fda68.jpg",
    },
    {
      title: "그냥 선생님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804333/thumbnail/thumbnail_IMAG21_b39d8b31-ca85-492f-8588-c766aa2b3c27.jpg",
    },
    {
      title: "은밀한 재택근무",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807858/thumbnail/thumbnail_IMAG21_6f8082ba-9afe-491f-98d6-8b7b7fafb991.jpg",
    },
    {
      title: "용왕님의 셰프가 되었습니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/741449/thumbnail/thumbnail_IMAG21_7cc5de94-a52d-473c-bdb7-f5c24188fac7.jpg",
    },
    {
      title: "헥토파스칼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799250/thumbnail/thumbnail_IMAG21_cc84475a-58c8-4e66-a26b-2a08be6a1f24.jpg",
    },
    {
      title: "연우의 순정",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/752532/thumbnail/thumbnail_IMAG21_e0dbfa33-e13c-4adc-bf63-a5b26b4a2a3e.jpg",
    },
    {
      title: "랜덤타겟",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807582/thumbnail/thumbnail_IMAG21_1c7a2387-173f-4def-8764-f3060c169275.jpg",
    },
    {
      title: "빅맨",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/753839/thumbnail/thumbnail_IMAG21_3835153067459896165.jpg",
    },
    {
      title: "원포인트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807314/thumbnail/thumbnail_IMAG21_90acd316-6708-4896-90a4-c3b55b735dc5.jpg",
    },
    {
      title: "짝사랑의 마침표",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789682/thumbnail/thumbnail_IMAG21_764560de-de68-45ee-816f-fe376fbe4f60.jpg",
    },
    {
      title: "우리 집 고양이 보고 갈래?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805743/thumbnail/thumbnail_IMAG21_7bb206cc-46b8-4745-9fce-4ce73bcd068e.jpg",
    },
    {
      title: "왕게임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798101/thumbnail/thumbnail_IMAG21_766e3761-228a-4c04-97b8-6f0ef13cf35b.jpg",
    },
    {
      title: "빌런투킬",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/765156/thumbnail/thumbnail_IMAG21_09f17695-7f1a-43c1-9515-3debf026e2ed.jpg",
    },
    {
      title: "로잘린 보가트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797582/thumbnail/thumbnail_IMAG21_88ddda2c-0207-48e7-a2ff-071f1700df2e.jpeg",
    },
    {
      title: "에이머",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/400739/thumbnail/thumbnail_IMAG21_b5046846-5af7-48a9-9b20-b0b07cf0c904.jpeg",
    },
    {
      title: "사표내고 이계에서 힐링합니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800726/thumbnail/thumbnail_IMAG21_f8d6b47c-3af0-49ef-9aa7-3b6ea28e4aa8.jpg",
    },
    {
      title: "웅크",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800506/thumbnail/thumbnail_IMAG21_21640049-34da-44e5-82d7-bbb7aca3a3f8.jpg",
    },
    {
      title: "짐승의 꽃",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805334/thumbnail/thumbnail_IMAG21_1a7f9687-e04f-4ac8-8f50-ac58275a2295.jpg",
    },
    {
      title: "그 남주와 이별하는 방법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783518/thumbnail/thumbnail_IMAG21_7147551697234442294.jpg",
    },
    {
      title: "우투리: THE LEGACY",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797819/thumbnail/thumbnail_IMAG21_8b9af7ee-085a-42b4-9c04-51bd52646063.jpg",
    },
    {
      title: "대공님, 실수였어요!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784518/thumbnail/thumbnail_IMAG21_b2349a45-d20d-4d21-84db-6006d2d8e976.jpg",
    },
    {
      title: "열녀박씨 계약결혼뎐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/761601/thumbnail/thumbnail_IMAG21_7075830540882962020.jpg",
    },
    {
      title: "아이즈",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/767908/thumbnail/thumbnail_IMAG21_133544d1-6655-47ac-99ce-00da2f3cdc17.jpg",
    },
    {
      title: "돌격! 용마치킨",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805974/thumbnail/thumbnail_IMAG21_7794debf-da11-42fd-9126-13723f239794.jpg",
    },
    {
      title: "사공은주",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794965/thumbnail/thumbnail_IMAG21_63390970-e54c-497e-8f6d-e5cbaf78d490.jpg",
    },
    {
      title: "제로게임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/676695/thumbnail/thumbnail_IMAG21_2772f374-0d51-4285-a83c-f06a476cbadc.jpg",
    },
    {
      title: "로맨스가 가능해?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803010/thumbnail/thumbnail_IMAG21_39c36855-22e9-43eb-b0af-65fe8204d568.jpg",
    },
    {
      title: "내남친 킹카만들기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791126/thumbnail/thumbnail_IMAG21_b3c5cfcc-aba4-4ba6-b010-8c740c2cbc85.jpg",
    },
    {
      title: "주인님을 잡아먹는 방법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794105/thumbnail/thumbnail_IMAG21_bc1d4038-94fc-428c-8e78-e2cb9ab3643e.jpg",
    },
    {
      title: "태시트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/766966/thumbnail/thumbnail_IMAG21_7077515877376537444.jpg",
    },
    {
      title: "풋내기들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/764622/thumbnail/thumbnail_IMAG21_6b14f40c-5fb1-4844-ad03-39a80947f4f9.jpg",
    },
    {
      title: "여우자매",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797413/thumbnail/thumbnail_IMAG21_f04539ee-5166-4337-bd33-10f41d2713fa.jpg",
    },
    {
      title: "한입만!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789029/thumbnail/thumbnail_IMAG21_7365127438884483171.jpg",
    },
    {
      title: "햄버거가 제일 좋아",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801820/thumbnail/thumbnail_IMAG21_82855003-8d89-45b6-8a8b-55c4cbbd8ad2.jpg",
    },
    {
      title: "팀장님은 신혼이 피곤하다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804868/thumbnail/thumbnail_IMAG21_ea78afa0-0987-46e8-901c-6f0aef44bc0c.jpg",
    },
    {
      title: "이 결혼, 새로고침",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797259/thumbnail/thumbnail_IMAG21_4135202076969481273.jpg",
    },
    {
      title: "필리아로제 - 가시왕관의 예언",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/773793/thumbnail/thumbnail_IMAG21_3688508805038170930.jpg",
    },
    {
      title: "공작저의 붉은 밤",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805671/thumbnail/thumbnail_IMAG21_8be4a557-d691-48b1-8445-199e6c0c5dbd.jpg",
    },
    {
      title: "마침내 사랑이에요 마왕님!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797760/thumbnail/thumbnail_IMAG21_23126df1-63b2-4998-8a77-99bfa3e598cc.jpg",
    },
    {
      title: "DARK MOON: 회색 도시",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802872/thumbnail/thumbnail_IMAG21_c80f6d62-0971-4806-9aa5-9cc0d9e5599e.jpg",
    },
    {
      title: "교환학생",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778228/thumbnail/thumbnail_IMAG21_4051047668904440884.jpg",
    },
    {
      title: "원수가 나를 유혹할 때",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797943/thumbnail/thumbnail_IMAG21_6733cb7f-79aa-4ecd-8a22-ed34a17684d8.jpg",
    },
    {
      title: "달이 사라진 밤",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795649/thumbnail/thumbnail_IMAG21_a005cff6-27ef-4478-a3fb-2acab6e1d39e.jpg",
    },
    {
      title: "찐:종합게임동아리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/771018/thumbnail/thumbnail_IMAG21_3762818380117075513.jpg",
    },
    {
      title: "너의 순정, 나의 순정",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797258/thumbnail/thumbnail_IMAG21_7293970135255232568.jpg",
    },
    {
      title: "AI 유하",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800400/thumbnail/thumbnail_IMAG21_bb74c497-7fa9-48c2-9f4f-4438317ff0c8.jpg",
    },
    {
      title: "마녀이야기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794671/thumbnail/thumbnail_IMAG21_48d943f4-b3e7-4d33-9438-4d6babc67be5.jpg",
    },
  ],
  수요웹툰: [
    {
      title: "전지적 독자 시점",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/747269/thumbnail/thumbnail_IMAG21_aabd9952-ff45-47a2-a543-33f19a5c6708.jpg",
    },
    {
      title: "캐슬2:만인지상",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807178/thumbnail/thumbnail_IMAG21_28fcfb22-aae7-41b4-8767-05f6dd176b03.jpg",
    },
    {
      title: "2023 요즘연애 특)",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807831/thumbnail/thumbnail_IMAG21_0ed8d77a-8096-4ac3-ba20-6e3fb27b41ec.jpg",
    },
    {
      title: "헬퍼 2 : 킬베로스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/670143/thumbnail/thumbnail_IMAG21_12d5d293-d54d-4022-8e00-c97c5779c701.jpg",
    },
    {
      title: "백XX",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804862/thumbnail/thumbnail_IMAG21_e2814dcb-83ae-477a-9149-d20fad5bdf92.jpg",
    },
    {
      title: "성스러운 작가생활",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807859/thumbnail/thumbnail_IMAG21_f76458b0-e807-480e-b44c-3437d9888a75.jpg",
    },
    {
      title: "66666년 만에 환생한 흑마법사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/775141/thumbnail/thumbnail_IMAG21_11d97e88-9ccf-4e7a-a10d-dde42725e3fa.jpg",
    },
    {
      title: "일렉시드",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/717481/thumbnail/thumbnail_IMAG21_3545800975505057126.jpg",
    },
    {
      title: "왕따가 격투기를 너무 잘함",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806888/thumbnail/thumbnail_IMAG21_fdc80a89-b91b-4df0-bfc7-386a737eb080.jpg",
    },
    {
      title: "황후를 훔친 이는 누구인가",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805737/thumbnail/thumbnail_IMAG21_c72b400d-fc29-4928-828f-56b3629ce352.jpg",
    },
    {
      title: "튜토리얼 탑의 고인물",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/738694/thumbnail/thumbnail_IMAG21_7366031057188643120.jpg",
    },
    {
      title: "격기3반",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/701535/thumbnail/thumbnail_IMAG21_2abe5b1a-9104-417f-9995-0db15c6db7be.jpg",
    },
    {
      title: "나쁜사람",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/750184/thumbnail/thumbnail_IMAG21_adfbd65f-18fa-4268-81db-ec88ae4aa8b1.jpg",
    },
    {
      title: "내가 죽기로 결심한 것은",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783523/thumbnail/thumbnail_IMAG21_cc413d42-89ab-4c7d-a28c-0f698acb169b.jpg",
    },
    {
      title: "닥터앤닥터 병원일기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807306/thumbnail/thumbnail_IMAG21_69a712a4-11e8-48bf-9b0c-a26f28c405d8.jpg",
    },
    {
      title: "마른 가지에 바람처럼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/748535/thumbnail/thumbnail_IMAG21_fbaf72e0-c829-44ad-b56c-5c60a9fd5705.jpg",
    },
    {
      title: "베이비 폭군",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807019/thumbnail/thumbnail_IMAG21_35128d6b-4a62-48d2-a908-222d47bcfe4e.jpg",
    },
    {
      title: "운명을 보는 회사원",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797443/thumbnail/thumbnail_IMAG21_cea05bf8-ab6b-4f19-8cd9-dd8c31ed1677.jpg",
    },
    {
      title: "칼에 취한 밤을 걷다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795542/thumbnail/thumbnail_IMAG21_3703756833080816441.jpg",
    },
    {
      title: "빌드업",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/750826/thumbnail/thumbnail_IMAG21_8bf7d36d-d865-4df0-b76f-f72f288bb2cd.jpg",
    },
    {
      title: "나를 낳아줘",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807308/thumbnail/thumbnail_IMAG21_bdecad71-95ad-4faf-b4e4-c131425da94f.jpg",
    },
    {
      title: "가짜 동맹",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/788167/thumbnail/thumbnail_IMAG21_9d85dac5-3e9d-4734-9184-95d5c5c8fa5e.jpg",
    },
    {
      title: "급식아빠",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758662/thumbnail/thumbnail_IMAG21_33e16ce6-4ee6-4428-8f7b-450eccd17228.jpg",
    },
    {
      title: "무림서부",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784417/thumbnail/thumbnail_IMAG21_f997ffe9-465a-4be8-a0bb-b5d0ef5cedea.jpg",
    },
    {
      title: "말숙이를 부탁해",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807634/thumbnail/thumbnail_IMAG21_1da46b85-5eb9-440e-93a8-4d45d602eb9e.jpg",
    },
    {
      title: "사상최강",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/748536/thumbnail/thumbnail_IMAG21_f5ccf206-ed7d-42ae-9452-c11cb188474b.jpg",
    },
    {
      title: "세상은 돈과 권력",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/710747/thumbnail/thumbnail_IMAG21_3545518418129085537.jpg",
    },
    {
      title: "안녕, 나의 수집",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799267/thumbnail/thumbnail_IMAG21_f522ff4f-4f7c-40bf-b9f2-f58d049d4a82.jpg",
    },
    {
      title: "누가 나를 죽였을까",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805730/thumbnail/thumbnail_IMAG21_385b1660-0880-4713-873e-1a1cd45744a0.jpg",
    },
    {
      title: "쓰레기는 쓰레기통에!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790404/thumbnail/thumbnail_IMAG21_3cf35b39-2500-4c2b-a331-a217ca03b055.jpg",
    },
    {
      title: "헤어지면 죽음",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783861/thumbnail/thumbnail_IMAG21_7571ae6b-a37c-4d12-8193-cb79c857cfaa.jpg",
    },
    {
      title: "에브리띵 이즈 파인",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804145/thumbnail/thumbnail_IMAG21_4fef0e05-88f3-44a6-8851-1f1c474e0678.jpg",
    },
    {
      title: "판타지 여동생!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/730425/thumbnail/thumbnail_IMAG21_3835209134721021750.jpg",
    },
    {
      title: "인과관계",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789652/thumbnail/thumbnail_IMAG21_9e92f54e-ec57-4cd3-9574-9a58455606bf.jpg",
    },
    {
      title: "이십팔세기 광팬",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800312/thumbnail/thumbnail_IMAG21_90520e55-609b-4015-8260-974081bce964.jpg",
    },
    {
      title: "언덕 위의 제임스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/671421/thumbnail/thumbnail_IMAG21_7643171d-08fb-40a8-9da1-813a3b7e784f.jpg",
    },
    {
      title: "흔한 빙의물인 줄 알았다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/808018/thumbnail/thumbnail_IMAG21_731f2947-7401-4a11-8561-04e0beef8771.jpg",
    },
    {
      title: "하렘의 남자들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/760001/thumbnail/thumbnail_IMAG21_c62cf78d-b346-49cf-b847-3062fc51500b.jpg",
    },
    {
      title: "칼부림",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/602916/thumbnail/thumbnail_IMAG21_43cf1d1e-d265-464d-83db-f92dbc3fcf43.jpg",
    },
    {
      title: "마녀와 용의 신혼일기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/755668/thumbnail/thumbnail_IMAG21_4051332219785065524.jpg",
    },
    {
      title: "용한소녀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803891/thumbnail/thumbnail_IMAG21_668eac64-9d55-4c3a-bc5f-8fe862f4c3e6.jpg",
    },
    {
      title: "물고기로 살아남기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793887/thumbnail/thumbnail_IMAG21_313436b8-ff98-4a9e-98dc-dc2e4839a65e.jpg",
    },
    {
      title: "행성인간2: 행성의",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802940/thumbnail/thumbnail_IMAG21_27ad5bf3-0455-4ac2-b3ae-dbc40c247407.jpg",
    },
    {
      title: "괴물공작의 딸",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/765158/thumbnail/thumbnail_IMAG21_7378132256276230709.jpg",
    },
    {
      title: "수요웹툰의 나강림",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/771718/thumbnail/thumbnail_IMAG21_8d86de3e-15d5-464e-b448-cbd73b1bd71c.jpg",
    },
    {
      title: "사내고충처리반",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801593/thumbnail/thumbnail_IMAG21_f551544b-d49b-44b3-8360-fb2594f889ee.jpg",
    },
    {
      title: "케찰코아틀 - 헤수스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805745/thumbnail/thumbnail_IMAG21_049fd9ae-26b8-41d9-bdfb-b3277824628c.jpg",
    },
    {
      title: "두 번 사는 프로듀서",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780253/thumbnail/thumbnail_IMAG21_c85d6008-87f8-46c8-82b7-2b744dd5723d.jpg",
    },
    {
      title: "미시령",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/697533/thumbnail/thumbnail_IMAG21_e9f62ca7-39be-4dd4-bfa7-4709a70aca32.jpg",
    },
    {
      title: "좀간",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796062/thumbnail/thumbnail_IMAG21_dc14b7fc-c61e-4fdf-9e6c-0108db4a26db.jpg",
    },
    {
      title: "겨울 정원의 하와르",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802835/thumbnail/thumbnail_IMAG21_4289191f-b053-4bad-a004-701a7d674869.jpg",
    },
    {
      title: "반귀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/760002/thumbnail/thumbnail_IMAG21_7017793712846615395.jpg",
    },
    {
      title: "주부 육성중",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793388/thumbnail/thumbnail_IMAG21_3481ec05-76fa-4302-9947-7931c6fb8d09.jpg",
    },
    {
      title: "영웅&마왕&악당",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796466/thumbnail/thumbnail_IMAG21_2cf2568c-a1c6-4c4f-9a21-94b7c8136893.jpg",
    },
    {
      title: "옆집남자 친구",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797115/thumbnail/thumbnail_IMAG21_f23ac6eb-318d-4b13-ace0-ddcf76563967.jpg",
    },
    {
      title: "로어 올림푸스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/750558/thumbnail/thumbnail_IMAG21_7148167415155931235.jpg",
    },
    {
      title: "밀행",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792654/thumbnail/thumbnail_IMAG21_befb7c78-3fb2-44b0-a193-c62736a195fd.jpg",
    },
    {
      title: "수플레 팬 케이크",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806505/thumbnail/thumbnail_IMAG21_bb0e3058-ae71-4e6a-a74d-9dac77febfd1.jpg",
    },
    {
      title: "메모리얼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791140/thumbnail/thumbnail_IMAG21_28c779aa-48bf-47bc-8a52-fd0ede76a9c5.jpg",
    },
    {
      title: "홀리데이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797105/thumbnail/thumbnail_IMAG21_adfead7c-d54b-4769-8c7f-8d179a38562d.jpg",
    },
    {
      title: "내겐 너무 소란한 결혼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799467/thumbnail/thumbnail_IMAG21_12c13949-64c3-4502-890f-b837cb3cd6f4.jpg",
    },
    {
      title: "선배는 나빠요!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795330/thumbnail/thumbnail_IMAG21_76dc830f-e64f-4095-a3f6-712ea83bcc7d.jpg",
    },
    {
      title: "그림자의 밤",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783596/thumbnail/thumbnail_IMAG21_d099edbf-d6bd-4acf-8d38-d871eac8e41b.jpg",
    },
    {
      title: "우리의 연애일지",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807745/thumbnail/thumbnail_IMAG21_48748c1b-e177-48ef-b684-3c9e29a69b7c.jpg",
    },
    {
      title: "히어로 더 맥시멈",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805323/thumbnail/thumbnail_IMAG21_e6ccdaa1-14f8-4023-a864-1ef978eda629.jpg",
    },
    {
      title: "아이돌의 비밀 스터디",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792120/thumbnail/thumbnail_IMAG21_a9d3ae51-ae12-496a-a059-e124410f4108.jpg",
    },
    {
      title: "굿헌팅",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804989/thumbnail/thumbnail_IMAG21_b14ade30-c3c3-49ec-9700-db2c49d7794b.jpg",
    },
    {
      title: "그 남자의 은밀한 하루",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800504/thumbnail/thumbnail_IMAG21_de7f2718-2ed9-4688-890d-fc73b9179c1d.jpg",
    },
    {
      title: "재생존경쟁",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793696/thumbnail/thumbnail_IMAG21_f5cd80d7-c072-49f4-b2dd-05421a7042a6.jpg",
    },
    {
      title: "이별학",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783971/thumbnail/thumbnail_IMAG21_3631653028771358256.jpg",
    },
    {
      title: "어느 백작 영애의 이중생활",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799016/thumbnail/thumbnail_IMAG21_719cf041-6408-4429-85dc-4b2cd2cb930d.jpg",
    },
    {
      title: "하얀 사자의 비밀 신부",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800390/thumbnail/thumbnail_IMAG21_323eb281-f0b7-4321-8df6-74c9b6b16f61.jpg",
    },
    {
      title: "안미운 우리들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783532/thumbnail/thumbnail_IMAG21_cb76dabc-daf9-4afc-955a-067d964435d6.jpg",
    },
    {
      title: "넷시의 비밀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804871/thumbnail/thumbnail_IMAG21_9ac1b8cc-dadb-41ef-9312-85aa9de4cfd6.jpg",
    },
    {
      title: "이런 미친 엔딩",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802913/thumbnail/thumbnail_IMAG21_1c4725c3-d63a-473a-a5fb-cb707836ada4.jpg",
    },
    {
      title: "연애고수",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801809/thumbnail/thumbnail_IMAG21_6764cc3d-eca6-4875-9e34-7c3b50c78bf3.jpg",
    },
    {
      title: "두 마리를 위한 뜰",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806304/thumbnail/thumbnail_IMAG21_d92b5558-0975-4573-8db5-225a2f4cb919.jpg",
    },
    {
      title: "반짝반짝 작은 눈",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/772729/thumbnail/thumbnail_IMAG21_a3b95562-c1ec-4d31-a2a4-77c177731b29.jpg",
    },
    {
      title: "나의 계절",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774039/thumbnail/thumbnail_IMAG21_41edecf6-cb3e-4b99-8dd4-d6b10aa0af8d.jpg",
    },
    {
      title: "낙원의 이론",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791632/thumbnail/thumbnail_IMAG21_0e5ee34e-898a-4106-8652-35525f24afa9.jpg",
    },
    {
      title: "오직, 밝은 미래",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780137/thumbnail/thumbnail_IMAG21_7077797366062998579.jpg",
    },
    {
      title: "필생기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783595/thumbnail/thumbnail_IMAG21_3847254065607488822.jpg",
    },
    {
      title: "이 짝사랑은 억울하다!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795537/thumbnail/thumbnail_IMAG21_3991990516407743330.jpg",
    },
    {
      title: "프로듀스 온리원",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794417/thumbnail/thumbnail_IMAG21_f7e759de-b5b4-4b40-9bf7-86c0666beb54.jpg",
    },
    {
      title: "산의 시간",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792372/thumbnail/thumbnail_IMAG21_73240292-aa0a-4bd0-a87f-7e17993c4011.jpg",
    },
    {
      title: "우리 은하",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793113/thumbnail/thumbnail_IMAG21_7076392177348327014.jpg",
    },
  ],
  목요웹툰: [
    {
      title: "앞집나리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802293/thumbnail/thumbnail_IMAG21_a3e4736d-dfd6-4e76-aec6-b145f4123845.jpg",
    },
    {
      title: "연애혁명",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/570503/thumbnail/thumbnail_IMAG21_7b907ee6-a61e-495b-9b8f-be2f0a4be44b.jpeg",
    },
    {
      title: "재벌집 막내아들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800770/thumbnail/thumbnail_IMAG21_d2e1e7ee-fc83-4030-a1e7-200378bc088f.jpg",
    },
    {
      title: "나노마신",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/747271/thumbnail/thumbnail_IMAG21_75c6a3cc-c4d1-4b51-a945-029aff772a63.jpg",
    },
    {
      title: "남편을 죽여줘요",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797410/thumbnail/thumbnail_IMAG21_9852442e-217e-4ec7-92a7-21c0ada85dc7.jpg",
    },
    {
      title: "천마육성",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/776255/thumbnail/thumbnail_IMAG21_4121980471072928565.jpg",
    },
    {
      title: "현실퀘스트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783888/thumbnail/thumbnail_IMAG21_9dbbdd23-bf16-437b-ae2a-2ef6662f533c.jpg",
    },
    {
      title: "무사만리행",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/746857/thumbnail/thumbnail_IMAG21_fb7d7fcd-19f1-49eb-9cc8-aae9622cdd04.jpg",
    },
    {
      title: "나 혼자 네크로맨서",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780170/thumbnail/thumbnail_IMAG21_c8b82359-da45-480c-95fd-aa9ae794d6be.jpg",
    },
    {
      title: "회귀한 천재 헌터의 슬기로운 청소생활",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796827/thumbnail/thumbnail_IMAG21_3990814210026202423.jpg",
    },
    {
      title: "서울밤피어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807537/thumbnail/thumbnail_IMAG21_327d2143-755b-44a5-acd0-82e8c0c11b62.jpg",
    },
    {
      title: "호랑신랑뎐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795643/thumbnail/thumbnail_IMAG21_bf51fa0f-e374-49f8-973d-c17c5385bbef.jpg",
    },
    {
      title: "버려진 나의 최애를 위하여",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794155/thumbnail/thumbnail_IMAG21_ff82104f-a8ce-4bf7-9126-a0caf2e1bb1d.jpeg",
    },
    {
      title: "보스였음",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802833/thumbnail/thumbnail_IMAG21_6ba9b7d2-c21a-4e1e-89b5-5b75952e121f.jpg",
    },
    {
      title: "뮤즈 온 유명",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801505/thumbnail/thumbnail_IMAG21_893e0926-523f-4bc1-b7a6-e30af1ec3c6e.jpg",
    },
    {
      title: "순정빌런",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797731/thumbnail/thumbnail_IMAG21_3d2b5b5a-ffbb-4049-8f85-8caebfcf4243.jpg",
    },
    {
      title: "별을 삼킨 너에게",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/748831/thumbnail/thumbnail_IMAG21_b08f61b4-c656-4e16-8d07-c3ea3a64c77c.jpg",
    },
    {
      title: "노답소녀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/756137/thumbnail/thumbnail_IMAG21_d6dc13d4-d2fa-45f8-a199-7a528bdca7d6.jpg",
    },
    {
      title: "불쌍해야 하는 남자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807356/thumbnail/thumbnail_IMAG21_7c35811d-1498-4d50-a38c-0b494502018c.jpg",
    },
    {
      title: "쿠베라",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/131385/thumbnail/thumbnail_IMAG21_1d44dd99-4fef-48b5-81f0-083e83b6c048.jpg",
    },
    {
      title: "특수청소",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/788976/thumbnail/thumbnail_IMAG21_c91160f6-aa01-43d8-a6a9-6347e50d1eaf.jpg",
    },
    {
      title: "규격 외 혈통 천재",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798331/thumbnail/thumbnail_IMAG21_846e6d29-da15-40cb-9d4f-1c7f5b1a6faa.jpg",
    },
    {
      title: "꽃만 키우는데 너무강함",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/741825/thumbnail/thumbnail_IMAG21_c830f1df-cd0e-4b7f-aa4e-84d59c88a892.jpg",
    },
    {
      title: "최강전설 강해효",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/570506/thumbnail/thumbnail_IMAG21_3630857206429464627.jpg",
    },
    {
      title: "흑막 여주가 날 새엄마로 만들려고 해",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/770523/thumbnail/thumbnail_IMAG21_b0c43bf3-14b8-4b43-970f-ced56b793582.jpg",
    },
    {
      title: "수영만화일기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/768534/thumbnail/thumbnail_IMAG21_25248bb7-e4d2-41ea-b011-9553c343330b.jpg",
    },
    {
      title: "국세청 망나니",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785727/thumbnail/thumbnail_IMAG21_4e91ad84-dffc-4475-af5e-a6130136edfb.jpg",
    },
    {
      title: "이상한 변호사 우영우",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798173/thumbnail/thumbnail_IMAG21_384e425c-307a-4754-b3f7-bb660117c0f3.jpg",
    },
    {
      title: "게임 최강 트롤러",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801698/thumbnail/thumbnail_IMAG21_52e81ef5-fb49-4f99-801c-0e13c5691c67.",
    },
    {
      title: "비서 일탈",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801515/thumbnail/thumbnail_IMAG21_2e85c821-0398-4b06-9c61-66f729974082.jpg",
    },
    {
      title: "루루라라 우리네 인생",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802039/thumbnail/thumbnail_IMAG21_a7a82a34-586c-4acf-b6f2-ab052be786f1.jpg",
    },
    {
      title: "순수한 동거생활",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797937/thumbnail/thumbnail_IMAG21_2614c677-2b48-4d30-af5c-170964180b51.jpg",
    },
    {
      title: "완벽한 결혼의 정석",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/775631/thumbnail/thumbnail_IMAG21_4063147592470967090.jpg",
    },
    {
      title: "네가 죽기를 바랄 때가 있었다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/776542/thumbnail/thumbnail_IMAG21_ca2e314b-448b-4383-980a-b6c50b1c6ca4.jpg",
    },
    {
      title: "마왕까지 한 걸음",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/776668/thumbnail/thumbnail_IMAG21_82e1a5b6-754c-425b-af4b-e89382f35997.jpg",
    },
    {
      title: "만능잡캐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783117/thumbnail/thumbnail_IMAG21_7364620379494637924.jpg",
    },
    {
      title: "아인슈페너",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792280/thumbnail/thumbnail_IMAG21_ef08524c-1c6d-4941-a532-44cb05261730.jpg",
    },
    {
      title: "당신의 그림자를 그만두었을 때",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807406/thumbnail/thumbnail_IMAG21_6fbae7f4-b275-4c27-8ae0-23549dc8a84e.jpg",
    },
    {
      title: "가족같은 XX",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790239/thumbnail/thumbnail_IMAG21_75cb9f71-9af3-48ca-a143-cd59540328b1.jpg",
    },
    {
      title: "누나! 나 무서워",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797468/thumbnail/thumbnail_IMAG21_31b5356a-65c6-4ae3-a8af-92b1c959357f.jpg",
    },
    {
      title: "선남친 후연애",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780191/thumbnail/thumbnail_IMAG21_8868da32-6304-45c5-8613-6c3954891a14.jpg",
    },
    {
      title: "케찰코아틀 - 다빗",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805746/thumbnail/thumbnail_IMAG21_caf881fb-bc3c-43ef-8ea0-3e4885836ec1.jpg",
    },
    {
      title: "이러면 안 돼요, 전하!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805368/thumbnail/thumbnail_IMAG21_96351617-cd09-4eda-abdd-877a3ec12bcb.jpg",
    },
    {
      title: "위대한 겸상",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796242/thumbnail/thumbnail_IMAG21_3558519051501779250.jpg",
    },
    {
      title: "해시의 신루",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783536/thumbnail/thumbnail_IMAG21_9e7bb6e6-7ee1-4374-9f9d-4407fe10f4ff.jpg",
    },
    {
      title: "킬더킹",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/670145/thumbnail/thumbnail_IMAG21_3905854744587100517.jpg",
    },
    {
      title: "1학년 9반",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793279/thumbnail/thumbnail_IMAG21_ce777385-70af-40cd-b02a-77157c141e9f.jpeg",
    },
    {
      title: "코인 리벤지",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801998/thumbnail/thumbnail_IMAG21_6607e2c4-b8bd-4145-94f6-ed96d1ec27a2.jpg",
    },
    {
      title: "방과후 레시피",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793130/thumbnail/thumbnail_IMAG21_1913856c-b494-4348-b3f0-b85393e4c3ed.jpg",
    },
    {
      title: "THE 런웨이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/771912/thumbnail/thumbnail_IMAG21_f5c91d16-dbed-423a-be2a-ea025ef95ead.jpg",
    },
    {
      title: "이게 웬 떡",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804051/thumbnail/thumbnail_IMAG21_8fc68f9b-dfde-4ca2-a904-ae7517a9e0a6.jpg",
    },
    {
      title: "오, 친애하는 숙적",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790840/thumbnail/thumbnail_IMAG21_985b42dd-93fd-46fc-8e06-7cd2c32a03ac.jpg",
    },
    {
      title: "마녀의 심판은 꽃이 된다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783862/thumbnail/thumbnail_IMAG21_b6f9ba07-4dfb-40cc-ada9-f397489e7b6d.jpg",
    },
    {
      title: "독거미",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802272/thumbnail/thumbnail_IMAG21_bbcca2f4-1063-4a0b-9af7-b7a714171b71.jpg",
    },
    {
      title: "나의 불편한 상사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799165/thumbnail/thumbnail_IMAG21_e4cf53a5-8d69-435d-95eb-a68a0128580e.jpg",
    },
    {
      title: "엔딩, 바꿔보려합니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802378/thumbnail/thumbnail_IMAG21_125f2441-6e6a-4cea-bfec-2969a1107fcf.jpg",
    },
    {
      title: "베니루 BAENIRU",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796302/thumbnail/thumbnail_IMAG21_8861c149-1927-400e-a343-b5a76be7efdf.jpg",
    },
    {
      title: "달의 요람",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/762035/thumbnail/thumbnail_IMAG21_4123154521771304291.jpg",
    },
    {
      title: "환상연가",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784506/thumbnail/thumbnail_IMAG21_4134924793763147832.jpg",
    },
    {
      title: "따개비",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792277/thumbnail/thumbnail_IMAG21_a0d9827b-0e2c-48ce-a1ca-ccb2d4ff65f1.jpg",
    },
    {
      title: "진짜 진짜 이혼해",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790409/thumbnail/thumbnail_IMAG21_a7521a4b-7046-47fe-826e-194cb9d344a9.jpg",
    },
    {
      title: "아빠같은 남자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774451/thumbnail/thumbnail_IMAG21_dfacd585-dc48-410e-b91d-1a3131a4c54d.jpg",
    },
    {
      title: "천재의 게임방송",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797417/thumbnail/thumbnail_IMAG21_3689123419153130802.jpg",
    },
    {
      title: "황제사냥",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800304/thumbnail/thumbnail_IMAG21_a97d059c-7eae-4e7c-afa0-74a6d2ac4c15.jpg",
    },
    {
      title: "두 번째 딸로 태어났습니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794651/thumbnail/thumbnail_IMAG21_7148957749163931702.jpg",
    },
    {
      title: "황궁에 핀 꽃은, 미쳤다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796324/thumbnail/thumbnail_IMAG21_175639ba-4f7b-499e-ba95-86235b11b2db.jpg",
    },
    {
      title: "부캐인생",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791258/thumbnail/thumbnail_IMAG21_7161908888893337954.jpg",
    },
    {
      title: "던전 씹어먹는 아티팩트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758439/thumbnail/thumbnail_IMAG21_3834868071364834100.jpg",
    },
    {
      title: "사기 친 공작님을 유혹해버렸다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802849/thumbnail/thumbnail_IMAG21_4c99d9c3-76da-444d-b9be-d698741e54fe.jpg",
    },
    {
      title: "35cm",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/703847/thumbnail/thumbnail_IMAG21_75e07916-d264-42ee-8af7-2788f8b9235f.jpg",
    },
    {
      title: "로맨틱 태평수산",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792125/thumbnail/thumbnail_IMAG21_74ba68fa-63d8-41d1-9db2-09f6235dbd2d.jpg",
    },
    {
      title: "널 사랑하는 죽은 형",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796247/thumbnail/thumbnail_IMAG21_3486742933231789363.jpg",
    },
    {
      title: "자취방 신선들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758587/thumbnail/thumbnail_IMAG21_3688554963004371809.jpg",
    },
    {
      title: "카루나",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/754876/thumbnail/thumbnail_IMAG21_3904682673849053541.jpg",
    },
    {
      title: "배트맨: 웨인 패밀리 어드벤처",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784989/thumbnail/thumbnail_IMAG21_3762867861630367334.jpg",
    },
    {
      title: "온실 속 화초",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/769662/thumbnail/thumbnail_IMAG21_7293409593956393778.jpg",
    },
    {
      title: "보물과 괴물의 도시",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/751993/thumbnail/thumbnail_IMAG21_7089003575688389985.jpg",
    },
    {
      title: "시에라",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778707/thumbnail/thumbnail_IMAG21_11a053f0-4b9f-4f21-b526-2300c5605c2d.jpg",
    },
    {
      title: "사랑하는 여배우들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794644/thumbnail/thumbnail_IMAG21_7017844316221815094.jpg",
    },
    {
      title: "권리행사자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795929/thumbnail/thumbnail_IMAG21_0e1622aa-5ad0-4c87-a5bc-e61cc2491858.jpg",
    },
    {
      title: "유월의 소한",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796492/thumbnail/thumbnail_IMAG21_4122820291731022946.jpg",
    },
    {
      title: "촉법소년",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/808198/thumbnail/thumbnail_IMAG21_fe4c5177-393a-4320-ae7c-ca42abb9db0e.jpg",
    },
    {
      title: "너와 XX",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807655/thumbnail/thumbnail_IMAG21_d962d301-4188-46d7-89dc-77aa4c9373a5.jpg",
    },
  ],
  금요웹툰: [
    {
      title: "외모지상주의",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg",
    },
    {
      title: "나 혼자 만렙 뉴비",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/773797/thumbnail/thumbnail_IMAG21_74f87a34-cf6d-4838-8a80-768bdb2f78a9.jpg",
    },
    {
      title: "대학원 탈출일지",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg",
    },
    {
      title: "역대급 영지 설계사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/777767/thumbnail/thumbnail_IMAG21_cc85f891-272b-450a-b642-cffe1568ab71.jpg",
    },
    {
      title: "어쩌다보니 천생연분",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790245/thumbnail/thumbnail_IMAG21_3545003845982959922.jpg",
    },
    {
      title: "언니, 이번 생엔 내가 왕비야",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798917/thumbnail/thumbnail_IMAG21_ca84bfa2-c1c8-4621-9b4b-26dc745606f5.jpg",
    },
    {
      title: "재혼 황후",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/735661/thumbnail/thumbnail_IMAG21_4b3c44a0-f286-4878-bac3-84c3ec9dc0a1.jpg",
    },
    {
      title: "데드퀸",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/753478/thumbnail/thumbnail_IMAG21_4049077133597095219.jpg",
    },
    {
      title: "1초",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/725586/thumbnail/thumbnail_IMAG21_17f81846-d1a9-43fd-83a4-f9e966b6b977.jpg",
    },
    {
      title: "개를 낳았다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/712362/thumbnail/thumbnail_IMAG21_7220173143199539507.jpg",
    },
    {
      title: "죽지 않으려면",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/772764/thumbnail/thumbnail_IMAG21_be1cd9e7-17da-449a-bc04-1294015fdbd5.jpg",
    },
    {
      title: "상남자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/751168/thumbnail/thumbnail_IMAG21_529c6125-cf14-435f-94ed-db1a2d499d84.jpg",
    },
    {
      title: "낙향문사전",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/746534/thumbnail/thumbnail_IMAG21_3904681570744218160.jpg",
    },
    {
      title: "삼국지톡",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/711422/thumbnail/thumbnail_IMAG21_fd8cb5db-01ab-4c7b-a2a9-920d4479d5f7.jpg",
    },
    {
      title: "서울역 드루이드",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/773476/thumbnail/thumbnail_IMAG21_7293972368624870449.jpg",
    },
    {
      title: "여우놀이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/768469/thumbnail/thumbnail_IMAG21_bff0c189-27cb-4859-8866-5f548210a578.jpg",
    },
    {
      title: "사신",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799837/thumbnail/thumbnail_IMAG21_361ed944-3c87-481f-a3d9-0e02c12b027d.jpg",
    },
    {
      title: "천하제일 대사형",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802278/thumbnail/thumbnail_IMAG21_311b8a63-cb77-4198-b015-95ef835007ac.jpg",
    },
    {
      title: "약탈 신부",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804329/thumbnail/thumbnail_IMAG21_d09239e1-4e22-46a7-83df-b7094eceb403.jpg",
    },
    {
      title: "전남편의 미친개를 길들였다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804160/thumbnail/thumbnail_IMAG21_335a77d2-bbcd-4766-83f6-8d90120e9379.jpg",
    },
    {
      title: "A.I. 닥터",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/765804/thumbnail/thumbnail_IMAG21_7003208699811542067.jpg",
    },
    {
      title: "히어로 킬러",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/766563/thumbnail/thumbnail_IMAG21_b71167a5-4409-411e-96e8-f2dad9ddbe00.jpg",
    },
    {
      title: "더 게이머",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/552960/thumbnail/thumbnail_IMAG21_ce8f3dbb-3891-4e83-9782-64fa7986946e.jpg",
    },
    {
      title: "연애의 기록",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803792/thumbnail/thumbnail_IMAG21_ceb2e7d1-abc4-4351-823d-c410ffb1d379.jpg",
    },
    {
      title: "커플브레이커",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804832/thumbnail/thumbnail_IMAG21_6edbde13-770a-495c-98d8-5d1d46fcc045.jpeg",
    },
    {
      title: "선을 넘은 연애",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796980/thumbnail/thumbnail_IMAG21_3545002734307981623.jpg",
    },
    {
      title: "푸쉬오프",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784507/thumbnail/thumbnail_IMAG21_7076337200897603889.jpg",
    },
    {
      title: "브레이커 : 이터널 포스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794383/thumbnail/thumbnail_IMAG21_7017509145513376051.jpg",
    },
    {
      title: "플레이어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/745876/thumbnail/thumbnail_IMAG21_ad75ad2a-a372-4f6c-873c-41ddd2e11f79.jpg",
    },
    {
      title: "언다잉",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801555/thumbnail/thumbnail_IMAG21_e90dca57-f705-4a4e-8848-752d809b4b8b.jpg",
    },
    {
      title: "폭군님은 착하게 살고 싶어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801736/thumbnail/thumbnail_IMAG21_4cef0649-b3cf-4a27-8eda-afb93d6f6bf4.jpg",
    },
    {
      title: "그냥 선생님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804333/thumbnail/thumbnail_IMAG21_b39d8b31-ca85-492f-8588-c766aa2b3c27.jpg",
    },
    {
      title: "대위님! 이번 전쟁터는 이곳인가요?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803767/thumbnail/thumbnail_IMAG21_63c2a7a4-ca93-4ab4-8224-769b3dfa692b.jpg",
    },
    {
      title: "소름일기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800585/thumbnail/thumbnail_IMAG21_11721c44-7e70-45e2-bd2e-da1e4a51922b.jpg",
    },
    {
      title: "여자를 사귀고 싶다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800291/thumbnail/thumbnail_IMAG21_270cacdd-57f7-4388-abf2-9e13a43dca24.jpg",
    },
    {
      title: "쌈빡",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/777515/thumbnail/thumbnail_IMAG21_54762710-164c-4341-90ac-d9cea424eb15.jpg",
    },
    {
      title: "신컨의 원 코인 클리어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805658/thumbnail/thumbnail_IMAG21_6d3a5ebc-c5ed-4a48-868f-b36dcfc1b253.jpg",
    },
    {
      title: "죽음으로 구원하사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804318/thumbnail/thumbnail_IMAG21_b26fa842-0608-4939-aa2d-f37f67610f9f.jpg",
    },
    {
      title: "바스티안",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805203/thumbnail/thumbnail_IMAG21_d218c9b1-1bb8-419e-baea-d86d7b120d69.jpg",
    },
    {
      title: "웅크",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800506/thumbnail/thumbnail_IMAG21_21640049-34da-44e5-82d7-bbb7aca3a3f8.jpg",
    },
    {
      title: "뫼신 사냥꾼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/751208/thumbnail/thumbnail_IMAG21_b9f0ab1e-64ab-413d-8d7d-5841a40367b9.jpeg",
    },
    {
      title: "미친 후작을 길들이고 말았다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778325/thumbnail/thumbnail_IMAG21_5998e09b-34fc-42fa-910b-ee9564be0a20.jpg",
    },
    {
      title: "문제적 왕자님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800046/thumbnail/thumbnail_IMAG21_e4616c3b-b9ad-46d0-b339-faca2653f613.jpg",
    },
    {
      title: "킬 더 드래곤",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794102/thumbnail/thumbnail_IMAG21_f6a66314-b084-4f48-ae7d-e5ee5771f17a.jpg",
    },
    {
      title: "온리호프",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800796/thumbnail/thumbnail_IMAG21_e5f6d283-25ac-4c32-be9a-b883c1ba7b87.jpg",
    },
    {
      title: "후덜덜덜 남극전자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/732036/thumbnail/thumbnail_IMAG21_a5f5b19f-5c44-4adf-b801-ec831eadc27b.jpg",
    },
    {
      title: "절대복종",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799524/thumbnail/thumbnail_IMAG21_b01c5e4c-fe6f-4817-a0db-b00b80b3ec94.jpeg",
    },
    {
      title: "지옥 키우기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800331/thumbnail/thumbnail_IMAG21_54515d5f-c297-48b9-a9ad-07c759d278b4.jpg",
    },
    {
      title: "스포",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/756139/thumbnail/thumbnail_IMAG21_4eca2f9f-7265-4d1f-b49e-2f1060ae19c7.jpg",
    },
    {
      title: "솔트앤페퍼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792139/thumbnail/thumbnail_IMAG21_7075778868856305717.jpg",
    },
    {
      title: "몽홀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/644112/thumbnail/thumbnail_IMAG21_3618981192359294768.jpg",
    },
    {
      title: "로또 황녀님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794742/thumbnail/thumbnail_IMAG21_15a45e09-4f78-4f0e-adef-9b3f6206a2c8.",
    },
    {
      title: "이게 아닌데",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783863/thumbnail/thumbnail_IMAG21_57dd91be-0a96-4371-838d-68d5097dbc3a.jpg",
    },
    {
      title: "악마라고 불러다오",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793853/thumbnail/thumbnail_IMAG21_3758400f-d46d-41a7-b5be-11ca210b9bc7.jpg",
    },
    {
      title: "스토커의 하루",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794743/thumbnail/thumbnail_IMAG21_cda3c8aa-f076-439a-94e9-cdac4f0b5db7.jpeg",
    },
    {
      title: "멜빈이 그들에게 남긴 것",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797442/thumbnail/thumbnail_IMAG21_902f4c44-b639-436f-ba18-129c1feba0a7.jpg",
    },
    {
      title: "뜨거운 홍차",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801992/thumbnail/thumbnail_IMAG21_84951a6c-71f7-42d1-8656-2625b47a9de9.jpg",
    },
    {
      title: "성스러운 그대 이르시길",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801038/thumbnail/thumbnail_IMAG21_8d5b3bb7-f943-4664-becb-8ac9b88a7e7d.jpg",
    },
    {
      title: "메소드 연기법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799838/thumbnail/thumbnail_IMAG21_e19883fb-74f1-4491-9b72-8731946a11fc.jpg",
    },
    {
      title: "달이 없는 나라",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780063/thumbnail/thumbnail_IMAG21_3978478587194062641.jpg",
    },
    {
      title: "지니오패스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799148/thumbnail/thumbnail_IMAG21_434bf097-6304-4003-b87d-926c281d775d.jpg",
    },
    {
      title: "백년게임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/751999/thumbnail/thumbnail_IMAG21_8797d0ef-cefd-463b-bf97-1361a5de293b.jpg",
    },
    {
      title: "인피니티",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/775140/thumbnail/thumbnail_IMAG21_2de7a216-571b-4bf9-81b6-11b37126d328.jpg",
    },
    {
      title: "연기는 처음인데요?!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805893/thumbnail/thumbnail_IMAG21_bfdc4017-7983-4474-90bc-854779bdbdbf.jpg",
    },
    {
      title: "푸른 밤, 황홀의 윤무",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803119/thumbnail/thumbnail_IMAG21_cfc478c6-3b56-4bdf-b959-089775b2b916.jpg",
    },
    {
      title: "드래곤의 심장을 가지고 있습니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795540/thumbnail/thumbnail_IMAG21_5dbe14f7-5802-4643-9b1d-90d94542f450.jpg",
    },
    {
      title: "우리 무슨 사이야?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802906/thumbnail/thumbnail_IMAG21_a0759dac-4e68-4ce1-b787-a2a235d1bd37.jpg",
    },
    {
      title: "비밀친구",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797221/thumbnail/thumbnail_IMAG21_7089289671999633716.jpg",
    },
    {
      title: "히트포인트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758677/thumbnail/thumbnail_IMAG21_377b4b19-09d2-45c7-8054-705ab153bfcc.jpg",
    },
    {
      title: "별빛 커튼콜",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793410/thumbnail/thumbnail_IMAG21_e2baecd4-0f45-40b2-9de9-667f86e1f7f2.jpg",
    },
    {
      title: "합법해적 파르페",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/729036/thumbnail/thumbnail_IMAG21_e7de7318-0952-49a2-9e24-335e0a321ce8.jpg",
    },
    {
      title: "너의 키스씬",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794423/thumbnail/thumbnail_IMAG21_a0ed5931-cdc9-4f4f-b9d6-f688c06edaba.jpg",
    },
    {
      title: "여름의 너에게",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799220/thumbnail/thumbnail_IMAG21_23f445b9-eaee-4cb9-b9b1-4683779bff21.jpg",
    },
    {
      title: "미드우트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800006/thumbnail/thumbnail_IMAG21_57db1d57-6373-4923-a0e8-e3e218e94e3c.jpg",
    },
    {
      title: "짝사랑 마들렌",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785855/thumbnail/thumbnail_IMAG21_7089618408024717624.jpg",
    },
    {
      title: "애증화음",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803371/thumbnail/thumbnail_IMAG21_51679319-175d-40ed-9df7-9c4de4e943c3.jpg",
    },
    {
      title: "천상의 주인",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798622/thumbnail/thumbnail_IMAG21_0ef0aa87-52c2-4ea1-9b2e-c604648d8d20.jpg",
    },
    {
      title: "행운을 빌어요, 용사님!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/775334/thumbnail/thumbnail_IMAG21_e6c8e9eb-715f-4d56-a0cb-6d8af732dd98.jpg",
    },
    {
      title: "하나는 적고 둘은 너무 많아",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801773/thumbnail/thumbnail_IMAG21_ea1917eb-9a72-45ab-a7fe-fa5cbd90b2ca.jpg",
    },
    {
      title: "신의 최애캐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802578/thumbnail/thumbnail_IMAG21_6257e0b7-c8db-4872-aac2-962e6c58da85.jpg",
    },
    {
      title: "크림슨 하트",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802733/thumbnail/thumbnail_IMAG21_99fc6540-7391-462a-b08b-326f55a8b354.jpg",
    },
    {
      title: "세라는 망돌",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802359/thumbnail/thumbnail_IMAG21_3fa11f89-cf2d-4258-b130-7dd84bc14c95.jpg",
    },
    {
      title: "기억해줘",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801699/thumbnail/thumbnail_IMAG21_5f6bd4f5-c1e6-4583-bc91-cd7afaf0f226.jpg",
    },
    {
      title: "너에게 입덕중",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799226/thumbnail/thumbnail_IMAG21_2c9e59fe-766a-4d2b-b58f-415213986d3d.jpg",
    },
    {
      title: "서울시 천사주의",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799478/thumbnail/thumbnail_IMAG21_e7fe0b67-9791-42b0-ab36-19bd2d7ea8a5.jpg",
    },
    {
      title: "네버엔딩달링",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758660/thumbnail/thumbnail_IMAG21_3833467305617220449.jpg",
    },
  ],
  토요웹툰: [
    {
      title: "99강화나무몽둥이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792651/thumbnail/thumbnail_IMAG21_218f18ef-7f68-4d6a-972c-686a3e9f6138.jpg",
    },
    {
      title: "호랑이형님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/650305/thumbnail/thumbnail_IMAG21_3631086797392995425.jpg",
    },
    {
      title: "취사병 전설이 되다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/727188/thumbnail/thumbnail_IMAG21_d4726354-42bc-4bdf-b500-02c951082eeb.jpg",
    },
    {
      title: "프리드로우",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/597447/thumbnail/thumbnail_IMAG21_37e97fb1-5572-45cc-8672-2a60b6cb768e.jpg",
    },
    {
      title: "망나니 소교주로 환생했다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/773796/thumbnail/thumbnail_IMAG21_c9aae885-3aa5-4aea-ac82-31c0c55479fc.jpg",
    },
    {
      title: "은탄",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/787500/thumbnail/thumbnail_IMAG21_7090184484697487202.jpg",
    },
    {
      title: "묘약마녀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807029/thumbnail/thumbnail_IMAG21_4f5f473d-60ff-4ee5-86e9-052e5efd2aeb.jpg",
    },
    {
      title: "놓지마 정신줄 시즌3",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801589/thumbnail/thumbnail_IMAG21_1b439234-e17d-4fb8-9eef-5d2d4173234c.jpg",
    },
    {
      title: "스터디그룹",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/721948/thumbnail/thumbnail_IMAG21_b5efacb7-c212-422f-bc4a-15cf5dc84408.jpg",
    },
    {
      title: "마도전생기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807777/thumbnail/thumbnail_IMAG21_e47489ea-bf97-4726-a8e7-6403092a303a.jpg",
    },
    {
      title: "악몽의 형상",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793283/thumbnail/thumbnail_IMAG21_4136055320174945841.jpg",
    },
    {
      title: "귀환했는데 입대 전날이다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807393/thumbnail/thumbnail_IMAG21_aff8a206-014c-471f-9e91-c569940ad8e5.jpg",
    },
    {
      title: "청춘 블라썸",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/746834/thumbnail/thumbnail_IMAG21_6412ed6b-2288-41df-8715-648a3da9154e.jpg",
    },
    {
      title: "작전명 순정",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793275/thumbnail/thumbnail_IMAG21_3631362972329534562.jpg",
    },
    {
      title: "세레나",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801475/thumbnail/thumbnail_IMAG21_63818a49-407c-4d1d-8f9a-e541285abdd9.jpg",
    },
    {
      title: "디펜스 게임의 폭군이 되었다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798182/thumbnail/thumbnail_IMAG21_3129bf23-e1fa-4943-b3d5-9d29e3c8109e.jpg",
    },
    {
      title: "나이트런",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/64997/thumbnail/thumbnail_IMAG21_3834645974328108595.jpg",
    },
    {
      title: "물위의 우리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780404/thumbnail/thumbnail_IMAG21_e9eccbd9-b1c1-49b9-81a8-5bee3291315f.jpg",
    },
    {
      title: "윌유메리미",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/616239/thumbnail/thumbnail_IMAG21_7c320dd0-7f6e-4645-b82b-e46752ed7375.jpg",
    },
    {
      title: "반드시 해피엔딩",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/769568/thumbnail/thumbnail_IMAG21_4122307894377986102.jpg",
    },
    {
      title: "나태 공자, 노력 천재 되다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/772853/thumbnail/thumbnail_IMAG21_7148394817198842420.jpg",
    },
    {
      title: "나를 바꿔줘",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/733280/thumbnail/thumbnail_IMAG21_ffc6f8e2-f633-4b4d-8059-d42f155c2011.jpg",
    },
    {
      title: "나랑X할래?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803934/thumbnail/thumbnail_IMAG21_4fabee83-c9ef-4a00-96f3-0ed4a45b90b5.jpg",
    },
    {
      title: "민간인 통제구역 - 일급기밀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801324/thumbnail/thumbnail_IMAG21_201ca646-5c79-42d2-ad28-49a435dc362e.jpg",
    },
    {
      title: "대충 캠퍼스로맨스임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797184/thumbnail/thumbnail_IMAG21_7161629625811166819.jpg",
    },
    {
      title: "이십팔세기 광팬",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800312/thumbnail/thumbnail_IMAG21_90520e55-609b-4015-8260-974081bce964.jpg",
    },
    {
      title: "이종 격투기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805356/thumbnail/thumbnail_IMAG21_d7631c1e-dab2-44b5-97af-c61d5fade064.jpg",
    },
    {
      title: "미나 이퀄",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793350/thumbnail/thumbnail_IMAG21_3545852647434696500.jpg",
    },
    {
      title: "어글리후드",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/703630/thumbnail/thumbnail_IMAG21_12acd584-a3fe-40a5-bf47-b1c36dc18387.jpg",
    },
    {
      title: "노인의 꿈",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806776/thumbnail/thumbnail_IMAG21_aa8b48b8-6ed9-44ce-a1a0-e194514ab026.jpg",
    },
    {
      title: "당신이 나를 믿으신다면",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806449/thumbnail/thumbnail_IMAG21_cda9ea7c-3734-44b0-ba3f-2428f8d82854.jpg",
    },
    {
      title: "간첩 18세",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799503/thumbnail/thumbnail_IMAG21_34f3cf97-e658-48bd-80c2-ca4397b1ecfd.jpg",
    },
    {
      title: "존잘주의",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774864/thumbnail/thumbnail_IMAG21_7366025529484523875.jpg",
    },
    {
      title: "탑코너",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/732021/thumbnail/thumbnail_IMAG21_3617062741365437232.jpg",
    },
    {
      title: "홍시는 날 좋아해!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/703839/thumbnail/thumbnail_IMAG21_5868239b-e1f5-4bcc-ad21-9dba1539d693.jpg",
    },
    {
      title: "이계진입 리로디드",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793553/thumbnail/thumbnail_IMAG21_1afbb206-239d-41d8-832b-cbd6be2b0c0a.jpeg",
    },
    {
      title: "왕세자 입학도",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/739411/thumbnail/thumbnail_IMAG21_41bd65cb-fadb-47a2-a595-4faa95d1858c.jpg",
    },
    {
      title: "엑스애쉬",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783814/thumbnail/thumbnail_IMAG21_3472617502213103923.jpg",
    },
    {
      title: "폭군 남편과 이혼하겠습니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797844/thumbnail/thumbnail_IMAG21_3473510481684150625.jpg",
    },
    {
      title: "더 해머",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803794/thumbnail/thumbnail_IMAG21_4a2de803-f18c-4f76-a0f4-d920f87e1f31.jpg",
    },
    {
      title: "용사참수인",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783590/thumbnail/thumbnail_IMAG21_4135765916688540769.jpg",
    },
    {
      title: "더 캐슬 - 귀안의 신부",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/806265/thumbnail/thumbnail_IMAG21_5c7b929f-cc5f-4325-8628-a3118b4d698d.jpg",
    },
    {
      title: "숨겨진 성녀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/781339/thumbnail/thumbnail_IMAG21_3559031385248653620.jpg",
    },
    {
      title: "전생연분",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783864/thumbnail/thumbnail_IMAG21_965c8626-3cdf-4168-978d-f9315044590a.jpg",
    },
    {
      title: "저무는 해, 시린 눈",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/746833/thumbnail/thumbnail_IMAG21_21c3beb3-76fa-4b6a-811a-b641dd017e1b.jpg",
    },
    {
      title: "묘령의 황자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784580/thumbnail/thumbnail_IMAG21_3fd8e5a5-7caf-416e-bf14-ec3bfd7bb13e.jpg",
    },
    {
      title: "봐선 안되는 것",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778656/thumbnail/thumbnail_IMAG21_f2b7be76-da44-4f83-b16d-0448f9020f16.jpg",
    },
    {
      title: "완벽한 부부는 없다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793374/thumbnail/thumbnail_IMAG21_3775484551403496548.jpg",
    },
    {
      title: "내게 필요한 NO맨스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/753975/thumbnail/thumbnail_IMAG21_ea731d05-88dd-4c24-aefb-e937b24ff5fa.jpg",
    },
    {
      title: "최강부캐",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778580/thumbnail/thumbnail_IMAG21_7365744059571516773.jpg",
    },
    {
      title: "공유몽",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/729047/thumbnail/thumbnail_IMAG21_835f4d2f-fa5a-4ef0-9106-0edeb5d6dd4c.jpg",
    },
    {
      title: "키스의 여왕",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/791936/thumbnail/thumbnail_IMAG21_220219e9-4d6c-4b9a-874b-a6780edb27d5.jpg",
    },
    {
      title: "키스 식스 센스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/770964/thumbnail/thumbnail_IMAG21_fd38b2b9-196b-4390-b8ab-ff9e424b69c4.jpg",
    },
    {
      title: "다비, 아찔하게 흐르는",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796252/thumbnail/thumbnail_IMAG21_07b3c0bc-a24e-4411-8996-b38f6a6a2721.jpg",
    },
    {
      title: "은둔코인",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778284/thumbnail/thumbnail_IMAG21_0de7df32-623e-4e3b-9191-17479ee89c99.jpg",
    },
    {
      title: "소년 검사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784582/thumbnail/thumbnail_IMAG21_7220790153841828450.jpg",
    },
    {
      title: "배달의 신",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785260/thumbnail/thumbnail_IMAG21_3486966134075647588.jpg",
    },
    {
      title: "왕년엔 용사님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/755744/thumbnail/thumbnail_IMAG21_ea3e8a31-f6ef-40b4-936b-acb0fac4e94f.jpg",
    },
    {
      title: "마법사가 죽음을 맞이하는 방법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/786269/thumbnail/thumbnail_IMAG21_3976731454544045158.jpg",
    },
    {
      title: "사서고생!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780845/thumbnail/thumbnail_IMAG21_fb6ff972-27ca-459d-ac5d-c1083e96c45c.jpg",
    },
    {
      title: "중매쟁이 아가 황녀님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/771065/thumbnail/thumbnail_IMAG21_7149803300217697074.jpg",
    },
    {
      title: "청춘일지",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797932/thumbnail/thumbnail_IMAG21_ef5d2231-8978-4ebd-8e85-8bf73437da62.jpg",
    },
    {
      title: "용두사망 소설 속의 악녀가 되었다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800828/thumbnail/thumbnail_IMAG21_bd9dbd1f-322c-4fdc-88f0-135d4a892735.jpg",
    },
    {
      title: "애구애구",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803530/thumbnail/thumbnail_IMAG21_c8d5f8f0-9883-465b-b79d-325c02d42b71.jpg",
    },
    {
      title: "7FATES: CHAKHO",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/786978/thumbnail/thumbnail_IMAG21_c06d9d48-2f0d-47b8-8767-1cf8ce6f29b6.jpg",
    },
    {
      title: "시선 끝 브로콜리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802070/thumbnail/thumbnail_IMAG21_28e3fa04-c40c-40f6-b449-3290f0f84c61.jpg",
    },
    {
      title: "궤도의 아이들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802819/thumbnail/thumbnail_IMAG21_827d17bc-65c9-474d-a162-711ca38aae0a.jpg",
    },
    {
      title: "아가사",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/769193/thumbnail/thumbnail_IMAG21_63967208-c38f-42a0-9186-163653c54a47.jpg",
    },
    {
      title: "아침을 지나 밤으로",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/753304/thumbnail/thumbnail_IMAG21_02569ecf-8e35-48b5-a9d3-5ab38900163d.jpg",
    },
    {
      title: "밤을 깨우는 마법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778968/thumbnail/thumbnail_IMAG21_7364286329789702709.jpg",
    },
    {
      title: "먹지마세요",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/735078/thumbnail/thumbnail_IMAG21_bbbfa6c0-bd41-4c59-a7fb-a44776497691.jpg",
    },
    {
      title: "아이돌만 하고 싶었는데",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801516/thumbnail/thumbnail_IMAG21_f1f2d0bc-e7c5-4697-92a6-e1bb3baeccee.jpg",
    },
    {
      title: "겨울특강",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802117/thumbnail/thumbnail_IMAG21_15a0d966-695b-45ce-a050-e42a40f31559.jpg",
    },
    {
      title: "보고 있지?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794458/thumbnail/thumbnail_IMAG21_7089291664123257185.jpg",
    },
    {
      title: "실버 쥬얼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785693/thumbnail/thumbnail_IMAG21_c01781fb-884a-4667-aa13-e3a316d2fa24.jpg",
    },
  ],
  일요웹툰: [
    {
      title: "싸움독학",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/736277/thumbnail/thumbnail_IMAG21_bbbe3f76-021e-4dbc-830a-4358c1abec0c.jpg",
    },
    {
      title: "2023 요즘연애 특)",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807831/thumbnail/thumbnail_IMAG21_0ed8d77a-8096-4ac3-ba20-6e3fb27b41ec.jpg",
    },
    {
      title: "투신전생기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774044/thumbnail/thumbnail_IMAG21_81504afb-1a05-41b0-9650-0c9aa1d741d9.jpg",
    },
    {
      title: "약한영웅",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/710751/thumbnail/thumbnail_IMAG21_53aefc06-6bdf-40fb-93ac-fab7242146c6.jpg",
    },
    {
      title: "입학용병",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758150/thumbnail/thumbnail_IMAG21_4135492154714961716.jpg",
    },
    {
      title: "가비지타임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/703844/thumbnail/thumbnail_IMAG21_4122261748397257571.jpg",
    },
    {
      title: "사형소년",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795262/thumbnail/thumbnail_IMAG21_b6090fe4-9f39-4ef9-802e-091184f38e30.jpg",
    },
    {
      title: "일타강사 백사부",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/779632/thumbnail/thumbnail_IMAG21_4048795649913205816.jpg",
    },
    {
      title: "시월드가 내게 집착한다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/785251/thumbnail/thumbnail_IMAG21_3919877924477546549.jpg",
    },
    {
      title: "수희0(tngmlek0)",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/774831/thumbnail/thumbnail_IMAG21_b4644a73-ecfb-4532-a96c-575b02accfd0.jpg",
    },
    {
      title: "나 혼자 특성빨로 무한 성장",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803909/thumbnail/thumbnail_IMAG21_764d377c-fe45-40f9-8775-0f6ff92ad421.jpg",
    },
    {
      title: "허리케인 공주님",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807550/thumbnail/thumbnail_IMAG21_ceb5dd8c-f8b0-4af2-aadc-14da357b6104.jpg",
    },
    {
      title: "자매전쟁",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798664/thumbnail/thumbnail_IMAG21_c7250508-9855-409e-a8f6-0adf1d76a1f8.jpg",
    },
    {
      title: "무진",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805691/thumbnail/thumbnail_IMAG21_8b092acf-e28c-47d2-9b5f-3a02df85103f.jpg",
    },
    {
      title: "천화서고 대공자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805193/thumbnail/thumbnail_IMAG21_47d9dfe3-8e58-43ba-b9c1-ad18673068cb.jpg",
    },
    {
      title: "판사 이한영",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/759567/thumbnail/thumbnail_IMAG21_3991657355780766050.jpg",
    },
    {
      title: "소녀재판",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/743838/thumbnail/thumbnail_IMAG21_a406f148-9929-4eff-aad1-e9cec2153da6.jpg",
    },
    {
      title: "안녕, 나의 수집",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799267/thumbnail/thumbnail_IMAG21_f522ff4f-4f7c-40bf-b9f2-f58d049d4a82.jpg",
    },
    {
      title: "고양이 타타",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805156/thumbnail/thumbnail_IMAG21_6f3edc71-606d-4454-af42-e2f558137132.jpg",
    },
    {
      title: "아카데미에 위장취업당했다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795529/thumbnail/thumbnail_IMAG21_3689631394330325350.jpg",
    },
    {
      title: "분신으로 자동사냥",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799805/thumbnail/thumbnail_IMAG21_aff53990-84b6-4b97-973d-fa3a8add5da5.jpg",
    },
    {
      title: "폰투스 : 극야2",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/792694/thumbnail/thumbnail_IMAG21_579c7baa-5cce-4178-b5ac-67b26913917a.jpg",
    },
    {
      title: "펀치드렁커드",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807164/thumbnail/thumbnail_IMAG21_2dbe37c4-e501-4ba0-84c5-e839fc6d5b0c.jpg",
    },
    {
      title: "랑데뷰",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778967/thumbnail/thumbnail_IMAG21_b0341594-06f3-4b2e-9a3d-da333cae2880.jpg",
    },
    {
      title: "오로지 너를 이기고 싶어",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/730657/thumbnail/thumbnail_IMAG21_4d928a6e-b354-4b8c-ad73-382845df1857.jpg",
    },
    {
      title: "내일",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/695796/thumbnail/thumbnail_IMAG21_332bb25b-c77d-477f-9979-5a8607ebd7a5.jpg",
    },
    {
      title: "살아남은 로맨스",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/764129/thumbnail/thumbnail_IMAG21_082cf9cf-165b-41f3-acae-0d5af28c3864.",
    },
    {
      title: "합격시켜주세용",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/728128/thumbnail/thumbnail_IMAG21_7089844928995668020.jpg",
    },
    {
      title: "무서운게 딱좋아!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778322/thumbnail/thumbnail_IMAG21_3918807004477994082.jpg",
    },
    {
      title: "신의 재래",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807206/thumbnail/thumbnail_IMAG21_9fa6b184-48c8-438c-b734-4bb9de975230.jpg",
    },
    {
      title: "고백 취소도 되나?",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783524/thumbnail/thumbnail_IMAG21_3761743981130101296.jpg",
    },
    {
      title: "노빠꾸 최하영",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803480/thumbnail/thumbnail_IMAG21_2e2c5658-1865-4b48-90f8-f9dfa07ab9ef.jpg",
    },
    {
      title: "밤마다 남편이 바뀐다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803649/thumbnail/thumbnail_IMAG21_2dd44beb-7a5b-43f0-b9d4-af7829e69c70.jpg",
    },
    {
      title: "어느날 갑자기 서울은",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/776092/thumbnail/thumbnail_IMAG21_3905524900524404791.jpg",
    },
    {
      title: "경자 전성시대",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/769658/thumbnail/thumbnail_IMAG21_3559023722976457571.jpg",
    },
    {
      title: "장풍전",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789966/thumbnail/thumbnail_IMAG21_3774973501885266274.jpg",
    },
    {
      title: "칼끝에 입술",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800778/thumbnail/thumbnail_IMAG21_8515acc1-43f0-4110-8210-4b429d23b9df.jpg",
    },
    {
      title: "약빨이 신선함",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800788/thumbnail/thumbnail_IMAG21_20e24a76-68af-4a5c-a4ae-2ac2b25cc1d1.jpg",
    },
    {
      title: "후궁 스캔들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/784140/thumbnail/thumbnail_IMAG21_a110320c-9741-482a-bfef-a265ac9734e1.jpg",
    },
    {
      title: "아포크리파",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804055/thumbnail/thumbnail_IMAG21_e7b5bec9-be9f-484b-a5a0-3a5182aaf33f.jpg",
    },
    {
      title: "청춘계시록",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802079/thumbnail/thumbnail_IMAG21_848d280d-a280-4b16-979a-9a9484113b16.jpg",
    },
    {
      title: "위닝샷!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778578/thumbnail/thumbnail_IMAG21_7377517646593603123.jpg",
    },
    {
      title: "성애적 순애보",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/807992/thumbnail/thumbnail_IMAG21_a977bb5f-927e-42c3-8231-99c1f8b54591.jpg",
    },
    {
      title: "장미같은 소리",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/768474/thumbnail/thumbnail_IMAG21_7cb64c7e-2528-4057-8118-ad1df1acf2f7.jpg",
    },
    {
      title: "천치전능",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/768473/thumbnail/thumbnail_IMAG21_3977634166458311222.jpg",
    },
    {
      title: "신혼부부 생활 백서",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805405/thumbnail/thumbnail_IMAG21_0894c0a4-f4d3-45da-9883-16fc74d911c8.jpg",
    },
    {
      title: "이세계 용사가 지구를 구하는 이유",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803222/thumbnail/thumbnail_IMAG21_eeb94c07-d924-4ad6-96d4-39d596a78d26.jpg",
    },
    {
      title: "헬스던전",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800101/thumbnail/thumbnail_IMAG21_68185df2-8958-47cc-948b-d5890bec9e45.jpg",
    },
    {
      title: "첫날밤만 세 번째",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/804157/thumbnail/thumbnail_IMAG21_9bf245bf-319b-4902-8ebd-438ca75c6e04.jpg",
    },
    {
      title: "돌&아이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783865/thumbnail/thumbnail_IMAG21_d88f2cf6-b945-4e53-a5dc-ca6a69608ac8.jpg",
    },
    {
      title: "평행도시",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/730607/thumbnail/thumbnail_IMAG21_4050531779662669109.jpg",
    },
    {
      title: "홍 의관의 은밀한 비밀",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796251/thumbnail/thumbnail_IMAG21_6417177b-b3b2-4d95-b0a8-933eaa533688.jpg",
    },
    {
      title: "몸이 바뀌는 사정",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/778991/thumbnail/thumbnail_IMAG21_3544721241449849699.jpg",
    },
    {
      title: "결혼까지 망상했어!",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/761599/thumbnail/thumbnail_IMAG21_e6f4166e-fe8c-4b91-9115-ddb3393b218a.jpg",
    },
    {
      title: "위험한 남편을 길들이는 법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/789651/thumbnail/thumbnail_IMAG21_0fcadb92-70c8-4c18-8371-1a40c33a3c20.jpg",
    },
    {
      title: "마왕의 고백",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/793539/thumbnail/thumbnail_IMAG21_4377b048-3468-4b60-9b15-289d0f974340.jpg",
    },
    {
      title: "키미앤조이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798177/thumbnail/thumbnail_IMAG21_f0cbdfb5-413a-4418-bc13-9acaf6d8f3a5.jpg",
    },
    {
      title: "나의 작은 서점",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/790416/thumbnail/thumbnail_IMAG21_055ba017-9ab1-413f-8dab-dcab9b6ef090.jpg",
    },
    {
      title: "노량진 공격대",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/800392/thumbnail/thumbnail_IMAG21_eed97262-22a4-4232-92b7-3e213f4819f2.jpg",
    },
    {
      title: "내곁엔 없을까",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798172/thumbnail/thumbnail_IMAG21_8bcf6118-e095-44a1-b587-778a48caab52.jpg",
    },
    {
      title: "생존고백",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/786262/thumbnail/thumbnail_IMAG21_ef76cf9e-0742-400a-8dcb-2720679c9764.jpg",
    },
    {
      title: "여우애담",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/786082/thumbnail/thumbnail_IMAG21_3617014152366941753.jpg",
    },
    {
      title: "108명의 그녀들",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/798303/thumbnail/thumbnail_IMAG21_ba8821d3-95a0-4916-a95d-7ab265982ef8.jpg",
    },
    {
      title: "마도",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/737021/thumbnail/thumbnail_IMAG21_6758bf70-1d7a-4ceb-ae84-90698e808920.jpg",
    },
    {
      title: "철수와 영희 이야기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/787465/thumbnail/thumbnail_IMAG21_3835207836886250084.jpg",
    },
    {
      title: "백설을 위하여",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801580/thumbnail/thumbnail_IMAG21_fe3ba1fc-a481-42db-bd91-7d2a02f599a6.jpg",
    },
    {
      title: "하렘에서 살아남기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794944/thumbnail/thumbnail_IMAG21_494e291d-009d-4ab1-802f-9f6c056fb7cc.jpg",
    },
    {
      title: "데빌샷",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/753842/thumbnail/thumbnail_IMAG21_7089009287152952422.jpg",
    },
    {
      title: "완벽한 파트너",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801455/thumbnail/thumbnail_IMAG21_24d87e2b-c39c-4f30-8b11-4ba2ab86e253.jpg",
    },
    {
      title: "여신님의 호랑이 공략법",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802682/thumbnail/thumbnail_IMAG21_2b6bb044-08d6-443a-aa0f-672f2429066a.jpg",
    },
    {
      title: "손 안의 안단테",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799509/thumbnail/thumbnail_IMAG21_1ef92df7-7d7f-48ab-9c8d-f342aad36d08.jpg",
    },
    {
      title: "잿더미 황후",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802986/thumbnail/thumbnail_IMAG21_c25b5dbd-8e7a-4184-aa1f-5d02727e874c.jpg",
    },
    {
      title: "신이 담긴 아이",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/745652/thumbnail/thumbnail_IMAG21_3691036779872269110.jpg",
    },
    {
      title: "킬링킬러",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/797155/thumbnail/thumbnail_IMAG21_f4040a49-edae-4b48-81c7-09b6426f3c81.jpg",
    },
    {
      title: "사랑은 없는 것처럼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/805481/thumbnail/thumbnail_IMAG21_9e078731-7266-4eeb-b39b-ab358c126589.jpg",
    },
    {
      title: "인생영화",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/803122/thumbnail/thumbnail_IMAG21_7160c2e6-5434-403b-bc7c-a21ecffbd599.jpg",
    },
    {
      title: "블러드 리벤저",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/783599/thumbnail/thumbnail_IMAG21_629c1cd8-a02c-4ee3-80a8-2da6c5c6a57e.jpg",
    },
    {
      title: "DARK MOON: 달의 제단",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/786973/thumbnail/thumbnail_IMAG21_35f474fa-13bc-4ac5-9815-91f0e9d1ef95.jpg",
    },
    {
      title: "보스의 노골적 취향",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/780409/thumbnail/thumbnail_IMAG21_7293356615652225585.jpg",
    },
    {
      title: "전설의 화석",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/773473/thumbnail/thumbnail_IMAG21_05b29d26-bae0-489e-a2e2-d18034b84731.jpg",
    },
    {
      title: "아마도, 굿모닝",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/795041/thumbnail/thumbnail_IMAG21_02f63d85-3d3c-468b-9b4c-a61203785747.jpg",
    },
    {
      title: "마섹남 - 마술하는 섹시한 남자",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/796894/thumbnail/thumbnail_IMAG21_3473180633326577200.jpg",
    },
    {
      title: "샤인 스타",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/758665/thumbnail/thumbnail_IMAG21_3617063617572387171.jpg",
    },
    {
      title: "밀실 마피아 게임",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/794224/thumbnail/thumbnail_IMAG21_c063bfcc-d189-45c3-a29d-4e453d8b134b.jpg",
    },
    {
      title: "네 것이었던 것",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/802751/thumbnail/thumbnail_IMAG21_aed2568c-b7b3-45d8-9cae-a613a4b158f9.jpg",
    },
    {
      title: "패션쇼",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/779354/thumbnail/thumbnail_IMAG21_60a74bee-a71e-4a50-a02b-c434359e36a1.jpg",
    },
    {
      title: "천년간 노려왔습니다",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801428/thumbnail/thumbnail_IMAG21_50e8a89e-b0b6-44ad-8a98-0850328943b4.jpg",
    },
    {
      title: "어떤소란",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/799213/thumbnail/thumbnail_IMAG21_d0af8fd4-8aec-4e7f-9eca-f801c7ca01b2.jpg",
    },
    {
      title: "그림자 잡기",
      thumbnail:
        "https://image-comic.pstatic.net/webtoon/801277/thumbnail/thumbnail_IMAG21_704c7b5b-4662-4998-b388-735f1505dc34.jpg",
    },
  ],
};

export interface Product {
  title: string;
  price: string;
  img: string;
  link: string;
  mall: string;
  discount?: string;
}

export const SHOPPING_PRODUCTS: Product[] = [
  {
    img: "https://shopping-phinf.pstatic.net/main_3805183/38051837913.jpg?type=f300",
    title: "no.23265 히든밴딩 와이드 컬러팬츠",
    price: "35,910",
    discount: "10",
    link: "http://www.misscandy.co.kr/index.html?branduid=229428&ref=naver_open&da_ref=Yz1reThYT3k=",
    mall: "미스캔디",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_10/8eb86cf5-6667-42bb-8736-8efd7dbfb185.jpg?type=f300",
    title:
      "[제이에스티나] [아이유 PICK] CLOVIA DUELLO 목걸이 (JJJTNQ2BF042SR420) (JJJTNQ2BF042SR420)",
    price: "117,300",
    discount: "15",
    link: "https://www.jestina.co.kr/products/view/G2000025501?utm_source=Naver&utm_medium=PC.box&utm_campaign=JJJTNQ2BF042SR420&cafe_mkt=ntbox_b20",
    mall: "제이에스티나공식몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230315_21/9d8ac388-5dba-4c6f-9e89-d55d150e7433.jpg?type=f300",
    title: "여아 블루퍼피 7부 내의세트",
    price: "14,900",
    discount: "50",
    link: "https://www.suafam.com/product/%EC%97%AC%EC%95%84-%EB%B8%94%EB%A3%A8%ED%8D%BC%ED%94%BC-7%EB%B6%80-%EB%82%B4%EC%9D%98-%EC%84%B8%ED%8A%B8/1307/category/27/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225567&utm_content=girl_bluepuppy_7",
    mall: "수아팜",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3316361/33163616529.10.jpg?type=f300",
    title: "[한정수량 25% 초특가]미라클 화이트닝 세트",
    price: "378,000",
    link: "https://curicarecorp.com/product/detail.html?product_no=42&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "큐리케어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3902165/39021655825.jpg?type=f300",
    title:
      "#셋트 특가 56%+무료배송 14k G.F★ 귀걸이/목걸이 SET 엔젤리 크리스탈 SET SET0321",
    price: "47,900",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275645&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221207_23/da8cf35d-0ea2-46d9-abb5-1ad79bdf90ee.jpg?type=f300",
    title: "비비랩 시서스원 다이어트",
    price: "49,410",
    discount: "10",
    link: "https://www.nutrione.co.kr/item/dtl/1000082005?utm_source=naver&utm_medium=da&utm_campaign=shoppingbox&utm_content=cissus",
    mall: "뉴트리원공식쇼핑몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230323_14/6c6bcfbb-3411-43b8-9d41-08e7c9c13992.jpg?type=f300",
    title: "퓨징 테크놀로지 와이어리스 블랙 40% OFF",
    price: "34,500",
    discount: "40",
    link: "https://codescombineinnerwear.com/product/detail.html?product_no=3593&cate_no=81&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225568&utm_content=fusing_technology_wireless_black",
    mall: "코데즈컴바인이너웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3670977/36709770865.jpg?type=f300",
    title: "XXMX 크롭 숏슬리브",
    price: "24,000",
    discount: "29",
    link: "https://www.xexymix.com/index.html?branduid=2064820&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904989/39049895840.jpg?type=f300",
    title: "puff banding ops_3c",
    price: "99,700",
    discount: "5",
    link: "http://www.annakids.co.kr/index.html?branduid=52284&ref=naver_open",
    mall: "안나키즈",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3122180/31221806695.1.jpg?type=f300",
    title: "1+1 컬러칩 7부티 준비끝 세트",
    price: "19,000",
    link: "https://purplia.com/product/detail.html?product_no=35692&src=image&kw=0010FA&cafe_mkt=ntbox_b20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904661/39046618944.jpg?type=f300",
    title: "물결 카라 배색 원피스[ST5716D 미디원피스 카라원피스 랩원피스]",
    price: "79,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=150944&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3885698/38856986091.jpg?type=f300",
    title: "실키포켓블라우스",
    price: "44,620",
    discount: "3",
    link: "https://graychic.co.kr/product/detail.html?product_no=12820&cate_no=7&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3885498/38854987006.jpg?type=f300",
    title: "[HYE-JEAN] 중청 슬림 부츠컷 PANTS",
    price: "39,000",
    link: "http://www.nanasalon.com/index.html?branduid=569656&ref=naver_open",
    mall: "나나살롱",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3773961/37739611266.2.jpg?type=f300",
    title: "벨마샤틴훌원피스",
    price: "84,550",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=5250&cate_no=27&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_18/4ac543ba-4316-42c7-a730-0e0eee464259.jpg?type=f300",
    title: "모노어딕트 제니스 패브릭 콤보 스트랩백",
    price: "30,300",
    discount: "49",
    link: "https://monoaddict.co.kr/product/detail.html?product_no=694&cafe_mkt=ue_naverreccom",
    mall: "모노어딕트",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3799158/37991583990.jpg?type=f300",
    title: "MADE 키작녀 말랑말랑 밴딩 팬츠 (7color)",
    price: "30,240",
    link: "https://mjcong.co.kr/product/detail.html?product_no=12753&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221028_5/752e9285-72df-43d1-8d52-766f55258ffc.jpg?type=f300",
    title: "100% 천연소가죽 에센셜 숄더크로스백",
    price: "138,000",
    discount: "22",
    link: "http://www.zizhel.net/shop/shopdetail.html?branduid=1084637&da_ref=Yz1hczY0UmI=",
    mall: "지젤슈즈",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_22/f06ecad4-e204-492d-86c2-90c0dac0bf03.jpg?type=f300",
    title: "귀여운 호랑이&상어를 내 폰케이스 안에! 앙-프렌즈 카드수납 폰케이스",
    price: "11,800",
    discount: "46",
    link: "https://momocase.co.kr/product/000-%EC%95%99-%ED%94%84%EB%A0%8C%EC%A6%88%EC%B9%B4%EB%93%9C%EC%88%98%EB%82%A9/4630/category/188/display/1/",
    mall: "모모케이스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2623689/26236898069.8.jpg?type=f300",
    title: "F21P012 로안드 리본 플랫슈즈 | 1cm",
    price: "41,800",
    link: "http://www.naturalflex.kr/index.html?branduid=2099243&ref=naver_open",
    mall: "NATURALFLEX",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2730418/27304181386.2.jpg?type=f300",
    title: "뉴 럭스 레드드롭 립큐어 - 롱 래스팅 젤 [2개사면 1개 더!]",
    price: "12,000",
    discount: "52",
    link: "https://n-shine.com/product/detail.html?product_no=628&cate_no=73&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "네츄럴샤인",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3589720/35897206223.jpg?type=f300",
    title: "랩 커버업 숏슬리브 1+1",
    price: "29,800",
    discount: "52",
    link: "https://www.xexymix.com/index.html?branduid=2064775&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904643/39046433668.jpg?type=f300",
    title: "라일 큐빅 나시[ST5710T,큐빅나시,여자나시,골지나시]",
    price: "19,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=150950&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3421931/34219316126.1.jpg?type=f300",
    title: "아리오 밴딩 와이드 팬츠",
    price: "29,800",
    link: "https://purplia.com/product/detail.html?product_no=37011&src=image&kw=001104&cafe_mkt=ntbox_a20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2471850/24718502046.9.jpg?type=f300",
    title: "누적 판매량 50만개, 후기도 엄청나! 4주 솔루션 헤어브로우 래쉬 세럼",
    price: "21,000",
    discount: "63",
    link: "http://vivelab.kr/product/detail.html?product_no=21&cate_no=24&display_group=1&mkpl1=trendre1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "바이브랩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904623/39046236713.jpg?type=f300",
    title: "ONE * 버튼크롭블레이저",
    price: "120,600",
    link: "http://www.45th.co.kr/index.html?branduid=10591953&ref=naver_open&da_ref=Yz1jM3hnNUw=&ref=ntrendb01",
    mall: "45번가",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230228_6/9d0f2297-3d31-42db-b9a6-e72a8445dfc8.jpg?type=f300",
    title: "오버핏 기모 후드 반집업 1+1",
    price: "44,300",
    discount: "70",
    link: "http://www.beststl.com/index.html?branduid=86989&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_18/ac2b9396-3515-42c9-b988-89e0a2eccfe3.jpg?type=f300",
    title:
      "★특가SALE★ 라운드넥기본반팔티 (데일리로 매일입는 무지티셔츠~4컬러 골라)",
    price: "9,900",
    discount: "48",
    link: "https://nadoyeosin.com/product/detail.html?product_no=4007&cafe_mkt=ue_naverboxre",
    mall: "나도여신",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3776603/37766033296.jpg?type=f300",
    title: "[니쁜스단독제작20%할인]프리미엄 레직기 명품워싱 데님팬츠",
    price: "69,900",
    link: "http://www.nibbuns.co.kr/index.html?branduid=71195&da_ref=Yz11ZjBqbks=",
    mall: "니쁜스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3817565/38175654106.jpg?type=f300",
    title:
      "★풀셋코디 [클리브랜드골프] 플리츠 카고포켓 여성 큐롯형 골프반바지/골프웨어_CGWPT31560",
    price: "173,600",
    link: "http://clevelandgolfwear.com/goods/goods_view.php?goodsNo=1000135630&inflow=naver",
    mall: "클리브랜드골프웨어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_3/2a78d79f-9e32-4a97-95df-f990cea10685.jpg?type=f300",
    title:
      "[꼬뜨] 캣스틱 참치. 고양이 츄르 건강 영양 습식 간식. 수분 함유량 UP 나트륨 DOWN",
    price: "4,500",
    discount: "83",
    link: "https://smartstore.naver.com/cote/products/6090385585?nt_source=naver&nt_medium=shoppingbox&nt_detail=catstic_tuna&cafe_mkt=ntbox_b20",
    mall: "Cote",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3805206/38052062443.jpg?type=f300",
    title:
      "패턴 피크닉 데이 윈디 [하드 폰케이스]아이폰14케이스 13 12 미니 mini 엑스 프로 pro 맥스 케이스 핸드폰 커플 캐릭터 갤럭시 커플 곰돌이 캐릭터",
    price: "10,800",
    discount: "33",
    link: "https://theninemall.com/product/detail.html?product_no=7471&cate_no=46&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "더나인몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_17/7f610e38-11e3-4852-b332-ebd799812fce.jpg?type=f300",
    title: "[페미라이드] 퓨어 폼 클렌져 150ml",
    price: "42,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7050064849",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2550185/25501859726.13.jpg?type=f300",
    title: "더위닌 슬링백 펌프스힐 5cm",
    price: "32,310",
    discount: "30",
    link: "https://sovomall.co.kr/product/detail.html?product_no=14310&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_7/65d013cd-1855-4aef-9855-73dd93eaba3a.jpg?type=f300",
    title: "★주문율1위★롱/숏 란데체크셔츠원피스",
    price: "24,800",
    discount: "40",
    link: "https://sugargirl.co.kr/product/%EB%9E%80%EB%8D%B0%EC%B2%B4%ED%81%AC%EC%85%94%EC%B8%A0%EC%9B%90%ED%94%BC%EC%8A%A4/4518/category/1/display/17/?cafe_mkt=ue_naver_001",
    mall: "슈가걸",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3546537/35465379684.8.jpg?type=f300",
    title: "아이르 신상추가 밍크 극세사 무릎담요 케이프담요 캠핑",
    price: "9,900",
    discount: "60",
    link: "http://item.gmarket.co.kr/Item?goodscode=862408974&jaehuid=200011589",
    mall: "G마켓",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_10/a10ebb09-d2b9-4a5c-87bf-133e319cc819.jpg?type=f300",
    title: "[더마 EMS샷] 중주파 경락 디바이스",
    price: "275,000",
    discount: "40",
    link: "https://themedicube.co.kr/product/detail.html?product_no=609&cate_no=501&display_group=1&utm_source=naver&utm_medium=ager_sb_reco&utm_campaign=ems_1",
    mall: "메디큐브",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3680013/36800136438.jpg?type=f300",
    title: "하남쭈꾸미 350g 500g 3팩 5팩 외",
    price: "22,900",
    discount: "23",
    link: "https://www.1300k.com/product/107966477?channelType=NVRSHBOXS&src=image&kw=0108AB",
    mall: "1300K",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_17/d2db56f7-d1ef-42bb-8d31-1ea7f54ccce6.jpg?type=f300",
    title: "★허리밴딩으로~편안해★ 제코 밴딩 팬츠",
    price: "19,900",
    discount: "54",
    link: "https://missu.co.kr/product/detail.html?product_no=5033&cafe_mkt=ue_naverboxre",
    mall: "미스유",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3792486/37924860976.jpg?type=f300",
    title: "여성싱크양말30컬레한세트",
    price: "9,900",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253590&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=C960613405",
    mall: "옥션",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3718379/37183798709.2.jpg?type=f300",
    title:
      "[올인원 패키지 세트][폴란드95%] 프리미엄 풀 패키지 구스다운세트(구스이불+구스베개+이불커버+베개커버+구스토퍼+목화솜패드 세트)",
    price: "872,900",
    discount: "25",
    link: "https://doadream.com/product/detail.html?product_no=1173&cate_no=26&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "도아드림",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230316_13/68ebc709-eb48-4d2f-aced-77fe3dfd726f.jpg?type=f300",
    title: "오버핏으로 넉넉한 라운드 맨투맨",
    price: "22,900",
    link: "https://www.wingsmall.co.kr/?cafe_mkt=ue_navertrendpc1",
    mall: "윙스몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230309_13/e77903d7-9fe2-414c-99ed-6e7b1b70fb73.jpg?type=f300",
    title: "데일리로 입어~ 귀여운 그래픽이 포인트가 되어줄~ 해피주반팔티",
    price: "27,800",
    discount: "43",
    link: "https://yeosinj.com/product/detail.html?product_no=4641&cafe_mkt=ue_naverboxre",
    mall: "여신제이",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3160869/31608697693.1.jpg?type=f300",
    title: "체크자켓세트",
    price: "117,800",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=4544&cate_no=27&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_25/c5a9063f-9077-4195-9e3c-e220caae6751.jpg?type=f300",
    title: "니트라 더욱 귀여워요! 이너로 딱이야~ 치코 반팔 니트",
    price: "29,800",
    discount: "29",
    link: "https://j-closet.co.kr/product/detail.html?product_no=608&cafe_mkt=ue_naverboxre",
    mall: "제이의옷장",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2380286/23802869733.2.jpg?type=f300",
    title: "[1+1 EVENT] 어반트래커",
    price: "129,000",
    link: "http://www.akiii.co.kr/index.html?branduid=1152714&ref=naver_open&da_ref=Yz1JUnFxejQ=",
    mall: "아키클래식",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230406_7/81d606d0-02c7-4fc6-9b14-89826d6c4ad7.jpg?type=f300",
    title: "★체형커버까지~Good★ 밸트 투포켓 버튼 롱 데님치마",
    price: "25,990",
    discount: "15",
    link: "http://www.moulian.com/index.html?branduid=169616&da_ref=Yz1GVkJwVW4=&ref=naverbox",
    mall: "뮬리안",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8577982/85779825731.jpg?type=f300",
    title: "[2개특가] KONTINO 캠핑 폴딩박스 38L",
    price: "44,620",
    link: "https://smartstore.naver.com/marketb/products/8235325408",
    mall: "마켓비 공식스토어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_25/0e607f0b-e539-4321-9b28-057fc3defa6c.jpg?type=f300",
    title: "quality 핀턱 숄 자켓",
    price: "45,000",
    link: "https://annanmode.com/product/quality-%ED%95%80%ED%84%B1-%EC%88%84-%EC%9E%90%EC%BC%93%EC%9E%90%EC%BC%93cu741-3colorfree-size/15404/category/119/display/1/&cafe_mkt=ntbox_a11",
    mall: "안나앤모드",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3905211/39052119626.jpg?type=f300",
    title:
      "[NEW_MADE]SS스페셜★20,000원 할인레이븐 골드버튼 자켓,골드버튼자켓,버튼자켓,봄자켓,봄자켓신상,하객룩,하객룩자켓,여성하객룩,오피스룩,오피스룩자켓,여성오피스룩,봄자켓추천",
    price: "129,000",
    link: "https://loveparis.net/product/detail.html?product_no=19934&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "러브패리스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8373309/83733092599.4.jpg?type=f300",
    title:
      "투플러스 한우 800g 구이용 1++ 투플 한우 모둠 소고기 투뿔 투쁠 한우 모듬",
    price: "69,000",
    discount: "42",
    link: "https://smartstore.naver.com/teawha/products/6188593022",
    mall: "태화농수산",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3753343/37533434214.1.jpg?type=f300",
    title: "제베스 천연가죽 프리미엄 스틸레토 슬링백 4cm",
    price: "48,930",
    discount: "30",
    link: "https://sovomall.co.kr/product/detail.html?product_no=15971&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_28/f1da486c-a860-4a7c-a268-a8aa5404f5d2.jpg?type=f300",
    title: "매 시즌 사랑받는 데일리 블라우스",
    price: "26,000",
    link: "https://common-unique.com/product/detail.html?product_no=5678&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_opencafe_mkt=ue_trendplus01",
    mall: "커먼유니크",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_22/af2da174-d544-4f12-a829-40c588d67e0d.jpg?type=f300",
    title: "비비고 테이블 본갈비탕 700g",
    price: "6,480",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40145680&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_galbitang_food",
    mall: "CJ더마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3896835/38968350770.jpg?type=f300",
    title: "string 페이즐 롱원피스",
    price: "26,100",
    link: "https://sunny11.com/product/detail.html?product_no=10815&cate_no=7&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "써니11",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230315_0/b5788540-0428-4341-af62-5e24a5a17017.jpg?type=f300",
    title: "데일리 화이트 브라탑 팬티세트",
    price: "30,000",
    discount: "50",
    link: "https://www.guessunderwear.kr/product/%EB%8D%B0%EC%9D%BC%EB%A6%AC-%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B8%8C%EB%9D%BC%ED%83%91-%ED%8C%AC%ED%8B%B0-%EC%84%B8%ED%8A%B8/968/category/28/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225570&utm_term=white_bratop_set",
    mall: "게스언더웨어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_24/35e78a40-b193-4dda-bd06-831afe2f0a40.jpg?type=f300",
    title: "프로피에스 솔톡 800mg x 224정",
    price: "29,900",
    link: "https://profis.co.kr/product/detail.html?product_no=58&cate_no=63&display_group=1&cafe_mkt=ue_npc1",
    mall: "한국프로피에스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3135383/31353837746.jpg?type=f300",
    title: "터보붐",
    price: "35,800",
    discount: "34",
    link: "https://food-ology.co.kr/product/detail.html?product_no=96&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "푸드올로지",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3402430/34024301441.jpg?type=f300",
    title: "장민호가 선택한 간장게장, 특A급(중) 3마리",
    price: "54,900",
    link: "http://www.chefechan.com/Goods/Detail/SOW58194252",
    mall: "셰프애찬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3747227/37472276896.jpg?type=f300",
    title: "몬트부츠컷슬랙스",
    price: "29,800",
    discount: "17",
    link: "https://dabagirl.co.kr/product/detail.html?product_no=58038&cate_no=67&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "다바걸",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_6/e25147b3-ab35-409b-b0af-318db340d829.jpg?type=f300",
    title: "BE해피 반팔 조거 트레이닝세트",
    price: "39,800",
    link: "http://www.pinksisly.com/shop/shopdetail.html?branduid=141298&ref=navertrend3&da_ref=Yz1kR2VHZEs=",
    mall: "핑크시슬리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2199042/21990425600.3.jpg?type=f300",
    title: "아뜰리에 알러지케어 먼지없는 차렵이불 침구세트 7colors",
    price: "54,900",
    discount: "30",
    link: "http://www.nubizio.co.kr/index.html?branduid=153477&ref=naver_open",
    mall: "누비지오",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230404_17/5eaf4fd3-86c9-42bc-a682-ed53bd23b313.jpg?type=f300",
    title: "자체제작 헤이 카라 반팔원피스",
    price: "49,000",
    link: "https://prostj.com/product/detail.html?product_no=16316&cafe_mkt=ue_ntbox",
    mall: "프로스트제이",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_7/47059b7d-b13f-453e-8f50-f90a9ae6ee0e.jpg?type=f300",
    title: "소울메이트 항균 차렵이불 5color 건조기 사용 가능, 먼지없는 이불",
    price: "97,500",
    discount: "25",
    link: "https://smartstore.naver.com/elenaheim/products/8097104918",
    mall: "엘레나하임",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3550424/35504248084.8.jpg?type=f300",
    title: "제이프랑/여름신상 티셔츠/팬츠/트레이닝세트/반팔",
    price: "14,900",
    discount: "50",
    link: "http://item.gmarket.co.kr/Item?goodscode=2624877870&jaehuid=200011590",
    mall: "G마켓",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_23/e9981c4e-6064-4b79-b185-d14a23700a08.jpg?type=f300",
    title: "강아지풀 바람막이 점퍼",
    price: "19,000",
    discount: "68",
    link: "https://ccinderella.com/product/detail.html?product_no=2212&cafe_mkt=ue_naverboxre",
    mall: "신데렐라",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3840223/38402234711.jpg?type=f300",
    title: "오버핏 커버업 티셔츠",
    price: "29,000",
    discount: "26",
    link: "https://www.xexymix.com/index.html?branduid=2064932&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3877975/38779750286.jpg?type=f300",
    title: "텐션슬림2 팬츠",
    price: "25,000",
    link: "https://romistory.com/product/detail.html?product_no=62710&cate_no=29&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "로미스토리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3899329/38993297294.jpg?type=f300",
    title:
      "베이직한 핏에 군살 커버까지~ 자수로 포인트 살린 ★텔리어 자수 티셔츠★",
    price: "22,610",
    link: "https://urbanlady.co.kr/product/%ED%85%94%EB%A6%AC%EC%96%B4-%EC%9E%90%EC%88%98-%ED%8B%B0%EC%85%94%EC%B8%A0/3029/category/24/display/1/?cafe_mkt=ue_naver_07",
    mall: "어반레이디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3526226/35262262380.4.jpg?type=f300",
    title: "[V라인 관리] 달심 호박주스 (호박즙) 1BOX",
    price: "45,000",
    discount: "10",
    link: "https://dalsim.kr/product/detail.html?product_no=128&cate_no=43&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "달심",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3225911/32259113376.2.jpg?type=f300",
    title: "[7%위클리세일] 부드러운 수플레 자수 차렵이불 침구세트-쥬씨 (S/Q)",
    price: "30,600",
    discount: "33",
    link: "https://shezhome.co.kr/product/detail.html?product_no=2252&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "쉬즈홈공식몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_17/ebd0259b-49cf-4d47-a002-01a54b4dc6d0.jpg?type=f300",
    title: "[슈멜츠] 포도당 에너지 캔디 (복숭아맛 / 혼합과일맛)",
    price: "3,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7049999269",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3867734/38677349648.jpg?type=f300",
    title: "★펀칭스티로BL★",
    price: "16,900",
    discount: "57",
    link: "https://hellen.co.kr/product/%ED%8E%80%EC%B9%AD%EC%8A%A4%ED%8B%B0%EB%A1%9Cbl/4000/category/23/display/1/?cafe_mkt=ue_n_r1",
    mall: "hellen",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3116312/31163126913.2.jpg?type=f300",
    title: "깔끔대장 원샷원뻥",
    price: "29,800",
    discount: "57",
    link: "https://cleanboss.kr/product/detail.html?product_no=895&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=oneshot00&utm_term=oneshot&n_query=oneshot00&cafe_mkt=nbox_bridge",
    mall: "깔끔대장",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3415082/34150826572.jpg?type=f300",
    title: "일상공감 요거슨 만능채칼",
    price: "16,900",
    discount: "43",
    link: "https://dailygongam.com/product/detail.html?product_no=921&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=chkal00&utm_term=chkal&n_query=chkal00&cafe_mkt=nbox_bridge",
    mall: "일상공감",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2140741/21407412559.5.jpg?type=f300",
    title: "★감춰왔던 뱃살이~쏙!★ [2TYPE] 시그니쳐 뱃살 쏙 슬랙스 [와이드밴딩]",
    price: "36,800",
    discount: "13",
    link: "http://www.midasb.co.kr/shop/shopdetail.html?branduid=622851&src=image&kw=002B56&ref=naverbox&da_ref=Yz1OeVBTaW0=",
    mall: "마이더스비",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2872532/28725320404.1.jpg?type=f300",
    title: "[EVELLET]하이센 핀턱 싱글자켓",
    price: "78,000",
    link: "http://www.evellet.com/index.html?branduid=847818&ref=naver_open",
    mall: "제이스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3542139/35421395321.4.jpg?type=f300",
    title: "[1+1] 엘더 스킨핏 파운데이션 30ml",
    price: "38,900",
    discount: "65",
    link: "https://kioland.co.kr/product/detail.html?product_no=31&cafe_mkt=ntbox_a39&utm_source=ns&utm_medium=cpc&utm_campaign=lt&inflow=naver&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "블랑카우키오스킨",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3902694/39026942074.jpg?type=f300",
    title:
      "[&hearts;단24시간!신상10%할인&hearts;]MADE 소프트 말랑말랑 조거 팬츠 (5color)",
    price: "28,440",
    link: "https://mjcong.co.kr/product/detail.html?product_no=14372&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230223_6/91f320e8-db50-4cbf-bcb1-b4714e7d09c4.jpg?type=f300",
    title: "하이웨스트아웃포켓부츠컷데님팬츠",
    price: "35,100",
    discount: "10",
    link: "https://secretlabel.co.kr/shop/shopdetail.html?branduid=525222",
    mall: "시크릿라벨",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_15/b5b2074d-d910-40e8-b162-7ba1e1a6c6cf.jpg?type=f300",
    title: "매일 찾게되는 간절기 셔츠겸 재킷",
    price: "29,800",
    link: "https://www.roompacker.co.kr/index.html?branduid=91700&ref=naver_open&ref=NAdaTR4PC1&da_ref=Yz01a09YY3Q=",
    mall: "룸페커",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3889408/38894084619.jpg?type=f300",
    title: "★오래입어★ 핑크페니원피스",
    price: "37,900",
    discount: "53",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=7140&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3262348/32623484900.4.jpg?type=f300",
    title: "[스타협찬] 스웬디 가보시 하이힐 (8cm)",
    price: "39,900",
    discount: "15",
    link: "https://voga.co.kr/product/detail.html?product_no=6898&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "VOGA",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_2/31155301-dbe9-4963-9d9b-687315c8bbad.jpg?type=f300",
    title: "★주문폭주/순금주얼리최대68%할인★ 24K 순금 심플 한쪽 금귀걸이 7종",
    price: "44,400",
    discount: "30",
    link: "https://www.obelee.com/shop/shopdetail.html?branduid=3543551&utm_source=%23NAVER_TrM&utm_medium=CPM&utm_campaign=%EC%88%9C%EA%B8%88%ED%95%9C%EC%AA%BDE_%EC%B6%94%EC%B2%9C",
    mall: "오벨리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230126_4/a5d53a95-5b8b-4449-9361-70f967e9fc8d.jpg?type=f300",
    title: "에어로쿨 컴포트핏 노와이어 블랙 브라 팬티세트",
    price: "23,000",
    discount: "60",
    link: "https://elleinnerwear.kr/product/detail.html?product_no=662&cate_no=24&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225569&utm_term=black_aerocool_comportfit_set",
    mall: "엘르이너웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3451492/34514924878.2.jpg?type=f300",
    title: "[20개세트] 무지 긴목 양말 20세트",
    price: "13,900",
    discount: "30",
    link: "https://viewlap.com/product/detail.html?product_no=1764&cate_no=46&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "뷰랩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_5/65ff8742-d309-46f8-b7d3-60fa9a0228d1.jpg?type=f300",
    title: "A. michel 핀턱 스커트",
    price: "62,000",
    link: "https://annanmode.com/product/a-michel-%ED%95%80%ED%84%B1-%EC%8A%A4%EC%BB%A4%ED%8A%B8%EC%8A%A4%EC%BB%A4%ED%8A%B8b1128d01-2color3size/15112/category/1/display/2/&cafe_mkt=ntbox_b11",
    mall: "안나앤모드",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3899353/38993533011.jpg?type=f300",
    title: "1만원대로 이렇게 귀여운 티셔츠를 GET?! 에펙스 프린팅 티셔츠",
    price: "18,810",
    link: "https://mamaju.co.kr/product/%EC%97%90%ED%8E%99%EC%8A%A4-%ED%94%84%EB%A6%B0%ED%8C%85-%ED%8B%B0%EC%85%94%EC%B8%A0/6515/category/69/display/1/?cafe_mkt=ue_naver_02",
    mall: "마마쥬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3822461/38224617709.jpg?type=f300",
    title: "여성 소가죽 소프트 키높이 스니커즈  (WT) - 3FP217",
    price: "66,000",
    discount: "60",
    link: "https://hushpuppies.co.kr/product/detail.html?product_no=970&cate_no=93&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "허시파피",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_16/4450887c-086d-4523-8e4d-dfaa55a93561.jpg?type=f300",
    title: "헤트라스 오브제 디퓨저 200ml 1+1",
    price: "13,800",
    discount: "45",
    link: "https://hetras.co.kr/product/objet-diffuser-2ea/117/category/44/display/1/?utm_source=naver&utm_medium=cpc&utm_campaign=shopping_box&utm_id=shopping_box&utm_content=recommend1",
    mall: "헤트라스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3883599/38835992819.jpg?type=f300",
    title: "베스트셀러 숏 싱글자켓 벨트 베이직 스커트 투피스(S,M)",
    price: "70,300",
    link: "https://joyu.co.kr/product/detail.html?product_no=8582&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open&cafe_mkt=ue_naver_bottom",
    mall: "조이유",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1064704/10647047587.22.jpg?type=f300",
    title: "더스파 수압상승 절수 알루미늄 샤워기 헤드 울트라 X3000",
    price: "16,800",
    discount: "83",
    link: "https://smartstore.naver.com/thespa/products/557089447",
    mall: "더스파",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_18/28a681fa-dba2-40a2-aeda-a2d29fc71aba.jpg?type=f300",
    title: "대전 선화동 매운 실비김치 세트 김치800g + 파김치 500g",
    price: "28,600",
    link: "https://smartstore.naver.com/djhotkimchi/products/5507973704",
    mall: "선화동매운김치",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_11/0f28de3e-8047-4716-821c-1df3dcf85348.jpg?type=f300",
    title: "헤스티 골지 카라 집업 와이드 트레이닝 세트",
    price: "48,500",
    link: "https://lovesome-one.com/product/%ED%97%A4%EC%8A%A4%ED%8B%B0-%EA%B3%A8%EC%A7%80-%EC%B9%B4%EB%9D%BC-%EC%A7%91%EC%97%85-%EC%99%80%EC%9D%B4%EB%93%9C-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%EC%84%B8%ED%8A%B8%EC%8B%A0%EC%83%81%EB%8D%B0%EC%9D%BC%EB%A6%AC%EB%A3%A9%EB%8D%B0%EC%9D%BC%EB%A6%AC%EB%B4%84%ED%88%AC%ED%94%BC%EC%8A%A4%ED%95%98%EC%9D%B4%EC%9B%A8%EC%8A%A4%ED%8A%B8%EB%B0%94%EC%A7%80%EC%B8%84%EB%A6%AC%EB%8B%9D%EA%BE%B8%EC%95%88%EA%BE%B8/9757/category/49/display/1/",
    mall: "러브썸원",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3861331/38613311948.jpg?type=f300",
    title: "[GC MADE] 슬릿카라벌룬니트(비스코스55%)",
    price: "25,220",
    discount: "3",
    link: "https://graychic.co.kr/product/detail.html?product_no=12788&cate_no=7&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904657/39046571008.jpg?type=f300",
    title:
      "#셋트 특가 56%+무료배송 14k G.F★ 귀걸이/귀걸이/목걸이 SET 하르밍 하트 SET SET0320",
    price: "33,900",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275692&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2684659/26846597699.3.jpg?type=f300",
    title: "[문캠핑]커밋의자1+1 단독특가(2color)",
    price: "49,900",
    discount: "49",
    link: "https://moongori.com/goods/view?no=988413&market=naver",
    mall: "문고리닷컴",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_19/48e25df9-bd35-47f1-b98b-7e595e2d95a6.jpg?type=f300",
    title: "H16 1인용/2인용 스툴 카페 화장대 매장 상가 보조 대기의자",
    price: "169,000",
    discount: "52",
    link: "https://smartstore.naver.com/ddssofa/products/5036645250",
    mall: "DDS SOFA",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230228_13/00cd305d-528f-4f8d-b9d8-b403401e49f0.jpg?type=f300",
    title: "오버핏 왕후드 후드 1+1",
    price: "29,930",
    discount: "80",
    link: "http://www.beststl.com/index.html?branduid=86958&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3403147/34031476367.1.jpg?type=f300",
    title: "레니스트라이프니트",
    price: "12,900",
    discount: "19",
    link: "https://bymonologue.co.kr/product/detail.html?product_no=4022&cate_no=137&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "모놀로그",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8193730/81937302167.jpg?type=f300",
    title: "셰프애찬 스테이크 닭갈비 3+1팩 소금 양념 구이 캠핑 닭다리",
    price: "29,700",
    link: "https://smartstore.naver.com/owenfood0510/products/4392779730",
    mall: "셰프애찬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3796129/37961298290.jpg?type=f300",
    title: "[OP-f105]브리즈 원피스",
    price: "39,600",
    discount: "40",
    link: "http://leejiral.com/product/detail.html?product_no=15013&cate_no=29&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "리지랄닷컴",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2803000/28030004746.5.jpg?type=f300",
    title: "키친아트 키친아트 블랙프라이팬 1+1+1 내맘대로 골라담기3P",
    price: "28,900",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253589&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=C289107664",
    mall: "옥션",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906966/39069669305.jpg?type=f300",
    title:
      "6EJ245AA_꿀스판 볼륨워싱 일자진 [예약판매][바지,팬츠,꿀스판,청바지,진,데님,볼륨워싱,일자진,스트레이트,일자핏,히든밴딩,밴딩.스판,신축성,캣브러쉬,허니진,데일리,봄,여름,",
    price: "23,900",
    discount: "20",
    link: "http://www.justone.co.kr/index.html?branduid=85552&ref=naver_open",
    mall: "저스트원",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3462584/34625841735.jpg?type=f300",
    title: "백플랩 벨티드 후드 야상[A01T09L]",
    price: "58,410",
    link: "https://www.applelatte.com/index.html?branduid=96674&ref=naver_open",
    mall: "애플라떼",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3880773/38807731671.jpg?type=f300",
    title: "워너비라인 투버튼 부츠컷데님",
    price: "27,000",
    link: "https://helloyoonsoo.com/product/detail.html?product_no=28430&cate_no=47&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "안녕윤수야",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_22/6acf6df1-8d4d-4948-bd4f-5ecb0b3df9d8.jpg?type=f300",
    title: "[올리브놀] 올리브오일 인텐시브 크림 50ml",
    price: "35,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7630714629",
    mall: "미향 스토어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_2/112f17c7-a56d-44b3-a28c-e06c3440251e.jpg?type=f300",
    title: "비비고 테이블 본갈비탕 700g",
    price: "6,480",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40145680&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_galbitang_food",
    mall: "CJ더마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3818021/38180216348.1.jpg?type=f300",
    title: "★캐주얼SET★ 루틴첼투피스",
    price: "45,900",
    discount: "40",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=10545&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230406_11/a7bf05db-ddba-40f4-be0f-5dc3e83289bd.jpg?type=f300",
    title: "★2만원대~봄니트★ 퓨디 카라 반팔 니트티",
    price: "23,900",
    discount: "42",
    link: "https://missu.co.kr/product/detail.html?product_no=5278&cafe_mkt=ue_naverboxre",
    mall: "미스유",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3764851/37648513869.jpg?type=f300",
    title: "[TO-d977]에르 루즈 셔츠",
    price: "29,700",
    discount: "46",
    link: "http://leejiral.com/product/detail.html?product_no=15011&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "리지랄닷컴",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_28/6a906080-f7ba-4e9d-905a-addae8eb54e5.jpg?type=f300",
    title:
      "밑단 수술이 매력적이야! 디테일로 더욱 퀄리티 있게~ 미코 트위드 재킷",
    price: "39,800",
    discount: "33",
    link: "https://j-closet.co.kr/product/detail.html?product_no=707&cafe_mkt=ue_naverboxre",
    mall: "제이의옷장",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3224441/32244416651.jpg?type=f300",
    title: "두툼한 두께에 육즙이 살아있는 포천식 양념구이 양념갈비",
    price: "13,900",
    link: "http://www.chefechan.com/Goods/Detail/SOW43685880",
    mall: "셰프애찬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2623689/26236898073.3.jpg?type=f300",
    title: "F21P008 루티아 포인트 플랫슈즈 | 2cm",
    price: "41,800",
    link: "http://www.naturalflex.kr/index.html?branduid=2099247&ref=naver_open",
    mall: "NATURALFLEX",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230302_15/663d0428-a19d-438c-8eb8-8305e5eb38e4.jpg?type=f300",
    title: "chillin 골지 니트가디건",
    price: "41,000",
    link: "https://annanmode.com/product/chillin-%EA%B3%A8%EC%A7%80-%EB%8B%88%ED%8A%B8%EA%B0%80%EB%94%94%EA%B1%B4%EA%B0%80%EB%94%94%EA%B1%B4cud98-4colorfree-size/15233/category/56/display/1/&cafe_mkt=ntbox_b14",
    mall: "안나앤모드",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3762406/37624066978.jpg?type=f300",
    title: "마인 배색 니트 베스트",
    price: "23,800",
    link: "https://purplia.com/product/detail.html?product_no=35806&src=image&kw=0010FA&cafe_mkt=ntbox_b20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8453040/84530402687.jpg?type=f300",
    title: "ROMIL 스마일 파라솔 베이지 6094.7303",
    price: "19,900",
    link: "https://smartstore.naver.com/marketb/products/6985902365",
    mall: "마켓비 공식스토어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_9/b878b3db-1e73-4165-8cf5-0957eb88b884.jpg?type=f300",
    title: "[유쎄라 딥 샷] 콜라겐 생성 탄력 디바이스",
    price: "300,000",
    discount: "40",
    link: "https://themedicube.co.kr/product/detail.html?product_no=932&cate_no=501&display_group=1&utm_source=naver&utm_medium=ager_sb_reco&utm_campaign=ussera_2",
    mall: "메디큐브",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3477679/34776792631.1.jpg?type=f300",
    title: "마루아배색원피스",
    price: "74,100",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=4905&cate_no=27&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_21/5abdfa84-67bb-4afa-a36a-1f8d22c2d0ce.jpg?type=f300",
    title: "E8 카페쇼파 ver 1 북카페 미용실 도서관 병원 인테리어 소파",
    price: "397,970",
    discount: "43",
    link: "https://smartstore.naver.com/ddssofa/products/5129106414",
    mall: "DDS SOFA",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3496531/34965318607.jpg?type=f300",
    title: "하이웨스트밴딩일자스판슬랙스",
    price: "30,600",
    discount: "10",
    link: "http://www.secretlabel.co.kr/index.html?branduid=527560&ref=naver_open",
    mall: "시크릿라벨",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3594498/35944987007.jpg?type=f300",
    title: "소프트쿠션 조거팬츠 1+1",
    price: "74,800",
    discount: "37",
    link: "https://www.xexymix.com/index.html?branduid=2064778&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2953114/29531147854.jpg?type=f300",
    title: "문캠핑 접이식 캠핑 우드롤테이블 중/대 (89cm/117cm)",
    price: "45,900",
    discount: "52",
    link: "https://moongori.com/goods/view?no=956475&market=naver",
    mall: "문고리닷컴",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906964/39069647594.jpg?type=f300",
    title: "모티브 주름 레이스 원피스[ST5728D]",
    price: "89,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=151012&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_25/2a4d14b7-43a1-424a-af01-df9f48e872c1.jpg?type=f300",
    title: "모노어딕트 H소가죽 미니크로스백",
    price: "39,900",
    discount: "60",
    link: "https://monoaddict.co.kr/product/detail.html?product_no=291&cafe_mkt=ue_naverreccom",
    mall: "모노어딕트",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3782504/37825046609.jpg?type=f300",
    title: "no.23230 베이직 데일리 스트라이프티셔츠",
    price: "8,910",
    discount: "10",
    link: "http://www.misscandy.co.kr/index.html?branduid=229390&ref=naver_open&da_ref=Yz1reThYT3k=",
    mall: "미스캔디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3024399/30243990800.1.jpg?type=f300",
    title: "고농축 펩타이드 함량 UP! 3주 솔루션 바이탈리치 에센스",
    price: "22,000",
    discount: "59",
    link: "http://vivelab.kr/product/detail.html?product_no=9&cate_no=24&display_group=1&mkpl1=trendre3&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "바이브랩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8399434/83994344158.jpg?type=f300",
    title:
      "소고기 모둠 800g 4개 부위 살치살 부채살 우삼겹 토시살 갈비살 수입산 구이용",
    price: "29,900",
    discount: "48",
    link: "https://smartstore.naver.com/teawha/products/6449843825",
    mall: "태화농수산",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3571670/35716701385.jpg?type=f300",
    title: "일상공감 토네이수 수압샤워기",
    price: "16,900",
    discount: "58",
    link: "https://dailygongam.com/product/detail.html?product_no=1119&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=tornas00&utm_term=tornas&n_query=tornas00&cafe_mkt=nbox_bridge",
    mall: "일상공감",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3429675/34296759522.jpg?type=f300",
    title: "깔끔대장 스노우꾹 클리너",
    price: "12,900",
    discount: "57",
    link: "https://cleanboss.kr/product/detail.html?product_no=1134&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=snowkug00&utm_term=snowkug&n_query=snowkug00&cafe_mkt=nbox_bridge",
    mall: "깔끔대장",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_14/49763f60-414b-4d68-81f3-708ac12fcbd4.jpg?type=f300",
    title:
      "(카톡친추 EVENT! 3천원 즉시사용쿠폰) 나만의 폰BTI, MBTI 하드 케이스",
    price: "9,800",
    discount: "51",
    link: "https://momocase.co.kr/product/000-mbti%ED%95%98%EB%93%9C/6451/category/54/display/1/",
    mall: "모모케이스",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_27/b15fa98e-cd25-4ad1-969c-fbb364dbecaf.jpg?type=f300",
    title: "[닥터타이즈] 달맞이꽃오일 집중크림 나흐트케슨 인텐시브 살베 50ml",
    price: "50,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7049588806",
    mall: "미향 스토어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_19/f4d501b8-6d5b-4407-8b51-9d8144f758a5.jpg?type=f300",
    title:
      "[제이에스티나] [미연 PICK] LUCE MINI 토트 WH (JHNCHD3BS820WH010) (JHNCHD3BS820WH010)",
    price: "232,200",
    discount: "10",
    link: "https://www.jestina.co.kr/products/view/G2000026000?utm_source=Naver&utm_medium=PC.box&utm_campaign=JHNCHD3BS820WH010&cafe_mkt=ntbox_b20",
    mall: "제이에스티나공식몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_13/aabfaf0b-0c06-4676-98a0-ed0a6358d654.jpg?type=f300",
    title: "에어로쿨 컴포트핏 노와이어 화이트 브라 팬티세트",
    price: "23,000",
    discount: "60",
    link: "https://elleinnerwear.kr/product/detail.html?product_no=658&cate_no=30&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225569&utm_term=white_aerocool_comportfit_set",
    mall: "엘르이너웨어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_12/644af2a3-1477-4f20-8e11-192fdc91d11a.jpg?type=f300",
    title: "비비고 육개장 500g",
    price: "2,959",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40145144&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_yukgaejang_food",
    mall: "CJ더마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906966/39069667135.jpg?type=f300",
    title: "ONE * 매니박시셔츠",
    price: "78,400",
    link: "http://www.45th.co.kr/index.html?branduid=10591956&ref=naver_open&da_ref=Yz1jM3hnNUw=&ref=ntrendb01",
    mall: "45번가",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3753077/37530775215.jpg?type=f300",
    title: "1+1+1 가벼운티 4종 준비끝 세트",
    price: "19,900",
    link: "https://purplia.com/product/detail.html?product_no=35884&src=image&kw=001104&cafe_mkt=ntbox_a20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906958/39069589546.jpg?type=f300",
    title:
      "6EJ243AA_꿀스판 인디고 일자진 [예약판매][바지,팬츠,청바지,꿀스판,신축성,스판,인디고,일자,스트레이트진,저스트원,봄,가을,간절기,신상,데일리,딥블루,흑청]",
    price: "21,600",
    discount: "20",
    link: "http://www.justone.co.kr/index.html?branduid=85550&ref=naver_open",
    mall: "저스트원",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3812392/38123924238.jpg?type=f300",
    title: "심플 스트링 윈드 야상 점퍼 (3color)",
    price: "55,800",
    link: "https://mjcong.co.kr/product/detail.html?product_no=14087&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3200779/32007799916.jpg?type=f300",
    title: "★마스코틴팬츠★",
    price: "18,900",
    discount: "59",
    link: "https://hellen.co.kr/product/%EB%A7%88%EC%8A%A4%EC%BD%94%ED%8B%B4%ED%8C%AC%EC%B8%A0/2530/category/24/display/1/?cafe_mkt=ue_n_r2",
    mall: "hellen",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3820413/38204130832.jpg?type=f300",
    title: "자유의여신 삼각절개 화이트팬츠",
    price: "27,000",
    link: "https://helloyoonsoo.com/product/detail.html?product_no=28304&cate_no=11&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "안녕윤수야",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230405_20/174567f5-2c50-44cb-87ae-ff9444d7c410.jpg?type=f300",
    title: "프리아 스트라이프 튜브탑 볼레로 가디건 세트",
    price: "34,800",
    link: "https://lovesome-one.com/product/%ED%94%84%EB%A6%AC%EC%95%84-%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%94%84-%ED%8A%9C%EB%B8%8C%ED%83%91-%EB%B3%BC%EB%A0%88%EB%A1%9C-%EA%B0%80%EB%94%94%EA%B1%B4-%EC%84%B8%ED%8A%B8%EC%8B%A0%EC%83%81%EB%8D%B0%EC%9D%BC%EB%A6%AC%EB%A3%A9%EB%8D%B0%EC%9D%BC%EB%A6%AC%EB%B4%84%EC%97%AC%EB%A6%84%EB%A3%A8%EC%A6%88%ED%95%8F%ED%81%AC%EB%A1%AD%EB%B0%B0%EC%83%89%EC%84%B9%EC%8B%9C%EA%B8%80%EB%9E%A8%EB%82%98%EC%8B%9C%EA%B0%80%EB%94%94%EA%B1%B4/9827/category/49/display/1/",
    mall: "러브썸원",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_20/81a9e52c-9c59-4f36-aeb1-50a644396800.jpg?type=f300",
    title: "독보적인 슬림핏 데님 팬츠",
    price: "31,000",
    link: "https://common-unique.com/product/detail.html?product_no=3719&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_opencafe_mkt=ue_trendplus01",
    mall: "커먼유니크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3805202/38052023399.jpg?type=f300",
    title:
      "구미 데이지 이너피스 [하드 폰케이스]아이폰14케이스 13 12 미니 mini 엑스 프로 pro 맥스 케이스 핸드폰 커플 캐릭터 갤럭시 커플 곰돌이 캐릭터",
    price: "10,800",
    discount: "46",
    link: "https://theninemall.com/product/detail.html?product_no=7466&cate_no=46&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "더나인몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3764620/37646203412.jpg?type=f300",
    title: "[니쁜스단독제작20%할인]프리미엄 레직기 명품핏 생지데님",
    price: "69,900",
    link: "http://www.nibbuns.co.kr/index.html?branduid=71193&da_ref=Yz11ZjBqbks=",
    mall: "니쁜스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3483739/34837396375.3.jpg?type=f300",
    title: "[1+1] 아뜰리에 알러가드 사계절 차렵이불 침구세트 7colors",
    price: "98,900",
    discount: "46",
    link: "http://www.nubizio.co.kr/index.html?branduid=155568&ref=naver_open",
    mall: "누비지오",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3907179/39071798024.jpg?type=f300",
    title: "여성 소가죽 플렉시블 스퀘어 스니커즈  (WT) - 3FP221",
    price: "66,000",
    discount: "60",
    link: "https://hushpuppies.co.kr/product/detail.html?product_no=974&cate_no=93&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "허시파피",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230118_13/17ff789f-df0f-4912-93fb-80b6235dd2b4.jpg?type=f300",
    title: "에어로쿨 로고 아웃밴드 다크그린 노와이어 브라 팬티 세트",
    price: "32,000",
    discount: "50",
    link: "https://www.guessunderwear.kr/product/%EC%97%90%EC%96%B4%EB%A1%9C%EC%BF%A8-%EB%A1%9C%EA%B3%A0-%EC%95%84%EC%9B%83%EB%B0%B4%EB%93%9C-%EB%8B%A4%ED%81%AC%EA%B7%B8%EB%A6%B0-%EB%85%B8%EC%99%80%EC%9D%B4%EC%96%B4-%EB%B8%8C%EB%9D%BC-%ED%8C%AC%ED%8B%B0-%EC%84%B8%ED%8A%B8/1359/category/28/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225570&utm_term=darkgreen_aerocool_set",
    mall: "게스언더웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3820415/38204152838.1.jpg?type=f300",
    title:
      "[7%위클리세일] 달콤한 베이킹 소프트워싱 리버시블 차렵이불 침구세트 3color (S/Q)",
    price: "31,600",
    discount: "26",
    link: "https://shezhome.co.kr/product/detail.html?product_no=2461&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "쉬즈홈공식몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2460109/24601090172.9.jpg?type=f300",
    title: "콤포라M 천연가죽 키높이 스니커즈 7cm",
    price: "69,800",
    discount: "50",
    link: "https://sovomall.co.kr/product/detail.html?product_no=14106&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3802199/38021999003.1.jpg?type=f300",
    title:
      "★풀셋코디 [클리브랜드골프] 밑단 디테일 펀칭 라운드 여성 긴팔 골프티셔츠/골프웨어_CGWTS31527",
    price: "138,600",
    link: "http://clevelandgolfwear.com/goods/goods_view.php?goodsNo=1000135571&inflow=naver",
    mall: "클리브랜드골프웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3870330/38703301632.jpg?type=f300",
    title: "★반짝세일★ 로키드블라우스",
    price: "29,900",
    discount: "40",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=10823&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904976/39049763405.jpg?type=f300",
    title: "french shirt_3c",
    price: "61,700",
    discount: "5",
    link: "http://www.annakids.co.kr/index.html?branduid=52290&ref=naver_open",
    mall: "안나키즈",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3881088/38810880933.jpg?type=f300",
    title: "SUNNY11 시크릿밴드 팬츠",
    price: "31,500",
    link: "https://sunny11.com/product/detail.html?product_no=10801&cate_no=36&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "써니11",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3905205/39052057463.jpg?type=f300",
    title:
      "NEW★10%할인에번 배색라인 가디건,배색라인가디건,배색가디건,라인가디건,배색가디건추천,가디건추천,봄가디건,봄신상,봄신상가디건,니트가디건,봄니트가디건코디,여성가디건,여성니트가디건,",
    price: "57,600",
    link: "https://loveparis.net/product/detail.html?product_no=19918&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "러브패리스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906964/39069644372.jpg?type=f300",
    title:
      "#신상 50%+무료배송쿠폰 &clubs;가든시리즈&clubs;14k G.F★ 로제 아이스큐빅 귀걸이 EA2835",
    price: "18,900",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275744&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3710248/37102481976.jpg?type=f300",
    title: "일자통 딥블루 데님진[A02T09E]",
    price: "17,910",
    link: "https://www.applelatte.com/index.html?branduid=96688&ref=naver_open",
    mall: "애플라떼",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3795895/37958956528.jpg?type=f300",
    title: "얼짱쭈꾸미 500g (10+1)",
    price: "11,750",
    discount: "16",
    link: "https://www.1300k.com/product/109826565?channelType=NVRSHBOXS&src=image&kw=0108AC",
    mall: "1300K",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_21/648673ac-0e55-4b6e-a632-eeef260bffae.jpg?type=f300",
    title: "헤트라스 프리미엄 대용량 디퓨저 5개입",
    price: "39,800",
    discount: "55",
    link: "https://hetras.co.kr/product/premium-diffuser-5ea/64/category/44/display/1/?utm_source=naver&utm_medium=cpc&utm_campaign=shopping_box&utm_id=shopping_box&utm_content=recommend2",
    mall: "헤트라스",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_11/89760b83-479d-4c7f-8492-731443cc9ec1.jpg?type=f300",
    title: "비비고 육개장 500g",
    price: "2,959",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40145144&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_yukgaejang_food",
    mall: "CJ더마켓",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_23/adbdb307-0564-40de-904f-76e02abbbb3a.jpg?type=f300",
    title: "★한장사면+1★ 소장템~하프반폴반팔티",
    price: "14,900",
    discount: "50",
    link: "https://sugargirl.co.kr/product/%ED%95%98%ED%94%84%EB%B0%98%ED%8F%B4%EB%B0%98%ED%8C%94%ED%8B%B011/7215/category/1/display/17/?cafe_mkt=ue_naver_002",
    mall: "슈가걸",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3114957/31149578937.5.jpg?type=f300",
    title:
      "[올인원 패키지] [폴란드95%] 프리미엄 구스다운세트 (구스이불+구스베개+이불커버+베개커버 세트) [웨딩 패키지]",
    price: "515,100",
    discount: "25",
    link: "https://doadream.com/product/detail.html?product_no=952&cate_no=26&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "도아드림",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_6/6d9ce19b-6ac1-4988-9274-3d298dbe5940.jpg?type=f300",
    title: "★시선강탈/봄맞이최대68%할인★ 14K/18K 양면 투링펜던트 금목걸이 2종",
    price: "216,800",
    discount: "30",
    link: "https://www.obelee.com/shop/shopdetail.html?branduid=3543654&utm_source=%23NAVER_TrM&utm_medium=CPM&utm_campaign=%ED%83%80%EC%9E%84%ED%88%AC%EB%9F%AC%EB%B8%8CN_%EC%B6%94%EC%B2%9C",
    mall: "오벨리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_13/35d5f44f-7169-46f2-9fc8-138899e459e2.jpg?type=f300",
    title: "[바이탈1000] 발포비타민 20정 (레몬라임맛 / 오렌지맛)",
    price: "9,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7050041883",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3822870/38228701423.jpg?type=f300",
    title: "[GC MADE] 핀턱오픈자켓",
    price: "46,560",
    discount: "3",
    link: "https://graychic.co.kr/product/detail.html?product_no=12066&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3845028/38450284134.2.jpg?type=f300",
    title: "플라워진주7부원피스",
    price: "82,650",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=5322&cate_no=27&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_17/744bb2f4-aea6-4216-8c38-6da4aa7d3523.jpg?type=f300",
    title: "클라라 스키니핏 슬랙스",
    price: "32,000",
    discount: "24",
    link: "https://ccinderella.com/product/detail.html?product_no=5951&cafe_mkt=ue_naverboxre",
    mall: "신데렐라",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221207_12/f36c1c2a-1580-4cef-98f9-24c0ac59efd5.jpg?type=f300",
    title: "비비랩 비오틴 콜라겐",
    price: "17,500",
    discount: "20",
    link: "https://www.nutrione.co.kr/item/dtl/1000001229?utm_source=naver&utm_medium=da&utm_campaign=shoppingbox&utm_content=biotincollagen",
    mall: "뉴트리원공식쇼핑몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3873104/38731040185.jpg?type=f300",
    title: "티메핀턱슬랙스",
    price: "29,800",
    discount: "14",
    link: "https://dabagirl.co.kr/product/detail.html?product_no=77284&cate_no=67&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "다바걸",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3069439/30694399047.jpg?type=f300",
    title: "[1+1]내 맘대로! 한정판 바.밤 스페셜 에디션",
    price: "58,000",
    discount: "71",
    link: "https://n-shine.com/product/detail.html?product_no=714&cate_no=82&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "네츄럴샤인",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3678515/36785150478.jpg?type=f300",
    title: "소프트터치 이지 조거팬츠",
    price: "49,000",
    discount: "17",
    link: "https://www.xexymix.com/index.html?branduid=2064786&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230406_17/9690d3d1-3c59-48bd-b7bc-d5cf76c4a862.jpg?type=f300",
    title: "★편하고~예쁜 봄 TOP★레이스 카라 반 오픈 A라인 블라우스",
    price: "14,990",
    discount: "46",
    link: "http://www.moulian.com/index.html?branduid=164049&da_ref=Yz1GVkJwVW4=&ref=naverbox",
    mall: "뮬리안",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_12/3232e0f6-e149-44d5-a364-03ceb0304a8f.jpg?type=f300",
    title: "젤리(ver.8.5부 크롭진)",
    price: "30,800",
    link: "http://www.pinksisly.com/shop/shopdetail.html?branduid=123616&ref=navertrend3&da_ref=Yz1kR2VHZEs=",
    mall: "핑크시슬리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3753047/37530478673.jpg?type=f300",
    title: "★누적판매량 70,000장!!★ 비벳 원버튼 니트 가디건 자켓",
    price: "49,600",
    discount: "12",
    link: "http://www.midasb.co.kr/shop/shopdetail.html?branduid=617842&src=image&kw=002B3F&ref=naverbox&da_ref=Yz1OeVBTaW0=",
    mall: "마이더스비",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3135379/31353790165.jpg?type=f300",
    title: "에너지붐",
    price: "39,800",
    discount: "33",
    link: "https://food-ology.co.kr/product/detail.html?product_no=97&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "푸드올로지",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_29/160f3e2f-3602-47b5-a307-6c8cb66c1895.jpg?type=f300",
    title: "★한벌로~코디끝!★ 비대칭정장원피스 (BEST 고급스럽고~우아해요!)",
    price: "48,900",
    discount: "35",
    link: "https://nadoyeosin.com/product/detail.html?product_no=7073&cafe_mkt=ue_naverboxre",
    mall: "나도여신",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904642/39046427634.jpg?type=f300",
    title:
      "플링 하트넥 원피스 (벨트SET)[ST5657D,하트넥원피스,미디원피스,봄정장원피스]",
    price: "69,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=150850&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2579098/25790985052.5.jpg?type=f300",
    title: "블랙라벨 시그니처 380N 레깅스 1+1",
    price: "59,800",
    discount: "49",
    link: "https://www.xexymix.com/index.html?branduid=2060991&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3889419/38894197360.jpg?type=f300",
    title: "통풍성 갑! 포인트까지 살아있는 ★센스만점★ 스플라이 펀칭 티셔츠",
    price: "18,810",
    link: "https://mamaju.co.kr/product/%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B4-%ED%8E%80%EC%B9%AD-%ED%8B%B0%EC%85%94%EC%B8%A0/6503/category/69/display/1/?cafe_mkt=ue_naver_01",
    mall: "마마쥬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2628067/26280673457.1.jpg?type=f300",
    title:
      "[자체제작]파리 카르멘 자켓 쫀득 블라우스(최고급소재)(S,M,L)17차완판",
    price: "46,800",
    link: "https://joyu.co.kr/product/detail.html?product_no=6615&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open&cafe_mkt=ue_naver_bottom",
    mall: "조이유",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221028_0/f119ba3f-6cb8-4860-a53d-2dcce8d29781.jpg?type=f300",
    title: "100% 천연소가죽 사각 스티치 크로스백",
    price: "107,000",
    discount: "26",
    link: "https://www.zizhel.net/shop/shopdetail.html?branduid=1072888&da_ref=Yz1hczY0UmI=",
    mall: "지젤슈즈",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3896271/38962711767.jpg?type=f300",
    title: "#신상 50%+무료배송쿠폰 베러티 크리스탈 반지(13-21호) RA0562",
    price: "19,800",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275617&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_2/04ed69c8-4968-4a62-9d92-9f8cef4df61a.jpg?type=f300",
    title: "[올리브놀] 올리브오일 바디클렌저 250ml",
    price: "25,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7630455629",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3896828/38968289046.jpg?type=f300",
    title: "심플 스판 코튼 밴딩 팬츠 (7color)",
    price: "28,800",
    link: "https://mjcong.co.kr/product/detail.html?product_no=14359&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3665401/36654018079.2.jpg?type=f300",
    title:
      "룰루싹스 남녀양말 20켤레+매너단추10개 골지 기모 무지 스포츠 기능성 등산 양말",
    price: "11,800",
    discount: "40",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253590&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=C858124597",
    mall: "옥션",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230403_22/cd00b898-d2ac-4258-8935-24ef01711e2b.jpg?type=f300",
    title: "프로피에스 챕터스트랭스 550mg x 252 캡슐",
    price: "46,320",
    discount: "20",
    link: "https://profis.co.kr/product/detail.html?product_no=52&cate_no=63&display_group=1&cafe_mkt=ue_npc2",
    mall: "한국프로피에스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3254225/32542253856.jpg?type=f300",
    title: "[일상팬츠]어베린 어펌 와이드 밴딩팬츠",
    price: "41,800",
    link: "http://www.evellet.com/index.html?branduid=851972&ref=naver_open",
    mall: "제이스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3845634/38456348277.jpg?type=f300",
    title: "[GC MADE] 릴브이반팔니트(슈퍼파인울/모달혼방)",
    price: "29,100",
    discount: "3",
    link: "https://graychic.co.kr/product/detail.html?product_no=12323&cate_no=7&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230315_0/d38affe7-fc84-4e0c-829d-33fc65f9b047.jpg?type=f300",
    title: "활용도200% 한벌 가격에 상+하의SET 다 드려요! 루미투피스",
    price: "39,800",
    discount: "26",
    link: "https://yeosinj.com/product/detail.html?product_no=4668&cafe_mkt=ue_naverboxre",
    mall: "여신제이",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3755343/37553439310.2.jpg?type=f300",
    title: "4 COLOR 리에뜨 뮬 (5 / 7cm)",
    price: "35,700",
    discount: "15",
    link: "https://voga.co.kr/product/detail.html?product_no=6254&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "VOGA",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1415536/14155363770.58.jpg?type=f300",
    title: "쉬블림로브 신상 블라우스/원피스/티셔츠/맨투맨/셔츠",
    price: "7,900",
    discount: "1",
    link: "http://item.gmarket.co.kr/Item?goodscode=1373777190&jaehuid=200011590",
    mall: "G마켓",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230308_24/95cab670-4554-428c-b4d7-85e193280a2f.jpg?type=f300",
    title: "퓨징 테크놀로지 와이어리스 블루그레이 40% OFF",
    price: "34,500",
    discount: "40",
    link: "https://www.codescombineinnerwear.com/product/detail.html?product_no=2462&cate_no=81&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225568&utm_content=fusing_technology_wireless_bluegrey",
    mall: "코데즈컴바인이너웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8160841/81608413333.8.jpg?type=f300",
    title: "더스파 국산 KC제품 360 PVC 샤워기 샤워 호스",
    price: "15,900",
    discount: "65",
    link: "https://smartstore.naver.com/thespa/products/4063892733",
    mall: "더스파",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3902407/39024073158.jpg?type=f300",
    title: "그레이블루 데님 머메이드 SKIRT",
    price: "26,600",
    link: "http://www.nanasalon.com/index.html?branduid=569688&ref=naver_open",
    mall: "나나살롱",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3411112/34111123331.6.jpg?type=f300",
    title: "[한정수량 특별가]하루 LED 마스크",
    price: "342,000",
    link: "https://curicarecorp.com/product/detail.html?product_no=69&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "큐리케어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230317_1/f6791acf-7e23-441d-8436-2feb0cf22c44.jpg?type=f300",
    title: "옥스포드 사계절 셔츠",
    price: "29,800",
    link: "https://www.roompacker.co.kr/index.html?branduid=90276&ref=naver_open&da_ref=Yz0xR0tIUHE=",
    mall: "룸페커",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230315_11/dee2e9ce-5328-45ac-a017-e43747bdc20e.jpg?type=f300",
    title: "여아 러블리 래빗 7부 내의세트",
    price: "14,900",
    discount: "50",
    link: "https://www.suafam.com/product/%EC%97%AC%EC%95%84-%EB%9F%AC%EB%B8%94%EB%A6%AC%EB%9E%98%EB%B9%97-7%EB%B6%80-%EB%82%B4%EC%9D%98-%EC%84%B8%ED%8A%B8/1304/category/27/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225567&utm_content=girl_lovelyrabbit_7",
    mall: "수아팜",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230228_29/48cace23-fff7-4408-98cf-0c57c5c6bc5d.jpg?type=f300",
    title: "라인업 키작아도 괜찮아 팬츠 1+1",
    price: "32,300",
    discount: "72",
    link: "http://www.beststl.com/index.html?branduid=86668&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1806256/18062561863.20.jpg?type=f300",
    title: "마릴리 스틸레토 슬링백힐 3cm 5cm 7cm 9cm",
    price: "42,410",
    discount: "15",
    link: "https://sovomall.co.kr/product/detail.html?product_no=11933&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2905137/29051371126.1.jpg?type=f300",
    title: "유행 걱정 끝! 매년 꺼내입기 좋은 편안한 ★투와이 청셔츠★",
    price: "24,800",
    link: "https://urbanlady.co.kr/product/%ED%88%AC%EC%99%80%EC%9D%B4-%EC%B2%AD%EC%85%94%EC%B8%A0/22/category/25/display/1/?cafe_mkt=ue_naver_01",
    mall: "어반레이디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3296222/32962227160.jpg?type=f300",
    title: "1+1 캔디 3단 암막 자동 우산 양산",
    price: "16,900",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253589&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=C398382430",
    mall: "옥션",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2195171/21951716001.46.jpg?type=f300",
    title: "쥬디니스 쥬디니스 대용량 디퓨저 500ml 1+1/1000ml 방향제/리필",
    price: "14,900",
    discount: "59",
    link: "http://item.gmarket.co.kr/Item?goodscode=1747470738&jaehuid=200011589",
    mall: "G마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3631512/36315124252.3.jpg?type=f300",
    title: "[1+1] 펩톡스 멀티밤 시즌2 13g",
    price: "23,900",
    discount: "84",
    link: "https://kioland.co.kr/product/detail.html?product_no=49&cafe_mkt=ntbox_a39&utm_source=ns&utm_medium=cpc&utm_campaign=lt&inflow=naver&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "블랑카우키오스킨",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3850842/38508421631.1.jpg?type=f300",
    title: "★러블리봄★ 몰링썸원피스세트",
    price: "45,900",
    discount: "22",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=10706&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3144077/31440778902.1.jpg?type=f300",
    title: "[BEST&hearts;10,000장돌파]린넨 벨크로 보넷 벙거지 모자 3color",
    price: "17,900",
    discount: "31",
    link: "https://viewlap.com/product/detail.html?product_no=901&cate_no=46&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "뷰랩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_19/397b93c7-f7c5-4b2c-8fbf-7671fe73816f.jpg?type=f300",
    title: "대전 선화동 매운 실비 김치 1.3kg , 2kg",
    price: "22,000",
    link: "https://smartstore.naver.com/djhotkimchi/products/4361547388",
    mall: "선화동매운김치",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2941109/29411096158.1.jpg?type=f300",
    title: "[1+1 EVENT] 펜사토",
    price: "94,900",
    link: "http://www.akiii.co.kr/index.ht&da_ref=Yz1JUnFxejQ=",
    mall: "아키클래식",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8547133/85471330072.jpg?type=f300",
    title:
      "셰프애찬 부드러운 육질,셰프 특제소스 포천이동식 왕구이 제주돼지 양념구이 1.2kg+1.2kg",
    price: "39,300",
    link: "https://smartstore.naver.com/owenfood0510/products/7926829749",
    mall: "셰프애찬",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_6/bb136705-4410-4b5c-8954-51239c2948cc.jpg?type=f300",
    title: "merci 카라 반팔니트",
    price: "45,000",
    link: "https://annanmode.com/product/merci-%EC%B9%B4%EB%9D%BC-%EB%B0%98%ED%8C%94%EB%8B%88%ED%8A%B8%EB%8B%88%ED%8A%B8cva7-3colorfree-size/15408/category/119/display/1/&cafe_mkt=ntbox_a12",
    mall: "안나앤모드",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3888888/38888881379.jpg?type=f300",
    title: "글램멜로우 원피스",
    price: "49,000",
    link: "https://romistory.com/product/detail.html?product_no=62782&cate_no=26&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "로미스토리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_20/b71c1e2b-d5fb-4c49-9e78-1a17bb27877d.jpg?type=f300",
    title:
      "[꼬뜨] 캣밀 치킨트릿. 고양이강아지 공용 다이어트간식. 진동동결 화학첨가물 0%",
    price: "12,500",
    discount: "86",
    link: "https://smartstore.naver.com/cote/products/5038729934?nt_source=naver&nt_medium=shoppingbox&nt_detail=catmeal_chicken&cafe_mkt=ntbox_b20",
    mall: "Cote",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230316_6/c40e4a6c-a7f7-4ddc-bdc9-c83d67d12e45.jpg?type=f300",
    title: "늘어짐 걱정없이 착용하는 BEST 후드티",
    price: "32,900",
    link: "https://www.wingsmall.co.kr/?cafe_mkt=ue_navertrendpc1",
    mall: "윙스몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2800277/28002770833.21.jpg?type=f300",
    title: "달심 빼빼주스 2주관리",
    price: "39,000",
    discount: "15",
    link: "http://dalsim.kr/product/detail.html?product_no=89&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "달심",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230224_6/fc5a7704-d6ba-4b47-b20d-9d4470770f69.jpg?type=f300",
    title: "STL NY 오버핏 더블메모리  기모 후드 숏 집업",
    price: "22,300",
    discount: "69",
    link: "http://www.beststl.com/index.html?branduid=86938&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2600025/26000256074.3.jpg?type=f300",
    title: "슈퍼스판팬츠",
    price: "12,900",
    discount: "19",
    link: "https://bymonologue.co.kr/product/detail.html?product_no=3405&cate_no=123&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "모놀로그",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_5/06372e74-0938-4b3c-b8b8-f78e836e793d.jpg?type=f300",
    title: "100수 인생 차렵이불세트 6type SS/Q/K",
    price: "172,500",
    discount: "25",
    link: "https://smartstore.naver.com/elenaheim/products/5090653441",
    mall: "엘레나하임",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_0/e402be48-852b-4a4a-b9f0-ce79d32d6553.jpg?type=f300",
    title: "입었을 때 더 슬림한 데일리 티",
    price: "8,500",
    link: "https://common-unique.com/product/detail.html?product_no=14381&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_opencafe_mkt=ue_trendplus01",
    mall: "커먼유니크",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_17/eba94eac-afa6-427d-a838-30731febc71b.jpg?type=f300",
    title: "깔끔하게 매운맛 대전 선화동 매운 실비 파김치 1kg",
    price: "33,000",
    link: "https://smartstore.naver.com/djhotkimchi/products/5458935537",
    mall: "선화동매운김치",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221207_6/dfb0e597-3b9f-4979-823f-b2b03c401e70.jpg?type=f300",
    title: "루테인지아잔틴164",
    price: "20,000",
    discount: "9",
    link: "https://www.nutrione.co.kr/item/dtl/1000000504?utm_source=naver&utm_medium=da&utm_campaign=shoppingbox&utm_content=164",
    mall: "뉴트리원공식쇼핑몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230224_4/f65d3919-6d3b-4b9b-9c01-6dc100454af1.jpg?type=f300",
    title: "STL레깅스핏 슬림핏 조거 팬츠 1+1",
    price: "34,930",
    discount: "67",
    link: "http://www.beststl.com/index.html?branduid=86959&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3850552/38505522932.jpg?type=f300",
    title: "컬러감만으로도 화사해~ 클래식한 ★옐러브 니트 가디건☆",
    price: "34,800",
    link: "https://mamaju.co.kr/product/%EC%98%90%EB%9F%AC%EB%B8%8C-%EB%8B%88%ED%8A%B8-%EA%B0%80%EB%94%94%EA%B1%B4/6399/category/69/display/1/?cafe_mkt=ue_naver_06",
    mall: "마마쥬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3045692/30456928016.1.jpg?type=f300",
    title: "럭스 트리플 립큐어밤 퓨어밤 패밀리 SET",
    price: "23,000",
    discount: "70",
    link: "https://n-shine.com/product/detail.html?product_no=688&cate_no=73&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "네츄럴샤인",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3519457/35194570932.jpg?type=f300",
    title: "[BEST인기상품/재입고&hearts;]마이데일리 일자 밴딩 팬츠 (6color)",
    price: "22,320",
    link: "https://mjcong.co.kr/product/detail.html?product_no=11491&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904988/39049881940.jpg?type=f300",
    title: "found jean",
    price: "57,900",
    discount: "5",
    link: "http://www.annakids.co.kr/index.html?branduid=52285&ref=naver_open",
    mall: "안나키즈",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230228_21/d588e657-bea5-48f9-830f-4ce0ec092ff3.jpg?type=f300",
    title: "[EVENT] 메트로 NY 세미 부츠컷  키작아도 괜찮아 팬츠 1+1",
    price: "32,300",
    discount: "72",
    link: "http://www.beststl.com/index.html?branduid=86614&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3905338/39053383626.jpg?type=f300",
    title: "BLACK LABEL * 테일더블자켓",
    price: "64,500",
    link: "http://www.45th.co.kr/index.html?branduid=1161737&ref=naver_open&da_ref=Yz1jM3hnNUw=&ref=ntrendb01",
    mall: "45번가",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3176856/31768564346.jpg?type=f300",
    title: "[EVELLET]플로버 60수코튼 롱 셔츠 원피스",
    price: "53,000",
    link: "http://www.evellet.com/index.html?branduid=851263&ref=naver_open",
    mall: "제이스타일",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230302_26/540d4925-a244-4044-9998-d17653140ab9.jpg?type=f300",
    title: "monta 자수 맨투맨",
    price: "29,000",
    link: "https://annanmode.com/product/monta-%EC%9E%90%EC%88%98-%EB%A7%A8%ED%88%AC%EB%A7%A8%ED%8B%B0%EC%85%94%EC%B8%A0csd67-4colorfree-size/15003/category/57/display/2/&cafe_mkt=ntbox_b12",
    mall: "안나앤모드",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_4/5df5153e-365a-4863-ade8-920b7c76a1f4.jpg?type=f300",
    title: "[블랙홀]핀턱 부츠컷 밴딩팬츠",
    price: "22,800",
    link: "http://www.pinksisly.com/shop/shopdetail.html?branduid=135927&ref=navertrend2&da_ref=Yz1kR2VHZEs=",
    mall: "핑크시슬리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906959/39069598617.jpg?type=f300",
    title:
      "5EJ253AA_꿀스판 셀프수선 스크래치진 [예약판매][플러스,빅사이즈,청바지,데님,히든밴딩,3중직,신축성,스판,데미지,스크래치,셀프컷팅,셀프수선,일자통,스트레이트핏,진청,시원,봄",
    price: "23,900",
    discount: "20",
    link: "http://www.justone.co.kr/index.html?branduid=85546&ref=naver_open",
    mall: "저스트원",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_16/d640bf91-4f36-4dae-b1db-0fd51e50aa16.jpg?type=f300",
    title: "[ATS 에어샷] 피부 손상 없는 모공 케어",
    price: "239,000",
    discount: "40",
    link: "https://themedicube.co.kr/product/detail.html?product_no=901&cate_no=501&display_group=1&utm_source=naver&utm_medium=ager_sb_reco&utm_campaign=airshot_3",
    mall: "메디큐브",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_17/5c612156-c5f7-4292-a894-df5c3c0456f5.jpg?type=f300",
    title: "소가죽 메리제인 스판밴딩 발편한 단화 슬립온 3cm",
    price: "34,900",
    discount: "50",
    link: "https://monoaddict.co.kr/product/detail.html?product_no=657&cafe_mkt=ue_naverreccom",
    mall: "모노어딕트",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2962129/29621299597.1.jpg?type=f300",
    title: "속눈썹 임상시험 완료 + 탈모증상완화 기능성 제품",
    price: "41,000",
    discount: "64",
    link: "http://vivelab.kr/product/detail.html?product_no=26&cate_no=24&display_group=1&mkpl1=trendre4&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "바이브랩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3896835/38968351749.2.jpg?type=f300",
    title: "[GC MADE] 링클레글런블라우스",
    price: "26,000",
    link: "https://graychic.co.kr/product/detail.html?product_no=12827&cate_no=7&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3905210/39052108800.jpg?type=f300",
    title:
      "[NEW_MADE]SS스페셜★15%할인시그니처 미디 H스커트,미디H스커트,미디스커트,H라인스커트,미디스커트코디,미디스커트룩,미디스커트추천,H라인스커트코디,H스커트코디,H라인스커트추",
    price: "47,600",
    link: "https://loveparis.net/product/detail.html?product_no=19911&cate_no=29&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "러브패리스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2398177/23981778479.jpg?type=f300",
    title: "★데일리 이너티로 딱!★ 편안 포켓 긴팔 블라우스 티",
    price: "26,800",
    discount: "15",
    link: "http://www.midasb.co.kr/shop/shopdetail.html?branduid=612785&src=image&kw=002B78&ref=naverbox&da_ref=Yz1OeVBTaW0=",
    mall: "마이더스비",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230302_3/72db6650-eb16-4f82-9580-355b5d91f17c.jpg?type=f300",
    title: "에어로쿨 컴포트핏 노와이어 인디핑크 브라 팬티세트",
    price: "23,000",
    discount: "60",
    link: "https://elleinnerwear.kr/product/detail.html?product_no=660&cate_no=24&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225569&utm_term=rosepink_aerocool_comportfit_set",
    mall: "엘르이너웨어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_27/d18340d8-b4e4-4cfd-864a-331f23ea4d33.jpg?type=f300",
    title: "★주문폭주/봄맞이최대68%할인★ 14K/18K 이태리 트윈 레이어드 금팔찌",
    price: "99,900",
    discount: "30",
    link: "https://www.obelee.com/shop/shopdetail.html?branduid=3543639&utm_source=%23NAVER_TrM&utm_medium=CPM&utm_campaign=%EC%9D%B4%ED%83%9C%EB%A6%AC%ED%8A%B8%EC%9C%88B_%EC%B6%94%EC%B2%9C",
    mall: "오벨리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3534526/35345267176.5.jpg?type=f300",
    title: "[한정수량 35% 초특가]Y존 청결제 미라클 노블 포밍 워시",
    price: "16,800",
    link: "https://curicarecorp.com/product/detail.html?product_no=75&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "큐리케어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3824958/38249588072.jpg?type=f300",
    title: "양브이넥반팔니트",
    price: "12,900",
    discount: "19",
    link: "https://bymonologue.co.kr/product/detail.html?product_no=3416&cate_no=124&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "모놀로그",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3121650/31216503597.jpg?type=f300",
    title: "[1+1 EVENT] 트리코트 에어쿨러 조거팬츠(남녀공용)",
    price: "69,000",
    link: "http://www.akiii.co.kr/index.html?branduid=1152314&ref=naver_open&da_ref=Yz1JUnFxejQ=",
    mall: "아키클래식",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3089356/30893567386.jpg?type=f300",
    title: "[아크릴스마트톡] overalls gummy",
    price: "9,800",
    discount: "38",
    link: "https://theninemall.com/product/detail.html?product_no=5358&cate_no=67&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "더나인몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230215_4/fb1193d5-47e2-4f55-b22d-b12a29eb53d2.jpg?type=f300",
    title: "인밴딩세미부츠컷롱슬랙스",
    price: "27,900",
    discount: "10",
    link: "https://www.secretlabel.co.kr/shop/shopdetail.html?branduid=525919",
    mall: "시크릿라벨",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904647/39046476656.jpg?type=f300",
    title: "#신상 50%+무료배송쿠폰  하르밍 하트 목걸이 NA0527",
    price: "19,800",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275690&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230404_4/9d15750e-35c5-406f-a23b-1b3e5fc63f49.jpg?type=f300",
    title: "프로방스 패턴 블라우스",
    price: "30,500",
    discount: "56",
    link: "https://ccinderella.com/product/detail.html?product_no=2116&cafe_mkt=ue_naverboxre",
    mall: "신데렐라",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3571406/35714064809.1.jpg?type=f300",
    title: "앨피배색니트",
    price: "22,800",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=4400&cate_no=28&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3795547/37955472809.jpg?type=f300",
    title: "허리가 편한 뒷밴딩 플레어 스커트",
    price: "29,800",
    link: "https://www.roompacker.co.kr/index.html?branduid=91328&ref=naver_open&da_ref=Yz0xR0tIUHE=",
    mall: "룸페커",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_19/7b4b6675-5feb-4d91-9b97-abaee0e6f8ef.jpg?type=f300",
    title: "tuck 퍼프 티셔츠",
    price: "34,000",
    link: "https://annanmode.com/product/tuck-%ED%8D%BC%ED%94%84-%ED%8B%B0%EC%85%94%EC%B8%A0%ED%8B%B0%EC%85%94%EC%B8%A0cte30-3colorfree-size/15243/category/1/display/2/&cafe_mkt=ntbox_a13",
    mall: "안나앤모드",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230309_23/4c311f63-2881-4e4a-81c0-2e498488cf37.jpg?type=f300",
    title: "쌀쌀한 아침 밤에 툭~ 걸쳐! 봄에 입으면 제일 예뻐~ 올리오리넨재킷",
    price: "29,800",
    discount: "35",
    link: "https://yeosinj.com/product/detail.html?product_no=4666&cafe_mkt=ue_naverboxre",
    mall: "여신제이",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3878557/38785572868.jpg?type=f300",
    title: "★BEST★ 오브도트원피스",
    price: "35,900",
    discount: "39",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=10832&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3571681/35716817229.1.jpg?type=f300",
    title: "★인기만점★ 나유렌원피스세트",
    price: "46,900",
    discount: "39",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=9417&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3747530/37475305131.jpg?type=f300",
    title: "위즈카라트위드원피스",
    price: "90,250",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=5234&cate_no=27&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3542103/35421031349.1.jpg?type=f300",
    title: "세이프티 수딩 선쿠션 25g",
    price: "18,900",
    discount: "49",
    link: "https://kioland.co.kr/product/detail.html?product_no=25&cafe_mkt=ntbox_a39&utm_source=ns&utm_medium=cpc&utm_campaign=lt&inflow=naver&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "블랑카우키오스킨",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230406_28/42d05b3b-cd85-4614-b76a-593f39cea4ec.jpg?type=f300",
    title: "★Daily매일입는~티셔츠★ 라운드 레이온 스판 심플 칠부 티셔츠",
    price: "6,900",
    discount: "17",
    link: "http://www.moulian.com/index.html?branduid=165330&da_ref=Yz1GVkJwVW4=&ref=naverbox",
    mall: "뮬리안",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1806256/18062561863.20.jpg?type=f300",
    title: "마릴리 스틸레토 슬링백힐 3cm 5cm 7cm 9cm",
    price: "42,410",
    discount: "15",
    link: "https://sovomall.co.kr/product/detail.html?product_no=11933&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3861121/38611214959.jpg?type=f300",
    title: "샤 레이어드 DRESS",
    price: "28,000",
    link: "http://www.nanasalon.com/index.html?branduid=569618&ref=naver_open",
    mall: "나나살롱",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8194225/81942256214.jpg?type=f300",
    title: "셰프애찬 포기김치 10kg 정성가득 손맛 셰프김치 배추 김치 김장",
    price: "97,800",
    link: "https://smartstore.naver.com/owenfood0510/products/4397733764",
    mall: "셰프애찬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3154142/31541429579.jpg?type=f300",
    title: "1+1 모찌스판 배기팬츠",
    price: "29,800",
    link: "https://purplia.com/product/detail.html?product_no=33787&src=image&kw=0010FA&cafe_mkt=ntbox_b20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3572907/35729070064.1.jpg?type=f300",
    title:
      "최대 19450원크리스마스 워터볼 무드등 오르골 무드등 산타 눈사람 트리",
    price: "27,100",
    discount: "25",
    link: "http://item.gmarket.co.kr/Item?goodscode=2651889745&jaehuid=200011589",
    mall: "G마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3135380/31353800788.5.jpg?type=f300",
    title: "활력 부스터 SET",
    price: "35,800",
    discount: "34",
    link: "https://food-ology.co.kr/product/detail.html?product_no=99&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "푸드올로지",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8334431/83344311008.1.jpg?type=f300",
    title: "위크엔드 100수 줄누빔 패드 겸 스프레드 9color SS/Q/K",
    price: "97,500",
    discount: "25",
    link: "https://smartstore.naver.com/elenaheim/products/5799811594",
    mall: "엘레나하임",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_23/1e97a032-bed4-43f7-bbe1-2e72d09ab278.jpg?type=f300",
    title: "[페미라이드] 퓨어 에센스 30ml",
    price: "38,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7050050018",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2867312/28673129720.1.jpg?type=f300",
    title: "여성 데이지 플랫폼 스니커즈 (IV) - 3FM252",
    price: "59,600",
    discount: "60",
    link: "https://hushpuppies.co.kr/product/detail.html?product_no=463&cate_no=93&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "허시파피",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230406_4/22809f1d-fdfd-4f06-95ae-51a4a37d4915.jpg?type=f300",
    title: "★4계절내내 착용해요★ 루제 빈티지 데님팬츠",
    price: "23,700",
    discount: "52",
    link: "https://missu.co.kr/product/detail.html?product_no=5236&cafe_mkt=ue_naverboxre",
    mall: "미스유",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_28/87c29a5a-b555-42d7-9575-cb3a622ae307.jpg?type=f300",
    title:
      "[벚꽃룩/MADE] 러블리 레이스 블라우스 스모크 스커트 투피스 세트 (Long)",
    price: "79,800",
    link: "https://lovesome-one.com/product/made-%EB%9F%AC%EB%B8%94%EB%A6%AC-%EB%A0%88%EC%9D%B4%EC%8A%A4-%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4-%EC%8A%A4%EB%AA%A8%ED%81%AC-%EC%8A%A4%EC%BB%A4%ED%8A%B8-%ED%88%AC%ED%94%BC%EC%8A%A4-%EC%84%B8%ED%8A%B8-long-6%EC%B0%A8-%EC%9E%AC%EC%A7%84%ED%96%89/5939/category/26/display/1/",
    mall: "러브썸원",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906965/39069653305.jpg?type=f300",
    title: "스윗 블루 마자켓 ⓟ[JK6441ⓟ,여자린넨자켓,봄린넨자켓,마자켓]",
    price: "79,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=150933&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3831735/38317357220.jpg?type=f300",
    title: "no.23308 베이직 뒷밴딩 플리츠스커트",
    price: "17,910",
    discount: "10",
    link: "http://www.misscandy.co.kr/index.html?branduid=229482&ref=naver_open&da_ref=Yz1reThYT3k=",
    mall: "미스캔디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3805815/38058152112.3.jpg?type=f300",
    title: "캐모일밴딩슬랙스",
    price: "31,800",
    discount: "14",
    link: "https://dabagirl.co.kr/product/detail.html?product_no=76924&cate_no=67&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "다바걸",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3426401/34264018713.1.jpg?type=f300",
    title: "슬립푸 알러지케어 먼지없는 차렵이불 침구세트 7colors",
    price: "49,900",
    discount: "30",
    link: "http://www.nubizio.co.kr/index.html?branduid=155527&ref=naver_open",
    mall: "누비지오",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3783552/37835529096.jpg?type=f300",
    title: "[OT-c213]마르엘 자켓",
    price: "59,400",
    discount: "40",
    link: "http://leejiral.com/product/detail.html?product_no=15034&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "리지랄닷컴",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2826990/28269905599.2.jpg?type=f300",
    title:
      "[10%봄맞이세일] 클래식 대방석 대형쿠션 세트 좌식쇼파 2color (+팔걸이쿠션/180x95)",
    price: "116,100",
    discount: "27",
    link: "https://shezhome.co.kr/product/detail.html?product_no=2066&cate_no=27&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "쉬즈홈공식몰",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221028_27/75a8b1e4-66c8-462c-ac21-dada7ebcea99.jpg?type=f300",
    title: "100% 천연소가죽 홀리데이 크로스백",
    price: "130,000",
    discount: "23",
    link: "http://www.zizhel.net/shop/shopdetail.html?branduid=1075994&da_ref=Yz1hczY0UmI=",
    mall: "지젤슈즈",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_27/5d53c084-e57d-41d2-a3f9-532d1ba99056.jpg?type=f300",
    title: "헤트라스 멀티 룸스프레이 1+1",
    price: "13,200",
    discount: "50",
    link: "https://hetras.co.kr/product/multi-fragrance-life-spray-2ea/71/category/24/display/1/?utm_source=naver&utm_medium=cpc&utm_campaign=shopping_box&utm_id=shopping_box&utm_content=recommend3",
    mall: "헤트라스",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_26/fb92df26-f4d0-4746-aa7f-835e92871bbc.jpg?type=f300",
    title:
      "★시선강탈~예쁜핏!★ 라인배색와이드일자팬츠 (사계절 내내~입는 인생데님!)",
    price: "27,500",
    discount: "31",
    link: "https://nadoyeosin.com/product/detail.html?product_no=3412&cafe_mkt=ue_naverboxre",
    mall: "나도여신",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230206_28/c9fedf79-08a4-4aba-b049-b2bbfc77c602.jpg?type=f300",
    title: "남아 보더디노 에어로쿨 7부 내의 세트",
    price: "14,900",
    discount: "50",
    link: "https://www.suafam.com/product/%EB%82%A8%EC%95%84-%EB%B3%B4%EB%8D%94%EB%94%94%EB%85%B8-%EC%97%90%EC%96%B4%EB%A1%9C%EC%BF%A8-7%EB%B6%80-%EB%82%B4%EC%9D%98-%EC%84%B8%ED%8A%B8/1294/category/32/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225567&utm_content=boy_borderdino_aerocool_7",
    mall: "수아팜",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221222_28/ad6836ad-1a31-408b-a78e-b88c67acdece.jpg?type=f300",
    title: "퓨징 테크놀로지 와이어리스 브라팬티세트 애쉬블루 40% OFF",
    price: "34,500",
    discount: "40",
    link: "https://www.codescombineinnerwear.com/product/detail.html?product_no=3379&cate_no=81&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225568&utm_content=fusing_technology_wireless_ashblue",
    mall: "코데즈컴바인이너웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2460109/24601090172.9.jpg?type=f300",
    title: "콤포라M 천연가죽 키높이 스니커즈 7cm",
    price: "69,800",
    discount: "50",
    link: "https://sovomall.co.kr/product/detail.html?product_no=14106&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3904627/39046277986.jpg?type=f300",
    title:
      "미쓰 레이스 블라우스[ST5697B,스트라이프블라우스,레이스블라우스,레이스셔츠]",
    price: "26,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=150910&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_25/d3e31615-7357-4355-8c17-371883e56ab1.jpg?type=f300",
    title: "[컬러 13종, 46% SALE] 컬러.V1 카드수납",
    price: "11,800",
    discount: "46",
    link: "https://momocase.co.kr/product/%EC%BB%AC%EB%9F%ACv1%EC%B9%B4%EB%93%9C%EC%88%98%EB%82%A9/2940/category/190/display/1/",
    mall: "모모케이스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2186110/21861107695.2.jpg?type=f300",
    title: "탐험가의 애장품 청바지",
    price: "26,000",
    link: "https://helloyoonsoo.com/product/detail.html?product_no=23256&cate_no=11&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "안녕윤수야",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3114961/31149619563.3.jpg?type=f300",
    title:
      "[올인원 패키지] [폴란드90%] 베르세즈 구스다운세트(구스이불+구스베개+이불커버+베개커버 세트)  [웨딩 패키지]",
    price: "446,900",
    discount: "25",
    link: "https://doadream.com/product/detail.html?product_no=951&cate_no=26&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "도아드림",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3888842/38888425391.jpg?type=f300",
    title: "#신상 50% 14k G.F★당일출고★ 카로 미니 귀걸이 EA2851",
    price: "18,900",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275612&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_28/be17d00c-c1e2-4ab9-b8e8-96356e7af308.jpg?type=f300",
    title: "★1만원대★ 러블리~벨라루즈핏블라우스",
    price: "19,900",
    discount: "43",
    link: "https://sugargirl.co.kr/product/%EB%B2%A8%EB%9D%BC%EB%A3%A8%EC%A6%88%ED%95%8F%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4/4595/category/1/display/17/?cafe_mkt=ue_naver_003",
    mall: "슈가걸",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3625478/36254789694.1.jpg?type=f300",
    title: "일상공감 간편꾹 고정클립",
    price: "9,800",
    discount: "51",
    link: "https://dailygongam.com/product/detail.html?product_no=1154&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=gojung00&utm_term=gojung&n_query=gojung00&cafe_mkt=nbox_bridge",
    mall: "일상공감",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3854427/38544278924.jpg?type=f300",
    title: "세인트라인 재킷",
    price: "59,000",
    link: "https://romistory.com/product/detail.html?product_no=62582&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "로미스토리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3859429/38594291744.jpg?type=f300",
    title:
      "여성 파자마 상하세트 봄가을 여름 귀여운 잠옷 반팔 긴팔 수면 홈웨어 우유바지",
    price: "1,000",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253590&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=D233281157",
    mall: "옥션",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3437177/34371777920.1.jpg?type=f300",
    title:
      "★풀셋코디 [클리브랜드골프] 벨로아 밑단밴딩 여성 후드자켓/골프웨어_CGWJK23722BK",
    price: "179,000",
    link: "http://clevelandgolfwear.com/goods/goods_view.php?goodsNo=1000135167&inflow=naver",
    mall: "클리브랜드골프웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2298268/22982684020.130.jpg?type=f300",
    title: "루즈델리 봄신상 롱원피스 세트 빅사이즈 팬츠 티셔츠",
    price: "16,900",
    discount: "50",
    link: "http://item.gmarket.co.kr/Item?goodscode=1817237042&jaehuid=200011590",
    mall: "G마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3709010/37090100336.jpg?type=f300",
    title: "블랙라벨 시그니처 360N 하이레이어 레깅스 1+1",
    price: "59,800",
    discount: "39",
    link: "https://www.xexymix.com/index.html?branduid=2064757&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3666066/36660662564.jpg?type=f300",
    title: "백 포인트 브라탑 1+1",
    price: "49,800",
    discount: "36",
    link: "https://www.xexymix.com/index.html?branduid=2064813&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3889384/38893845893.1.jpg?type=f300",
    title: "깔끔대장 청소하버블 변기클리너",
    price: "19,800",
    discount: "67",
    link: "https://cleanboss.kr/product/detail.html?product_no=1470&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=bucle00&utm_term=bucle&n_query=bucle00&cafe_mkt=nbox_bridge",
    mall: "깔끔대장",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_27/e4dc8881-0a2b-4145-8d61-2a4d1cb0be08.jpg?type=f300",
    title:
      "💙 신제품 💙 [닥터타이즈] 달맞이꽃오일 페이셜 크림 나흐트케슨 게지흐트플리거 50ml",
    price: "38,000",
    link: "https://smartstore.naver.com/mihyangstore/products/8140950870",
    mall: "미향 스토어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20221116_13/ecf995f6-8038-4d88-804e-5d664fe41b4d.jpg?type=f300",
    title: "에어로쿨 로고 아웃밴드 아이보리 노와이어 브라 팬티세트",
    price: "32,000",
    discount: "50",
    link: "https://www.guessunderwear.kr/product/%EC%97%90%EC%96%B4%EB%A1%9C%EC%BF%A8-%EB%A1%9C%EA%B3%A0-%EC%95%84%EC%9B%83%EB%B0%B4%EB%93%9C-%EC%95%84%EC%9D%B4%EB%B3%B4%EB%A6%AC-%EB%85%B8%EC%99%80%EC%9D%B4%EC%96%B4-%EB%B8%8C%EB%9D%BC-%ED%8C%AC%ED%8B%B0-%EC%84%B8%ED%8A%B8/795/category/56/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225570&utm_term=lovy_aerocool_set",
    mall: "게스언더웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3888859/38888595940.jpg?type=f300",
    title: "Y자수 후디와 4부 팬츠 세트 [A08T04TH]",
    price: "25,920",
    link: "https://www.applelatte.com/index.html?branduid=96350&ref=naver_open",
    mall: "애플라떼",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_23/1961f697-4856-4ed8-8190-94b5569ff2fb.jpg?type=f300",
    title: "햇반 210g",
    price: "999",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40119287&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_hatban_product",
    mall: "CJ더마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3386206/33862065896.jpg?type=f300",
    title: "해피키키 조거 트레이닝 팬츠 (4color) 남자사이즈open!&hearts;",
    price: "25,200",
    link: "https://mjcong.co.kr/product/detail.html?product_no=10160&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8137526/8137526506.11.jpg?type=f300",
    title: "타이얼즈 토오픈힐  (8 / 10cm)",
    price: "44,900",
    discount: "15",
    link: "https://voga.co.kr/product/detail.html?product_no=230&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "VOGA",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2872532/28725320712.5.jpg?type=f300",
    title: "F21P501 루드 라인 플랫슈즈 | 0.5cm",
    price: "42,800",
    link: "http://www.naturalflex.kr/index.html?branduid=2104019&ref=naver_open",
    mall: "NATURALFLEX",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_8/6e7479c4-56d1-493f-97bf-b0d0184b8025.jpg?type=f300",
    title:
      "[꼬뜨] 스테이크 3종 강아지 간식. 닭고기 오리 소고기. 100% 국내생산 고단백 저지방",
    price: "9,500",
    discount: "65",
    link: "https://smartstore.naver.com/cote/products/4528375365?nt_source=naver&nt_medium=shoppingbox&nt_detail=steak3&cafe_mkt=ntbox_b20",
    mall: "Cote",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3866661/38666610625.1.jpg?type=f300",
    title: "문캠핑 핸들 폴딩 바스켓 16L (2color)",
    price: "15,900",
    discount: "36",
    link: "https://moongori.com/goods/view?no=1158990&market=naver",
    mall: "문고리닷컴",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_8/362d4bc8-cf59-4924-b39e-5ace59c9a8a4.jpg?type=f300",
    title: "H43 조약돌스툴 낮은스툴 로비 카페 아울렛 라운지 호텔 도서관 의자",
    price: "174,100",
    discount: "67",
    link: "https://smartstore.naver.com/ddssofa/products/6715452724",
    mall: "DDS SOFA",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8322607/83226076886.5.jpg?type=f300",
    title: "더스파 코드블락 카본블럭 녹물 필터",
    price: "20,900",
    discount: "79",
    link: "https://smartstore.naver.com/thespa/products/5681579115",
    mall: "더스파",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_11/67c9f031-0991-4272-96f1-db791a25ec25.jpg?type=f300",
    title: "지금 입어야 제일 예뻐요~ 분위기UP! 에로우 블라우스",
    price: "29,800",
    discount: "32",
    link: "https://j-closet.co.kr/product/detail.html?product_no=682&cafe_mkt=ue_naverboxre",
    mall: "제이의옷장",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2305785/23057856553.23.jpg?type=f300",
    title: "피죤 피죤 섬유유연제 3100ml 4개 핑크로즈",
    price: "16,900",
    discount: "13",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253589&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=B704262811",
    mall: "옥션",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3880763/38807631553.jpg?type=f300",
    title: "SUNNY11 미스틱 반팔티",
    price: "23,400",
    link: "https://sunny11.com/product/detail.html?product_no=10799&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "써니11",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2247201/22472010475.3.jpg?type=f300",
    title: "캐주얼 숏 트렌치 탄탄아우터 025,퍼플리아",
    price: "62,800",
    link: "https://purplia.com/product/detail.html?product_no=29435&src=image&kw=001104&cafe_mkt=ntbox_a20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3852358/38523584544.jpg?type=f300",
    title: "케이 스트라이프 웨이브레이스 가디건",
    price: "39,900",
    link: "http://www.nibbuns.co.kr/index.html?branduid=71234&da_ref=Yz11ZjBqbks=",
    mall: "니쁜스",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_16/39659b4d-a2cd-484d-87e4-4837951ba035.jpg?type=f300",
    title: "[비빌캔디] 비빌 틴 캔디",
    price: "10,500",
    link: "https://smartstore.naver.com/mihyangstore/products/8212040563",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2791320/27913207234.19.jpg?type=f300",
    title: "달심 오일만주스 분말 (5병)",
    price: "20,700",
    discount: "10",
    link: "http://dalsim.kr/product/detail.html?product_no=88&cate_no=66&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "달심",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3896837/38968372900.jpg?type=f300",
    title: "자외선은 피하고 패션 포인트는 살려~ 처피 보넷 버킷 햇",
    price: "15,960",
    link: "https://urbanlady.co.kr/product/%EC%B2%98%ED%94%BC-%EB%B3%B4%EB%84%B7-%EB%B2%84%ED%82%B7-%ED%96%87/3024/category/24/display/1/?cafe_mkt=ue_ue_naver_08",
    mall: "어반레이디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3793463/37934632920.jpg?type=f300",
    title:
      "[자체제작] 에르메르 탑  실켓 이중 나시  (라운드/스퀘어넥/브이넥 3TYPE)(고급도톰소재ver)",
    price: "33,900",
    link: "https://joyu.co.kr/product/detail.html?product_no=8479&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open&cafe_mkt=ue_naver_bottom",
    mall: "조이유",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3599983/35999836524.jpg?type=f300",
    title: "이지 라운드 크롭 롱슬리브 1+1",
    price: "48,800",
    discount: "32",
    link: "https://www.xexymix.com/index.html?branduid=2064773&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3802757/38027572451.jpg?type=f300",
    title: "[GC MADE] 어반라운드자켓",
    price: "90,250",
    discount: "5",
    link: "https://graychic.co.kr/product/detail.html?product_no=12004&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3814891/38148915385.jpg?type=f300",
    title: "홍대쭈꾸미 수제양념쭈꾸미볶음 300g 6팩 구성",
    price: "36,760",
    discount: "31",
    link: "https://www.1300k.com/product/109895205?channelType=NVRSHBOXS&src=image&kw=0108AD",
    mall: "1300K",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3342761/33427616772.2.jpg?type=f300",
    title: "프로피에스 베타밀 디카페 8g x 28포",
    price: "15,900",
    link: "https://profis.co.kr/product/detail.html?product_no=53&cate_no=63&cate_no=63&display_group=1&cafe_mkt=ue_npc3",
    mall: "한국프로피에스",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230404_28/0b6a5381-3b7f-4223-befc-eea8ee95ebb8.jpg?type=f300",
    title: "자체제작 카라 카디건",
    price: "79,000",
    link: "https://prostj.com/product/detail.html?product_no=18113&cafe_mkt=ue_ntbox",
    mall: "프로스트제이",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_11/0c53556e-3f2a-43a4-a13d-c235d79793dc.jpg?type=f300",
    title:
      "[제이에스티나] [아이유 PICK] LALA J 2줄 팔찌 (JJLJBQ1BF327SR7S0) (JJLJBQ1BF327SR7S0)",
    price: "62,100",
    discount: "10",
    link: "https://www.jestina.co.kr/products/view/G2000024439?utm_source=Naver&utm_medium=PC.box&utm_campaign=JJLJBQ1BF327SR7S0&cafe_mkt=ntbox_b20",
    mall: "제이에스티나공식몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3224428/32244289584.2.jpg?type=f300",
    title: "수제 청양 맵짤이 250g 400g 멸치 고추 다짐",
    price: "9,900",
    link: "http://www.chefechan.com/Goods/Detail/SOW46731013",
    mall: "셰프애찬",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_14/f2f86696-2c58-467a-a9a4-769f652a2e79.jpg?type=f300",
    title: "햇반 210g",
    price: "999",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40119287&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_hatban_product",
    mall: "CJ더마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2742678/27426783872.jpg?type=f300",
    title: "★히피점프치마★",
    price: "23,500",
    discount: "51",
    link: "https://hellen.co.kr/product/%ED%9E%88%ED%94%BC%EC%A0%90%ED%94%84%EC%B9%98%EB%A7%88/337/category/24/display/1/?cafe_mkt=ue_n_r3",
    mall: "hellen",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8403017/84030170283.4.jpg?type=f300",
    title: "[2개특가] CAMFOL 캠핑의자 캠핑용 릴렉스체어 bbq",
    price: "50,240",
    link: "https://smartstore.naver.com/marketb/products/6485669906",
    mall: "마켓비 공식스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3321853/33218534589.1.jpg?type=f300",
    title: "[파우치 증정]접이식 폴딩 빅 스퀘어 선글라스 UV400 3color",
    price: "12,900",
    discount: "35",
    link: "https://viewlap.com/product/detail.html?product_no=1735&cate_no=46&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "뷰랩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230405_10/e63cebe7-9c5e-434e-bd36-2ae64bd21701.jpg?type=f300",
    title: "편하고 가성비좋은 주름팬츠",
    price: "8,900",
    discount: "53",
    link: "https://www.wingsmall.co.kr/?cafe_mkt=ue_navertrendpc1",
    mall: "윙스몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8560078/85600783518.jpg?type=f300",
    title: "우대갈비 1kg 꽃갈비 캠핑용 스테이크",
    price: "29,500",
    discount: "31",
    link: "https://smartstore.naver.com/teawha/products/8056283195",
    mall: "태화농수산",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3092915/30929153500.jpg?type=f300",
    title: "일상팬츠 Vol.199 유데린 절개 보이핏 데님팬츠",
    price: "39,800",
    link: "http://www.evellet.com/index.html?branduid=850457&ref=naver_open",
    mall: "제이스타일",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_14/ec0d5707-edbe-4a38-8995-96dcf552e98d.jpg?type=f300",
    title:
      "★역대급인기/봄맞이최대68%할인★ 14K/18K 프루너스 화이트스톤 원터치 금 귀걸이",
    price: "177,600",
    discount: "30",
    link: "https://www.obelee.com/shop/shopdetail.html?branduid=3543655&utm_source=%23NAVER_TrM&utm_medium=CPM&utm_campaign=%ED%94%84%EB%A3%A8%EB%84%88%EC%8A%A4E_%EC%B6%94%EC%B2%9C",
    mall: "오벨리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8326077/83260778739.1.jpg?type=f300",
    title: "더 플라워 샤기 러그 3size",
    price: "189,000",
    discount: "25",
    link: "https://trenditem.shopping.naver.com/smartstore.naver.com/elenaheim/products/5716280269",
    mall: "엘레나하임",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3845914/38459141923.jpg?type=f300",
    title: "V카라 롤업 블라우스 [A15M03OH]",
    price: "16,830",
    link: "https://www.applelatte.com/index.html?branduid=91221&ref=naver_open",
    mall: "애플라떼",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230224_2/e28f14a5-0ccb-417b-bca7-8f066848d9bc.jpg?type=f300",
    title: "STL 뱃살 커버 조거 팬츠 1+1",
    price: "34,930",
    discount: "67",
    link: "http://www.beststl.com/index.html?branduid=86967&ref=naver_open&da_ref=Yz1sNURUbkw=&ssrem=trend&ref=naverpick5",
    mall: "STL",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_12/c75424ef-923b-4a8e-b692-c0ad0dfd7458.jpg?type=f300",
    title: "햇반솥반 특별한상 8종",
    price: "18,889",
    discount: "46",
    link: "https://www.cjthemarket.com/pc/prod/prodDetail?prdCd=40165199&plnId=300004&code=TNASBP&utm_source=naver&utm_medium=da_shoppingbox&utm_campaign=salefesta&utm_content=salefesta_hatbansotban_product",
    mall: "CJ더마켓",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3054558/30545584274.jpg?type=f300",
    title: "no.21563  스톤워싱 히든밴딩 배기핏 데님팬츠 (숏,미디엄,롱)",
    price: "18,810",
    discount: "10",
    link: "http://www.misscandy.co.kr/index.html?branduid=227742&ref=naver_open&da_ref=Yz1reThYT3k=",
    mall: "미스캔디",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_17/fbcbe1eb-d559-4cb0-96fb-5ba6b5f2e3ea.jpg?type=f300",
    title: "대전 선화동 매운 실비김치 세트 김치1.3kg + 파김치 1kg",
    price: "55,000",
    link: "https://smartstore.naver.com/djhotkimchi/products/5511181894",
    mall: "선화동매운김치",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906964/39069648352.jpg?type=f300",
    title: "엔유 샤 스커트[SK2920 롱스커트]",
    price: "26,900",
    link: "http://www.gumzzi.co.kr/index.html?branduid=150955&ref=naver_open",
    mall: "gumzzi",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_5806577/5806577651.3.jpg?type=f300",
    title: "겔업 겔업 고농축 액체세제 2.5L x 4개 세탁세제 총10000ml",
    price: "8,900",
    discount: "29",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253589&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=A563240433",
    mall: "옥션",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2658990/26589903710.4.jpg?type=f300",
    title: "모카리 슬링백 (5 / 7  / 9cm)",
    price: "39,900",
    discount: "15",
    link: "https://voga.co.kr/product/detail.html?product_no=6022&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "VOGA",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1884896/18848969056.jpg?type=f300",
    title: "이 맛에 입지 청바지",
    price: "26,000",
    link: "https://helloyoonsoo.com/product/detail.html?product_no=21874&cate_no=11&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "안녕윤수야",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230330_3/9111a42e-afa9-44c5-b079-8d81b4588493.jpg?type=f300",
    title: "레이스 소프트핏 옐로우 브라렛 팬티세트",
    price: "28,000",
    discount: "56",
    link: "https://elleinnerwear.kr/product/detail.html?product_no=685&cate_no=24&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225569&utm_term=yellow_lace_softfit_bralette_set",
    mall: "엘르이너웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3802054/38020545275.jpg?type=f300",
    title: "어디에도 쏙쏙 입기 좋은 완벽 데일리 아이템! ★듀엘로 셔링 셔츠★",
    price: "24,800",
    link: "https://mamaju.co.kr/product/%EB%93%80%EC%97%98%EB%A1%9C-%EC%85%94%EB%A7%81-%EC%85%94%EC%B8%A0/6312/category/1/display/3/?cafe_mkt=ue_naver_04",
    mall: "마마쥬",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1175242/11752421698.2.jpg?type=f300",
    title: "마켓비 DINO USB 휴대용램프 KS2057T 캠핑용 유리 호리병 집들이선물",
    price: "12,900",
    link: "https://smartstore.naver.com/marketb/products/2030755823",
    mall: "마켓비 공식스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3822882/38228822707.jpg?type=f300",
    title: "레티카 핀턱 점퍼",
    price: "58,000",
    link: "https://purplia.com/product/detail.html?product_no=38663&src=image&kw=001104&cafe_mkt=ntbox_a20",
    mall: "퍼플리아",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8459457/84594578212.4.jpg?type=f300",
    title: "[산콤] 압박용 양말",
    price: "70,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7050077890",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3804592/38045927097.jpg?type=f300",
    title:
      "★풀셋코디 [클리브랜드골프] 스윙마스터 어깨터널 허리셔링 여성 골프바람막이/골프웨어_CGWJK31501",
    price: "173,600",
    link: "http://clevelandgolfwear.com/goods/goods_view.php?goodsNo=1000135593&inflow=naver",
    mall: "클리브랜드골프웨어",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230331_26/9979789b-d3b5-4114-8504-acc468108aa7.jpg?type=f300",
    title: "지금부터 여름까지 자꾸찾게되는 슬리브리스",
    price: "9,500",
    link: "https://common-unique.com/product/detail.html?product_no=18125&cate_no=25&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_opencafe_mkt=ue_trendplus01",
    mall: "커먼유니크",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_17/d16f6f76-b8aa-4a67-b65b-028b2a318229.jpg?type=f300",
    title: "★간절기~필수템!★ 프라라 후드점퍼 (고퀄리티로 매년 꺼내입어요~!)",
    price: "49,900",
    discount: "34",
    link: "https://nadoyeosin.com/product/detail.html?product_no=7205&cafe_mkt=ue_naverboxre",
    mall: "나도여신",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3036934/30369340108.jpg?type=f300",
    title: "바이브랩 특별 할인 세트 64%OFF 탈모케어와 속눈썹 영양을 동시에",
    price: "40,000",
    discount: "64",
    link: "http://vivelab.kr/product/detail.html?product_no=28&cate_no=24&display_group=1&mkpl1=trendre2&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "바이브랩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230206_23/46ebb57c-839f-4ff6-8f2a-c7eebaa56d1b.jpg?type=f300",
    title: "남아 문로켓 7부 내의 세트",
    price: "14,900",
    discount: "50",
    link: "https://www.suafam.com/product/%EB%82%A8%EC%95%84-%EB%AC%B8%EB%A1%9C%EC%BC%93-7%EB%B6%80-%EB%82%B4%EC%9D%98-%EC%84%B8%ED%8A%B8/1297/category/32/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225567&utm_content=boy_moonrocket_7",
    mall: "수아팜",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3850838/38508384818.1.jpg?type=f300",
    title: "★꽃피는봄에★ 핑크센트자켓",
    price: "39,900",
    discount: "33",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=10730&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230223_5/63fe167a-ba34-4b88-9f48-2b3053eb0d7d.jpg?type=f300",
    title: "히든밴딩스크래치일자데님팬츠",
    price: "33,300",
    discount: "10",
    link: "https://secretlabel.co.kr/shop/shopdetail.html?branduid=527557",
    mall: "시크릿라벨",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230315_6/a1716f00-7d48-4f7f-8f11-81bf6d027150.jpg?type=f300",
    title: "퓨징 테크놀로지 와이어리스 스킨 40% OFF",
    price: "34,500",
    discount: "40",
    link: "https://www.codescombineinnerwear.com/product/detail.html?product_no=2463&cate_no=81&display_group=1&utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_term=plus4_225568&utm_content=fusing_technology_wireless_skin",
    mall: "코데즈컴바인이너웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3905211/39052111959.jpg?type=f300",
    title:
      "NEW★10%할인엘더 스트라이프 배색 스카프,배색스카프,배색스카프추천,스트라이프스카프,스트라이프스카프추천,스트라이프스카프룩,스트라이프스카프패션,스카프코디,스카프룩,스카프추천,배색스",
    price: "9,900",
    link: "https://loveparis.net/product/detail.html?product_no=19929&cate_no=32&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "러브패리스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3287311/32873113756.1.jpg?type=f300",
    title: "차르르 프리미엄 렌징모달 차렵이불 침구세트 5colors",
    price: "89,900",
    discount: "30",
    link: "http://www.nubizio.co.kr/index.html?branduid=155455&ref=naver_open",
    mall: "누비지오",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230317_25/a561ff48-5cda-44c2-8a81-7063305c1cb2.jpg?type=f300",
    title: "모디안 데님 배기핏 밴딩팬츠",
    price: "39,800",
    link: "https://www.roompacker.co.kr/index.html?branduid=91523&ref=naver_open&da_ref=Yz0xR0tIUHE=",
    mall: "룸페커",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3783534/37835346658.1.jpg?type=f300",
    title: "뎀버크롭자켓+뎀버핀턱슬랙스",
    price: "78,000",
    discount: "10",
    link: "https://dabagirl.co.kr/product/detail.html?product_no=76836&cate_no=26&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "다바걸",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3883021/38830218173.jpg?type=f300",
    title: "랠리보이핏 청바지",
    price: "37,000",
    link: "https://romistory.com/product/detail.html?product_no=62739&cate_no=29&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "로미스토리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3741965/37419654379.1.jpg?type=f300",
    title:
      "[긴팔+나시+바지] 스판 쫀쫀 프릴 파자마 3종 세트 민소매 가운 수면 잠옷 3color",
    price: "24,900",
    discount: "36",
    link: "https://viewlap.com/product/detail.html?product_no=1875&cate_no=46&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "뷰랩",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230328_24/1994af9d-3051-4f81-84fd-2b61e21e702d.jpg?type=f300",
    title: "[닥터타이즈] 달맞이꽃오일 집중크림 나흐트케슨 인텐시브 살베 50ml",
    price: "50,000",
    link: "https://smartstore.naver.com/mihyangstore/products/7049588806",
    mall: "미향 스토어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3013183/30131837237.2.jpg?type=f300",
    title: "깔끔대장 칠해보게 틈새마카 (마카 2개+펜촉 6개)",
    price: "12,900",
    discount: "35",
    link: "http://cleanboss.kr/product/detail.html?product_no=714&utm_source=naver&utm_medium=trends&utm_campaign=&utm_content=marker00&utm_term=marker&n_query=marker00&cafe_mkt=nbox_bridge",
    mall: "깔끔대장",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3872511/38725119665.jpg?type=f300",
    title: "포키 플라워 니트 가디건 (5color)",
    price: "26,820",
    link: "https://mjcong.co.kr/product/detail.html?product_no=14239&cate_no=24&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "민지콩",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3657594/36575949022.jpg?type=f300",
    title: "에어 마일드 조거팬츠",
    price: "64,000",
    discount: "14",
    link: "https://www.xexymix.com/index.html?branduid=2064818&ref=naver_open&utm_source=naver&utm_medium=da&utm_campaign=nv_trendproduct_shoppingmall&da_ref=Yz01TGtXWUw=",
    mall: "젝시믹스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3906075/39060750334.jpg?type=f300",
    title:
      "[니쁜스단독제작20%할인]프리미엄퀄리티 명품핏 로우웨스트 와이드 배색 데님팬츠",
    price: "79,920",
    link: "http://www.nibbuns.co.kr/index.html?branduid=71244&da_ref=Yz11ZjBqbks=",
    mall: "니쁜스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3880065/38800657566.jpg?type=f300",
    title:
      "#셋트 특가 39,800원+무료배송 14k 골드★ 귀걸이/목걸이 SET 엘레간테 매듭 SET SET0305",
    price: "39,800",
    link: "http://www.luvreparis.co.kr/index.html?branduid=2275514&ref=naver_open",
    mall: "루브르파리",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3867733/38677335843.jpg?type=f300",
    title: "★3종SET★ 에일르쓰리피스",
    price: "50,900",
    discount: "43",
    link: "https://arielstyle.co.kr/product/detail.html?product_no=10790&cafe_mkt=ue_naverboxre",
    mall: "아리엘스타일",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3271237/32712373478.jpg?type=f300",
    title: "[1+1 EVENT] 어반익스플로러",
    price: "109,000",
    link: "http://www.akiii.co.kr/index.html?branduid=1154161&ref=naver_open&da_ref=Yz1JUnFxejQ=",
    mall: "아키클래식",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3155496/31554962485.jpg?type=f300",
    title:
      "플레이보이 남성 남자 패키지 드로즈 10매입 세트 PMD2109+2110B /15%+5% 추가쿠폰할인",
    price: "39,900",
    link: "http://banner.auction.co.kr/bn_redirect.asp?ID=BN00253590&lpurl=http://itempage3.auction.co.kr/DetailView.aspx?itemno=C563649928",
    mall: "옥션",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_16/1087490b-5aca-40e9-86f5-18b4004fb584.jpg?type=f300",
    title: "D29 로우 쇼파 스툴 병원 학교 유치원 약국 대기의자",
    price: "355,000",
    discount: "22",
    link: "https://smartstore.naver.com/ddssofa/products/5033705967",
    mall: "DDS SOFA",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3753343/37533434214.1.jpg?type=f300",
    title: "제베스 천연가죽 프리미엄 스틸레토 슬링백 4cm",
    price: "48,930",
    discount: "30",
    link: "https://sovomall.co.kr/product/detail.html?product_no=15971&cate_no=42&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "소보제화",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3669577/36695770068.jpg?type=f300",
    title: "18cm롱밀떡볶이 분식친구 롱어묵 롱김말이 쫄쫄면 골라담기",
    price: "2,200",
    discount: "44",
    link: "https://www.1300k.com/product/107939665?channelType=NVRSHBOXS&src=image&kw=0108AE",
    mall: "1300K",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3456696/34566967310.1.jpg?type=f300",
    title: "★예쁜 12컬러~★ Soft.B 베이직 울 니트 [브이넥/라운드]",
    price: "23,800",
    discount: "16",
    link: "http://www.midasb.co.kr/shop/shopdetail.html?branduid=613203&src=image&kw=002B58&ref=naverbox&da_ref=Yz1OeVBTaW0=",
    mall: "마이더스비",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3342764/33427649285.2.jpg?type=f300",
    title: "프로피에스 베타밀 프로틴 쉐이크 800g",
    price: "44,800",
    discount: "10",
    link: "https://profis.co.kr/product/detail.html?product_no=65&cate_no=65&cate_no=63&display_group=1&cafe_mkt=ue_npc4",
    mall: "한국프로피에스",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3870000/38700002087.jpg?type=f300",
    title: "어바웃자켓",
    price: "99,970",
    discount: "7",
    link: "https://graychic.co.kr/product/detail.html?product_no=12092&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2899413/28994137114.1.jpg?type=f300",
    title: "올데이 크롭자켓 와이드 투피스 (허리밴딩)(신축성)",
    price: "45,600",
    link: "https://joyu.co.kr/product/detail.html?product_no=7098&cate_no=7&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open&cafe_mkt=ue_naver_bottom",
    mall: "조이유",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_2869660/28696607975.1.jpg?type=f300",
    title: "페니안부츠컷슬랙스",
    price: "37,050",
    discount: "5",
    link: "https://timelady.co.kr/product/detail.html?product_no=4179&cate_no=35&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "타임레이디",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3695357/36953573813.jpg?type=f300",
    title: "[OP-f089]아키나 레이어 원피스",
    price: "36,000",
    discount: "40",
    link: "http://leejiral.com/product/detail.html?product_no=14972&cate_no=29&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "리지랄닷컴",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3773523/37735238888.jpg?type=f300",
    title: "T23M004 클래시 투스트랩 뮬 | 6cm",
    price: "38,500",
    link: "http://www.naturalflex.kr/index.html?branduid=2115769&ref=naver_open",
    mall: "NATURALFLEX",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_1910378/19103788947.6.jpg?type=f300",
    title: "방수패드 10종 모음전 (소형/대형/특대형Q)",
    price: "9,900",
    discount: "38",
    link: "https://shezhome.co.kr/product/detail.html?product_no=1696&cate_no=26&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "쉬즈홈공식몰",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3878526/38785262057.jpg?type=f300",
    title: "SUNNY11 엘라 화이트진",
    price: "36,000",
    link: "https://sunny11.com/product/detail.html?product_no=9753&cate_no=36&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "써니11",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3899093/38990934872.jpg?type=f300",
    title: "케니 포켓 SKIRT PANTS",
    price: "24,000",
    link: "http://www.nanasalon.com/index.html?branduid=569689&ref=naver_open",
    mall: "나나살롱",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20220602_20/9a5c1573-7b18-48af-86b9-1bfe3f982a40.jpg?type=f300",
    title: "에어로쿨 로고 아웃밴드 베이지 노와이어 브라 팬티 세트",
    price: "32,000",
    discount: "50",
    link: "https://www.guessunderwear.kr/product/%EC%97%90%EC%96%B4%EB%A1%9C%EC%BF%A8-%EB%A1%9C%EA%B3%A0-%EC%95%84%EC%9B%83%EB%B0%B4%EB%93%9C-%EB%B2%A0%EC%9D%B4%EC%A7%80-%EB%85%B8%EC%99%80%EC%9D%B4%EC%96%B4-%EB%B8%8C%EB%9D%BC-%ED%8C%AC%ED%8B%B0-%EC%84%B8%ED%8A%B8/793/category/55/display/1/?utm_source=naver&utm_medium=shoppingbox&utm_campaign=trendproduct&utm_content=plus4_225570&utm_term=beige_aerocool_set_01",
    mall: "게스언더웨어",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_8568638/85686385480.jpg?type=f300",
    title:
      "캠핑박스 바베큐 골라담기 소고기 5종 해산물 4종 캠핑 음식 소고기 세트",
    price: "7,400",
    discount: "25",
    link: "https://smartstore.naver.com/main/products/8141885157",
    mall: "태화농수산",
  },
  {
    img: "https://s.pstatic.net/shopping.phinf/20230329_6/a40c9b89-06c6-433b-8fe0-ea7ff023bcd1.jpg?type=f300",
    title: "[프림로즈 핑크 에디션 3종] 리미티드 에디션 시크릿 컬러",
    price: "839,000",
    discount: "40",
    link: "https://themedicube.co.kr/product/detail.html?product_no=1157&cate_no=501&display_group=1&utm_source=naver&utm_medium=ager_sb_reco&utm_campaign=roseedition_4",
    mall: "메디큐브",
  },
  {
    img: "https://shopping-phinf.pstatic.net/main_3829368/38293687948.jpg?type=f300",
    title: "[GC MADE] 셀러스티치자켓",
    price: "105,450",
    discount: "5",
    link: "https://graychic.co.kr/product/detail.html?product_no=12025&cate_no=4&display_group=1&cafe_mkt=naver_ks&mkt_in=Y&ghost_mall_id=naver&ref=naver_open",
    mall: "그레이시크",
  },
];
