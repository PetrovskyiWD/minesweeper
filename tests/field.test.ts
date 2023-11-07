import {
  emptyFiledGenerator,
  fieldGenerator,
  CellState,
} from "../src/helpers/field";

const { empty, hidden, bomb } = CellState;

describe("Field Generator", () => {
  describe("Empty filed generator tests", () => {
    it("2x2", () => {
      expect(emptyFiledGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });

    it("3x3", () => {
      expect(emptyFiledGenerator(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });

    it("3x3 eith hidden state", () => {
      expect(emptyFiledGenerator(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ]);
    });
  });

  describe("Field Generator: Simple cases", () => {
    it("Wrong probability", () => {
      const errorText = "Probability must be between 0 and 1";

      expect(() => fieldGenerator(1, -1)).toThrow(errorText);
      expect(() => fieldGenerator(1, 2)).toThrow(errorText);
    });

    it("Smallest possible fields without mine", () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });

    it('Smallest possible fields with mine', () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]])
    })

    it('2x2 fields with mine', () => {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb]
      ])
    })

    it('2x2 fields with 50% probability', () => {
      const field = fieldGenerator(2, 0.5)
      const flatField = field.flat()
      const cellsWithBombs = flatField.filter(cell => cell === bomb)
      const notEmptyCells = flatField.filter(cell => cell === 2)

      expect(cellsWithBombs).toHaveLength(2)
      expect(notEmptyCells).toHaveLength(2)
    })

    it('Real game field size 10x10 with 1/4 mine cells (~25 mines)', () => {
      const size = 10
      const mines = 25
      const probability = mines / (size * size)
      const field = fieldGenerator(size, probability)

      console.table(field)

      const flatField = field.flat()

      expect(flatField.filter(cell => cell === bomb)).toHaveLength(25)
    })
  });
});
