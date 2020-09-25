export const addInput = (val) => {
    return {
      type: 'ADDINPUT',
      payload: val
    }
  }

export const setInput = (val) => {
    return {
      type: 'SETINPUT',
      payload: val
    }
  }