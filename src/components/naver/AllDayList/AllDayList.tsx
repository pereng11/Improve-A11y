import { useState } from "react";
import { css, Global, SerializedStyles } from "@emotion/react";
import { List, ListItem, Title } from "react-wai";
import { WEBTOONLIST_BY_DAY } from "@/mocks";
import { naverStyles } from "@/style";
import { Up } from "@/icons";

interface Category {
  key: string;
  text: string;
  selected: boolean;
}

interface Template {
  styles: Record<string, SerializedStyles>;
  categories: Category[];
  changeCategory: (key: string) => void;
  currentDay: number;
}

function Before({ styles, categories, changeCategory, currentDay }: Template) {
  return (
    <div css={styles.container}>
      <Global styles={naverStyles} />
      <div css={styles.header}>
        <h2 css={styles.title}>요일별 전체 웹툰</h2>
        <ul css={styles.category}>
          {categories.map(({ key, text, selected }: Category) => (
            <li key={key}>
              <button
                type="button"
                css={styles.categoryBtn}
                aria-pressed={selected}
                onClick={() => changeCategory(key)}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ol css={styles.dayList}>
        {Object.entries(WEBTOONLIST_BY_DAY).map(
          ([day, webtoonList], dayIdx) => (
            <li key={day} css={styles.day}>
              <h3 css={styles.dayTitle}>{day}</h3>
              <ol css={styles.webtoonList}>
                {webtoonList.map(({ title, thumbnail }) => (
                  <li key={title} css={styles.webtoon}>
                    <a href="#" css={styles.imgBox}>
                      <img src={thumbnail} />
                    </a>
                    <div css={styles.webtoonTitle}>
                      <a href="#">
                        {dayIdx === currentDay - 1 && <Up />}
                        <span>{title}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          )
        )}
      </ol>
    </div>
  );
}

function Improved({
  styles,
  categories,
  changeCategory,
  currentDay,
}: Template) {
  const customStyles = {
    categoryBtn: css`
      &:focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
        outline-offset: 2px;
      }
    `,
  };

  return (
    <div css={styles.container}>
      <Global styles={naverStyles} />
      <div css={styles.header}>
        <Title lv={2} css={styles.title}>
          요일별 전체 웹툰
        </Title>
        <List direction="row" as="ol" css={styles.category}>
          {categories.map(({ key, text, selected }: Category) => (
            <ListItem key={key}>
              <button
                type="button"
                css={css`
                  ${styles.categoryBtn} ${customStyles.categoryBtn}
                `}
                aria-pressed={selected}
                onClick={() => changeCategory(key)}
              >
                {text}
              </button>
            </ListItem>
          ))}
        </List>
      </div>
      <List as="ol" direction="row" css={styles.dayList}>
        {Object.entries(WEBTOONLIST_BY_DAY).map(
          ([day, webtoonList], dayIdx) => (
            <ListItem key={day} css={styles.day}>
              <Title lv={3} css={styles.dayTitle}>
                {day}
              </Title>
              <List as="ol" direction="col" nested css={styles.webtoonList}>
                {webtoonList.map(({ title, thumbnail }) => (
                  <ListItem key={title} css={styles.webtoon}>
                    <a href="#" css={styles.imgBox}>
                      <img src={thumbnail} />
                    </a>
                    <div css={styles.webtoonTitle}>
                      <a href="#">
                        {dayIdx === currentDay - 1 && <Up />}
                        <span>{title}</span>
                      </a>
                    </div>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          )
        )}
      </List>
    </div>
  );
}

export interface AllDayList {
  type: "original" | "improved";
}

export function AllDayList({ type }: AllDayList) {
  const [categories, setCategories] = useState([
    { key: "favorite", text: "인기순", selected: true },
    { key: "update", text: "업데이트순", selected: false },
    { key: "view", text: "조회순", selected: false },
    { key: "star", text: "별점순", selected: false },
  ]);
  const currentDay = ((new Date().getDay() + 6) % 7) + 1;

  const styles = {
    container: css`
      width: 1190px;
      margin: 0 auto;
    `,
    header: css`
      display: flex;
      align-items: center;
      gap: 20px;
      height: 50px;
      margin-bottom: 5px;
    `,
    title: css`
      font-size: 20px;
      line-height: 21px;
      font-weight: 600;
      letter-spacing: -0.5px;
      color: var(--color-text-primary);
    `,
    category: css`
      display: flex;
      gap: 5px;

      & li:not(:nth-of-type(1)) button::before {
        width: 3px;
        height: 3px;
        margin-right: 5px;
        background: var(--color-text-addition);
        border-radius: 50%;
        opacity: 0.5;
        content: "";
      }
    `,
    categoryBtn: css`
      display: flex;
      align-items: center;
      font-size: 15px;
      line-height: 21px;
      font-weight: 500;
      color: var(--color-text-addition);

      &[aria-pressed="true"] {
        color: var(--color-webtoon-green);
      }

      &:focus-visible {
        outline: none;
      }
    `,
    dayList: css`
      display: flex;
      flex-flow: row nowrap;
      border: 1px solid var(--color-line-secondary);
    `,
    day: css`
      &:not(:nth-of-type(1)) {
        border-left: 1px solid var(--color-line-secondary);
      }

      &:nth-of-type(${currentDay}) {
        background: var(--color-solid-highlight);
        h3 {
          background: var(--color-webtoon-green);
          color: var(--color-text-white);
        }
      }
    `,
    dayTitle: css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 45px;
      margin-top: -1px;
      font-size: 15px;
      font-weight: 700;
      color: var(--color-text-primary);
    `,
    webtoonList: css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 25px;
      padding: 5px;
    `,
    webtoon: css`
      /* &:not(:nth-of-type(1)) {
        margin-top: 25px;
      } */
    `,
    imgBox: css`
      display: block;
      width: 160px;
      height: 207px;
      background: var(--color-bg-etc)
        url(https://ssl.pstatic.net/static/comic/new/logo_white.svg) no-repeat
        50% 50%/73px 69px;
      border-radius: 4px;
      overflow: hidden;

      & img {
        width: 160px;
        height: 207px;
        transition: 0.3s cubic-bezier(0.15, 0, 0.2, 1);
      }
      & img:hover {
        transform: scale3d(1.05, 1.05, 1.05);
      }
    `,
    webtoonTitle: css`
      display: block;
      padding-top: 10px;
      height: 30px;
      font-size: 15px;
      font-weight: 600;

      & a {
        display: flex;
        align-items: stretch;
        gap: 5px;
        width: 100%;
        height: 100%;
        line-height: 20px;
      }

      & a:not(:focus-visible):hover {
        text-decoration: underline;
      }
    `,
  };

  const changeCategory = (key: string) =>
    setCategories(
      categories.map((category) => ({
        ...category,
        selected: category.key === key,
      }))
    );

  const ComponentName = type === "original" ? Before : Improved;

  return (
    <ComponentName
      styles={styles}
      categories={categories}
      changeCategory={changeCategory}
      currentDay={currentDay}
    />
  );
}
