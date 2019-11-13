"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
test('my first test', () => {
    const a = ["h", "b"];
    const b = ["x", "y"];
    const expected = "xxx";
    expect(main_1.join_email_addresses(a, b)).toBe(expected);
});
//# sourceMappingURL=main.test.js.map