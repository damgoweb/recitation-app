import { Button } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          古典文学朗読アプリ
        </h2>
        <p className="text-xl text-gray-600">
          朗読を通じて脳を活性化しましょう
        </p>
      </div>

      <div className="grid gap-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            テキスト一覧
          </h3>
          <p className="text-gray-600 mb-4">
            古典文学作品を選んで朗読練習ができます
          </p>
          <Button variant="primary" size="lg" className="w-full">
            テキスト一覧を見る
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            カスタムテキスト追加
          </h3>
          <p className="text-gray-600 mb-4">
            自分の好きな文章を追加できます
          </p>
          <Button variant="secondary" size="lg" className="w-full">
            新しいテキストを追加
          </Button>
        </div>
      </div>
    </div>
  );
}