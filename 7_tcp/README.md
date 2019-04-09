# TCP

## Agenda

* Streams
  * `EventEmitter` underneath `on`
  * Readable streams
    * can be read from
    * has data and end events
  * Writable streams
    * can be written to
    * has write and end methods
  * duplex  streams
    * is a Readable and Writable stream
    * EXAMPLE: TCP client socket
  * `pipe`
* Handshake
  * SYN
  * SYN-ACK
  * ACK
* net
  * createServer
  * createConnection
