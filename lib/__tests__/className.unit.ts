import { scopedClassMaker }  from '../utils/className'


describe('scopedClassMaker', function () {
  test('should work properly', ()=>{
    let y = scopedClassMaker('hello');
    let z = y('world', {extra: 'yes'});

    expect(z).toBe('hello-world yes');


    let c = y({world: true, young: true, cool: false, '': true}, {
      extra: 'apolo'
    });

    expect(c).toBe('hello-world hello-young apolo' )


  })
});


