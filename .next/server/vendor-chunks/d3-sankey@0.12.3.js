/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-sankey@0.12.3";
exports.ids = ["vendor-chunks/d3-sankey@0.12.3"];
exports.modules = {

/***/ "./node_modules/.pnpm/d3-sankey@0.12.3/node_modules/d3-sankey/dist/d3-sankey.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-sankey@0.12.3/node_modules/d3-sankey/dist/d3-sankey.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("// https://github.com/d3/d3-sankey v0.12.3 Copyright 2019 Mike Bostock\n(function (global, factory) {\n true ? factory(exports, __webpack_require__(/*! d3-array */ \"./node_modules/.pnpm/d3-array@2.12.1/node_modules/d3-array/dist/d3-array.js\"), __webpack_require__(/*! d3-shape */ \"./node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/dist/d3-shape.js\")) :\n0;\n}(this, function (exports, d3Array, d3Shape) { 'use strict';\n\nfunction targetDepth(d) {\n  return d.target.depth;\n}\n\nfunction left(node) {\n  return node.depth;\n}\n\nfunction right(node, n) {\n  return n - 1 - node.height;\n}\n\nfunction justify(node, n) {\n  return node.sourceLinks.length ? node.depth : n - 1;\n}\n\nfunction center(node) {\n  return node.targetLinks.length ? node.depth\n      : node.sourceLinks.length ? d3Array.min(node.sourceLinks, targetDepth) - 1\n      : 0;\n}\n\nfunction constant(x) {\n  return function() {\n    return x;\n  };\n}\n\nfunction ascendingSourceBreadth(a, b) {\n  return ascendingBreadth(a.source, b.source) || a.index - b.index;\n}\n\nfunction ascendingTargetBreadth(a, b) {\n  return ascendingBreadth(a.target, b.target) || a.index - b.index;\n}\n\nfunction ascendingBreadth(a, b) {\n  return a.y0 - b.y0;\n}\n\nfunction value(d) {\n  return d.value;\n}\n\nfunction defaultId(d) {\n  return d.index;\n}\n\nfunction defaultNodes(graph) {\n  return graph.nodes;\n}\n\nfunction defaultLinks(graph) {\n  return graph.links;\n}\n\nfunction find(nodeById, id) {\n  const node = nodeById.get(id);\n  if (!node) throw new Error(\"missing: \" + id);\n  return node;\n}\n\nfunction computeLinkBreadths({nodes}) {\n  for (const node of nodes) {\n    let y0 = node.y0;\n    let y1 = y0;\n    for (const link of node.sourceLinks) {\n      link.y0 = y0 + link.width / 2;\n      y0 += link.width;\n    }\n    for (const link of node.targetLinks) {\n      link.y1 = y1 + link.width / 2;\n      y1 += link.width;\n    }\n  }\n}\n\nfunction Sankey() {\n  let x0 = 0, y0 = 0, x1 = 1, y1 = 1; // extent\n  let dx = 24; // nodeWidth\n  let dy = 8, py; // nodePadding\n  let id = defaultId;\n  let align = justify;\n  let sort;\n  let linkSort;\n  let nodes = defaultNodes;\n  let links = defaultLinks;\n  let iterations = 6;\n\n  function sankey() {\n    const graph = {nodes: nodes.apply(null, arguments), links: links.apply(null, arguments)};\n    computeNodeLinks(graph);\n    computeNodeValues(graph);\n    computeNodeDepths(graph);\n    computeNodeHeights(graph);\n    computeNodeBreadths(graph);\n    computeLinkBreadths(graph);\n    return graph;\n  }\n\n  sankey.update = function(graph) {\n    computeLinkBreadths(graph);\n    return graph;\n  };\n\n  sankey.nodeId = function(_) {\n    return arguments.length ? (id = typeof _ === \"function\" ? _ : constant(_), sankey) : id;\n  };\n\n  sankey.nodeAlign = function(_) {\n    return arguments.length ? (align = typeof _ === \"function\" ? _ : constant(_), sankey) : align;\n  };\n\n  sankey.nodeSort = function(_) {\n    return arguments.length ? (sort = _, sankey) : sort;\n  };\n\n  sankey.nodeWidth = function(_) {\n    return arguments.length ? (dx = +_, sankey) : dx;\n  };\n\n  sankey.nodePadding = function(_) {\n    return arguments.length ? (dy = py = +_, sankey) : dy;\n  };\n\n  sankey.nodes = function(_) {\n    return arguments.length ? (nodes = typeof _ === \"function\" ? _ : constant(_), sankey) : nodes;\n  };\n\n  sankey.links = function(_) {\n    return arguments.length ? (links = typeof _ === \"function\" ? _ : constant(_), sankey) : links;\n  };\n\n  sankey.linkSort = function(_) {\n    return arguments.length ? (linkSort = _, sankey) : linkSort;\n  };\n\n  sankey.size = function(_) {\n    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];\n  };\n\n  sankey.extent = function(_) {\n    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];\n  };\n\n  sankey.iterations = function(_) {\n    return arguments.length ? (iterations = +_, sankey) : iterations;\n  };\n\n  function computeNodeLinks({nodes, links}) {\n    for (const [i, node] of nodes.entries()) {\n      node.index = i;\n      node.sourceLinks = [];\n      node.targetLinks = [];\n    }\n    const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));\n    for (const [i, link] of links.entries()) {\n      link.index = i;\n      let {source, target} = link;\n      if (typeof source !== \"object\") source = link.source = find(nodeById, source);\n      if (typeof target !== \"object\") target = link.target = find(nodeById, target);\n      source.sourceLinks.push(link);\n      target.targetLinks.push(link);\n    }\n    if (linkSort != null) {\n      for (const {sourceLinks, targetLinks} of nodes) {\n        sourceLinks.sort(linkSort);\n        targetLinks.sort(linkSort);\n      }\n    }\n  }\n\n  function computeNodeValues({nodes}) {\n    for (const node of nodes) {\n      node.value = node.fixedValue === undefined\n          ? Math.max(d3Array.sum(node.sourceLinks, value), d3Array.sum(node.targetLinks, value))\n          : node.fixedValue;\n    }\n  }\n\n  function computeNodeDepths({nodes}) {\n    const n = nodes.length;\n    let current = new Set(nodes);\n    let next = new Set;\n    let x = 0;\n    while (current.size) {\n      for (const node of current) {\n        node.depth = x;\n        for (const {target} of node.sourceLinks) {\n          next.add(target);\n        }\n      }\n      if (++x > n) throw new Error(\"circular link\");\n      current = next;\n      next = new Set;\n    }\n  }\n\n  function computeNodeHeights({nodes}) {\n    const n = nodes.length;\n    let current = new Set(nodes);\n    let next = new Set;\n    let x = 0;\n    while (current.size) {\n      for (const node of current) {\n        node.height = x;\n        for (const {source} of node.targetLinks) {\n          next.add(source);\n        }\n      }\n      if (++x > n) throw new Error(\"circular link\");\n      current = next;\n      next = new Set;\n    }\n  }\n\n  function computeNodeLayers({nodes}) {\n    const x = d3Array.max(nodes, d => d.depth) + 1;\n    const kx = (x1 - x0 - dx) / (x - 1);\n    const columns = new Array(x);\n    for (const node of nodes) {\n      const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));\n      node.layer = i;\n      node.x0 = x0 + i * kx;\n      node.x1 = node.x0 + dx;\n      if (columns[i]) columns[i].push(node);\n      else columns[i] = [node];\n    }\n    if (sort) for (const column of columns) {\n      column.sort(sort);\n    }\n    return columns;\n  }\n\n  function initializeNodeBreadths(columns) {\n    const ky = d3Array.min(columns, c => (y1 - y0 - (c.length - 1) * py) / d3Array.sum(c, value));\n    for (const nodes of columns) {\n      let y = y0;\n      for (const node of nodes) {\n        node.y0 = y;\n        node.y1 = y + node.value * ky;\n        y = node.y1 + py;\n        for (const link of node.sourceLinks) {\n          link.width = link.value * ky;\n        }\n      }\n      y = (y1 - y + py) / (nodes.length + 1);\n      for (let i = 0; i < nodes.length; ++i) {\n        const node = nodes[i];\n        node.y0 += y * (i + 1);\n        node.y1 += y * (i + 1);\n      }\n      reorderLinks(nodes);\n    }\n  }\n\n  function computeNodeBreadths(graph) {\n    const columns = computeNodeLayers(graph);\n    py = Math.min(dy, (y1 - y0) / (d3Array.max(columns, c => c.length) - 1));\n    initializeNodeBreadths(columns);\n    for (let i = 0; i < iterations; ++i) {\n      const alpha = Math.pow(0.99, i);\n      const beta = Math.max(1 - alpha, (i + 1) / iterations);\n      relaxRightToLeft(columns, alpha, beta);\n      relaxLeftToRight(columns, alpha, beta);\n    }\n  }\n\n  // Reposition each node based on its incoming (target) links.\n  function relaxLeftToRight(columns, alpha, beta) {\n    for (let i = 1, n = columns.length; i < n; ++i) {\n      const column = columns[i];\n      for (const target of column) {\n        let y = 0;\n        let w = 0;\n        for (const {source, value} of target.targetLinks) {\n          let v = value * (target.layer - source.layer);\n          y += targetTop(source, target) * v;\n          w += v;\n        }\n        if (!(w > 0)) continue;\n        let dy = (y / w - target.y0) * alpha;\n        target.y0 += dy;\n        target.y1 += dy;\n        reorderNodeLinks(target);\n      }\n      if (sort === undefined) column.sort(ascendingBreadth);\n      resolveCollisions(column, beta);\n    }\n  }\n\n  // Reposition each node based on its outgoing (source) links.\n  function relaxRightToLeft(columns, alpha, beta) {\n    for (let n = columns.length, i = n - 2; i >= 0; --i) {\n      const column = columns[i];\n      for (const source of column) {\n        let y = 0;\n        let w = 0;\n        for (const {target, value} of source.sourceLinks) {\n          let v = value * (target.layer - source.layer);\n          y += sourceTop(source, target) * v;\n          w += v;\n        }\n        if (!(w > 0)) continue;\n        let dy = (y / w - source.y0) * alpha;\n        source.y0 += dy;\n        source.y1 += dy;\n        reorderNodeLinks(source);\n      }\n      if (sort === undefined) column.sort(ascendingBreadth);\n      resolveCollisions(column, beta);\n    }\n  }\n\n  function resolveCollisions(nodes, alpha) {\n    const i = nodes.length >> 1;\n    const subject = nodes[i];\n    resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);\n    resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);\n    resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);\n    resolveCollisionsTopToBottom(nodes, y0, 0, alpha);\n  }\n\n  // Push any overlapping nodes down.\n  function resolveCollisionsTopToBottom(nodes, y, i, alpha) {\n    for (; i < nodes.length; ++i) {\n      const node = nodes[i];\n      const dy = (y - node.y0) * alpha;\n      if (dy > 1e-6) node.y0 += dy, node.y1 += dy;\n      y = node.y1 + py;\n    }\n  }\n\n  // Push any overlapping nodes up.\n  function resolveCollisionsBottomToTop(nodes, y, i, alpha) {\n    for (; i >= 0; --i) {\n      const node = nodes[i];\n      const dy = (node.y1 - y) * alpha;\n      if (dy > 1e-6) node.y0 -= dy, node.y1 -= dy;\n      y = node.y0 - py;\n    }\n  }\n\n  function reorderNodeLinks({sourceLinks, targetLinks}) {\n    if (linkSort === undefined) {\n      for (const {source: {sourceLinks}} of targetLinks) {\n        sourceLinks.sort(ascendingTargetBreadth);\n      }\n      for (const {target: {targetLinks}} of sourceLinks) {\n        targetLinks.sort(ascendingSourceBreadth);\n      }\n    }\n  }\n\n  function reorderLinks(nodes) {\n    if (linkSort === undefined) {\n      for (const {sourceLinks, targetLinks} of nodes) {\n        sourceLinks.sort(ascendingTargetBreadth);\n        targetLinks.sort(ascendingSourceBreadth);\n      }\n    }\n  }\n\n  // Returns the target.y0 that would produce an ideal link from source to target.\n  function targetTop(source, target) {\n    let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;\n    for (const {target: node, width} of source.sourceLinks) {\n      if (node === target) break;\n      y += width + py;\n    }\n    for (const {source: node, width} of target.targetLinks) {\n      if (node === source) break;\n      y -= width;\n    }\n    return y;\n  }\n\n  // Returns the source.y0 that would produce an ideal link from source to target.\n  function sourceTop(source, target) {\n    let y = target.y0 - (target.targetLinks.length - 1) * py / 2;\n    for (const {source: node, width} of target.targetLinks) {\n      if (node === source) break;\n      y += width + py;\n    }\n    for (const {target: node, width} of source.sourceLinks) {\n      if (node === target) break;\n      y -= width;\n    }\n    return y;\n  }\n\n  return sankey;\n}\n\nfunction horizontalSource(d) {\n  return [d.source.x1, d.y0];\n}\n\nfunction horizontalTarget(d) {\n  return [d.target.x0, d.y1];\n}\n\nfunction sankeyLinkHorizontal() {\n  return d3Shape.linkHorizontal()\n      .source(horizontalSource)\n      .target(horizontalTarget);\n}\n\nexports.sankey = Sankey;\nexports.sankeyCenter = center;\nexports.sankeyJustify = justify;\nexports.sankeyLeft = left;\nexports.sankeyLinkHorizontal = sankeyLinkHorizontal;\nexports.sankeyRight = right;\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2Fua2V5QDAuMTIuMy9ub2RlX21vZHVsZXMvZDMtc2Fua2V5L2Rpc3QvZDMtc2Fua2V5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSxLQUE0RCxvQkFBb0IsbUJBQU8sQ0FBQyw2RkFBVSxHQUFHLG1CQUFPLENBQUMsNEZBQVU7QUFDdkgsQ0FDcUY7QUFDckYsQ0FBQyw4Q0FBOEM7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQSxrQkFBa0IsU0FBUyxjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQyxhQUFhOztBQUU1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNhbmtleUAwLjEyLjMvbm9kZV9tb2R1bGVzL2QzLXNhbmtleS9kaXN0L2QzLXNhbmtleS5qcz9hZDNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy1zYW5rZXkgdjAuMTIuMyBDb3B5cmlnaHQgMjAxOSBNaWtlIEJvc3RvY2tcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG50eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ2QzLWFycmF5JyksIHJlcXVpcmUoJ2QzLXNoYXBlJykpIDpcbnR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnZDMtYXJyYXknLCAnZDMtc2hhcGUnXSwgZmFjdG9yeSkgOlxuKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5kMyA9IGdsb2JhbC5kMyB8fCB7fSwgZ2xvYmFsLmQzLCBnbG9iYWwuZDMpKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIGQzQXJyYXksIGQzU2hhcGUpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiB0YXJnZXREZXB0aChkKSB7XG4gIHJldHVybiBkLnRhcmdldC5kZXB0aDtcbn1cblxuZnVuY3Rpb24gbGVmdChub2RlKSB7XG4gIHJldHVybiBub2RlLmRlcHRoO1xufVxuXG5mdW5jdGlvbiByaWdodChub2RlLCBuKSB7XG4gIHJldHVybiBuIC0gMSAtIG5vZGUuaGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBqdXN0aWZ5KG5vZGUsIG4pIHtcbiAgcmV0dXJuIG5vZGUuc291cmNlTGlua3MubGVuZ3RoID8gbm9kZS5kZXB0aCA6IG4gLSAxO1xufVxuXG5mdW5jdGlvbiBjZW50ZXIobm9kZSkge1xuICByZXR1cm4gbm9kZS50YXJnZXRMaW5rcy5sZW5ndGggPyBub2RlLmRlcHRoXG4gICAgICA6IG5vZGUuc291cmNlTGlua3MubGVuZ3RoID8gZDNBcnJheS5taW4obm9kZS5zb3VyY2VMaW5rcywgdGFyZ2V0RGVwdGgpIC0gMVxuICAgICAgOiAwO1xufVxuXG5mdW5jdGlvbiBjb25zdGFudCh4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nU291cmNlQnJlYWR0aChhLCBiKSB7XG4gIHJldHVybiBhc2NlbmRpbmdCcmVhZHRoKGEuc291cmNlLCBiLnNvdXJjZSkgfHwgYS5pbmRleCAtIGIuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ1RhcmdldEJyZWFkdGgoYSwgYikge1xuICByZXR1cm4gYXNjZW5kaW5nQnJlYWR0aChhLnRhcmdldCwgYi50YXJnZXQpIHx8IGEuaW5kZXggLSBiLmluZGV4O1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmdCcmVhZHRoKGEsIGIpIHtcbiAgcmV0dXJuIGEueTAgLSBiLnkwO1xufVxuXG5mdW5jdGlvbiB2YWx1ZShkKSB7XG4gIHJldHVybiBkLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SWQoZCkge1xuICByZXR1cm4gZC5pbmRleDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE5vZGVzKGdyYXBoKSB7XG4gIHJldHVybiBncmFwaC5ub2Rlcztcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExpbmtzKGdyYXBoKSB7XG4gIHJldHVybiBncmFwaC5saW5rcztcbn1cblxuZnVuY3Rpb24gZmluZChub2RlQnlJZCwgaWQpIHtcbiAgY29uc3Qgbm9kZSA9IG5vZGVCeUlkLmdldChpZCk7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZzogXCIgKyBpZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlTGlua0JyZWFkdGhzKHtub2Rlc30pIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbGV0IHkwID0gbm9kZS55MDtcbiAgICBsZXQgeTEgPSB5MDtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5zb3VyY2VMaW5rcykge1xuICAgICAgbGluay55MCA9IHkwICsgbGluay53aWR0aCAvIDI7XG4gICAgICB5MCArPSBsaW5rLndpZHRoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS50YXJnZXRMaW5rcykge1xuICAgICAgbGluay55MSA9IHkxICsgbGluay53aWR0aCAvIDI7XG4gICAgICB5MSArPSBsaW5rLndpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBTYW5rZXkoKSB7XG4gIGxldCB4MCA9IDAsIHkwID0gMCwgeDEgPSAxLCB5MSA9IDE7IC8vIGV4dGVudFxuICBsZXQgZHggPSAyNDsgLy8gbm9kZVdpZHRoXG4gIGxldCBkeSA9IDgsIHB5OyAvLyBub2RlUGFkZGluZ1xuICBsZXQgaWQgPSBkZWZhdWx0SWQ7XG4gIGxldCBhbGlnbiA9IGp1c3RpZnk7XG4gIGxldCBzb3J0O1xuICBsZXQgbGlua1NvcnQ7XG4gIGxldCBub2RlcyA9IGRlZmF1bHROb2RlcztcbiAgbGV0IGxpbmtzID0gZGVmYXVsdExpbmtzO1xuICBsZXQgaXRlcmF0aW9ucyA9IDY7XG5cbiAgZnVuY3Rpb24gc2Fua2V5KCkge1xuICAgIGNvbnN0IGdyYXBoID0ge25vZGVzOiBub2Rlcy5hcHBseShudWxsLCBhcmd1bWVudHMpLCBsaW5rczogbGlua3MuYXBwbHkobnVsbCwgYXJndW1lbnRzKX07XG4gICAgY29tcHV0ZU5vZGVMaW5rcyhncmFwaCk7XG4gICAgY29tcHV0ZU5vZGVWYWx1ZXMoZ3JhcGgpO1xuICAgIGNvbXB1dGVOb2RlRGVwdGhzKGdyYXBoKTtcbiAgICBjb21wdXRlTm9kZUhlaWdodHMoZ3JhcGgpO1xuICAgIGNvbXB1dGVOb2RlQnJlYWR0aHMoZ3JhcGgpO1xuICAgIGNvbXB1dGVMaW5rQnJlYWR0aHMoZ3JhcGgpO1xuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHNhbmtleS51cGRhdGUgPSBmdW5jdGlvbihncmFwaCkge1xuICAgIGNvbXB1dGVMaW5rQnJlYWR0aHMoZ3JhcGgpO1xuICAgIHJldHVybiBncmFwaDtcbiAgfTtcblxuICBzYW5rZXkubm9kZUlkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc2Fua2V5KSA6IGlkO1xuICB9O1xuXG4gIHNhbmtleS5ub2RlQWxpZ24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxpZ24gPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBzYW5rZXkpIDogYWxpZ247XG4gIH07XG5cbiAgc2Fua2V5Lm5vZGVTb3J0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnQgPSBfLCBzYW5rZXkpIDogc29ydDtcbiAgfTtcblxuICBzYW5rZXkubm9kZVdpZHRoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGR4ID0gK18sIHNhbmtleSkgOiBkeDtcbiAgfTtcblxuICBzYW5rZXkubm9kZVBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZHkgPSBweSA9ICtfLCBzYW5rZXkpIDogZHk7XG4gIH07XG5cbiAgc2Fua2V5Lm5vZGVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG5vZGVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc2Fua2V5KSA6IG5vZGVzO1xuICB9O1xuXG4gIHNhbmtleS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIHNhbmtleSkgOiBsaW5rcztcbiAgfTtcblxuICBzYW5rZXkubGlua1NvcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobGlua1NvcnQgPSBfLCBzYW5rZXkpIDogbGlua1NvcnQ7XG4gIH07XG5cbiAgc2Fua2V5LnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSB5MCA9IDAsIHgxID0gK19bMF0sIHkxID0gK19bMV0sIHNhbmtleSkgOiBbeDEgLSB4MCwgeTEgLSB5MF07XG4gIH07XG5cbiAgc2Fua2V5LmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9ICtfWzBdWzBdLCB4MSA9ICtfWzFdWzBdLCB5MCA9ICtfWzBdWzFdLCB5MSA9ICtfWzFdWzFdLCBzYW5rZXkpIDogW1t4MCwgeTBdLCBbeDEsIHkxXV07XG4gIH07XG5cbiAgc2Fua2V5Lml0ZXJhdGlvbnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaXRlcmF0aW9ucyA9ICtfLCBzYW5rZXkpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmdW5jdGlvbiBjb21wdXRlTm9kZUxpbmtzKHtub2RlcywgbGlua3N9KSB7XG4gICAgZm9yIChjb25zdCBbaSwgbm9kZV0gb2Ygbm9kZXMuZW50cmllcygpKSB7XG4gICAgICBub2RlLmluZGV4ID0gaTtcbiAgICAgIG5vZGUuc291cmNlTGlua3MgPSBbXTtcbiAgICAgIG5vZGUudGFyZ2V0TGlua3MgPSBbXTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKTtcbiAgICBmb3IgKGNvbnN0IFtpLCBsaW5rXSBvZiBsaW5rcy5lbnRyaWVzKCkpIHtcbiAgICAgIGxpbmsuaW5kZXggPSBpO1xuICAgICAgbGV0IHtzb3VyY2UsIHRhcmdldH0gPSBsaW5rO1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpIHNvdXJjZSA9IGxpbmsuc291cmNlID0gZmluZChub2RlQnlJZCwgc291cmNlKTtcbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB0YXJnZXQgPSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIHRhcmdldCk7XG4gICAgICBzb3VyY2Uuc291cmNlTGlua3MucHVzaChsaW5rKTtcbiAgICAgIHRhcmdldC50YXJnZXRMaW5rcy5wdXNoKGxpbmspO1xuICAgIH1cbiAgICBpZiAobGlua1NvcnQgIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCB7c291cmNlTGlua3MsIHRhcmdldExpbmtzfSBvZiBub2Rlcykge1xuICAgICAgICBzb3VyY2VMaW5rcy5zb3J0KGxpbmtTb3J0KTtcbiAgICAgICAgdGFyZ2V0TGlua3Muc29ydChsaW5rU29ydCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU5vZGVWYWx1ZXMoe25vZGVzfSkge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgbm9kZS52YWx1ZSA9IG5vZGUuZml4ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBNYXRoLm1heChkM0FycmF5LnN1bShub2RlLnNvdXJjZUxpbmtzLCB2YWx1ZSksIGQzQXJyYXkuc3VtKG5vZGUudGFyZ2V0TGlua3MsIHZhbHVlKSlcbiAgICAgICAgICA6IG5vZGUuZml4ZWRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlTm9kZURlcHRocyh7bm9kZXN9KSB7XG4gICAgY29uc3QgbiA9IG5vZGVzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudCA9IG5ldyBTZXQobm9kZXMpO1xuICAgIGxldCBuZXh0ID0gbmV3IFNldDtcbiAgICBsZXQgeCA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnQuc2l6ZSkge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgbm9kZS5kZXB0aCA9IHg7XG4gICAgICAgIGZvciAoY29uc3Qge3RhcmdldH0gb2Ygbm9kZS5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIG5leHQuYWRkKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgrK3ggPiBuKSB0aHJvdyBuZXcgRXJyb3IoXCJjaXJjdWxhciBsaW5rXCIpO1xuICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICBuZXh0ID0gbmV3IFNldDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlTm9kZUhlaWdodHMoe25vZGVzfSkge1xuICAgIGNvbnN0IG4gPSBub2Rlcy5sZW5ndGg7XG4gICAgbGV0IGN1cnJlbnQgPSBuZXcgU2V0KG5vZGVzKTtcbiAgICBsZXQgbmV4dCA9IG5ldyBTZXQ7XG4gICAgbGV0IHggPSAwO1xuICAgIHdoaWxlIChjdXJyZW50LnNpemUpIHtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBjdXJyZW50KSB7XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0geDtcbiAgICAgICAgZm9yIChjb25zdCB7c291cmNlfSBvZiBub2RlLnRhcmdldExpbmtzKSB7XG4gICAgICAgICAgbmV4dC5hZGQoc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCsreCA+IG4pIHRocm93IG5ldyBFcnJvcihcImNpcmN1bGFyIGxpbmtcIik7XG4gICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgIG5leHQgPSBuZXcgU2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVOb2RlTGF5ZXJzKHtub2Rlc30pIHtcbiAgICBjb25zdCB4ID0gZDNBcnJheS5tYXgobm9kZXMsIGQgPT4gZC5kZXB0aCkgKyAxO1xuICAgIGNvbnN0IGt4ID0gKHgxIC0geDAgLSBkeCkgLyAoeCAtIDEpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBuZXcgQXJyYXkoeCk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICBjb25zdCBpID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oeCAtIDEsIE1hdGguZmxvb3IoYWxpZ24uY2FsbChudWxsLCBub2RlLCB4KSkpKTtcbiAgICAgIG5vZGUubGF5ZXIgPSBpO1xuICAgICAgbm9kZS54MCA9IHgwICsgaSAqIGt4O1xuICAgICAgbm9kZS54MSA9IG5vZGUueDAgKyBkeDtcbiAgICAgIGlmIChjb2x1bW5zW2ldKSBjb2x1bW5zW2ldLnB1c2gobm9kZSk7XG4gICAgICBlbHNlIGNvbHVtbnNbaV0gPSBbbm9kZV07XG4gICAgfVxuICAgIGlmIChzb3J0KSBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgICBjb2x1bW4uc29ydChzb3J0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplTm9kZUJyZWFkdGhzKGNvbHVtbnMpIHtcbiAgICBjb25zdCBreSA9IGQzQXJyYXkubWluKGNvbHVtbnMsIGMgPT4gKHkxIC0geTAgLSAoYy5sZW5ndGggLSAxKSAqIHB5KSAvIGQzQXJyYXkuc3VtKGMsIHZhbHVlKSk7XG4gICAgZm9yIChjb25zdCBub2RlcyBvZiBjb2x1bW5zKSB7XG4gICAgICBsZXQgeSA9IHkwO1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUueTAgPSB5O1xuICAgICAgICBub2RlLnkxID0geSArIG5vZGUudmFsdWUgKiBreTtcbiAgICAgICAgeSA9IG5vZGUueTEgKyBweTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG5vZGUuc291cmNlTGlua3MpIHtcbiAgICAgICAgICBsaW5rLndpZHRoID0gbGluay52YWx1ZSAqIGt5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB5ID0gKHkxIC0geSArIHB5KSAvIChub2Rlcy5sZW5ndGggKyAxKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBub2RlLnkwICs9IHkgKiAoaSArIDEpO1xuICAgICAgICBub2RlLnkxICs9IHkgKiAoaSArIDEpO1xuICAgICAgfVxuICAgICAgcmVvcmRlckxpbmtzKG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlTm9kZUJyZWFkdGhzKGdyYXBoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IGNvbXB1dGVOb2RlTGF5ZXJzKGdyYXBoKTtcbiAgICBweSA9IE1hdGgubWluKGR5LCAoeTEgLSB5MCkgLyAoZDNBcnJheS5tYXgoY29sdW1ucywgYyA9PiBjLmxlbmd0aCkgLSAxKSk7XG4gICAgaW5pdGlhbGl6ZU5vZGVCcmVhZHRocyhjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7ICsraSkge1xuICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLnBvdygwLjk5LCBpKTtcbiAgICAgIGNvbnN0IGJldGEgPSBNYXRoLm1heCgxIC0gYWxwaGEsIChpICsgMSkgLyBpdGVyYXRpb25zKTtcbiAgICAgIHJlbGF4UmlnaHRUb0xlZnQoY29sdW1ucywgYWxwaGEsIGJldGEpO1xuICAgICAgcmVsYXhMZWZ0VG9SaWdodChjb2x1bW5zLCBhbHBoYSwgYmV0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVwb3NpdGlvbiBlYWNoIG5vZGUgYmFzZWQgb24gaXRzIGluY29taW5nICh0YXJnZXQpIGxpbmtzLlxuICBmdW5jdGlvbiByZWxheExlZnRUb1JpZ2h0KGNvbHVtbnMsIGFscGhhLCBiZXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDEsIG4gPSBjb2x1bW5zLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIGNvbHVtbikge1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCB3ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB7c291cmNlLCB2YWx1ZX0gb2YgdGFyZ2V0LnRhcmdldExpbmtzKSB7XG4gICAgICAgICAgbGV0IHYgPSB2YWx1ZSAqICh0YXJnZXQubGF5ZXIgLSBzb3VyY2UubGF5ZXIpO1xuICAgICAgICAgIHkgKz0gdGFyZ2V0VG9wKHNvdXJjZSwgdGFyZ2V0KSAqIHY7XG4gICAgICAgICAgdyArPSB2O1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHcgPiAwKSkgY29udGludWU7XG4gICAgICAgIGxldCBkeSA9ICh5IC8gdyAtIHRhcmdldC55MCkgKiBhbHBoYTtcbiAgICAgICAgdGFyZ2V0LnkwICs9IGR5O1xuICAgICAgICB0YXJnZXQueTEgKz0gZHk7XG4gICAgICAgIHJlb3JkZXJOb2RlTGlua3ModGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0ID09PSB1bmRlZmluZWQpIGNvbHVtbi5zb3J0KGFzY2VuZGluZ0JyZWFkdGgpO1xuICAgICAgcmVzb2x2ZUNvbGxpc2lvbnMoY29sdW1uLCBiZXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXBvc2l0aW9uIGVhY2ggbm9kZSBiYXNlZCBvbiBpdHMgb3V0Z29pbmcgKHNvdXJjZSkgbGlua3MuXG4gIGZ1bmN0aW9uIHJlbGF4UmlnaHRUb0xlZnQoY29sdW1ucywgYWxwaGEsIGJldGEpIHtcbiAgICBmb3IgKGxldCBuID0gY29sdW1ucy5sZW5ndGgsIGkgPSBuIC0gMjsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBjb2x1bW4pIHtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgdyA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qge3RhcmdldCwgdmFsdWV9IG9mIHNvdXJjZS5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIGxldCB2ID0gdmFsdWUgKiAodGFyZ2V0LmxheWVyIC0gc291cmNlLmxheWVyKTtcbiAgICAgICAgICB5ICs9IHNvdXJjZVRvcChzb3VyY2UsIHRhcmdldCkgKiB2O1xuICAgICAgICAgIHcgKz0gdjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh3ID4gMCkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgZHkgPSAoeSAvIHcgLSBzb3VyY2UueTApICogYWxwaGE7XG4gICAgICAgIHNvdXJjZS55MCArPSBkeTtcbiAgICAgICAgc291cmNlLnkxICs9IGR5O1xuICAgICAgICByZW9yZGVyTm9kZUxpbmtzKHNvdXJjZSk7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCA9PT0gdW5kZWZpbmVkKSBjb2x1bW4uc29ydChhc2NlbmRpbmdCcmVhZHRoKTtcbiAgICAgIHJlc29sdmVDb2xsaXNpb25zKGNvbHVtbiwgYmV0YSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbnMobm9kZXMsIGFscGhhKSB7XG4gICAgY29uc3QgaSA9IG5vZGVzLmxlbmd0aCA+PiAxO1xuICAgIGNvbnN0IHN1YmplY3QgPSBub2Rlc1tpXTtcbiAgICByZXNvbHZlQ29sbGlzaW9uc0JvdHRvbVRvVG9wKG5vZGVzLCBzdWJqZWN0LnkwIC0gcHksIGkgLSAxLCBhbHBoYSk7XG4gICAgcmVzb2x2ZUNvbGxpc2lvbnNUb3BUb0JvdHRvbShub2Rlcywgc3ViamVjdC55MSArIHB5LCBpICsgMSwgYWxwaGEpO1xuICAgIHJlc29sdmVDb2xsaXNpb25zQm90dG9tVG9Ub3Aobm9kZXMsIHkxLCBub2Rlcy5sZW5ndGggLSAxLCBhbHBoYSk7XG4gICAgcmVzb2x2ZUNvbGxpc2lvbnNUb3BUb0JvdHRvbShub2RlcywgeTAsIDAsIGFscGhhKTtcbiAgfVxuXG4gIC8vIFB1c2ggYW55IG92ZXJsYXBwaW5nIG5vZGVzIGRvd24uXG4gIGZ1bmN0aW9uIHJlc29sdmVDb2xsaXNpb25zVG9wVG9Cb3R0b20obm9kZXMsIHksIGksIGFscGhhKSB7XG4gICAgZm9yICg7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY29uc3QgZHkgPSAoeSAtIG5vZGUueTApICogYWxwaGE7XG4gICAgICBpZiAoZHkgPiAxZS02KSBub2RlLnkwICs9IGR5LCBub2RlLnkxICs9IGR5O1xuICAgICAgeSA9IG5vZGUueTEgKyBweTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXNoIGFueSBvdmVybGFwcGluZyBub2RlcyB1cC5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbnNCb3R0b21Ub1RvcChub2RlcywgeSwgaSwgYWxwaGEpIHtcbiAgICBmb3IgKDsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNvbnN0IGR5ID0gKG5vZGUueTEgLSB5KSAqIGFscGhhO1xuICAgICAgaWYgKGR5ID4gMWUtNikgbm9kZS55MCAtPSBkeSwgbm9kZS55MSAtPSBkeTtcbiAgICAgIHkgPSBub2RlLnkwIC0gcHk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVvcmRlck5vZGVMaW5rcyh7c291cmNlTGlua3MsIHRhcmdldExpbmtzfSkge1xuICAgIGlmIChsaW5rU29ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHtzb3VyY2U6IHtzb3VyY2VMaW5rc319IG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAgIHNvdXJjZUxpbmtzLnNvcnQoYXNjZW5kaW5nVGFyZ2V0QnJlYWR0aCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHt0YXJnZXQ6IHt0YXJnZXRMaW5rc319IG9mIHNvdXJjZUxpbmtzKSB7XG4gICAgICAgIHRhcmdldExpbmtzLnNvcnQoYXNjZW5kaW5nU291cmNlQnJlYWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVvcmRlckxpbmtzKG5vZGVzKSB7XG4gICAgaWYgKGxpbmtTb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3Qge3NvdXJjZUxpbmtzLCB0YXJnZXRMaW5rc30gb2Ygbm9kZXMpIHtcbiAgICAgICAgc291cmNlTGlua3Muc29ydChhc2NlbmRpbmdUYXJnZXRCcmVhZHRoKTtcbiAgICAgICAgdGFyZ2V0TGlua3Muc29ydChhc2NlbmRpbmdTb3VyY2VCcmVhZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSB0YXJnZXQueTAgdGhhdCB3b3VsZCBwcm9kdWNlIGFuIGlkZWFsIGxpbmsgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0LlxuICBmdW5jdGlvbiB0YXJnZXRUb3Aoc291cmNlLCB0YXJnZXQpIHtcbiAgICBsZXQgeSA9IHNvdXJjZS55MCAtIChzb3VyY2Uuc291cmNlTGlua3MubGVuZ3RoIC0gMSkgKiBweSAvIDI7XG4gICAgZm9yIChjb25zdCB7dGFyZ2V0OiBub2RlLCB3aWR0aH0gb2Ygc291cmNlLnNvdXJjZUxpbmtzKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdGFyZ2V0KSBicmVhaztcbiAgICAgIHkgKz0gd2lkdGggKyBweTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7c291cmNlOiBub2RlLCB3aWR0aH0gb2YgdGFyZ2V0LnRhcmdldExpbmtzKSB7XG4gICAgICBpZiAobm9kZSA9PT0gc291cmNlKSBicmVhaztcbiAgICAgIHkgLT0gd2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB5O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgc291cmNlLnkwIHRoYXQgd291bGQgcHJvZHVjZSBhbiBpZGVhbCBsaW5rIGZyb20gc291cmNlIHRvIHRhcmdldC5cbiAgZnVuY3Rpb24gc291cmNlVG9wKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgbGV0IHkgPSB0YXJnZXQueTAgLSAodGFyZ2V0LnRhcmdldExpbmtzLmxlbmd0aCAtIDEpICogcHkgLyAyO1xuICAgIGZvciAoY29uc3Qge3NvdXJjZTogbm9kZSwgd2lkdGh9IG9mIHRhcmdldC50YXJnZXRMaW5rcykge1xuICAgICAgaWYgKG5vZGUgPT09IHNvdXJjZSkgYnJlYWs7XG4gICAgICB5ICs9IHdpZHRoICsgcHk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qge3RhcmdldDogbm9kZSwgd2lkdGh9IG9mIHNvdXJjZS5zb3VyY2VMaW5rcykge1xuICAgICAgaWYgKG5vZGUgPT09IHRhcmdldCkgYnJlYWs7XG4gICAgICB5IC09IHdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxuXG4gIHJldHVybiBzYW5rZXk7XG59XG5cbmZ1bmN0aW9uIGhvcml6b250YWxTb3VyY2UoZCkge1xuICByZXR1cm4gW2Quc291cmNlLngxLCBkLnkwXTtcbn1cblxuZnVuY3Rpb24gaG9yaXpvbnRhbFRhcmdldChkKSB7XG4gIHJldHVybiBbZC50YXJnZXQueDAsIGQueTFdO1xufVxuXG5mdW5jdGlvbiBzYW5rZXlMaW5rSG9yaXpvbnRhbCgpIHtcbiAgcmV0dXJuIGQzU2hhcGUubGlua0hvcml6b250YWwoKVxuICAgICAgLnNvdXJjZShob3Jpem9udGFsU291cmNlKVxuICAgICAgLnRhcmdldChob3Jpem9udGFsVGFyZ2V0KTtcbn1cblxuZXhwb3J0cy5zYW5rZXkgPSBTYW5rZXk7XG5leHBvcnRzLnNhbmtleUNlbnRlciA9IGNlbnRlcjtcbmV4cG9ydHMuc2Fua2V5SnVzdGlmeSA9IGp1c3RpZnk7XG5leHBvcnRzLnNhbmtleUxlZnQgPSBsZWZ0O1xuZXhwb3J0cy5zYW5rZXlMaW5rSG9yaXpvbnRhbCA9IHNhbmtleUxpbmtIb3Jpem9udGFsO1xuZXhwb3J0cy5zYW5rZXlSaWdodCA9IHJpZ2h0O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/d3-sankey@0.12.3/node_modules/d3-sankey/dist/d3-sankey.js\n");

/***/ })

};
;