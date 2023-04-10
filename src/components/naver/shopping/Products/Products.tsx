import { useState, useEffect, useRef } from "react";
import { css, Global, SerializedStyles } from "@emotion/react";
import { Grid } from "react-wai";
import { Product, SHOPPING_PRODUCTS } from "@/mocks";
import { naverStyles } from "@/style";
import { Loader } from "@/icons";

type UseInfiniteScroll = {
  <T>(fetch: (page: number) => Promise<T[]>, targetId: string): {
    isFetching: boolean;
    isObserving: boolean;
    pageNum: number;
    data: T[];
  };
};
const useInfiniteScroll: UseInfiniteScroll = <T,>(
  fetch: (page: number) => Promise<T[]>,
  targetId: string
) => {
  const [pageNum, setPageNum] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [isObserving, setIsObserving] = useState(true);

  const updateData = async () => {
    setIsFetching(true);

    const data = await fetch(pageNum);
    if (data.length > 0) {
      setData((prev) => [...prev, ...data]);
      setPageNum((prev) => prev + 1);
    } else {
      setIsObserving(false);
    }

    setIsFetching(false);
  };

  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting) {
        updateData();
      }
    },
    { threshold: 0.1 }
  );

  useEffect(() => {
    const target = document.getElementById(targetId);
    target && observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [targetId, pageNum, isObserving, isFetching]);

  return { isFetching, isObserving, pageNum, data };
};

interface Template {
  styles: Record<string, SerializedStyles>;
  products: Product[];
}

function Before({ styles, products }: Template) {
  return (
    <ul css={styles.productList}>
      {products.map(({ title, price, img, link, discount, mall }, idx) => (
        <li key={title + idx}>
          <a href={link}>
            <div css={styles.imgBox}>
              <img width="240" height="240" src={img} alt={title} />
            </div>
            <div css={styles.priceBox}>
              {discount && (
                <span css={styles.discount}>
                  <strong>{discount}</strong>%
                </span>
              )}
              <span>
                <strong>{price}</strong>원
              </span>
            </div>
            <div css={styles.titleBox}>{title}</div>
          </a>
          <div css={styles.mallBox}>
            <a href={link}>{mall}</a>
          </div>
        </li>
      ))}
    </ul>
  );
}
function Improved({ styles, products }: Template) {
  const customStyles = {
    productList: css`
      margin: 0;
      width: 100%;
      border-top: 1px solid #e6e6e6;
    `,
    product: css`
      width: 220px;
      height: 322px;
    `,
  };

  return (
    <Grid container spacing={20} css={customStyles.productList}>
      {products.map(({ title, price, img, link, discount, mall }, idx) => (
        <Grid key={title + idx} item xs={3}>
          <a href={link}>
            <div css={styles.imgBox}>
              <img width="240" height="240" src={img} alt={title} />
            </div>
            <div css={styles.priceBox}>
              {discount && (
                <span css={styles.discount}>
                  <strong>{discount}</strong>%
                </span>
              )}
              <span>
                <strong>{price}</strong>원
              </span>
            </div>
            <div css={styles.titleBox}>{title}</div>
          </a>
          <div css={styles.mallBox}>
            <a href={link}>{mall}</a>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export interface Products {
  type: "original" | "improved";
}

const fetchProducts = async (pageNum: number) => {
  const sp = pageNum * 20;
  return SHOPPING_PRODUCTS.slice(sp, sp + 20);
};

export function Products({ type }: Products) {
  const loaderId = "loader";
  const { isObserving, data } = useInfiniteScroll(fetchProducts, loaderId);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 잘못 사용된 aria attribute 제거
    // 라이브러리 업데이트되면 제거할 코드
    const $container = containerRef.current;
    if ($container) {
      [...$container.querySelectorAll("[role]")].forEach(($elem) =>
        $elem.removeAttribute("role")
      );
    }
  });

  const styles = {
    container: css`
      margin: 0 auto;
      width: 990px;
      padding: 20px 0;
      color: #222;

      & a {
        display: block;
      }
    `,
    productList: css`
      margin: 0;
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 20px;
      border-top: 1px solid #e6e6e6;

      & li {
        width: 220px;
        height: 322px;
        padding: 20px 0;
      }
    `,
    imgBox: css`
      width: 220px;
      height: 220px;
      overflow: hidden;
      border-radius: 6px;
      & img {
        width: 100%;
      }
    `,
    priceBox: css`
      line-height: 24px;
      margin-top: 8px;
      font-size: 14px;

      & strong {
        font-size: 18px;
        font-weight: 900;
        vertical-align: top;
      }
    `,
    discount: css`
      margin-right: 7px;
      color: #e3252b;
      font-size: 13px;
      vertical-align: top;
    `,
    titleBox: css`
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      word-wrap: break-word;
      margin-top: 3px;
      line-height: 19px;
      max-height: 38px;
      font-size: 13px;
    `,
    mallBox: css`
      margin-top: 14px;
      font-size: 13px;
      font-weight: 700;
    `,
  };

  const ComponentName = type === "original" ? Before : Improved;

  return (
    <div ref={containerRef} css={styles.container}>
      <Global styles={naverStyles} />
      <ComponentName styles={styles} products={data} />;
      {isObserving && (
        <div id={loaderId}>
          <Loader />
        </div>
      )}
    </div>
  );
}
