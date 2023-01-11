interface PointType {
  node: Node | null;
  offset: number;
}

interface Props {
  el: Node;
  index: number;
  offset: number;
  range?: Range;
}

function rangeAtIndex({ el, index, offset, range }: Props) {
  const doc = el.ownerDocument;

  let start: PointType = { node: null, offset: 0 };
  let end: PointType = { node: null, offset: 0 };
  let node: Node | null | undefined = null;
  let val: string | null = null;
  let len = 0;

  if (!range && doc) range = doc.createRange();

  const iterator = doc?.createNodeIterator(el, NodeFilter.SHOW_TEXT, null);

  while ((node = iterator?.nextNode())) {
    val = node.nodeValue;
    len = val?.length ?? 0;

    if (!start.node && len > index) {
      start.node = node;
      start.offset = index;
    }

    if (!end.node && len >= offset) {
      end.node = node;
      end.offset = offset;
    }

    index -= len;
    offset -= len;
  }

  // update the range with the start and end offsets
  if (start.node) range?.setStart(start.node, start.offset);
  if (end.node) range?.setEnd(end.node, end.offset);

  return range;
}

export { rangeAtIndex };
