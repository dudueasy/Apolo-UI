import {ClassOptions, scopedClassMaker, SuffixToggles} from '../utils/className';


describe('scopedClassMaker', function () {
  let sc:(suffix?: string | SuffixToggles, options?: ClassOptions)=>string|undefined;
  beforeEach(() => {
    sc = scopedClassMaker('apolo-ui');
  });



  test('should work fine with empty string as parameter', ()=>{
    expect(sc('')).toBe('apolo-ui')
  })


  test('should work properly', () => {
    expect(sc('layout')).toBe('apolo-ui-layout');
  });

  test('should work fine with Object suffix', () => {
    const suffix: SuffixToggles = {world: true, young: true, cool: false, '': true};
    expect(sc(suffix)).toBe('apolo-ui-world apolo-ui-young');
  });


});


