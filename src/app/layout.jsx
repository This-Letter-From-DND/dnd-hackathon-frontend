import Provider from '@/components/common/Provider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
