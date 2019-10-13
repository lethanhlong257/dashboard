import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { Row, Col } from 'react-bootstrap'
import { CONSTANT } from '../../constants/globalConstant'
import DragableItem from '../DragableItem/DragableItem'

let widgets = [
  {
    id: 1, widgetType: CONSTANT.WIDGET_TYPE_DATATABLE
  },
  {
    id: 2, widgetType: CONSTANT.WIDGET_TYPE_TEXT
  },
  {
    id: 3, widgetType: CONSTANT.WIDGET_TODO_LIST
  },
  {
    id: 4, widgetType: CONSTANT.WIDGET_SIMPLE_CHART
  },
  {
    id: 5, widgetType: CONSTANT.WIDGET_ADD
  }
]

const DragableContainer = () => {
  const [cards, setCards] = useState(widgets)
  const [, drop] = useDrop({ accept: CONSTANT.CARD })

  const findCard = id => {
    const card = cards.filter(c => checkID(c, id))[0]
    return {
      card,
      index: cards.indexOf(card),
    }
  }

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id)
    setCards(
      update(cards, {
        $splice: [[index, 1], [atIndex, 0, card]],
      }),
    )
  }

  return (
    <Row ref={drop}>
      {
        cards.map(widget => {
          return (
            <Col md={4} sm={6} key={widget.id}>
              <DragableItem moveCard={moveCard} findCard={findCard} id={widget.id} widgetType={widget.widgetType} />
            </Col>
          )
        })
      }
    </Row>
  )
}

function checkID(object, id) {
  return object.id === id;
}

export default DragableContainer