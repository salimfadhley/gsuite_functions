import {join_email_addresses} from "../main";

test('my first test', () => {
    const a = ["h", "b"];
    const b = ["x", "y"];
    const expected="xxx";
    expect(join_email_addresses(a,b)).toBe(expected);
});