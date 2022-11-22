// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('functions isPhoneNumber', () => {
    let test = functions.isPhoneNumber("(562) 349-2406");
    expect(test).toBe(true);
  });

  test('functions isPhoneNumber', () => {
    let test = functions.isPhoneNumber("(562)");
    expect(test).toBe(false);
  });

  test('functions isPhoneNumber', () => {
    let test = functions.isPhoneNumber("562-349-2406");
    expect(test).toBe(true);
  });

  test('functions isPhoneNumber', () => {
    let test = functions.isPhoneNumber("562");
    expect(test).toBe(false);
  });

  test('functions isEmail', () => {
    let test = functions.isEmail("k1truong@ucsd.edu");
    expect(test).toBe(true);
  });

  test('functions isEmail', () => {
    let test = functions.isEmail("k1truong");
    expect(test).toBe(false);
  });

  test('functions isEmail', () => {
    let test = functions.isEmail("wozzacklu@gmail.com");
    expect(test).toBe(true);
  });

  test('functions isEmail', () => {
    let test = functions.isEmail("wozzack.lu");
    expect(test).toBe(false);
  });

  test('functions isStrongPassword', () => {
    let test = functions.isStrongPassword("passwordStrong");
    expect(test).toBe(true);
  });

  test('functions isStrongPassword', () => {
    let test = functions.isStrongPassword("no");
    expect(test).toBe(false);
  });

  test('functions isStrongPassword', () => {
    let test = functions.isStrongPassword("StrongPassword");
    expect(test).toBe(true);
  });

  test('functions isStrongPassword', () => {
    let test = functions.isStrongPassword("n0");
    expect(test).toBe(false);
  });

  test('functions isDate', () => {
    let test = functions.isDate("12/20/2000");
    expect(test).toBe(true);
  });

  test('functions isDate', () => {
    let test = functions.isDate("12/22");
    expect(test).toBe(false);
  });

  test('functions isDate', () => {
    let test = functions.isDate("1/20/1984");
    expect(test).toBe(true);
  });

  test('functions isDate', () => {
    let test = functions.isDate("1984");
    expect(test).toBe(false);
  });

  test('functions isHexColor', () => {
    let test = functions.isHexColor("#37160F");
    expect(test).toBe(true);
  });

  test('functions isHexColor', () => {
    let test = functions.isHexColor("?37160F");
    expect(test).toBe(false);
  });

  test('functions isHexColor', () => {
    let test = functions.isHexColor("#32161E");
    expect(test).toBe(true);
  });

  test('functions isHexColor', () => {
    let test = functions.isHexColor("?32161E");
    expect(test).toBe(false);
  });