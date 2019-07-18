import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: filenamifyShrink} = indexModule

it("should run", () => {
  const result = filenamifyShrink("a ?  ?b")
  expect(result).toBe("a b")
})