import { sortByIdDesc } from '../sortByIdDesc';

describe('sortByIdDesc', () => {
  it('sorts array of objects by id in descending order', () => {
    const input = [
      { id: '3', name: 'Object 3' },
      { id: '1', name: 'Object 1' },
      { id: '2', name: 'Object 2' },
    ];

    const expectedOutput = [
      { id: '3', name: 'Object 3' },
      { id: '2', name: 'Object 2' },
      { id: '1', name: 'Object 1' },
    ];

    const sortedArray = sortByIdDesc(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  it('handles empty array', () => {
    const input: any[] = [];
    const sortedArray = sortByIdDesc(input);
    expect(sortedArray).toEqual([]);
  });

  it('handles array with one element', () => {
    const input = [{ id: '1', name: 'Object 1' }];
    const sortedArray = sortByIdDesc(input);
    expect(sortedArray).toEqual([{ id: '1', name: 'Object 1' }]);
  });


});
