import React from 'react';
import { connect } from 'react-redux';
import { updateRow } from '../actions';

const Board = ({ board, updateRow }) => {
  let columnArr = board.map(function (item, index) {
    return (
      <div key={index} className='column'>
        <Circle item={item} indexRow={index} updateRow={updateRow} />
      </div>
    )
  })
  return (
    <div className='board'>
      {columnArr}
    </div>
  )
}

function Circle ({ item, indexRow, updateRow }) {
  let circlesArr = item.map(function (item, index) {
    let classVal = 'circle'
    if (item === 'y') classVal = 'yellow'
    if (item === 'r') classVal = 'red'
    // checks for winner coordinates
    // if (appState.winnerPosition) {
    //   appState.winnerPosition.forEach(function (position) {
    //     if (position[0] === indexRow && position[1] === index) classVal += ' winner'
    //   })
    // }
    return (
      <div key={index} className='piece'>
        <div onClick={() => { updateRow(indexRow) }} className={classVal} />
      </div>
    )
  })
  return circlesArr
}

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRow: (row) => dispatch(updateRow(row))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);