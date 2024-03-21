import SpeakerScreenContainer from "./screens/speakerScreen/SpeakerScreenContainer";
import ViewerScreenContainer from "./screens/ViewerScreenContainer";
import WelcomeScreenContainer from "./screens/WelcomeScreenContainer";
import { useState } from "react";

// create my views for the live streaming section of the app
const StreamHome = () => {
  // keep track of users role in stream
  const [appData, setAppData] = useState({ MeetingId: null, mode: null });
  const [isSpeaker, setIsSpeaker] = useState({ meetingId: null, mode: null });
  const [isViewer, setIsViewer] = useState({ meetingId: null, mode: null });

  // return the screen based on the users role and id of the meeting they are connected to
  return appData.MeetingId ? (
    // if the user is a speaker in the meeting return the speaker screen
    appData.mode === "CONFERENCE" ? (
      <SpeakerScreenContainer meetingId={isSpeaker.meetingId} />
    ) : (
      <ViewerScreenContainer meetingId={isViewer.meetingId} />
    )
  ) : (
    // if the user has no role assigned yet or hasn't joined a stream
    <WelcomeScreenContainer
      setIsSpeaker={setIsSpeaker}
      setIsViewer={setIsViewer}
      setAppData={setAppData}
    />
  );
};

export default StreamHome;
