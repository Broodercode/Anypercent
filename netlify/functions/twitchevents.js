exports.handler = async (event) => {
   
    const {headers = []} = event;

    const type = headers['twitch-eventsub-message-type'] || 'no type';
    const eventType = headers['twitch-eventsub-subscription-type']

    console.log({headers: event.headers, body: event.body})
    if (type !== 'notification' || eventType !== 'channel.subscribe') {
        return {statusCode: 400, body: event.body}
    }

  
    const { event: twitchEvent} = JSON.parse(event.body)
    const user = twitchEvent.user_name;
    
    // console.log(`${user} just subscribed`)
    return {
        
        statusCode: 200,
        body: 'Test Returned omfg'
        
    }
  
}

