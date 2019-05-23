import mockedFile from '../../tests/mocks/fileMock'
import mockedObj from '../../tests/mocks/objectMock'


describe('Mocked File', ()=>{
  it('should equal to a string',()=>{
    expect(mockedFile).toEqual('this is a file mock')
  })

})


describe('Mocked Object', ()=>{
  it('should equal to a object',()=>{
    expect(mockedObj).toEqual({})
  })
})
