import React, { useState, useRef, useCallback } from "react";
import AboutDialog from "../AboutDialog/AboutDialog";
import IconButton from "@material-ui/core/IconButton";
import MenuContainer from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/MoreVert";
import SettingsDialog from "../SettingsDialog/SettingsDialog";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useVideoState } from "data/Video/Context";
import useVideoContext from "../../../hooks/useVideoContext/useVideoContext";
export default function Menu() {
  const { user, signOut } = useVideoState();
  const { room, localTracks } = useVideoContext();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const anchorRef = useRef(null);

  /*
  const handleSignOut = useCallback(() => {
    var _a;
    (_a = room.disconnect) === null || _a === void 0 ? void 0 : _a.call(room);
    localTracks.forEach(track => track.stop());
    signOut === null || signOut === void 0 ? void 0 : signOut();
  }, [room.disconnect, localTracks, signOut]);
*/

  return (
    <div ref={anchorRef}>
      <IconButton
        color="inherit"
        onClick={() => setMenuOpen((state) => !state)}
      >
        {user ? <UserAvatar user={user} /> : <MoreIcon />}
      </IconButton>
      <MenuContainer
        open={menuOpen}
        onClose={() => setMenuOpen((state) => !state)}
        anchorEl={anchorRef.current}
      >
        {(user === null || user === void 0 ? void 0 : user.displayName) && (
          <MenuItem disabled>{user.displayName}</MenuItem>
        )}
        <MenuItem onClick={() => setAboutOpen(true)}>About</MenuItem>
        <MenuItem onClick={() => setSettingsOpen(true)}>Settings</MenuItem>
        {user && <MenuItem onClick={handleSignOut}>Logout</MenuItem>}
      </MenuContainer>
      <AboutDialog
        open={aboutOpen}
        onClose={() => {
          setAboutOpen(false);
          setMenuOpen(false);
        }}
      />
      <SettingsDialog
        open={settingsOpen}
        onClose={() => {
          setSettingsOpen(false);
          setMenuOpen(false);
        }}
      />
    </div>
  );
}
