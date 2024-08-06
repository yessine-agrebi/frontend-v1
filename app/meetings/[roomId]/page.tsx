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
    const appID = 257970972;
    const serverSecret = 'e9bfd0751f451960ef2f3f351986687a';
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
