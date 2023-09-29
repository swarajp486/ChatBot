import React from 'react'

function Message({ role, content }) {
  return (
    <div className={role=="user"?"message-right":"message-left"}>
      <div  >
        {content}
      </div>
    </div>
  );
}

export default Message