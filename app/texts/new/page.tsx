import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NewTextPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 戻るボタン */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="secondary">
            ← 一覧に戻る
          </Button>
        </Link>
      </div>

      {/* ヘッダー */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          新しいテキストを追加
        </h1>
      </div>

      {/* 説明 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-xl text-gray-600 mb-4">
          テキスト追加フォームは タスク 2-5 で実装予定です
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            一覧に戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}