'use client';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useState } from 'react';

function randomID(len: number) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}
const Room = () => {
  const [roomId, setRoomId] = useState('' as string);

  let meetingUI = async (element: any) => {
    // generate Kit Token
    const appID = 46610023;
    const serverSecret = 'a2baee0a6383310574f5f88af776db03';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      '1250',
      randomID(5),
      'Yessine'
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);

    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return <div ref={meetingUI}></div>;
};

export default Room;
