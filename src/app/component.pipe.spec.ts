import { ComponentPipe } from './custom.pipe';

describe('ComponentPipe', () => {
  it('create an instance', () => {
    const pipe = new ComponentPipe();
    expect(pipe).toBeTruthy();
  });
});
