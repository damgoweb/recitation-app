import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
              朗読エクササイズ
            </h1>
          </Link>
          
          <nav className="flex items-center gap-4">
            <Link 
              href="/"
              className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
            >
              ホーム
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}