import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <style global jsx>
                        {`
                            html, body, #__next {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}