export default class FHIR {
  #config
  #baseURL
  #clientID
  #publicKey

  constructor (config) {
    this.#config = config
    if ('baseURL' in config) this.#baseURL = new URL(config.baseURL)
    if ('clientID' in config) this.#clientID = config.clientID
    if ('publicKey' in config) this.#publicKey = config.publicKey
  }
}
