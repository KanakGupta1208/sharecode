import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Roomvideo = () => {
  const { roomID } = useParams();

  const myMeeting = async (element) => {
    const appID = 1858862931;
    const serverSecret = "67b8185e726e884441787ddcd3276a68";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Aditya"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
          sharedLinks: [
              {
                name: 'Personal link',
                url:`https://localhost3000/room/${roomID}`
                
              },
            ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // or OneONoneCall
      },
    });
  };

  return <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Roomvideo;