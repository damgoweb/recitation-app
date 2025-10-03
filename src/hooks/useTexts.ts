'use client';

import { useState, useEffect } from 'react';
import { TextWithRecording } from '@/types';

export function useTexts() {
  const [texts, setTexts] = useState<TextWithRecording[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTexts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/texts');
      
      if (!response.ok) {
        throw new Error('テキストの取得に失敗しました');
      }

      const data = await response.json();
      
      if (data.success) {
        setTexts(data.data);
      } else {
        throw new Error(data.error?.message || 'エラーが発生しました');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期しないエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTexts();
  }, []);

  return {
    texts,
    isLoading,
    error,
    refetch: fetchTexts,
  };
}