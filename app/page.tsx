'use client';

import { useRouter } from 'next/navigation';
import { useTexts } from '@/hooks/useTexts';
import { Button, Loading } from '@/components/ui';
import { ProgressBar } from '@/components/ProgressBar';
import { TextList } from '@/components/TextList';

export default function HomePage() {
  const router = useRouter();
  const { texts, isLoading, error } = useTexts();

  const recordedCount = texts.filter(t => t.hasRecording).length;
  const totalCount = texts.length;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Loading size="lg" text="読み込み中..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <Button 
            variant="primary"
            onClick={() => window.location.reload()}
          >
            再読み込み
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヘッダーセクション */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          テキスト一覧
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          作品を選んで朗読練習を始めましょう
        </p>

        {/* 進捗バー */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <ProgressBar total={totalCount} completed={recordedCount} />
        </div>

        {/* 新規追加ボタン */}
        <Button
          variant="primary"
          size="lg"
          onClick={() => router.push('/texts/new')}
          className="w-full sm:w-auto"
        >
          + 新しいテキストを追加
        </Button>
      </div>

      {/* テキスト一覧 */}
      <TextList
        texts={texts}
        onTextClick={(id) => router.push(`/texts/${id}`)}
      />
    </div>
  );
}