import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((item, index) => {
        return (
          <Link href={`/anime/${item.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
            <Image
              src={item.images.webp.image_url}
              width={350}
              height={350}
              alt="..."
              className="w-full max-h-72 object-cover"
            />
            <h3 className="text-center font-bold md:text-xl text-md p-4 ">
              {item.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
