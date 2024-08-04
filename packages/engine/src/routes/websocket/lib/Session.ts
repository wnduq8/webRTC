import { v4 as uuidv4 } from 'uuid'
import WebSocket from 'ws'
import { ReceiveAction } from './actions/receive'
import actionCreators from './actions/send'
class Session {
  private id: string

  constructor(private socket: WebSocket) {
    this.id = uuidv4()
  }

  getId() {
    return this.id
  }

  handle(action: ReceiveAction) {
    switch (action.type) {
      case 'getId': {
        break
      }
      case 'reuseId': {
        break
      }
    }
  }

  sendJSON(data: any) {
    this.socket.send(JSON.stringify(data))
  }

  informConnected() {
    actionCreators.connected(this.id, '')
  }

  handleGetId() {
    this.socket.send
  }
}

export default Session
