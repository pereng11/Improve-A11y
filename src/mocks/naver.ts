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
