export const validateParentheses = (test) => {
  let str = test.split("")

  if (str.length % 2 !== 0) return false

  for (let i = 0; i < str.length - 1; i++) {
    let left = i

    let right = left + 1

    if (
      (str[left] === "[" && str[right] === "]") ||
      (str[left] === "{" && str[right] === "}") ||
      (str[left] === "(" && str[right] === ")")
    ) {
      str.splice(left, 2)

      i = -1
    }
  }

  return str.length === 0
}
