// Условный рендеринг 2
import React from "react";

const MailBox = ({ unreadMessages }) => {
    return (
        <>
        <div className="mailbox">
            {unreadMessages.length > 0 && (
                <div><span>{unreadMessages.length}</span> messages</div>
            )}
        </div>
        </>
    )
}

export default MailBox