import { Data, Override } from 'framer'
import { log } from 'ruucm-util'

const data = Data({
  playing: false,
})

export const Button: Override = () => {
  return {
    onTap() {
      data.playing = !data.playing
    },
  }
}

export const Rect: Override = () => {
  return {
    playing: data.playing,
  }
}
