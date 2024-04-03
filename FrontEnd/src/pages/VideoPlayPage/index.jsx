import React from 'react';

import '../../assets/scss/style.scss';
import Player from './Page/Player';

import Main from '../../components/videosection/Main';
// import { fetchFromAPI } from '../../utils/api';

const VideoPlay = () => {
    // const [channelVideo, setChannelVideo] = useState([]);
    // const [channelVideo2, setChannelVideo2] = useState([]);
    // const [channelVideo3, setChannelVideo3] = useState([]);
    // const [channelVideo4, setChannelVideo4] = useState([]);
    // const [channelVideo5, setChannelVideo5] = useState([]);

    // useEffect(() => {
    //     const v1 = "UCag-vLxfCjAUNebW9gA0yRg";
    //     const v2 = "UClRNDVO8093rmRTtLe4GEPw";
    //     const v3 = "UCaoqDZPllYXLAH_5OBRLLrw";
    //     const v4 = "UCNAdXHkMg3U4xmrU9eyg1Ww";
    //     const v5 = "UCwjMQYL9vgbqGzxYW6dVhTw";

    //     const fetchResults = async () => {
    //         try {
    //             const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
    //             setChannelVideo(videosData.items);

    //             const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
    //             setChannelVideo2(videosData2.items);

    //             const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
    //             setChannelVideo3(videosData3.items);

    //             const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
    //             setChannelVideo4(videosData4.items);

    //             const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
    //             setChannelVideo5(videosData5.items);

    //         } catch (error) {
    //             console.log('Eroor fetching data', error)
    //         }
    //     }
    //     fetchResults();
    // }, [])




    return (
        
        <Main
        title="여행 유튜버"
        description="여행 유튜버 모음 사이트에 오신것을 환영합니다.">
            {/* <VideoSlider videos={channelVideo} title='😘 조튜브 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='😘 곽튜브 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='😘 체코제 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='😘 브루스리 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='😘 희철리즘 최신 영상' name='v5' /> */}
        
        <Player></Player>
      </Main>
      
    )
}

export default VideoPlay