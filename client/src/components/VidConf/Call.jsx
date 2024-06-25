import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import MicOffSharpIcon from "@mui/icons-material/MicOffSharp";
import VideocamOffSharpIcon from "@mui/icons-material/VideocamOffSharp";
import CallEndSharpIcon from "@mui/icons-material/CallEndSharp";
import ReactPlayer from "react-player";
import { useSocket } from "../../context/SocketProvider";
import peer from "../../components/service/peer";


const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScreenWrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  margin: 2%;
`;
const ScreenUser = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ScreenLawyer = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Video = styled.div`
  width: 100%;
  height: 95%;
  border-radius: 10px;
  border: 2px solid var(--primary-color);
`;
const Title = styled.div`
  margin-top: auto;
  width: 100%;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
`;
const ActionsWrapper = styled.div`
  width: 30%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
`;
const Action = styled.button`
  width: 17%;
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 100px;
`;
const Call = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <Wrapper>
      {/* {myStream && <button onClick={sendStreams}>Send Stream</button>}
      {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
      {myStream && (
        <>
          <h1>My Stream</h1>
          <ReactPlayer
            playing
            muted
            height="100px"
            width="200px"
            url={myStream}
          />
        </>
      )}
      {remoteStream && (
        <>
          <h1>Remote Stream</h1>
          <ReactPlayer
            playing
            muted
            height="100px"
            width="200px"
            url={remoteStream}
          />
        </>
      )} */}
      <ScreenWrapper>
        <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
        {myStream && <button onClick={sendStreams}>Send Stream</button>}
        {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}

        {myStream && (
          <ScreenUser>
            <Video>
              <ReactPlayer
                playing
                muted
                height="100%"
                width="100%"
                url={myStream}
              />
            </Video>
            <Title>User</Title>
          </ScreenUser>
        )}
        {remoteStream && (
          <ScreenLawyer>
            <Video>
              <ReactPlayer
                playing
                muted
                height="100%"
                width="100%"
                url={remoteStream}
              />
            </Video>
            <Title>Lawyer</Title>
          </ScreenLawyer>
        )}
      </ScreenWrapper>

      <ActionsWrapper>
        <Action>
          <MicOffSharpIcon sx={{ color: "white", fontSize: "1.7rem" }} />
        </Action>
        <Action>
          <VideocamOffSharpIcon sx={{ color: "white", fontSize: "1.7rem" }} />
        </Action>
        <Action style={{backgroundColor: "var(--danger-color)", }} >
          <CallEndSharpIcon sx={{color: "white",fontSize: "1.7rem",}}/>
        </Action>
      </ActionsWrapper>
    </Wrapper>
  );
};

export default Call;
