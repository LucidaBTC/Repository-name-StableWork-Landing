import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-secondary-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-secondary-700 mb-6">
              Page Not Found
            </h2>
            <p className="text-secondary-600 mb-8 max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/">
              <Button variant="primary" size="lg">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
