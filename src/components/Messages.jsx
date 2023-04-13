import React from "react";


const Messages = ({user, messages}) => {

    function renderMessage(message) {
    const {id, member, text, time} = message;
    const personalMessage = member.id === user.id;
    const className = personalMessage ? "personal_message" : "members_message";
      return (
        <li style={{borderColor: member.clientData.color}} className={className} key={id}>
          <div className="sender">
            <p style={{color: member.clientData.color}}>{member.clientData.username}</p>
          </div>
          <div className="senders_text">
            <p>{text}</p>
          </div>
          <div className="senders_text_time">
            <p>{time}</p>
          </div>
        </li>
      )
    }

    return (

        <div className="messages">
            <ul>
                {messages.map((m, i) => renderMessage(m))}
            </ul>
        </div>
    );
};

export default Messages;