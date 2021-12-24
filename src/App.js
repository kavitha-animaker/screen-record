
import { ReactMediaRecorder } from "react-media-recorder";
import styled from "styled-components";

const Button = styled.button`

  display: block;
  font-size: 1em;
  margin: 8px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
`;

const Wrapper = styled.div`
   display: flex;
`

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      screen
      audio={true}
      render={({ startRecording, stopRecording, mediaBlobUrl ,pauseRecording, resumeRecording}) => (
        <div>
          <h2>Screen Recording</h2>
          <Wrapper>
          <Button onClick={startRecording}>Start Recording</Button>
          <Button  onClick={stopRecording}>Stop Recording</Button>
          <Button onClick={pauseRecording}>Pause Recording</Button>
          <Button onClick={resumeRecording}>Resume Recording</Button>
          </Wrapper>
          <div>
            <video src={mediaBlobUrl} controls autoplay loop width={800} />
          </div>
          <div></div>
        </div>
      )}
    />
  </div>
);

export default function App() {
  return <RecordView />;
}
