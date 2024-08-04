import { FastifyPluginAsync } from 'fastify'
import Session from './lib/Session'
import { isReceiveAction } from './lib/actions/receive'

const websocket: FastifyPluginAsync = async (fastify: any) => {
  fastify.get('/', { websocket: true }, (socket: any) => {
    const session = new Session(socket)
    console.log(session)

    socket.on('message', (message: string) => {
      try {
        const data = JSON.parse(message.toString())
        if (!isReceiveAction(data)) return
        console.log(data)
        // logic
      } catch (e) {}
    })
  })
}

export default websocket
