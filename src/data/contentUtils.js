const originalTextMap = new WeakMap();

export const applyTextOverrides = (root, overrides = []) => {
  if (!root || !Array.isArray(overrides) || overrides.length === 0) {
    return;
  }

  const normalizedOverrides = overrides
    .filter((item) => item && item.from)
    .map((item) => ({
      from: String(item.from),
      to: item.to == null ? "" : String(item.to),
    }));

  if (normalizedOverrides.length === 0) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (!node.parentElement) return NodeFilter.FILTER_REJECT;
      const tag = node.parentElement.tagName;
      if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let currentNode = walker.nextNode();
  while (currentNode) {
    const baseText =
      originalTextMap.get(currentNode) ?? currentNode.nodeValue ?? "";
    if (!originalTextMap.has(currentNode)) {
      originalTextMap.set(currentNode, baseText);
    }

    let updatedText = baseText;
    normalizedOverrides.forEach((override) => {
      updatedText = updatedText.split(override.from).join(override.to);
    });

    if (updatedText !== currentNode.nodeValue) {
      currentNode.nodeValue = updatedText;
    }

    currentNode = walker.nextNode();
  }
};
