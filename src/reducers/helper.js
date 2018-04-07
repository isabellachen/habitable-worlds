export const objectifyArr = (arr) => {
  const obj = {}
  arr.worlds.forEach(world => {
    obj[world.name] = world
  })
  return obj
}
