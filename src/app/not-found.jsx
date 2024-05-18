import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-color-accent text-2xl font-bold">Halaman Tidak Ditemukan</h3>
        <Link href={"/"} className="text-color-primary hover:text-color-accent transition-all">Kembali Ke Halaman Utama</Link>
      </div>
    </div>
  );
};
export default Page;
