export default function (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || ![componentName].includes(name))) {
    parent = parent.$parent
    if (parent) { name = parent.$options.name }
  }
  return parent
}
