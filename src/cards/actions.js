const flip = id => ({
  type: 'FLIP',
  id
});

const hover = (id, isHover) => ({
  type: 'HOVER',
  id,
  isHover
});

const next = id => ({
  type: 'NEXT',
  id
});

const actions = { flip, hover, next };

export default actions;
