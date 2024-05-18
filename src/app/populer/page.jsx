"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Paginations from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Populer = () => {
  const [page, setPage] = useState(1);

  const [topAnime, settopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}&sfw=true`);

    settopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Paling Populer #${page}`} />
      <AnimeList api={topAnime} />
      <Paginations
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Populer;
