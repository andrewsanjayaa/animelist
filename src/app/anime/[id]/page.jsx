import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import { CalendarDots, Clock } from "@phosphor-icons/react/dist/ssr";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-8 px-4 flex lg:flex-nowrap flex-wrap justify-center  text-color-primary gap-10">
        <div className="2xl:w-1/6 lg:w-2/6 md:w-80">
          <Image
            src={anime.data.images.jpg.image_url}
            alt={anime.data.images.webp.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
        </div>

        <div className="md:w-3/4 lg:w-1/2 w-full">
          <h3 className="text-color-primary font-bold text-5xl md:pt-0 pt-1">
            {anime.data.title} - {anime.data.year}
          </h3>
          <div className="flex flex-row gap-3 py-4">
            <div className=" border-color-primary bg-color-primary text-color-dark border-2 text-sm text-center items-center flex flex-row justify-center py-1 px-3">
              <h3>{anime.data.episodes} EP</h3>
            </div>
            <div className="border-color-primary font-bold background-color-primmary border-2 text-sm text-center items-center flex flex-row justify-center py-1 px-3">
              <h3 className="">{anime.data.rating.substring(0, 5)}</h3>
            </div>
            <div className="font-bold background-color-primmary  text-sm text-center items-center flex flex-row justify-center p-1 gap-1">
              <CalendarDots size={24} className="text-color-accent" />
              <h3 className="">{anime.data.year}</h3>
            </div>
            <div className="font-bold background-color-primmary  text-sm text-center items-center flex flex-row justify-center p-1 gap-1">
              <Clock size={24} className="text-color-accent" />
              <h3 className="">{anime.data.duration.substring(0, 6)}</h3>
            </div>
          </div>
          <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
