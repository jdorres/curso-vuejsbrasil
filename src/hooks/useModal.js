import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

/**
 * Hook que controla as chamadas a criação de modals
 * Utiliza o tiny-emitter para disparar eventos de criação de modal 
 * @returns 
 */
export default function useModal () {
    function open (payload = {}) {
        bus.emit(EVENT_NAME, { status: true, ...payload })
    }

    function close (payload = {}) {
        bus.emit(EVENT_NAME, { status: false, ...payload })
    }

    function listen (fn) {
        bus.on(EVENT_NAME, fn)
    }

    function off (fn) {
        bus.off(EVENT_NAME, fn)
    }

    return { open, close, listen, off }
}