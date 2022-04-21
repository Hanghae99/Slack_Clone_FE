import React from 'react';
import styled from 'styled-components';

const ChatItem = (props) => {

  const {message, username} = props;

  return (
    <React.Fragment>
          <ChatItemContainer>
            <div className='chat_profile'>
              <button>img</button>
              {/* <img src={userImage} alt=''/> */}
            </div>
            <div className='chat_text' id="text">
              <div className='chat_info'>
                <span className='chat_user'>{username}</span>
                {/* <span className='chat_time'>{time}</span> */}
                {/* {new Date(time?.toDate()).toUTCString()} */}
              </div>
              <div className='chat_content'>{message}</div>
            </div>
          </ChatItemContainer>
    </React.Fragment>
  );
}

const ChatItemContainer = styled.div`
  display: flex;
  // align-items: center;
  padding: 8px 20px;
  // padding: 20px;
  .chat_profile {
    margin-right: 8px;
    button {
      height: 36px;
      width: 36px;
    }
    img {
      height: 36px;
      width: 36px;
      border-radius: 8px;
    }
  }
  .chat_text {
    display: flex;
    flex-direction: column;
    // padding-left: 10px;

    .chat_info {
      .chat_user {
        font-weight: 700;
        font-size: 15px;
        margin-right: 10px;
      }
      .chat_time {
        font-size: 12px;
        color: gray;
        // font-weight: 300;
      }
    }

    .chat_content: {
      // margin-bottom: 4px;
      font-size: 15px;
    }
    
  }
`;

export default ChatItem;