import React, {useState} from 'react';
import {ButtonBase, Typography} from "@mui/material";
import PropTypes from "prop-types";
import ProfileBadge from "../ProfileBadge/ProfileBadge";
import styles from './ChatListItem.module.css';
import timeSince from "../../Util/TimeFormater";

function ChatItemList({name, active, lastMessageText, lastMessageTime, onClick}) {
  const [selected, setSelected] = useState(false);

  function onContainerClick() {
    setSelected(!selected);

    if (onClick !== undefined) {
      onClick();
    }
  }

  return (
    <ButtonBase data-testid="ButtonBase" style={{background: selected ? "#ECF3FF" : "#FFFFFF", padding: "5px", borderRadius: "5px"}}
                className={styles.container}
                onClick={() => onContainerClick()}>
      <div className={styles.profileBadgeContainer}>
        <ProfileBadge active={active} name={name}/>
      </div>
      <div className={styles.textContainer}>
        <div>
          <Typography sx={{
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "28px",
          }} className={styles.headerText}>{name}</Typography>
        </div>
        <div className={styles.subText}>
          <Typography color="#959595" variant="subtitle2" lineHeight="normal">{lastMessageText}</Typography>
          <Typography color="#959595" variant="subtitle2"
                      lineHeight="normal">• {timeSince(lastMessageTime)}</Typography>
        </div>
      </div>
    </ButtonBase>)
}

ChatItemList.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  lastMessageText: PropTypes.string.isRequired,
  lastMessageTime: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChatItemList;