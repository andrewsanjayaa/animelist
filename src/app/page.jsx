import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import "./globals.css";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8&sfw=true");

  return (
    <>
      <section>
        <Header
          title={"Paling Populer"}
          linkHref={"/populer"}
          linkTitle={"Lihat Semua"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
