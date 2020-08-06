import React from "react";

const { connect, createLocalTracks } = require("twilio-video");
const { createLocalVideoTrack } = require("twilio-video");

import isPlainObject from "is-plain-object";
export const isMobile = (() => {
  if (
    typeof navigator === "undefined" ||
    typeof navigator.userAgent !== "string"
  ) {
    return false;
  }
  return /Mobile/.test(navigator.userAgent);
})();

export default function LocalVideoPreview() {
  const ref = React.useRef();

  React.useEffect(() => {
    // Option 1

    ensureMediaPermissions();

    (async () => {
      const headers = new window.Headers();
      const endpoint = "https://rodriguezlab.ngrok.io/tokens";
      const params = new window.URLSearchParams({
        identity: "roberto-" + parseInt(Math.random() * 1000),
        roomName: "room",
      });

      const TOKEN = await fetch(`${endpoint}?${params}`, {
        headers,
      }).then((res) => res.text());

      let myTracks;
      createLocalTracks({
        audio: true,
        video: { width: 220 },
      })
        .then((localTracks) => {
          myTracks = localTracks;

          return connect(TOKEN, {
            name: "room",
            tracks: localTracks,
          });
        })
        .then((room) => {
          room.participants.forEach((participant) => {
            console.log(`Participant "${participant.identity}" connected`);

            participant.tracks.forEach((publication) => {
              if (publication.isSubscribed) {
                const track = publication.track;
                ref.current.appendChild(track.attach());
              }
            });

            participant.on("trackSubscribed", (track) => {
              ref.current.appendChild(track.attach());
            });
          });

          room.on("participantConnected", (participant) => {
            console.log(`Participant "${participant.identity}" connected`);

            participant.tracks.forEach((publication) => {
              if (publication.isSubscribed) {
                const track = publication.track;
                ref.current.appendChild(track.attach());
              }
            });

            participant.on("trackSubscribed", (track) => {
              ref.current.appendChild(track.attach());
            });
          });
        });
    })();
  }, []);

  return (
    <div
      style={{ zIndex: 1000000, position: "fixed", top: 10, left: 10 }}
      ref={ref}
    ></div>
  );
}

// This function ensures that the user has granted the browser permission to use audio and video
// devices. If permission has not been granted, it will cause the browser to ask for permission
// for audio and video at the same time (as opposed to separate requests).
export function ensureMediaPermissions() {
  return navigator.mediaDevices
    .enumerateDevices()
    .then((devices) =>
      devices.every((device) => !(device.deviceId && device.label))
    )
    .then((shouldAskForMediaPermissions) => {
      if (shouldAskForMediaPermissions) {
        return navigator.mediaDevices
          .getUserMedia({ audio: true, video: true })
          .then((mediaStream) =>
            mediaStream.getTracks().forEach((track) => track.stop())
          );
      }
    });
}
// Recursively removes any object keys with a value of undefined
export function removeUndefineds(obj) {
  if (!isPlainObject(obj)) return obj;
  const target = {};
  for (const key in obj) {
    const val = obj[key];
    if (typeof val !== "undefined") {
      target[key] = removeUndefineds(val);
    }
  }
  return target;
}
