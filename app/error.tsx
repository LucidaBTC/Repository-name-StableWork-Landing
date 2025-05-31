'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
          </p>
          <div className="space-y-4">
            <Button
              onClick={reset}
              variant="primary"
              className="w-full sm:w-auto"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try again
            </Button>
            <div>
              <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4"
              >
                <Home className="w-5 h-5 mr-2" />
                Return home
              </Button>
            </div>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <p className="font-mono text-sm text-gray-700 break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
} 