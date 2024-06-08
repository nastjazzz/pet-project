import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only main param', () => {
    expect(classNames('class-name')).toBe('class-name');
  });

  test('with additional class', () => {
    expect(classNames('class-name', {}, ['dop-class-1', 'dop-class-2'])).toBe('class-name dop-class-1 dop-class-2');
  });

  test('with one mod param', () => {
    expect(classNames('class-name', { light: true }, ['dop-class-1'])).toBe('class-name dop-class-1 light');
  });

  test('with one mod param true and other false', () => {
    expect(classNames('class-name', { light: false, red: true }, ['class1'])).toBe('class-name class1 red');
  });

  test('with one mod param true and other undefined', () => {
    expect(classNames('class-name', { light: false, red: undefined }, ['class1'])).toBe('class-name class1');
  });
});
