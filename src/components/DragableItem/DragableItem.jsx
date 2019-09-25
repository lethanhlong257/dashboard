import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { connect } from 'react-redux'
import {CONSTANT} from '../../constants/globalConstant'
import TextWidget from '../TextWidget/TextWidget'

const DragableItem = ( {id, widgetType, moveCard, findCard }) => {
  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag({
    item: { type: CONSTANT.CARD, id, originalIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [, drop] = useDrop({
    accept: CONSTANT.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id)
        moveCard(draggedId, overIndex)
      }
    },
  })

  const opacity = isDragging ? 0 : 1

  switch (widgetType) {
    case CONSTANT.TEXT:
      return (
        <div ref={node => drag(drop(node))} style={{opacity: opacity}}>
          <TextWidget />
        </div>
      )
  
    default:
      return (
        <div ref={node => drag(drop(node))} style={{opacity: opacity}}>
          <TextWidget />
        </div>
      )
  }

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DragableItem)
