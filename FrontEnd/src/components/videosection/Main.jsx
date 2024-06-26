import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import ScrollTo from '../../utils/scrollTo'

import Header from './Header'
import Serach from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            {/* <Helmet
                titleTemplate="%s | Traverler Youtube"
                defaultTitle="Traverler Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet> */}
            {/* 브라우저 탭 제목 치환 */}

            <Header />
            <main id='video_main' role='main'>
                <Serach />
                {props.children}
            </main>
   
        </HelmetProvider>
    )
}

export default Main