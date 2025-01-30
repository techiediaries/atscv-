import Header from '@/components/Header';

import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata = {
    metadataBase: 'https://atscv-beta.vercel.app/',
    title: 'Créateur de CV Gratuit | ATSCV',
    description:
        'Notre outil vous aide à créer un CV compatible avec les systèmes de candidature en ligne. Il veille à ce que vous fassiez bonne impression auprès des employeurs.',
    openGraph: {
        title: 'Resumave',
        images: `/banner.png`,
        icons: {
            icon: `/favicon.png`,
        },
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Header />
                    <div className="mx-auto  min-h-[calc(100vh-3rem)]">{children}</div>
                </ReduxProvider>
                <GoogleAnalytics gaId='G-WPXWXJ9MC2' />
            </body>
        </html>
    );
}
