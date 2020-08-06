import React from "react";
import { FormControl, MenuItem, Typography, Select } from "@material-ui/core";
import { useVideoState } from "data/Video/Context";
import { useAudioOutputDevices } from "../deviceHooks/deviceHooks";
export default function AudioOutputList() {
  var _a;
  const audioOutputDevices = useAudioOutputDevices();
  const { activeSinkId } = useVideoState();
  const activeOutputLabel =
    (_a = audioOutputDevices.find(
      (device) => device.deviceId === activeSinkId
    )) === null || _a === void 0
      ? void 0
      : _a.label;
  return (
    <div className="inputSelect">
      {audioOutputDevices.length > 1 ? (
        <FormControl fullWidth>
          <Typography variant="h6">Audio Output:</Typography>
          <Select
            onChange={(e) => {
              //setActiveSinkId(e.target.value);
            }}
            value={activeSinkId}
          >
            {audioOutputDevices.map((device) => (
              <MenuItem value={device.deviceId} key={device.deviceId}>
                {device.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <>
          <Typography variant="h6">Audio Output:</Typography>
          <Typography>
            {activeOutputLabel || "System Default Audio Output"}
          </Typography>
        </>
      )}
    </div>
  );
}
