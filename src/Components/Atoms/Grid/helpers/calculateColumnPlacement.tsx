const calculateColumnPlacement: GridCalculateColumnPlacement = (childIndex, columnsCount) => {
  if (columnsCount === 1) {
    return 1;
  }
  if (childIndex % columnsCount) {
    return childIndex % columnsCount;
  }
  return columnsCount;
};

export default calculateColumnPlacement;
