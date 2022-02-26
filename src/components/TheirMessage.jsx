const TheirMessage = ({ lastMessagge, message }) => {

    const isFirstMessaggeByUser = !lastMessagge || lastMessagge.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            { isFirstMessaggeByUser && (
                <div
                className="message-avatar"
                style={{ backgroundImage: `url(${ message?.sender?.avatar })` }}

                />
            ) }
            {
                message?.attachments?.length > 0
                ? (
                    <img 
                    src={ message.attachments[0].file }
                    alt="message-attachments"
                    className="message-image"
                    style={{ marginLeft: isFirstMessaggeByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC',marginLeft: isFirstMessaggeByUser ? '4px' : '48px' }}>
                    { message.text }
                </div>
                )
            }
        </div>
    )

};

export default TheirMessage;
