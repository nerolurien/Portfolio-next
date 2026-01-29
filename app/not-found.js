import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Halaman Tidak Ditemukan (404)</h2>
      <p>Maaf, halaman yang kamu cari tidak ada.</p>
      <Link href="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Kembali ke Home
      </Link>
    </div>
  )
}