import React from "react";
import { useEffect, useRef } from "react";
import { Track } from "twilio-video";
import { styled } from "@material-ui/core/styles";
import useParticipants from "data/Video/hooks/useParticipants";
import useVideoState from "data/Video/hooks/useVideoState";
import { connect } from "data/Video/Context";

import usePublications from "data/Video/hooks/usePublications";
import useTrack from "data/Video/hooks/useTrack";
import useMediaStreamTrack from "data/Video/hooks/useMediaStreamTrack";

export default function Home() {
  const { token, settings, room, connect } = useVideoState();

  React.useEffect(() => {
    if (token) {
      connect(token);
    }
    return () => {};
  }, [token]);

  return (
    <div>
      {typeof window !== "undefined" && room.localParticipant && (
        <ParticipantStrip />
      )}
    </div>
  );
}

const Container = styled("aside")(({ theme }) => ({
  padding: "0.5em",
  overflowY: "auto",
  [theme.breakpoints.down("xs")]: {
    overflowY: "initial",
    overflowX: "auto",
    padding: 0,
    display: "flex",
  },
}));
const ScrollContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    display: "flex",
  },
}));
export function ParticipantStrip() {
  const { room } = useVideoState();
  if (!room.localParticipant) return null;
  const participants = useParticipants();
  const localParticipant = room.localParticipant;

  return (
    <Container>
      <ScrollContainer>
        <ParticipantTracks
          participant={localParticipant}
          disableAudio={false}
          enableScreenShare={false}
        />

        {participants.map((participant, index) => (
          <ParticipantTracks
            key={index}
            participant={participant}
            disableAudio={false}
            enableScreenShare={false}
          />
        ))}
      </ScrollContainer>
    </Container>
  );
}

/*
 *  The object model for the Room object (found here: https://www.twilio.com/docs/video/migrating-1x-2x#object-model) shows
 *  that Participant objects have TrackPublications, and TrackPublication objects have Tracks.
 *
 *  The React components in this application follow the same pattern. This ParticipantTracks component renders Publications,
 *  and the Publication component renders Tracks.
 */
export function ParticipantTracks({
  participant,
  disableAudio,
  enableScreenShare,
  videoPriority,
}) {
  debugger;
  const { room } = useVideoState();
  const publications = usePublications(participant);
  const isLocal = participant === room.localParticipant;
  let filteredPublications;
  if (
    enableScreenShare &&
    publications.some((p) => p.trackName.includes("screen"))
  ) {
    filteredPublications = publications.filter(
      (p) => !p.trackName.includes("camera")
    );
  } else {
    filteredPublications = publications.filter(
      (p) => !p.trackName.includes("screen")
    );
  }

  return (
    <>
      {filteredPublications.map((publication) => (
        <Publication
          key={publication.kind}
          publication={publication}
          participant={participant}
          isLocal={isLocal}
          disableAudio={disableAudio}
          videoPriority={videoPriority}
        />
      ))}
    </>
  );
}

export function Publication({
  publication,
  isLocal,
  disableAudio,
  videoPriority,
}) {
  const track = useTrack(publication);
  if (!track) return null;
  switch (track.kind) {
    case "video":
      return (
        <VideoTrack
          track={track}
          priority={videoPriority}
          isLocal={track.name.includes("camera") && isLocal}
        />
      );
    case "audio":
      return disableAudio ? null : <AudioTrack track={track} />;
    default:
      return null;
  }
}

export function VideoTrack({ track, isLocal, priority }) {
  const ref = useRef(null);
  const mediaStreamTrack = useMediaStreamTrack(track);

  useEffect(() => {
    const el = ref.current;
    el.muted = true;
    if (track.setPriority && priority) {
      track.setPriority(priority);
    }
    track.attach(el);
    return () => {
      track.detach(el);
      if (track.setPriority && priority) {
        // Passing `null` to setPriority will set the track's priority to that which it was published with.
        track.setPriority(null);
      }
    };
  }, [track, priority]);

  // The local video track is mirrored if it is not facing the environment.
  const isFrontFacing =
    mediaStreamTrack?.getSettings().facingMode !== "environment";
  const style =
    isLocal && isFrontFacing ? { transform: "rotateY(180deg)" } : {};

  return (
    <video
      ref={ref}
      style={{ width: 900, maxHeight: 800, objectFit: "contain" }}
    />
  );
}

export function AudioTrack({ track }) {
  const { activeSinkId } = useVideoState();
  const audioEl = useRef();
  useEffect(() => {
    audioEl.current = track.attach();
    audioEl.current.setAttribute("data-cy-audio-track-name", track.name);
    document.body.appendChild(audioEl.current);
    return () => track.detach().forEach((el) => el.remove());
  }, [track]);

  useEffect(() => {
    if (!activeSinkId) return;
    if (audioEl && audioEl.current && audioEl.current.setSinkId)
      audioEl.current.setSinkId(activeSinkId);
  }, [activeSinkId]);
  return null;
}
