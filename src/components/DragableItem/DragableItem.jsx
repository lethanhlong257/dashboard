import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { CONSTANT } from '../../constants/globalConstant'
import Widget from '../widget/Widget'
import textContent from '../../data/textContent'
import contacts from '../../data/contacts.json'

const DragableItem = ({ id, widgetType, moveCard, findCard }) => {
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

  let widget
  switch (widgetType) {
    case CONSTANT.WIDGET_TYPE_DATATABLE:
      widget =
        <Widget
          data={contacts} widgetTitle='Datatable Widget' widgetType={CONSTANT.WIDGET_TYPE_DATATABLE}
        />
      break
    case CONSTANT.WIDGET_TYPE_TEXT:
      widget =
        <Widget
          data={textContent.content} widgetTitle='Text Widget' widgetType={CONSTANT.WIDGET_TYPE_TEXT}
        />
      break
    case CONSTANT.WIDGET_TODO_LIST:
      widget =
        <Widget
          data={''} widgetTitle='Todo List Widget' widgetType={CONSTANT.WIDGET_TODO_LIST}
        />
      break
    case CONSTANT.WIDGET_SIMPLE_CHART:
      widget =
        <Widget
          data={contacts} widgetTitle='Simple Chart Widget' widgetType={CONSTANT.WIDGET_SIMPLE_CHART}
        />
      break
    case CONSTANT.WIDGET_ADD:
      widget =
        <Widget
          widgetTitle='Add Widget' widgetType={CONSTANT.WIDGET_ADD}
        />
      break
    default:
      widget =
        <Widget
        widgetTitle='Add Widget' widgetType={CONSTANT.WIDGET_ADD}
        />
      break
  }

  return (
    <div ref={node => drag(drop(node))} style={{ opacity: opacity }}>
      {widget}
    </div>
  )

}

export default DragableItem
