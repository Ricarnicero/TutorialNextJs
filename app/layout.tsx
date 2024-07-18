import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import '@progress/kendo-theme-default/dist/all.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
