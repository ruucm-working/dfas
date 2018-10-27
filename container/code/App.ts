import { Data, animate, Override, Animatable } from 'framer'
import { log } from 'ruucm-util'

const data = Data({
  itemAreaTop: Animatable(129),
  itemAreaWidth: Animatable(335),
  itemAreaHeight: Animatable(409),
  itemAreaRadius: Animatable('20px'),
  itemDescBottom: Animatable(-333),

  closeBtnOpacity: Animatable(0),
})

export const ItemArea: Override = () => {
  return {
    top: data.itemAreaTop,
    width: data.itemAreaWidth,
    height: data.itemAreaHeight,
    radius: data.itemAreaRadius,
  }
}

export const ItemImg: Override = () => {
  return {
    originY: 0, // animation origin
    onMouseDown() {
      animate.ease(data.itemAreaWidth, 320)
    },
    onTap() {
      log('onTap')
      data.closeBtnOpacity.set(0.99)
      animate.ease(data.itemAreaTop, 0)
      animate.ease(data.itemAreaWidth, 375)
      animate.ease(data.itemAreaHeight, 667)
      animate.ease(data.itemAreaRadius, '0px')
    },
  }
}

export const ItemDesc: Override = () => {
  return {
    originY: 0, // animation origin
    bottom: data.itemDescBottom,
  }
}

export const CloseBtn: Override = () => {
  return {
    opacity: data.closeBtnOpacity,

    onTap() {
      data.closeBtnOpacity.set(0)

      animate.ease(data.itemAreaTop, 129)
      animate.ease(data.itemAreaWidth, 335)
      animate.ease(data.itemAreaHeight, 409)
      animate.ease(data.itemAreaRadius, '20px')
    },
  }
}
