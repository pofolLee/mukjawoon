import '../styles/globals.css'
import commonStyle from '../styles/common/Common.module.css';
import Header from './common/header'
import Footer from './common/footer'

function MyApp({ Component, pageProps }) {
    return (
        <div className={commonStyle.container}>
            <Header />
            
            <div className={commonStyle.body}>
                <Component {...pageProps} />
            </div>

            <Footer />
        </div>
    )
}

export default MyApp
